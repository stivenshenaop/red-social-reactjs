import React, { useState } from "react";
import { cx } from "../utils/cx";

export default function AccordionSection({ id, icon, title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen((s) => !s)}
        className={cx("w3-button w3-block w3-theme-l1 w3-left-align", open && "w3-theme-d1")}
      >
        <i className={cx(icon, "fa-fw w3-margin-right")} /> {title}
      </button>
      <div id={id} className={cx("w3-container", open ? "w3-show" : "w3-hide")}>{children}</div>
    </>
  );
}
