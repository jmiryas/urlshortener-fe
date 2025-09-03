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
      </div>
    </div>
  );
});

export default UrlForm;
