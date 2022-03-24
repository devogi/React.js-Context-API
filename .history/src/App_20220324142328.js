import React, { useState } from "react";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  return <div className="App" >  {showProfile ? <Profile />} </div>;
}

export default App;
