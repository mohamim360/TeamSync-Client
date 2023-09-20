import React from "react";
import Time from "./Time";

function Messages(props) {
  // Retrieve the authenticated userId from your authentication system.
  const authenticatedUserId = localStorage.getItem("LoggedUserId");

  // Determine if the message belongs to the authenticated user.
  const isUserMessage = props.userId === authenticatedUserId;

  return (
    <div className={`chat ${isUserMessage ? "chat-end" : "chat-start"}`} key={props._id}>
      <div className="chat-header">{props.user}</div>
      <div className="chat-bubble">{props.message}</div>
      <div className="chat-footer">
        <Time time={props.createdAt} />
      </div>
    </div>
  );
}

export default Messages;
