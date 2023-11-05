import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./components/Auth/Login";
import Registration from "./components/Auth/Register";
import Homepage from "./components/HomeTile";
import DomainApp from "./components/DomainApp/DomainApp";
import HomeTask from "./components/TasksApp/Home";
import NoteApp from "./components/NoteApp/NoteApp";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_token_type');
    window.location.href = '/login';
  };
  return (
      <Router>
        <Routes>
          <Route path="/register" element={<Registration />} />
          {isLoggedIn ? (
        <Route path="/home" element={<Homepage onLogout={handleLogout} />} />
      ) : (
        <Route path="/login" element={<LoginPage />} />
      )}
          <Route path="/domain" element={<DomainApp />} />
          <Route path="/tasks" element={<HomeTask />} />
          <Route path="/notes" element={<NoteApp />} />
        </Routes>
      </Router>
  );
}

export default App;