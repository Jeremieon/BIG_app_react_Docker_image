import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import TaskList from './TaskList';
function HomeTask() {   

  return (
    <div>
      <Navbar/>
      <Container>
      <h2>Welcome to the Home Page</h2>
      <TaskList/>
      </Container>
    </div>
  );
}

export default HomeTask;
