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
    <div style={{ display: 'flex', overflow: 'scroll initial'}}>
      <CDBSidebar className='sidebar-text' textColor="white" backgroundColor="#040e3d" style={{height:"100vh" }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
        WORKWALE
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" style={{textColor:"#060608"}}>
          <CDBSidebarMenu>
            <NavLink exact to="/company/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/company/staff" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Employee</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/company/task" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Task</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/company/performance" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Performance</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/company/attendance" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Attendance</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/company/leave" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Leave</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/company/salary" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Salary</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
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
