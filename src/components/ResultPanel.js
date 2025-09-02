import React from "react";

export default function ResultPanel({
  shortUrl,
  copyStatus,
  onVisit,
  onQr,
  onCopy,
  onNew,
}) {
  return (
    <div
      className="result-wrap"
      style={{ display: shortUrl ? "block" : "none" }}
    >
      <div className="short-url">
        <i
          className="bi bi-link-45deg"
          style={{ opacity: 0.9, color: "#047857" }}
        />
        <div className="url-text" id="shortUrlText" title={shortUrl}>
          {shortUrl}
        </div>
        <div
          className="ms-auto"
          id="copyStatus"
          style={{ fontSize: ".82rem", color: "var(--muted-dark)" }}
        >
          {copyStatus}
        </div>
      </div>

      <div className="action-btns">
        <button
          id="visitBtn"
          className="btn-ghost"
          title="Visit"
          type="button"
          onClick={onVisit}
        >
          <i className="bi bi-box-arrow-up-right" /> <span>Visit</span>
        </button>

        <button
          id="qrBtn"
          className="btn-ghost"
          title="QR Code"
          type="button"
          onClick={onQr}
        >
          <i className="bi bi-qr-code" /> <span>QR</span>
        </button>

        <button
          id="copyBtn"
          className="btn-primary-gradient"
          title="Copy"
          type="button"
          onClick={onCopy}
        >
          <i className="bi bi-clipboard" /> <span>Copy</span>
        </button>

        <button
          id="shortenAnother"
          className="btn-ghost shorten-another-btn"
          title="Shorten Another"
          type="button"
          onClick={onNew}
        >
          <i className="bi bi-plus-lg" /> <span>New</span>
        </button>
      </div>
    </div>
  );
}
