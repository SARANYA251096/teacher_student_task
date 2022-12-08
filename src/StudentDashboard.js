import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import ReactDOM from 'react-dom';

function StudentDashboard() {
  const [students, setStudents] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    
     fetchData()
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      const students = await axios.get(
        "https://638a0501c5356b25a20f7f23.mockapi.io/students"
      );
      setStudents(students.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Student's Data</h1>
        <Link
          to={"/studentdashboard"}
          >
        </Link>
      </div>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Subject-score</th>
                    <th>Attendance</th>
                    <th>Subject</th>
                    <th>Address</th>
                    <th>DOB</th>
                    <th>Gender</th>
                  
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => {
                    return (
                      <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.subjectscore}</td>
                        <td>{student.attendance}</td>
                        <td>{student.subject}</td>
                        <td>{student.address}</td>
                        <td>{student.DOB}</td>
                        <td>{student.Gender}</td>
                        
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Subject-score</th>
                    <th>Attendance</th>
                    <th>Subject</th>
                    <th>Address</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
