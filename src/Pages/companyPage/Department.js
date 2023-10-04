import React, { useEffect, useRef, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Sidebars from '../../component/Sidebars';
import axios from '../../Autherization/Autherization';
import '../../styles/company.css';
import Navbars from '../../component/Navbars';
import { useNavigate } from 'react-router-dom';

function Department() {
  const navigate = useNavigate();

  const [department, setDepartment] = useState([]);

  const formRef = useRef();

  const [rerender, setRerender] = useState(0); 

  const [deptStates, setDeptStates] = useState([]);

  const buttonStyle = {
    fontSize: '8px',
    padding: '2px 5px',
    marginLeft: '2px',
    border: '1px solid #343a40',
  };

  const addDepartment = async (e) => {
    e.preventDefault();
    try {
      const dprtment = formRef.current.department.value;
      const deprtment = {
        title: dprtment,
      };
      const response = await axios.post(`/company/createdprt`, deprtment);
      console.log(response.data);
      getDepartment();
    } catch (error) {
      console.error('Error fetching customer data:', error);
    }
    formRef.current.reset();
  };

  const getDepartment = async () => {
    try {
      const response = await axios.get(`/company/department`);
      const responseData = response.data.data;
  
      setDepartment(responseData);
      
      // Set initialDeptStates based on the fetched data
      const initialDeptStates = responseData.map((post) => ({
        title: post.title,
        editing: false,
      }));
      setDeptStates(initialDeptStates);
     
      console.log(responseData);
    } catch (error) {
      console.error('Error fetching customer data:', error);
    }
  };
  const getDepartmentbyId = async (id) => {
    try {
      const response = await axios.get(`/company/department/${id}`);
      const responseData = response.data.department;

  
      setDeptStates((prevState) => {
        return prevState.map((state, index) => ({
          ...state,
          title: index === id ? responseData.title : state.title,
        }));
      });
      console.log(responseData);
    } catch (error) {
      console.error('Error fetching customer data:', error);
    }
  };

  const deleteDepartment = async (taskId) => {
    try {
      await axios.delete(`/company/department/${taskId}`);
      getDepartment();
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };

  const UpdateDepartment = async (index) => {
    const updatedDept = {
      title: deptStates[index]?.title, // Use the title from deptStates at the given index
    };
  
    console.log("updatedDept", updatedDept);
    setRerender(rerender + 1);
    try {
      const response = await axios.put(`/company/department/${department[index]._id}`, updatedDept);
      console.log(response);
    } catch (error) {
      console.error('Error updating department:', error);
    }
  };
  
  
  useEffect(() => {
    getDepartment();
  }, [rerender]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Navbars />
      <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        <Sidebars />
        <div className="form" style={{ width: '100%', height: '100vh', marginTop: '0px' }}>
        <h2
          style={{
            textAlign: "left",
            marginTop: ".4rem",
            marginBottom: "1.2rem",
            fontFamily: "Arial, sans-serif",
          }}
        >
      DEPARTMENTS
        </h2>
       
        <div style={{flex: 1, height: '2.9px', backgroundColor: '#1B1E36',marginBottom: "21px" ,marginTop:"-14px"}} />
          <div className="department-div" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', borderRadius: '15px' }}>
            <div>
              <div style={{ display: 'flex', gap: '.5rem' }}>
                <form ref={formRef} onSubmit={addDepartment}>
                  <div style={{ display: 'flex', gap: '.5rem' }}>
                    <div>
                      <input className="form-control" type="text" name="department" />
                    </div>
                    <div>
                      <Button
                        style={{ height: '32px', marginBottom: '22px', background: '#14539A', paddingTop: '8px' }}
                        type="submit"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <Table className="department-table-text" striped bordered hover size="sm">
              <thead className="table-head">
                <tr>
                  <th style={{ width: '10%', color: 'white' }}>#</th>
                  <th style={{ width: '55%', color: 'white' }}>Departments</th>
                  <th style={{ width: '10%', color: 'white' }}>Actions</th>
                </tr>
              </thead>
              {department.map((post, index) => (
  <tr key={index}>
    <td>{index + 1}</td>
    <td style={{fontSize:"25px",color:'black',textAlign:"left", paddingLeft:"3rem"}}>
      {deptStates[index].editing ? (
        <input
        style={{background:"#ebf6fa",width:"15rem",borderRadius:"0px"}}
        value={deptStates[index].title}
        onChange={(e) => {
          const newDeptStates = [...deptStates];
          newDeptStates[index].title = e.target.value;
          setDeptStates(newDeptStates);
        }}
      />
      
      ) : (
        post.title
      )}
    </td>
    <td>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          variant="outline-dark"
          onClick={() => deleteDepartment(post._id)}
          style={buttonStyle}
        >
          Delete
        </Button>
        {deptStates[index].editing ? (
       <Button
       variant="outline-dark"
       onClick={() => {
         getDepartmentbyId(post._id);
         UpdateDepartment(index);
         navigate("/company/department"); // Navigate to the desired route
       }}
       style={buttonStyle}
     >
       Post
     </Button>
     
     
        ) : (
          <Button
          style={buttonStyle}
          variant="outline-dark"
            onClick={() => {
              getDepartmentbyId(post._id);
              const newDeptStates = [...deptStates];
              newDeptStates[index].editing = true;
              setDeptStates(newDeptStates);
            
            }}
          >
            Update
          </Button>
        )}
      </div>
    </td>
  </tr>
))}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
