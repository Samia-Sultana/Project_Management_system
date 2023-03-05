import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AdminDashboard = ({ user, handleLogout }) => {
    return (

        <div className="main-wrapper">
            <AdminNavbar user={user} handleLogout={handleLogout}></AdminNavbar>
            



        </div>



    );
}

export default AdminDashboard;