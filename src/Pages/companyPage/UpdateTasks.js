import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form, Row } from "react-bootstrap";
import Sidebars from "../../component/Sidebars";

function UpdateTasks() {
  const navigate = useNavigate();
  const { staffId, taskId } = useParams();

  const [task, setTask] = useState({
    title: "",
    startTime: "",
    endTime: "",
    status: "",
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4444/company/${staffId}/task/${taskId}`
        );
        const taskData = response.data;
        setTask(taskData.task);
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    fetchTasks();
  }, [staffId, taskId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(task);

      const response = await axios.put(
        `http://localhost:4444/company/${staffId}/task/${taskId}`,
        task
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <>
      <Sidebars />
      <div class="add-task-section">
        <form className="container mt-3 mb-3" onSubmit={handleSubmit}>
          <h2>Update Task</h2>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                value={task.title}
                name="title"
                className="form-control"
                onChange={handleInputChange}
              />
            </Form.Group>
            <br></br>
            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
              <Form.Label>Start time</Form.Label>
              <Form.Control
                value={task.startTime}
                name="starttime"
                className="form-control"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
              <Form.Label>End time</Form.Label>
              <Form.Control
                value={task.endTime}
                name="endtime"
                className="form-control"
                onChange={handleInputChange}
              />
            </Form.Group>
            <br></br>
            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
              <Form.Label>Status</Form.Label>
              <Form.Control
                value={task.status}
                name="status"
                className="form-control"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              controlId="formGridCheckbox"
              className="col col-sm-5"
              style={{ marginLeft: "10.5rem" }}
            >
              <Button
                type="submit"
                className="btn-task me-4  btn-lg btn-block"
                onClick={() => navigate("/company/task")}
              >
                Submit
              </Button>
            </Form.Group>
          </Row>
        </form>
      </div>
    </>
  );
}

export default UpdateTasks;
