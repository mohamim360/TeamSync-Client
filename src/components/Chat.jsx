
import React, { useState } from "react";

function Chat() {
  const [message, setMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMessageHandler() {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/chat/messages");
    const data = await response.json();
    setMessage(data.messages[0]);
    setIsLoading(false);
  }
  return (
    <>
      <div>
        <button className="btn-success p-3" onClick={fetchMessageHandler}>
          Send
        </button>
        <div>
          {!isLoading && (
            <div>
              <h5>{message.user}</h5>
              <p>{message.message}</p>
            </div>
          )}
          {isLoading && (
            <span className="loading loading-bars loading-lg"></span>
          )}
        </div>
      </div>
    </>
  );
}

export default Chat;
