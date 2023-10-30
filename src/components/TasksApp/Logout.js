import React from 'react';
import Button from 'react-bootstrap/Button';

function Logout() {
  const handleLogout = async () => {
    // Send a request to your FastAPI logout endpoint
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_token_type');

    //await axios.post('/logout');

    // Redirect to the login page upon successful logout
    window.location.href = '/login';
  };

  return (
    <div>
      <Button  variant="outline-warning" onClick={handleLogout}>Logout</Button>{' '}
    </div>
  );
}

export default Logout;
