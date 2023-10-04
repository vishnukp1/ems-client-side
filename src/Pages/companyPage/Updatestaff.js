import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/updatePage.css"
import Sidebars from "../../component/Sidebars";
import Navbars from "../../component/Navbars";

function Updatestaff() {
  const navigate = useNavigate();
  const [department, setDepartment] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    imagepath: "",
    address: "",
    salary: "",
    position: "",
    gender: "",
  });

  console.log(data);

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
        console.log("reall one",response.data.data);
        setData(response.data.data);
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

  const searchDepartment = async (key) => {
    console.log(key);
  };

  const getDepartment = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4444/company/department`
      );
      const responseData = response.data.data;
      setDepartment(responseData);
      console.log("department:", responseData);
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };

  useEffect(() => {
    getDepartment();
  }, []);
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <Navbars />
    <div style={{display:"flex", width:"100vw",height:"100vh"}}>
      <Sidebars />
      <div className="form-upadate">
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center" ,color:"black"}}>EDIT STAFF</h2>
          <div className="form-body">
            <div className="form-body">
              <div className="form-div">
                <label className="form__label" htmlFor="name">
                  Name
                </label>
                <input
                  className="input_form"
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={ data.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-div">
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
              <div className="form-div">
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
              <div className="form-div" style={{ display: "flex" }}>
                <label className="form__label" for="firstName">
                  Image{" "}
                </label>
                <input
                  style={{ marginLeft: "48px" }}
                  className="input_image"
                  type="file"
                  id="lastName"
                  placeholder="image"
                  name="image"
                />
              </div>
              <div className="form-div">
                <label className="form__label" htmlFor="imagepath">
                  Salary
                </label>
                <input
                  id="imagepath"
                  className="input_form"
                  type="text"
                  value={data.salary}
                  name="salary"
                  onChange={handleChange}
                />
              </div>
              <div className="form-div">
                <label className="form__label" for="password">
                  Postion{" "}
                </label>
                <select
                  className="select-custom-addstaff1"
                  style={{ backgroundColor: "white" }}
                  name="position"
                  onChange={(e) => searchDepartment(e.target.value)}
                >
                  <option name="position" value="">
                    Select Department
                  </option>
                  {department.map((post, index) => (
                    <option
                      name="position"
                      style={{ fontSize: "18px", textAlign: "start" }}
                      key={index}
                      value={post.title}
                    >
                      {post.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-div">
                <label className="form__label" for="password">
                  Gender{" "}
                </label>
                <select name="gender" className="select-custom-addstaff1">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-div">
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
            <button className="btn-task1" type="submit">
              Update Staff
            </button>
          </div>
        </form>
      </div>
 </div> </div>
  );
}

export default Updatestaff;
