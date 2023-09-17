import React, { useState } from "react";
import Time from "./Time";

function Chat() {
  const [message, setMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSend, setIsSend] = useState(false);

  async function fetchMessageHandler() {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/chat/messages");
    const data = await response.json();
    setMessage(data.messages[0]);
    setIsLoading(false);
    setIsSend(true);
  }
  return (
    <>
      <div className="flex flex-col-reverse">
        <div>
          <div className="flex justify-between items-center p-1">
            <div className="flex items-center">
              <input
                type="text"
                className="rounded-full pl-8 pr-12 py-4 focus:outline-none h-auto placeholder-gray-100 bg-gray-900 text-white text-sm w-64"
                placeholder="Type a message..."
                id="typemsg"
              />
            </div>
            <div>
              <button className=" placeholder-gray-100 bg-gray-900 text-white p-3 rounded-full" onClick={fetchMessageHandler}>
                Send
              </button>
            </div>
          </div>
        </div>

        <div>
          {!isLoading && isSend &&(
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="chat-header">
                {message.user}
                <Time time={message.createdAt} />
              </div>
              <div className="chat-bubble">{message.message}</div>
              <div className="chat-footer opacity-50">Delivered</div>
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
