import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Dashboard.css';

const Dashboard = () => {
    const { user, logout } = useAuth();
    return (
        <div className='row main-body'>
            <div className='col-lg-3 col-sm-3 side-nav'>
                <h1>this is side bar</h1>

                <NavLink className='link' to="/addProducts">Add Products</NavLink>
                <NavLink className='link' to="/manageProducts">Manage Products</NavLink>
                <NavLink className='link' to="/manageOrders">Manage All Orders</NavLink>
                <NavLink className='link' to="/makeAdmin">Make Admin</NavLink>
                <NavLink className='link' to="/payment">Payments</NavLink>
                <NavLink className='link' to="/myOrders">My Orders</NavLink>
                <NavLink className='link' to="/review">Review</NavLink>
                <Button className="me-3" onClick={logout} variant="light">Logout</Button>
            </div>
            <div className='col-lg-9 col-sm-9'>
                <h1>This is content area</h1>
            </div>
        </div>
    );
};

export default Dashboard;