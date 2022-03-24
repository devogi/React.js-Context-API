import React, { useState } from "react";
import { LoginContext } from "./contexts/LoginContext";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="App">
      <LoginContext.Provider value={username} >{showProfile ? <Profile /> : <Login />}</LoginContext.Provider>
    </div>
  );
}

export default App;
