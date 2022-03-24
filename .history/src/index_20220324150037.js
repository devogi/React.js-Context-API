import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
   <Login />
   <Profile />
  </React.StrictMode>,
  document.getElementById('root')
);


