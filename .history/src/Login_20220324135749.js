import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <input
        type="text"
        className="input"
        placeholder="username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input type="text" placeholder="password..." />
      <button
      className="inop"
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Login
      </button>
      {showProfile && <h1> {username} </h1>}
    </>
  );
}

export default Login;
