import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("https://test-seven-psi-40.vercel.app");

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      setMessage(data);
    });
  }, []);

  const sendMessage = () => {
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
