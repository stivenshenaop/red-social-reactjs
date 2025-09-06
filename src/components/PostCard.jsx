import React from "react";

export default function PostCard({ avatar, time, name, text, images = [] }) {
  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <br />
      <img src={avatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: 60 }} />
      <span className="w3-right w3-opacity">{time}</span>
      <h4>{name}</h4>
      <br />
      <hr className="w3-clear" />
      {text && <p>{text}</p>}
      {images.length > 0 && (
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          {images.map((src, i) => (
            <div key={i} className={images.length === 1 ? "w3-col" : "w3-half"}>
              <img src={src} style={{ width: "100%" }} alt={`Post media ${i + 1}`} className="w3-margin-bottom" />
            </div>
          ))}
        </div>
      )}
      <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
        <i className="fa fa-thumbs-up" /> &nbsp;Like
      </button>
      <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
        <i className="fa fa-comment" /> &nbsp;Comment
      </button>
    </div>
  );
}
