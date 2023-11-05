import React, { useState } from 'react';
import axios from 'axios';

const TaskAdd = ({ addTask }) => {
    const access_token = localStorage.getItem("auth_token")
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
      });

    const headers = {
        Authorization: `Bearer ${access_token}`  
    }

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
    }; 
  const handleTaskApp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/tasks/', taskData,{ headers });
      if (response.status === 200) {
        addTask(taskData)
        setTaskData({
            title: '',
            description: '',
          }
        );
      }
    } catch (error) {
      // Handle registration error
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleTaskApp}>
        <div>
          <label>title:</label>
          <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>description:</label>
          <input
            type="text"
            name="description"
            value={taskData.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default TaskAdd;

