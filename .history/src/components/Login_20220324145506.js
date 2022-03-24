import React, { useState } from "react";
import { LoginContext } from "../contexts/LoginContext";

function Login() {

   const {setUsername}
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
        className="input"
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
