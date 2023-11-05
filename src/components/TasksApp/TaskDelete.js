import React from 'react';
import axios from 'axios';

const DeleteTask = (props) => {
    const accessToken = localStorage.getItem("auth_token")
    const headers = {
        Authorization: `Bearer ${accessToken}`
    }
    const apiUrl = 'http://localhost:8000/api/tasks/'; // Replace with your API URL
       
    const handleDelete = () => {
        try {
            axios.delete(`${apiUrl}${props.taskId}`,{headers}); // Replace with the actual delete API endpoint
    } catch (error) {
        console.error('Error deleting task: ', error);
    }
    props.onDelete(props.taskId);
    };
    


  return (
    <button onClick={handleDelete}>Delete</button>
  );
};
export default DeleteTask;
