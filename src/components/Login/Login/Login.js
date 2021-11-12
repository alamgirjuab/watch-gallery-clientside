import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import loginImg from '../../../img/login-form-img.png';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        alert('hello')
        e.preventDefault();
    }
    return (
        <div className='container'>
            <div className='row login-style'>
                <div className='col-lg-6'>
                    <div className='shadow p-3 mb-5 bg-body rounded py-5'>
                        <h2 className='my-5'>Please Login</h2>
                        <form onSubmit={handleLoginSubmit}>
                            <input className='w-50' type="text" name="email" onChange={handleOnChange} id="" placeholder="Your Email" /><br />
                            <input className='my-3 w-50' type="password" name="password" onChange={handleOnChange} id="" placeholder="Password" /><br />
                            <button type="submit" className='btn-warning w-50 px-5 py-2'>Login</button><br />
                            <NavLink to="/register">
                                <button type="button" style={{ textDecoration: "none" }} class="btn btn-link">New User? Please Register</button>
                            </NavLink>
                        </form>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img className='img-fluid' src={loginImg} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Login;