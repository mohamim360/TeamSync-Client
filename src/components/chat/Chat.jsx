import ChatBox from "./ChatBox";
import Sender from "./Sender";

function Chat() {
  return (
    <>
      <div className="flex m-auto mt-6">
        <Sender />
        <ChatBox />
      </div>
    </>
  );
}

export default Chat;
