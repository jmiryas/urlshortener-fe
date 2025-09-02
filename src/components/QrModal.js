import React from "react";

export default function QrModal({
  open,
  shortUrl,
  qrSrc,
  onClose,
  onDownload,
}) {
  if (!open) return null;

  return (
    <div>
      <div
        className="modal-backdrop fade show"
        style={{ position: "fixed", inset: 0, zIndex: 2000 }}
        onClick={onClose}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <div
          className="card qr-modal-card"
          style={{ borderRadius: 12, width: "min(100%, 360px)" }}
        >
          <div className="card-body p-3 text-center">
            <h6 className="mb-2">QR Code</h6>

            <div className="qr-url-text mb-3">
              <small>{shortUrl}</small>
            </div>

            <img
              id="qrImage"
              src={qrSrc}
              alt="QR Code"
              width={220}
              height={220}
              style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
              className="mb-3"
            />

            <div className="d-flex justify-content-center gap-2">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={onClose}
              >
                <i className="bi bi-x-lg me-1" /> Tutup
              </button>
              <button className="btn btn-sm btn-primary" onClick={onDownload}>
                <i className="bi bi-download me-1" /> Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
