import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../../AddProduct/AddProduct';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import './Dashboard.css';

const Dashboard = () => {
    const { user, logout } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div className='row main-body'>
            <div className='col-lg-3 col-sm-3 side-nav'>
                <h1>this is side bar</h1>

                <Link className='link' to={`${url}/addProducts`}>Add Products</Link>
                <Link className='link' to="/manageProducts">Manage Products</Link>
                <Link className='link' to="/manageOrders">Manage All Orders</Link>
                <Link className='link' to={`${url}/makeAdmin`}>Make Admin</Link>
                <Link className='link' to="/payment">Payments</Link>
                <Link className='link' to="/myOrders">My Orders</Link>
                <Link className='link' to="/review">Review</Link>
                <Button className="me-3" onClick={logout} variant="light">Logout</Button>
            </div>
            <div className='col-lg-9 col-sm-9'>
                <h1>This is content area</h1>
                <Switch>
                    <Route exact path={`${path}/addProducts`}>
                        <AddProduct />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;