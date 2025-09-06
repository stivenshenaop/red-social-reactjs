import React from "react";
import EventCard from "./EventCard";
import FriendRequestCard from "./FriendRequestCard";
import AdCard from "./AdCard";
import BugCard from "./BugCard";

export default function RightColumn() {
  return (
    <div className="w3-col m2">
      <EventCard />
      <br />
      <FriendRequestCard />
      <br />
      <AdCard />
      <br />
      <BugCard />
    </div>
  );
}
