import React, { useState } from 'react';
import axios from 'axios';
const LoginPage = () => {
    
    const [loginForm, setLoginform] = useState({
        username: "",
        password: "",
      });

    // const handleInputChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });  
    // }; 

    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios
        .post("http://127.0.0.1:8000/token", loginForm) // Replace with your actual API endpoint
        .then((response) => {
          console.log(response.data);
          // Store the token in local storage or a cookie for future API requests
          localStorage.setItem("auth_token", response.data.access_token);
          localStorage.setItem(
            "auth_token_type",
            response.data.token_type
          );
          window.location.href = '/home';
        })
        .catch((error) => {
          // Handle login error
          console.error(error);
        });
    }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={loginForm.username}
            onChange={(e) => setLoginform({ ...loginForm, username: e.target.value })}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={(e) => setLoginform({ ...loginForm, password: e.target.value })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default LoginPage;

