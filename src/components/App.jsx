import React, { useState } from "react";

function App() {
  setInterval(settime, 1000);
  const now = new Date().toLocaleTimeString();
  const [timer, timeadd] = useState(now);

  function settime() {
    const newtime = new Date().toLocaleTimeString();
    timeadd(newtime);
  }
  return (
    <div className="container">
      <h1>{timer}</h1>
      <button onClick={settime}>Get Time</button>
    </div>
  );
}

export default App;
