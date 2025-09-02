import React, { forwardRef } from "react";

const UrlForm = forwardRef(function UrlForm(props, _ref) {
  const { inputRef, value, onChange, onKeyUp, processing, onShorten } = props;

  return (
    <div className="form-row">
      <div className="input-group">
        <input
          id="inputUrl"
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyUp={onKeyUp}
          type="url"
          className="form-control"
          placeholder="https://example.com"
          aria-label="URL input"
          autoFocus
        />
        {/* <button
          id="shortenBtn"
          className="btn btn-shorten"
          type="button"
          onClick={onShorten}
          disabled={processing}
        >
          {processing ? (
            <>
              <i className="bi bi-hourglass-split" /> <span>Processing</span>
            </>
          ) : (
            <>
              <i className="bi bi-scissors" /> <span>Shorten</span>
            </>
          )}
        </button> */}
      </div>
    </div>
  );
});

export default UrlForm;
