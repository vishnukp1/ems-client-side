import './App.css';
import {  Route, Routes, useLocation}
    from "react-router-dom";
import Attendance from './companyPage/Attendance';
import Leave from './companyPage/Leave';
import Performance from './companyPage/Performance';
import StaffLogin from './staffPage/StaffLogin';
import Sidebars from './companyPage/Sidebars';
import { useEffect, useState } from 'react';
import Navbars from './component/Navbars';
import CompanyMain from './companyPage/CompanyMain';
import Staff from './companyPage/Staff';
import CompanyLogin from './companyPage/CompanyLogin';
import CreateStaff from './companyPage/CreateStaff';
import Task from './companyPage/Task';
import Salary from './companyPage/Salary';
import Updatestaff from './companyPage/Updatestaff';
import Addtask from './companyPage/Addtask';
import ViewAttendance from './staffPage/ViewAttendance';
import ViewPerformance from './staffPage/ViewPerformace';
import ViewTask from './staffPage/ViewTask';
import Profile from './staffPage/Profile';
import AdminLogin from './adminPage/AdminLogin';
import Allusers from './adminPage/Allusers';
import UpdateUser from './adminPage/UpdateUser';
import User from './adminPage/User';
import UpdateTasks from './companyPage/UpdateTasks';
import Addleave from './companyPage/AddLeave';
import ViewEmployee from './staffPage/ViewEmployee';
import StaffDashboard from './staffPage/StaffDashboard';
import ApplyLeave from './staffPage/ApplyLeave';
import AddPerformance from './companyPage/AddPerformance';


function App() {
  const location = useLocation()
  const [admin, setAdmin] = useState(false);
  useEffect(()=>{
    if(location.pathname.includes("admin")){
  setAdmin(true)
  }else{
  setAdmin(false)
  }
  },[location])
  return (
    <div className="App " style={{background:"#f0f9ff",height:"100%"}}>
     <div style={{position:'sticky',top:'0',zIndex:'999'}}>

<Navbars/>
</div >
{/* <Sample /> */}

<div style={{ display: 'flex' }}>
      {admin ? null : <Sidebars />}
      <Routes>
      <Route exact path="/admin" element={<AdminLogin />} />

<Route exact path="/admin/allusers" element={<Allusers/>} />

<Route exact path="/admin/updateuser" element={<UpdateUser/>} />

<Route exact path="/admin/user" element={<User />} />

      <Route exact path="/" element={<CompanyMain />} />

      <Route exact path="/company/attendance" element={<Attendance />} />

      <Route exact path="/employees/Dashboard" element={<StaffDashboard />} />
     
      <Route exact path="/company/createstaff" element={<CreateStaff />} />

      <Route exact path="/company/login" element={<CompanyLogin />} />
      
      <Route exact path="/company/leave" element={<Leave />} />
      
      <Route exact path="/company/performance" element={<Performance />} />
     
      <Route exact path="/company/task" element={<Task />} />
   
      <Route exact path="/company/staff" element={<Staff />} />

      <Route exact path="/company/salary" element={<Salary/>} />

      <Route exact path="/company/updatestaff/:id" element={<Updatestaff/>} />

      <Route exact path="/company/addtask/:id" element={<Addtask/>} />

      <Route exact path="/company/addperformance/:id" element={<AddPerformance/>} />

      <Route exact path="/company/addleave/:id" element={<Addleave/>} />

      <Route exact path="/company/updatetask/:staffId/:taskId" element={<UpdateTasks/>} />

      <Route exact path="/employees/staff" element={<Profile />} />

<Route exact path="/employees/viewattendance" element={<ViewAttendance/>} />

<Route exact path="/employees/viewstaff" element={<ViewEmployee/>} />

<Route exact path="/employees/performance" element={<ViewPerformance/>} />

<Route exact path="/employees/addleave" element={<ApplyLeave />} />

<Route exact path="/employees/viewtask" element={<ViewTask/>} />

<Route exact path="/employees/stafflogin" element={<StaffLogin/>} />

      </Routes>
      </div>
     
    </div>
  );
}

export default App;
