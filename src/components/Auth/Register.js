import React, { useState } from "react";
import axios from "axios";
const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleRegister = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/user/', formData);
        if (response.status === 200) {
          setFormData({
              username: '',
              email: '',
              password: '',
            }
          );
          // Redirect to the login page upon successful registration
          window.location.href = '/login';
        }
      } catch (error) {
        // Handle registration error
        console.error(error);
      }
  };
  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@xyz.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration