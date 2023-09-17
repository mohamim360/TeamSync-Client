import React, { useState } from "react";

function Send(props) {
  const [enteredMessage, setEnteredMessage] = useState("");

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      message: enteredMessage,
    };

    props.onSendMessage(data);
    setEnteredMessage("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="flex justify-between items-center p-1">
          <div className="flex items-center">
            <input
              type="text"
              value={enteredMessage}
              className="rounded-full pl-8 pr-12 py-4 focus:outline-none h-auto placeholder-gray-100 bg-gray-900 text-white text-sm w-64"
              placeholder="Type a message..."
              onChange={messageChangeHandler}
              required
            />
          </div>
          <div>
            <button className=" placeholder-gray-100 bg-gray-900 text-white p-3 rounded-full  hover:bg-white hover:text-gray-900 hover:border-gray-900 border-4 ">
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Send;
