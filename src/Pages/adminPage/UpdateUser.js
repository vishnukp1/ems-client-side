import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/company.css";

import Sidebars from "../../component/Sidebars";
import Navbars from "../../component/Navbars";

function UpdateUser() {
  const navigate = useNavigate();
 
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    companyId:""
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
          `http://localhost:4444/admin/company/${id}`
        );
        console.log(response.data);
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
      await axios.put(`http://localhost:4444/admin/company/${id}`, data);
      navigate("/admin/user");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };


  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <Navbars />
    <div style={{display:"flex", width:"100vw",height:"100vh"}}>
      <Sidebars />
      <div className="form-upadate">
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center" }}>Edit company</h2>
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
             
             
             
              
             
            </div>
          </div>
          <div className="footer">
            <button className="btn-task" type="submit">
              Update company
            </button>
          </div>
        </form>
      </div>
 </div> </div>
  );
}

export default UpdateUser;
