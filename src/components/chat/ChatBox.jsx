import { useEffect, useRef, useState } from "react";
import Send from "./Send";
import Messages from "./Messages";
import openSocket from "socket.io-client";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://team-sync-server-seven.vercel.app/chat/messages",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await response.json();
    setMessages(data.messages);
    setIsLoading(false);
    console.log(data.messages);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function sendMessageHandler(message) {
    await fetch("https://team-sync-server-seven.vercel.app/chat/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(message),
    });
    //const data = await response.json();
  }

  const socket = openSocket("https://team-sync-server-seven.vercel.app");

  useEffect(() => {
    const handleSocketMessages = (data) => {
      if (data.action === "create") {
        setMessages((prevState) => {
          return [...prevState, data.message];
        });
      }
    };
    socket.on("messages", handleSocketMessages);
    return () => {
      socket.off("messages", handleSocketMessages);
    };
  }, [socket]);

  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {!isLoading ? (
        <div className="flex rounded-lg  hover:bg-white hover:border-gray-900 border-4 flex-col-reverse m-auto mt-0">
          <Send onSendMessage={sendMessageHandler} />
          <div
            className="overflow-auto"
            style={{ height: "30rem" }}
            ref={containerRef}
          >
            {messages.map((message) => (
              <Messages
                key={message._id}
                user={message.user.name}
                userId={message.user._id}
                createdAt={message.createdAt}
                message={message.message}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="m-auto flex justify-center items-center h-full">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </>
  );
}

export default ChatBox;
