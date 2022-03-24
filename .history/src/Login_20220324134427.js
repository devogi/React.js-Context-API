import React, { useState } from 'react'

function Login() {
  const [username, setUsername] = useState("")
  const [showProfile, setShowProfile] = useState(false)
  
  return (
   <>
   <input type="text" placeholder='username' />
   </>
  )
}

export default Login
