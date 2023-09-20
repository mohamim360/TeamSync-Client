import React from "react";
import Time from "./Time";

function Messages(props) {

  const authenticatedUserId = localStorage.getItem("LoggedUserId");

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
