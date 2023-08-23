import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebars = () => {

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#060608" backgroundColor="#edf7f3">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Company
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" style={{textColor:"#060608"}}>
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
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
