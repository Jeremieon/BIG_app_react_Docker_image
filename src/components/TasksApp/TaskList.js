import React, { useState, useEffect} from "react";
import axios from "axios";
import TaskAdd from './TaskAdd'
import DeleteTask from './TaskDelete'

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const apiUrl = 'http://localhost:8000/tasks/'; // Replace with your API URL
       
    useEffect(() => {
      const accessToken = localStorage.getItem("auth_token")
      const headers = {
        Authorization: `Bearer ${accessToken}`
    }
        // Define the API endpoint for fetching tasks from your FastAPI backend
        
        // Define an Axios GET request to fetch tasks
        axios.get(apiUrl,{ headers })
          .then((response) => {
            // Upon a successful response, set the tasks state
            setTasks(response.data);
          })
          .catch((error) => {
            console.error('Error fetching tasks:', error);
          });
      },[]); 

      const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
      };    
    
      const handleDelete = (taskId) => {
        // Perform the task deletion operation here.
        // After successful deletion, update the tasks state by filtering out the deleted task.
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
      };
    
      
    
      return(
        <div>
            <ul>
                <TaskAdd addTask={addTask}/>
                {tasks.map((task) => (<li key={task.id}>{task.title}
                <DeleteTask taskId={task.id} onDelete={handleDelete} />
                </li>))}
            </ul>
        </div>
      )
}

export default TaskList;