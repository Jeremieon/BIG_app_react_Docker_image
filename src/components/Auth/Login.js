import React, { useState } from 'react';
import axios from 'axios';
const LoginPage = ({onLogin}) => {
    
    const [loginForm, setLoginform] = useState({
        email: "",
        password: "",
      });

    // const handleInputChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });  
    // }; 

    const handleSubmit = async (e) => {
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
          onLogin()
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
          <label>Email:</label>
          <input
            type="text"
            placeholder="example@xyz.com"
            value={loginForm.email}
            onChange={(e) => setLoginform({ ...loginForm, email: e.target.value })}
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

