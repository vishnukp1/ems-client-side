import "./App.css";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Attendance from "./Pages/companyPage/Attendance";

import StaffLogin from "./Pages/staffPage/StaffLogin";
import Navbars from "./component/Navbars";
import CompanyLogin from "./Pages/companyPage/CompanyLogin";
import CreateStaff from "./Pages/companyPage/CreateStaff";
import Salary from "./Pages/companyPage/Salary";
import Updatestaff from "./Pages/companyPage/Updatestaff";
import Addtask from "./Pages/companyPage/Addtask";
import ViewAttendance from "./Pages/staffPage/ViewAttendance";
import ViewPerformance from "./Pages/staffPage/ViewPerformace";
import ViewTask from "./Pages/staffPage/ViewTask";
import Profile from "./Pages/staffPage/Profile";
import AdminLogin from "./Pages/adminPage/AdminLogin";
import Allusers from "./Pages/adminPage/Allusers";
import UpdateUser from "./Pages/adminPage/UpdateUser";
import Addleave from "./Pages/companyPage/AddLeave";
import ViewEmployee from "./Pages/staffPage/ViewEmployee";
import StaffDashboard from "./Pages/staffPage/StaffDashboard";
import ApplyLeave from "./Pages/staffPage/ApplyLeave";
import Task from "./Pages/companyPage/Task";
import Staff from "./Pages/companyPage/Staff";
import CompanyDashboard from "./Pages/companyPage/CompanyDashboard";
import UpdateTasks from "./Pages/companyPage/UpdateTasks";
import GoogleOauth from "./component/GoogleOauth";
import Login from "./component/Login";
import Home from "./component/Home";
import Department from "./Pages/companyPage/Department";
import UpdateAttendance from "./Pages/companyPage/UpdateAttendance";
import ViewLeave from "./Pages/companyPage/ViewLeave";
import StaffHome from "./Pages/staffPage/StaffHome";
import Users from "./Pages/adminPage/Users";
import AddUsers from "./Pages/adminPage/AddUsers";

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
    <div className="App " style={{ background: "#f0f9ff", height: "100%" }}>
      <div style={{ display: "flex" }}>
        <Routes>
          {/* {admin ? null : <Sidebars />} */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route exact path="/admin/allusers" element={<Allusers />} />
          <Route exact path="/admin/updateuser/:id" element={<UpdateUser />} />
          <Route exact path="/company/department" element={<Department />} />
          <Route exact path="/admin/user" element={<Users />} />
          <Route exact path="/admin/adduser" element={<AddUsers />} />
          <Route
            exact
            path="/company/dashboard"
            element={<CompanyDashboard />}
          />
          <Route exact path="/company/attendance" element={<Attendance />} />
          <Route
            exact
            path="/employees/Dashboard"
            element={<StaffDashboard />}
          />
          <Route exact path="/company/createstaff" element={<CreateStaff />} />
          <Route exact path="/company/login" element={<CompanyLogin />} />
          <Route exact path="/company/viewleave" element={<ViewLeave />} />
          <Route exact path="/company/task" element={<Task />} />
          <Route exact path="/company/staff" element={<Staff />} />
          <Route exact path="/company/salary" element={<Salary />} />
          <Route
            exact
            path="/company/updatestaff/:id"
            element={<Updatestaff />}
          />
          <Route exact path="/company/addtask/:id" element={<Addtask />} />
          a
          <Route exact path="/company/addleave/:id" element={<Addleave />} />
          <Route
            exact
            path="/company/updatetask/:staffId/:taskId"
            element={<UpdateTasks />}
          />
          <Route exact path="/employees/staffprofile" element={<Profile />} />
          <Route exact path="/employees/home" element={<StaffHome />} />
          <Route
            exact
            path="/employees/viewattendance"
            element={<ViewAttendance />}
          />
          <Route exact path="/employees/viewstaff" element={<ViewEmployee />} />
          <Route
            exact
            path="/employees/performance"
            element={<ViewPerformance />}
          />
          <Route exact path="/employees/addleave" element={<ApplyLeave />} />
          <Route exact path="/employees/viewtask" element={<ViewTask />} />
          <Route exact path="/employees/stafflogin" element={<StaffLogin />} />
          <Route exact path="/new" element={<GoogleOauth />} />
          <Route exact path="/mark" element={<UpdateAttendance />} />
          <Route exact path="/login1" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
