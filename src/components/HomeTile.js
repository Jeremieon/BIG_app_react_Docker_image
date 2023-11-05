import React from "react";
import { Link } from 'react-router-dom';
const Homepage = ({ onLogout }) => {
    return (
        <div>
        <h2>Welcome to the Homepage</h2>
        <button onClick={onLogout}>Logout</button>
        <div><Link to="/domain">Domain</Link></div>
        <div><Link to="/tasks">Tasks App</Link></div>
        <div><Link to="/notes">Note App</Link></div>
        <div><Link to="/shop">Web-Shop App</Link></div>
        </div>
    )
}

export default Homepage;