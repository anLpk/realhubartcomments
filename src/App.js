import "./App.css";
import React, { useState } from "react";
import { Header } from "./Header";
import { Comments } from "./Comments";

function App() {
  const [unseencommentnumber, setunseencommentnumber] = useState(3);
  const updateUnseenComments = () => {
    setunseencommentnumber(unseencommentnumber - 1);
  };
  console.log(unseencommentnumber);
  return (
    <main>
      <Header isBellActive={unseencommentnumber !== 0} />
      <section>
        <Comments unseenCommentCallback={updateUnseenComments} />
        <div className="btn-container">
          <button>Mark as Approved</button>
        </div>
      </section>
    </main>
  );
}

export default App;
