import React from "react";
import Time from "./Time";
function Messages(props) {
  return (
    <>
     
        <div className=" chat chat-start" key={props._id}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-header">
            {props.user}
            <Time time={props.createdAt} />
          </div>
          <div className="chat-bubble">{props.message}</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
   
    </>
  );
}

export default Messages;
