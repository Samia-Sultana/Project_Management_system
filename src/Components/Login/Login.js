import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import logo2 from '../../../src/assets/img/logo2.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToAdmin, setRedirectToAdmin] = useState(false);
    const [redirectToEmployee, setRedirectToEmployee] = useState(false);

    const handleLogin = async (event, email, password) => {
        event.preventDefault();
        const csrftoken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
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
           // Do something with the response data
          if (response.ok) {

             localStorage.setItem("access_token", data.access_token);
             localStorage.setItem("user", JSON.stringify(data.user));

             var user = JSON.parse(localStorage.getItem("user"));

             console.log(user);

             if(localStorage.getItem("access_token") && (user.is_admin == "1")){
                setRedirectToAdmin(true);
            }
            else if( (user.is_admin == "0") && localStorage.getItem("access_token") ){
                setRedirectToEmployee(true);
            }
            
          }
    
        } catch (error) {
          console.error(error);
        }

      };

      if (redirectToAdmin) {
        return <Navigate to="/admin" />;
      }

      if (redirectToEmployee) {
        return <Navigate to="/employee" />;
      }



    return (


        <div className="main-wrapper">
            <div className="account-content">
                <div className="container">

                    <div className="account-logo">
                        <a href="admin-dashboard.html"><img src={logo2} alt="Dreamguy's Technologies" /></a>
                    </div>

                    <div className="account-box">
                        <div className="account-wrapper">
                            <h3 className="account-title">Login</h3>
                            <p className="account-subtitle">Access to our dashboard</p>

                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleLogin(e, email, password);
                            }} >
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input className="form-control" type="text" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label>Password</label>
                                        </div>
                                        <div className="col-auto">
                                            <a className="text-muted" href="forgot-password.html">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="position-relative">
                                        <input className="form-control" type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                                        <span className="fa fa-eye-slash" id="toggle-password"></span>
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-primary account-btn" type="submit">Login</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Login;