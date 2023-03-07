import {Navigate, Link } from 'react-router-dom';
import ProjectList from '../../Components/Project/ProjectList';

import logo from '../../../src/assets/img/logo.png';
import logo2 from '../../../src/assets/img/logo.png';
import avatar02 from '../../../src/assets/img/profiles/avatar-02.jpg';
import avatar03 from '../../../src/assets/img/profiles/avatar-03.jpg';
import avatar04 from '../../../src/assets/img/profiles/avatar-04.jpg';
import avatar05 from '../../../src/assets/img/profiles/avatar-05.jpg';
import avatar06 from '../../../src/assets/img/profiles/avatar-06.jpg';
import avatar07 from '../../../src/assets/img/profiles/avatar-07.jpg';
import avatar08 from '../../../src/assets/img/profiles/avatar-08.jpg';
import avatar09 from '../../../src/assets/img/profiles/avatar-09.jpg';
import avatar21 from '../../../src/assets/img/profiles/avatar-21.jpg';
import avatar13 from '../../../src/assets/img/profiles/avatar-13.jpg';
import avatar17 from '../../../src/assets/img/profiles/avatar-17.jpg';
import us from '../../../src/assets/img/flags/us.png';
import de from '../../../src/assets/img/flags/de.png';
import fr from '../../../src/assets/img/flags/fr.png';
import es from '../../../src/assets/img/flags/es.png';
import { useState } from 'react';

