import React, { useState } from "react";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  return <div className="App" >  {showProfile ? <Profile /> :  <Login /} </div>;
}

export default App;
