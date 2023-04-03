import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5173", { transports: ['websocket'] });

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      console.log(data)
      setMessage(data);
    });
  }, []);

  const sendMessage = () => {
    console.log("66666")
    socket.emit("message", "Hello from the client!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
