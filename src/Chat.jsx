import React from "react";
import "./Chat.css";
import { useParams } from "react-router";
function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <h1>You're in the {roomId} room.</h1>
    </div>
  );
}

export default Chat;
