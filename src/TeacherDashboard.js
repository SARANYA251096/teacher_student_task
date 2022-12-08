import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function TeacherDashboard() {
  const [teachers, setteachers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    
     fetchData()
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      const teachers = await axios.get(
        "https://638a0501c5356b25a20f7f23.mockapi.io/teachers"
      );
      setteachers(teachers.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };
  

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Teacher's Details</h1>
        <Link
          to={"/teacherdashboard"}
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
                    <th>Phone</th>
                    <th>Subjects</th>
                    <th>Address</th>
                  
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher) => {
                    return (
                      <tr>
                        <td>{teacher.id}</td>
                        <td>{teacher.name}</td>
                        <td>{teacher.email}</td>
                        <td>{teacher.phone}</td>
                        <td>{teacher.subjects}</td>
                        <td>{teacher.address}</td>
                        
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                  <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                    <th>Subjects</th>
                    <th>Address</th>
                    
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
     


export default TeacherDashboard;
