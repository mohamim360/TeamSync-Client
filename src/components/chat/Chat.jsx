import React, { useEffect, useRef, useState } from "react";
import Send from "./Send";
import Messages from "./Messages";

function Chat() {
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/chat/messages", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const data = await response.json();
      setMessages(data.messages);
    };

    fetchData();
  }, []);

  async function sendMessageHandler(message) {
    const response = await fetch("http://localhost:3000/chat/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(message),
    });
    const data = await response.json();
    //console.log(data.message._id);
    setMessages((prevState) => {
      return [...prevState, data.message];
    });
  }

  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div className="flex flex-col-reverse m-auto">
        <Send onSendMessage={sendMessageHandler} />
        <div
          className="overflow-auto"
          style={{ height: "30rem" }}
          ref={containerRef}
        >
          {messages.map((message) => (
            <Messages
              key={message._id}
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
