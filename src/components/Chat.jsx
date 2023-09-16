import React, { useState } from "react";

function Chat() {
  const [message, setMessage] = useState([]);

  function fetchMessageHandler() {
    fetch("http://localhost:3000/chat/messages")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.messages[0]);
      });
  }
  return (
    <>
      <div>
        <button className="btn-success p-3" onClick={fetchMessageHandler}>Send</button>
				<h5>{message.user}</h5>
        <p>{message.message}</p>
      </div>
    </>
  );
}

export default Chat;
