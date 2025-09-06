import React from "react";
import ProfileCard from "./ProfileCard";
import AccordionCard from "./AccordionCard";
import InterestsCard from "./InterestsCard";
import AlertCard from "./AlertCard";

export default function LeftColumn() {
  return (
    <div className="w3-col m3">
      <ProfileCard />
      <br />
      <AccordionCard />
      <br />
      <InterestsCard />
      <br />
      <AlertCard />
    </div>
  );
}
