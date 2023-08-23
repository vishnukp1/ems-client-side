import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome icons if needed

function Sample() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20">Total Teacher</h6>
              <h2 className="text-right">
                <FontAwesomeIcon icon="chalkboard-teacher" className="f-left" />
                <span>teachercount</span>
              </h2>
              <p className="m-b-0">
                Pending Teacher
                <span className="f-right">pendingteachercount</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-green order-card">
            <div className="card-block">
              <h6 className="m-b-20">Total Student</h6>
              <h2 className="text-right">
                <FontAwesomeIcon icon="user-graduate" className="f-left" />
                <span>studentcount</span>
              </h2>
              <p className="m-b-0">
                Pending Students
                <span className="f-right">pendingstudentcount</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-yellow order-card">
            <div className="card-block">
              <h6 className="m-b-20">Teachers Salary</h6>
              <h2 className="text-right">
                <FontAwesomeIcon icon="search-dollar" className="f-left" />
                <span>teachersalary</span>
              </h2>
              <p className="m-b-0">
                Pending Salary
                <span className="f-right">pendingteachersalary</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-pink order-card">
            <div className="card-block">
              <h6 className="m-b-20">Student Fee</h6>
              <h2 className="text-right">
                <FontAwesomeIcon icon="search-dollar" className="f-left" />
                <span>studentfee</span>
              </h2>
              <p className="m-b-0">
                Pending Dues
                <span className="f-right">pendingstudentfee</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sample;
