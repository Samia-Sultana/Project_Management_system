import React, { useState } from 'react';
import logo2 from '../../../src/assets/img/logo2.png';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
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
                                    <input className="form-control" type="text"  onChange={(e) => setEmail(e.target.value)} />
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
                                        <input className="form-control" type="password"  id="password" onChange={(e) => setPassword(e.target.value)} />
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