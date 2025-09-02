import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top">
      <div className="container-fluid px-3">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <div className="navbar-logo">
            <i className="bi bi-link-45deg" />
          </div>
          <div className="navbar-brand-text">
            <div className="navbar-title">sg.kt</div>
            <small className="navbar-subtitle">URL shortener</small>
          </div>
        </a>
      </div>
    </nav>
  );
}
