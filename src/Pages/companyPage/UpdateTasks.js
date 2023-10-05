import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../Autherization/Autherization";
import {  Form, Row } from "react-bootstrap";
import Sidebars from "../../component/Sidebars";
import Navbars from "../../component/Navbars";
import "../././../styles/CreateStaff.css"


function UpdateTasks() {
  const navigate = useNavigate();
  const { staffId, taskId } = useParams();

  const [task, setTask] = useState({
    title: "",
    startTime: "",
    endTime: "",
    status: "",
  });

  console.log("fkjfkl",task);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `/company/${staffId}/task/${taskId}`
        );
        const taskData = response.data;
        setTask(taskData.task); 
        console.log("sunanii",taskData.task);// taskData is already a single object
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    fetchTasks();
  }, [staffId, taskId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(task);

      const response = await axios.put(
        `/company/${staffId}/task/${taskId}`,
        task
      );
      navigate("/company/task")
      console.log(response.data);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbars />
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <Sidebars />
        <div class="add-task-section">
         
          <form className="container mt-3 mb-3" onSubmit={handleSubmit}>
            <h2
              style={{
                marginBottom: "2rem",
                fontFamily: "serif",
                fontSize: "40px",
                color: "black",
              }}
            >
              Update Task
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                <div
                  style={{
                    display: "flex",
                    width: "62vh",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "23px",
                      color: "black",
                      marginBottom: "1rem",
                    }}
                  >
                    Task Title
                  </Form.Label>
                  <Form.Control
                    value={task.title}
                    name="title"
                    className="form-control"
                    style={{ maxWidth: "16.5rem" }}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                <div
                  style={{
                    display: "flex",
                    width: "62vh",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "23px",
                      color: "black",
                      marginBottom: "1rem",
                    }}
                  >
                    Start Time
                  </Form.Label>
                  <Form.Control
                    value={task.startTime}
                    name="startTime"
                    placeholder="DD/MM/YYYY"
                    style={{ maxWidth: "16.5rem" }}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                <div
                  style={{
                    display: "flex",
                    width: "62vh",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "23px",
                      color: "black",
                      marginBottom: "1rem",
                    }}
                  >
                    End Time
                  </Form.Label>
                  <Form.Control
                    value={task.endTime}
                    name="endTime"
                    className="form-control"
                    placeholder="DD/MM/YYYY"
                    style={{ maxWidth: "16.5rem" }}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                <div
                  style={{
                    display: "flex",
                    width: "62vh",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "23px",
                      color: "black",
                      marginBottom: "1rem",
                    }}
                  >
                    Status
                  </Form.Label>
                  <Form.Control
                    value={task.status}
                    name="status"
                    className="form-control"
                    style={{ maxWidth: "16.5rem" }}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </div>
            <Row className="mb-3">
              <Form.Group
                controlId="formGridCheckbox"
                className="col col-sm-5"
                style={{ marginLeft: "8.5rem", marginTop: ".8rem" }}
              >
                <button
                  type="submit"
                  className="btn-task me-4  btn-lg btn-block"
                 
                >
                  Submit
                </button>
                <button
                  type="submit"
                  className="btn-task me-4  btn-lg btn-block"
                  onClick={() => navigate("/company/task")}
                >
                  Cancel
                </button>
              </Form.Group>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateTasks;
