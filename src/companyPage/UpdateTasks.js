import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateTasks() {
  const { staffId, taskId } = useParams();
 
  const [task, setTask] = useState({
    title: '',
    startTime: '',
    endTime: '',
    status: ''
  });

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4444/company/${staffId}/task/${taskId}`);
        const taskData = response.data;
        setTask(taskData.task);
        console.log(taskData.task);
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };
    
    fetchTaskDetails();
  }, [staffId, taskId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:4444/company/${staffId}/task/${taskId}`, task);
      console.log(response.data);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="update-task-form">
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={task.title} onChange={handleInputChange} />
        </div>
        <div>
          <label>Start Time</label>
          <input type="datetime-local" name="startTime" value={task.startTime} onChange={handleInputChange} />
        </div>
        <div>
          <label>End Time</label>
          <input type="datetime-local" name="endTime" value={task.endTime} onChange={handleInputChange} />
        </div>
        <div>
          <label>Status</label>
          <input type="text" name="status" value={task.status} onChange={handleInputChange} />
        </div>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
}

export default UpdateTasks;
