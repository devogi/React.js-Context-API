import React, { useState } from "react";
import { LoginContext } from "./contexts/LoginContext";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="App">
      <LoginContext>{showProfile ? <Profile /> : <Login />}</LoginContext>
    </div>
  );
}

export default App;
