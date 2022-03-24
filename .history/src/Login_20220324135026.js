import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <input
        type="text"
        placeholder="username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input type="text" placeholder="password..." />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Login
      </button>
{showProfile}

    </>
  );
}

export default Login;