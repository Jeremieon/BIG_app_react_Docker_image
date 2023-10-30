// Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
        .post("http://127.0.0.1:8000/login", loginForm) // Replace with your actual API endpoint
        .then((response) => {
          console.log(response.data);
          // Store the token in local storage or a cookie for future API requests
          localStorage.setItem("auth_token", response.data.access_token);
          localStorage.setItem(
            "auth_token_type",
            response.data.token_type
          );
          onLogin();
        })
        .catch((error) => {
          // Handle login error
          console.error(error);
        });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
