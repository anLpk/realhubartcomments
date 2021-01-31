import React, { useState } from "react";
import "./App.css";

const Marked = ({ unseenCommentCallback }) => {
  const [clicked, setClicked] = useState(null);
  const handeClick = () => {
    setClicked(!clicked);
    unseenCommentCallback();
  };
  return (
    <div className={clicked ? "clicked" : null} onClick={() => handeClick()}>
      | Mark as seen
    </div>
  );
};

export default Marked;
