import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskAdd from "./TaskAdd";
import DeleteTask from "./TaskDelete";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const apiUrl = "http://localhost:8000/api/tasks/"; // Replace with your API URL

  useEffect(() => {
    const accessToken = localStorage.getItem("auth_token");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    // Define the API endpoint for fetching tasks from your FastAPI backend

    // Define an Axios GET request to fetch tasks
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        // Upon a successful response, set the tasks state
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <ul>
        <TaskAdd key="task-add" addTask={addTask} />{" "}
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <DeleteTask
              key={`delete-task-${task.id}`}
              taskId={task.id}
              onDelete={handleDelete}
            />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
