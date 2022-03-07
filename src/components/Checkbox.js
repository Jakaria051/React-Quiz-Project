import React from "react";

export default function Checkbox({ className, text, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      <span>&nbsp;{text}</span>
    </label>
  );
}
