import React from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../../AddProduct/AddProduct';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import ManageOrders from '../../ManageOrders/ManageOrders';
import ManageProducts from '../../ManageProducts/ManageProducts';
import MyOrders from '../../MyOrders/MyOrders';
import Payment from '../../Payment/Payment';
import Review from '../../Review/Review';
import './Dashboard.css';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { logout, admin } = useAuth();
    return (
        <div className='row main-body'>
            <div className='col-lg-3 col-sm-3 side-nav'>

                <Link className='link' to={`${url}/addProducts`}>Add Products</Link>
                <Link className='link' to={`${url}/manageProducts`}>Manage Products</Link>
                <Link className='link' to={`${url}/manageOrders`}>Manage All Orders</Link>
                <Link className='link' to={`${url}/makeAdmin`}>Make Admin</Link>
                <Link className='link' to={`${url}/payment`}>Payments</Link>
                {admin && <div>
                    <Link className='link' to={`${url}/myOrders`}>My Orders</Link>
                    <Link className='link' to={`${url}/review`}>Review</Link>
                </div>}
                <Button className="me-3" onClick={logout} variant="light">Logout</Button>
            </div>
            <div className='col-lg-9 col-sm-9'>
                <div className='dashboard-header'>
                    <h1>DASHBOARD</h1>
                </div>
                <Switch>
                    <Route exact path={`${path}/addProducts`}>
                        <AddProduct />
                    </Route>
                    <Route exact path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </Route>
                    <Route exact path={`${path}/manageOrders`}>
                        <ManageOrders />
                    </Route>
                    <Route exact path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;