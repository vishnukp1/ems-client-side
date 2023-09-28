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

const Sidebars = () => {


  return (
    <div  style={{ display: 'flex', overflow: 'scroll initial'}}>
      <CDBSidebar className='sidebar-text' textColor="white" backgroundColor="#040e3d" style={{height:"100%" }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
        WORKWALE
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" style={{textColor:"#060608"}}>
          <CDBSidebarMenu className='sidebar-main'>
            <NavLink exact to="/company/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/company/staff" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Employees</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/company/department" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Departments</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/company/task" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Tasks</CDBSidebarMenuItem>
            </NavLink>
         
            <NavLink exact to="/company/attendance" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Attendance</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/company/viewleave" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Leave</CDBSidebarMenuItem>
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
  );
};

export default Sidebars;
