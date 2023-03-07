import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import '../src/assets/img/favicon.png';
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/plugins/fontawesome/css/fontawesome.min.css';
import '../src/assets/plugins/fontawesome/css/all.min.css';
import '../src/assets/css/line-awesome.min.css';
import '../src/assets/css/material.css';
import '../src/assets/css/font-awesome.min.css';
import '../src/assets/css/line-awesome.min.css';
import '../src/assets/css/font-awesome.min.css';
import '../src/assets/css/style.css';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import EmployeeDashboard from './Components/EmployeeDashboard/EmployeeDashboard';
import ProjectList from './Components/Project/ProjectList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {

  return (

    <Router>
      <div className="account-page">

        <Routes>

          <Route path="/" element={<Login />} />
          <Route
            path="/admin"
            element={
               <PrivateRoute>
                <AdminDashboard />
               </PrivateRoute>
            }
          />
          <Route
            path="/employee"
            element={
               <PrivateRoute>
                <EmployeeDashboard /> 
               </PrivateRoute>
            }
          />

          <Route path="/project" element={<ProjectList />} />
          
          <Route path="*" element={<Navigate to="/" />} />
          

        </Routes>
      </div>
    </Router>




  );
}

export default App;
