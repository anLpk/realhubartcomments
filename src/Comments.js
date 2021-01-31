import React from "react";
import "./App.css";

import Marked from "./markSeenButton";
import comments from "./comments.json";

export const Comments = ({ unseenCommentCallback }) => {
  return (
    <div className="App">
      <div className="posts">
        {comments.map((comment) => {
          return (
            <div className="main-container" key={comment.id}>
              <div className="img-container">
                <img
                  className="profile-pic"
                  src={comment.user.image.thumb_url}
                  alt={comment.user.first_name}
                ></img>
              </div>
              <div className="content-container">
                <p>
                  {comment.user.first_name} {comment.user.last_name}
                </p>
                <p className="post-text">{comment.body}</p>
                <div className="time-ago">
                  <p className="bottom-text">
                    {Math.round(
                      (new Date("2017/06/13 09:20") -
                        new Date(comment.dates.created.date_time)) /
                        60000
                    )}{" "}
                    minutes ago{" "}
                    <span className="markSeen">
                      <Marked unseenCommentCallback={unseenCommentCallback} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
