import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../img/LOGO.png';

const Header = () => {
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
                        <NavLink className='link' to="/about">About Us</NavLink>
                        <NavLink className='link' to="/offers">Offers</NavLink>
                        <NavLink className='link' to="/contact">Contact Us</NavLink>

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
                        }
                        {user?.email ?
                            <Button className="me-3" onClick={logOut} variant="light">Logout</Button> :
                            <NavLink className='link' to="/login">Login</NavLink>
                        } */}

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