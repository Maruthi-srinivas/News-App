
// src/components/Login.js
import axios from 'axios';
import React, { useState } from 'react';
import './Login.css'; // Import your CSS file

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        username,
        password,
      });

      if (response && response.data) {
        console.log('Login successful');
        // Assuming the server provides a redirectTo field
        const redirectTo = response.data.redirectTo;

        // Redirect to another component (e.g., Dashboard) using window.location
        window.location.href = redirectTo;
      } else {
        alert('Invalid response format');
      }
    } catch (error) {
      console.error('Error logging in:', error.response?.data.message || error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <div>
          <label>Username: </label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
