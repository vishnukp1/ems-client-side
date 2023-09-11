import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import "../../styles/company.css"
import { useDispatch } from 'react-redux';


function Updatestaff() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    imagepath: "",
    address: "",
    salary: "",
    position:"",
    gender: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4444/company/staff/${id}`
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4444/company/staff/${id}`, data);
      navigate("/company/staff");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="form-upadate">
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>Edit Staff</h2>
        <div className="form-body">
        <div className="form-body">
  <div className="username">
    <label className="form__label" htmlFor="name">
      Name
    </label>
    <input
      className="input_form"
      type="text"
      id="name"
      placeholder="Name"
      value={data.name}
      name="name"
      onChange={handleChange}
    />
  </div>
  <div className="email">
    <label className="form__label" htmlFor="email">
      Email
    </label>
    <input
      id="email"
      className="input_form"
      type="email"
      placeholder="Email"
      value={data.email}
      name="email"
      onChange={handleChange}
    />
  </div>
  <div className="username">
    <label className="form__label" htmlFor="phone">
      Phone
    </label>
    <input
      className="input_form"
      type="text"
      id="phone"
      placeholder="Phone"
      value={data.phone}
      name="phone"
      onChange={handleChange}
    />
  </div>
  <div className="email">
    <label className="form__label" htmlFor="imagepath">
      Image Path
    </label>
    <input
      id="imagepath"
      className="input_form"
      type="text"
      placeholder="Image Path"
      value={data.imagepath}
      name="imagepath"
      onChange={handleChange}
    />
  </div>
  <div className="email">
    <label className="form__label" htmlFor="imagepath">
    Salary
    </label>
    <input
      id="imagepath"
      className="input_form"
      type="text"
      placeholder="Image Path"
      value={data.salary}
      name="salary"
      onChange={handleChange}
    />
  </div>
  <div className="email">
    <label className="form__label" htmlFor="imagepath">
     Position
    </label>
    <input
      id="imagepath"
      className="input_form"
      type="text"
      placeholder="Image Path"
      value={data.position}
      name="position"
      onChange={handleChange}
    />
  </div>
  <div className="email">
    <label className="form__label" htmlFor="imagepath">
  Gender
    </label>
    <input
      id="imagepath"
      className="input_form"
      type="text"
      placeholder="Image Path"
      value={data.gender}
      name="gender"
      onChange={handleChange}
    />
  </div>
  <div className="password">
    <label className="form__label" htmlFor="address">
      Address
    </label>
    <input
      className="input_form"
      type="text"
      id="address"
      placeholder="Address"
      value={data.address}
      name="address"
      onChange={handleChange}
    />
  </div>
</div>

        </div>
        <div className="footer">
        <button className='btn-task' type="submit" >
          Update Staff
        </button>
       
        </div>
      </form>
    </div>
  );
}

export default Updatestaff;
