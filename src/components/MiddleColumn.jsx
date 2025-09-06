import React from "react";
import StatusBox from "./StatusBox";
import PostCard from "./PostCard";

export default function MiddleColumn() {
  return (
    <div className="w3-col m7">
      <StatusBox />
      <PostCard
        avatar="https://www.w3schools.com/w3images/avatar2.png"
        time="1 min"
        name="John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        images={[
          "https://www.w3schools.com/w3images/lights.jpg",
          "https://www.w3schools.com/w3images/nature.jpg",
        ]}
      />
      <PostCard
        avatar="https://www.w3schools.com/w3images/avatar5.png"
        time="16 min"
        name="Jane Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <PostCard
        avatar="https://www.w3schools.com/w3images/avatar6.png"
        time="32 min"
        name="Angie Jane"
        text={
          "Have you seen this? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        images={["https://www.w3schools.com/w3images/nature.jpg"]}
      />
    </div>
  );
}
