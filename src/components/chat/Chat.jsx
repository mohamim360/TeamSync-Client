import React, { useEffect, useState } from "react";

import Send from "./Send";
import Messages from "./Messages";

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/chat/messages");

      const data = await response.json();
      setMessages(data.messages);
      //console.log(data.messages);
    };

    fetchData();
  }, []);

  async function sendMessageHandler(message) {
    const response = await fetch("http://localhost:3000/chat/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    const data = await response.json();

    setMessages((prevState) => {
      return [...prevState, data.message[0]];
    });
  }
  console.log(messages);
  return (
    <>
      <div className="flex flex-col-reverse">
        <Send onSendMessage={sendMessageHandler} />
        <div>
          {messages.map((message) => (
            <Messages
              _id={message._id}
              user={message.user}
              createdAt={message.createdAt}
              message={message.message}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Chat;
