import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../img/LOGO.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar className="py-4" bg="info" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <NavLink to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className='link' to="/home">Home</NavLink>
                        <NavLink className='link' to="/about">About us</NavLink>
                        <NavLink className='link' to="/products">Products</NavLink>
                        <NavLink className='link' to="/contact">Contact us</NavLink>
                        {/* <NavLink className='link' to="/login">
                            <NavLink className='link' to="/login">Login</NavLink>
                        </NavLink> */}

                        {/*-------------------------- 
                          | Conditional menu option |
                          -------------------------*/}
                        {/*  {user?.email ?
                            <NavLink className='link' to="/myOrders">My Orders</NavLink> :
                            <NavLink className='link' to="/"></NavLink>
                        }
                        {user?.email ?
                            <NavLink className='link' to="/addService">Add a new service</NavLink> :
                            <NavLink className='link' to="/"></NavLink>
                        }
                        {user?.email ?
                            <NavLink className='link' to="/manageOrders">Manage all orders</NavLink> :
                            <NavLink className='link' to="/"></NavLink>
                        }*/}
                        {user?.email ?
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <NavLink className='link' to="/dashboard">Dashboard</NavLink>
                                {/* <Link className='btn btn-warning' onClick={logout}>Logout</Link> */}
                                <Button className="me-3" onClick={logout} variant="light">Logout</Button>
                            </div>
                            :
                            <NavLink className='link' to="/login">Login</NavLink>
                        }

                        <Navbar.Text>
                            {/* <a href="#login">{user?.displayName}</a> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;