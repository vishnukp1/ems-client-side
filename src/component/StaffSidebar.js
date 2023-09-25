import React from 'react';
import "../styles/company.css"
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

function StaffSidebar() {
  return (
    <div style={{ display: 'flex', overflow: 'scroll initial'}}>
      <CDBSidebar className='sidebar-text' textColor="white" backgroundColor="#040e3d" style={{height:"100%" }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/employees/home" className="text-decoration-none" style={{ color: 'inherit' }}>
        WORKWALE
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" style={{textColor:"#060608"}}>
          <CDBSidebarMenu>
            <NavLink exact to="/employees/Dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/employees/staffprofile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/employees/viewstaff" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">All Employees</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/employees/viewtask" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Tasks</CDBSidebarMenuItem>
            </NavLink>
         
            <NavLink exact to="/employees/viewattendance" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Attendance</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/employees/addleave" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Apply Leave</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/notification" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Notification</CDBSidebarMenuItem>
            </NavLink>

           
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}

export default StaffSidebar