import React, { useContext, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";

function Login() {
  const { setUsername, setShowProfile } = useContext(LoginContext);
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
       onClick={  }
      >
        Login
      </button>
      {showProfile && <h1> {username} </h1>}
    </>
  );
}

export default Login;