const AdminNavbar = () => {
    const [logout,setLogOut] = useState(false);
    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        
        setLogOut(true);
      };
      if(logout){
        return <Navigate to="/" />;
      }
      
    return (
        <div>
            <div className="header">

                <div className="header-left">
                    <a href="admin-dashboard.html" className="logo">
                        <img src={logo} width="40" height="40" alt="" />
                    </a>
                    <a href="admin-dashboard.html" className="logo2">
                        <img src={logo2} width="40" height="40" alt="" />
                    </a>
                </div>

                <a id="toggle_btn" href="#">
                    <span className="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>

                <div className="page-title-box">
                    <h3>Dreamguy's Technologies</h3>
                </div>


                <a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa fa-bars"></i></a>

                <ul className="nav user-menu">

                    <li className="nav-item">
                        <div className="top-nav-search">
                            <a href="#" className="responsive-search">
                                <i className="fa fa-search"></i>
                            </a>
                            <form action="search.html">
                                <input className="form-control" type="text" placeholder="Search here" />
                                <button className="btn" type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </li>


                    <li className="nav-item dropdown has-arrow flag-nav">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
                            <img src={us} alt="" height="20" /> <span>English</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                                <img src={us} alt="" height="16" /> English
                            </a>
                            <a href="#" className="dropdown-item">
                                <img src={fr} alt="" height="16" /> French
                            </a>
                            <a href="#" className="dropdown-item">
                                <img src={es} alt="" height="16" /> Spanish
                            </a>
                            <a href="#" className="dropdown-item">
                                <img src={de} alt="" height="16" /> German
                            </a>
                        </div>
                    </li>


                    <li className="nav-item dropdown">
                        <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            <i className="fa fa-bell-o"></i> <span className="badge rounded-pill">3</span>
                        </a>
                        <div className="dropdown-menu notifications">
                            <div className="topnav-dropdown-header">
                                <span className="notification-title">Notifications</span>
                                <a href="#" className="clear-noti"> Clear All </a>
                            </div>
                            <div className="noti-content">
                                <ul className="notification-list">
                                    <li className="notification-message">
                                        <a href="activities.html">
                                            <div className="media d-flex">
                                                <span className="avatar flex-shrink-0">
                                                    <img alt="" src={avatar02} />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span
                                                        className="noti-title">Patient appointment booking</span></p>
                                                    <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="activities.html">
                                            <div className="media d-flex">
                                                <span className="avatar flex-shrink-0">
                                                    <img alt="" src={avatar03} />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name
                                                        <span className="noti-title">Appointment booking with payment gateway</span></p>
                                                    <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="activities.html">
                                            <div className="media d-flex">
                                                <span className="avatar flex-shrink-0">
                                                    <img alt="" src={avatar06} />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span
                                                        className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span>
                                                        to project <span className="noti-title">Doctor available module</span></p>
                                                    <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="activities.html">
                                            <div className="media d-flex">
                                                <span className="avatar flex-shrink-0">
                                                    <img alt="" src={avatar17} />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span
                                                        className="noti-title">Patient and Doctor video conferencing</span></p>
                                                    <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="activities.html">
                                            <div className="media d-flex">
                                                <span className="avatar flex-shrink-0">
                                                    <img alt="" src={avatar13} />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span
                                                        className="noti-title">Private chat module</span></p>
                                                    <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <a href="activities.html">View all Notifications</a>
                            </div>
                        </div>
                    </li>


                    <li className="nav-item dropdown">
                        <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            <i className="fa fa-comment-o"></i> <span className="badge rounded-pill">8</span>
                        </a>
                        <div className="dropdown-menu notifications">
                            <div className="topnav-dropdown-header">
                                <span className="notification-title">Messages</span>
                                <a href="#" className="clear-noti"> Clear All </a>
                            </div>
                            <div className="noti-content">
                                <ul className="notification-list">
                                    <li className="notification-message">
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">
                                                        <img alt="" src={avatar09} />
                                                    </span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Richard Miles </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"></div>
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">
                                                        <img alt="" src={avatar02} />
                                                    </span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">John Doe</span>
                                                    <span className="message-time">6 Mar</span>
                                                    <div className="clearfix"></div>
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">
                                                        <img alt="" src={avatar03} />
                                                    </span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author"> Tarah Shropshire </span>
                                                    <span className="message-time">5 Mar</span>
                                                    <div className="clearfix"></div>
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">
                                                        <img alt="" src={avatar05} />
                                                    </span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Mike Litorus</span>
                                                    <span className="message-time">3 Mar</span>
                                                    <div className="clearfix"></div>
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">
                                                        <img alt="" src={avatar08} />
                                                    </span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author"> Catherine Manseau </span>
                                                    <span className="message-time">27 Feb</span>
                                                    <div className="clearfix"></div>
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <a href="chat.html">View all Messages</a>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item dropdown has-arrow main-drop">
                        <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            <span className="user-img"><img src={avatar21} alt="" />
                                <span className="status online"></span></span>
                            <span>Admin</span>
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="profile.html">My Profile</a>
                            <a className="dropdown-item" href="settings.html">Settings</a>
                            <a className="dropdown-item" href="index.html">Logout</a>
                        </div>
                    </li>
                </ul>


                <div className="dropdown mobile-user-menu">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i
                        className="fa fa-ellipsis-v"></i></a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="profile.html">My Profile</a>
                        <a className="dropdown-item" href="settings.html">Settings</a>
                        <a className="dropdown-item" href="index.html">Logout</a>
                    </div>
                </div>

            </div>
           
                <div className="sidebar" id="sidebar">
                    <div className="sidebar-inner slimscroll">
                        <div id="sidebar-menu" className="sidebar-menu">
                            <nav className="greedys sidebar-horizantal">
                                <ul className="list-inline-item list-unstyled links">
                                    <li className="menu-title">
                                        <span>Main</span>
                                    </li>
                                    <li>
                                        <Link to="/admin">
                                            <i className="la la-dashboard"></i> <span> Admin Dashboard</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/employee">
                                            <i className="la la-dashboard"></i> <span> Employee Dashboard</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/project">
                                            <i className="la la-rocket"></i> <span> Projects</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/milestone">
                                            <i className="la la-rocket"></i> <span> Milestone</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/task">
                                            <i className="la la-rocket"></i> <span> Tasks</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <ul className="sidebar-vertical">
                                <li className="menu-title">
                                    <span>Main</span>
                                </li>
                                <li>
                                    <Link to="/admin">
                                        <i className="la la-dashboard"></i> <span> Admin Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/employee">
                                        <i className="la la-dashboard"></i> <span> Employee Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/project">
                                        <i className="la la-rocket"></i> <span> Projects</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/milestone">
                                        <i className="la la-rocket"></i> <span> Milestone</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/task">
                                        <i className="la la-rocket"></i> <span> Tasks</span>
                                    </Link>
                                </li>
                            </ul>
                            <li>
                                <a onClick={handleLogout}>Logout</a>
                            </li>
                        </div>
                    </div>
                </div>
            
        </div>
    );
}

export default AdminNavbar;