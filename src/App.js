import './App.css';
import {  Route, Routes, useLocation}
    from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Attendance from './Pages/companyPage/Attendance';
import Leave from './Pages/companyPage/Leave';
import Performance from './Pages/companyPage/Performance';
import StaffLogin from './Pages/staffPage/StaffLogin';
import Sidebars from './component/Sidebars';
import { useEffect, useState } from 'react';
import Navbars from './component/Navbars';
import CompanyLogin from './Pages/companyPage/CompanyLogin';
import CreateStaff from './Pages/companyPage/CreateStaff';
import Salary from './Pages/companyPage/Salary';
import Updatestaff from './Pages/companyPage/Updatestaff';
import Addtask from './Pages/companyPage/Addtask';
import ViewAttendance from './Pages/staffPage/ViewAttendance';
import ViewPerformance from './Pages/staffPage/ViewPerformace';
import ViewTask from './Pages/staffPage/ViewTask';
import Profile from './Pages/staffPage/Profile';
import AdminLogin from './Pages/adminPage/AdminLogin';
import Allusers from './Pages/adminPage/Allusers';
import UpdateUser from './Pages/adminPage/UpdateUser';
import User from './Pages/adminPage/User';
import Addleave from './Pages/companyPage/AddLeave';
import ViewEmployee from './Pages/staffPage/ViewEmployee';
import StaffDashboard from './Pages/staffPage/StaffDashboard';
import ApplyLeave from './Pages/staffPage/ApplyLeave';
import AddPerformance from './Pages/companyPage/AddPerformance';
import Task from './Pages/companyPage/Task';
import Staff from './Pages/companyPage/Staff';
import CompanyMain from './Pages/companyPage/CompanyMain';
import UpdateTasks from './Pages/companyPage/UpdateTasks';
import GoogleOauth from './component/GoogleOauth';
import MarkAttendance from './Pages/companyPage/MarkAttendance';
import UploadFile from './Pages/companyPage/UploadFile';
import Login from './component/Login';
import Home from './component/Home';


function App() {
  // const location = useLocation()
  // const [admin, setAdmin] = useState(false);
  // useEffect(()=>{
  //   if(location.pathname.includes("admin")){
  // setAdmin(true)
  // }else{
  // setAdmin(false)
  // }
  // },[location])
  return (
    <div className="App " style={{background:"#f0f9ff",height:"100%"}}>
     <div style={{position:'sticky',top:'0',zIndex:'999'}}>


</div >
{/* <Sample /> */}
<Routes>
      <Route exact path="/" element={<Home />} />
      </Routes>
      <Navbars />
      <div style={{ display:"flex" }}>
   
<Routes>

      {/* {admin ? null : <Sidebars />} */}
     

      <Route exact path="/admin" element={<AdminLogin />} />

<Route exact path="/admin/allusers" element={<Allusers/>} />

<Route exact path="/admin/updateuser" element={<UpdateUser/>} />

<Route exact path="/admin/user" element={<User />} />

      <Route exact path="/company/dashboard" element={<CompanyMain />} />

      <Route exact path="/company/attendance" element={<Attendance />} />

      <Route exact path="/employees/Dashboard" element={<StaffDashboard />} />
     
      <Route exact path="/company/createstaff" element={<CreateStaff />} />

      <Route exact path="/company/login" element={<CompanyLogin />} />
      
      <Route exact path="/company/leave" element={<Leave />} />
      
      <Route exact path="/company/performance" element={<Performance />} />

      <Route exact path="/upload" element={<UploadFile />} />
     
      <Route exact path="/company/task" element={<Task />} />
   
      <Route exact path="/company/staff" element={<Staff />} />

      <Route exact path="/company/salary" element={<Salary/>} />

      <Route exact path="/company/updatestaff/:id" element={<Updatestaff />} />

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

<Route exact path="/new" element={<GoogleOauth />} />

<Route exact path="/mark" element={<MarkAttendance/>} />

<Route exact path="/login1" element={<Login/>} />

      </Routes>
      </div>
     
    </div>
  );
}

export default App;
