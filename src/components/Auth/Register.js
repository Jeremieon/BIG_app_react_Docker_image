import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:8000/user/', formData);
        console.log('Response:', response); // Log the response
        window.location.href = '/login';
        // if (response.status === 201) {
        //   setFormData({
        //       name: '',
        //       email: '',
        //       password: '',
        //     }
        //   );
          // window.location.href = '/login';
        console.log('Redirecting to /login...');
         navigate('http://localhost:3000/login');
        //}
      } catch (error) {
        // Handle registration error
      }
  };
  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            name="name"
            placeholder="Username"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@xyz.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Registration