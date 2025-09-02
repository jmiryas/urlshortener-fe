import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import "./App.css";

import Navbar from "./components/Navbar";
import BrandHeader from "./components/BrandHeader";
import UrlForm from "./components/UrlForm";
import ResultPanel from "./components/ResultPanel";
import QrModal from "./components/QrModal";

import { normalizeUrl } from "./lib/url";
import { realShorten } from "./lib/api";
import { useHeadResources } from "./hooks/useHeadResources";

export default function App() {
  const [input, setInput] = useState("");
  const [processing, setProcessing] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [qrSrc, setQrSrc] = useState("");
  const [showQr, setShowQr] = useState(false);

  const inputRef = useRef(null);

  // inject resources (Google Font + Bootstrap Icons lokal)
  useHeadResources();

  async function handleShorten() {
    const normalized = normalizeUrl(input);
    if (!normalized) {
      if (inputRef.current) inputRef.current.classList.add("is-invalid");
      inputRef.current?.focus();

      Swal.fire({
        icon: "error",
        title: "URL is not valid",
        text: "Sample : https://example.com",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      return;
    }

    if (inputRef.current) inputRef.current.classList.remove("is-invalid");
    setProcessing(true);

    try {
      const short = await realShorten(normalized);
      setShortUrl(short);
      setCopyStatus("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "URL shortener failed",
        text: "Something went wrong",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      console.error("Error:", error);
    } finally {
      setProcessing(false);
    }
  }

  function handleVisit() {
    if (shortUrl) window.open(shortUrl, "_blank");
  }

  async function handleCopy() {
    if (!shortUrl) return;
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopyStatus("Copied!");
      Swal.fire({
        icon: "success",
        title: "URL copied to clipboard",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => setCopyStatus(""), 1800);
    } catch {
      setCopyStatus("Failed to copy");
    }
  }

  function handleQr() {
    if (!shortUrl) return;
    const src =
      "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
      encodeURIComponent(shortUrl);
    setQrSrc(src);
    setShowQr(true);
  }

  function handleShortenAnother() {
    setInput("");
    setShortUrl("");
    setCopyStatus("");
    inputRef.current?.focus();
  }

  function onKeyUp(e) {
    if (e.key === "Enter") handleShorten();
  }

  // Download QR sebagai file (tanpa membuka tab baru)
  const downloadQR = () => {
    fetch(qrSrc)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "qrcode.png";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);

        Swal.fire({
          icon: "success",
          title: "QR Code Downloaded",
          text: "QR code berhasil diunduh",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((err) => {
        console.error("Error downloading QR code:", err);
        Swal.fire({
          icon: "error",
          title: "Download Gagal",
          text: "Terjadi kesalahan saat mengunduh QR code",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <div className="app-container">
      <div className="bg-overlay" aria-hidden="true" />
      <div className="bg-image" aria-hidden="true" />

      <Navbar />

      <main className="page">
        <div className="short-card">
          <div className="card-head">
            <BrandHeader />
          </div>

          <UrlForm
            inputRef={inputRef}
            value={input}
            onChange={setInput}
            onKeyUp={onKeyUp}
            processing={processing}
            onShorten={handleShorten}
          />

          <ResultPanel
            shortUrl={shortUrl}
            copyStatus={copyStatus}
            onVisit={handleVisit}
            onQr={handleQr}
            onCopy={handleCopy}
            onNew={handleShortenAnother}
          />
        </div>
      </main>

      <QrModal
        open={showQr}
        shortUrl={shortUrl}
        qrSrc={qrSrc}
        onClose={() => setShowQr(false)}
        onDownload={downloadQR}
      />
    </div>
  );
}
