import React from "react";
import { cx } from "../utils/cx";

export default function InterestsCard() {
  const tags = [
    "News",
    "W3Schools",
    "Labels",
    "Games",
    "Friends",
    "Games",
    "Friends",
    "Food",
    "Design",
    "Art",
    "Photos",
  ];
  const shades = [
    "w3-theme-d5",
    "w3-theme-d4",
    "w3-theme-d3",
    "w3-theme-d2",
    "w3-theme-d1",
    "w3-theme",
    "w3-theme-l1",
    "w3-theme-l2",
    "w3-theme-l3",
    "w3-theme-l4",
    "w3-theme-l5",
  ];
  return (
    <div className="w3-card w3-round w3-white w3-hide-small">
      <div className="w3-container">
        <p>Interests</p>
        <p>
          {tags.map((t, i) => (
            <span key={t + i} className={cx("w3-tag w3-small", shades[i])} style={{ marginRight: 4 }}>
              {t}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
