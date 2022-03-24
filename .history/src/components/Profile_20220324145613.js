import React from 'react'

function Profile() {
    const { setUserna } = useContext(LoginContext);
  return (
    <div>
        <h1> Profile </h1>
        <h1> welcome {username} </h1>

    </div>
  )
}

export default Profile