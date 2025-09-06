import React from "react";
import AccordionSection from "./AccordionSection";

export default function AccordionCard() {
  return (
    <div className="w3-card w3-round">
      <div className="w3-white">
        <AccordionSection id="Demo1" icon="fa fa-circle-o-notch" title="My Groups">
          <p>Some text..</p>
        </AccordionSection>
        <AccordionSection id="Demo2" icon="fa fa-calendar-check-o" title="My Events">
          <p>Some other text..</p>
        </AccordionSection>
        <AccordionSection id="Demo3" icon="fa fa-users" title="My Photos">
          <div className="w3-row-padding">
            <br />
            {["lights.jpg", "nature.jpg", "mountains.jpg", "forest.jpg", "nature.jpg", "snow.jpg"].map(
              (img, i) => (
                <div key={i} className="w3-half">
                  <img
                    src={`https://www.w3schools.com/w3images/${img}`}
                    style={{ width: "100%" }}
                    className="w3-margin-bottom"
                    alt="Gallery"
                  />
                </div>
              )
            )}
          </div>
        </AccordionSection>
      </div>
    </div>
  );
}
