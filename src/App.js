import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
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


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  //const navigate = useNavigate();

  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('access_token');
    if (storedUser && storedToken) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    }
  }, [isLoggedIn]);

  const handleLogin = async (event, email, password) => {
    event.preventDefault();
    const csrftoken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    console.log(email,password);
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrftoken
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      const data = await response.json();
      console.log(data); // Do something with the response data
      if (response.ok) {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setIsLoggedIn(true);
        setUser(data.user);
        
      }

    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
  };

 

  return (

    
      <div className="account-page">
        {
          isLoggedIn? <AdminDashboard user={user} handleLogout={handleLogout} /> : <Login handleLogin={handleLogin} />
        }
      </div>
    
  );
}

export default App;
