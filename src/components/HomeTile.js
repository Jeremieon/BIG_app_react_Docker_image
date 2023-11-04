import React from "react";
import { Link } from 'react-router-dom';
const Homepage = ({ onLogout }) => {
    return (
        <div>
        <h2>Welcome to the Homepage</h2>
        <button onClick={onLogout}>Logout</button>
        <div><Link to="/domain">Domain</Link></div>
        <div>App 2</div>
        <div>App 3</div>
        </div>
    )
}

export default Homepage;