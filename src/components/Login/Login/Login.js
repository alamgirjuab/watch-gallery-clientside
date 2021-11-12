import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../img/login-form-img.png';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div className='container'>
            <div className='row login-style'>
                <div className='col-lg-6'>
                    <div className='shadow p-3 mb-5 bg-body rounded py-5'>
                        <h2 className='my-5'>Please Login</h2>
                        <form onSubmit={handleLoginSubmit}>
                            <input className='w-50' type="email" name="email" onBlur={handleOnChange} id="" placeholder="Your Email" /><br />
                            <input className='my-3 w-50' type="password" name="password" onBlur={handleOnChange} id="" placeholder="Password" /><br />
                            <button type="submit" className='btn-warning w-50 px-5 py-2'>Login</button><br />
                            <NavLink to="/register">
                                <button type="button" style={{ textDecoration: "none" }} class="btn btn-link">New User? Please Register</button>
                            </NavLink>

                            {isLoading && <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>}
                            {user?.email && <div class="alert alert-success" role="alert">
                                User Login Successfully
                            </div>}
                            {authError && <div class="alert alert-danger" role="alert">
                                {authError}
                            </div>}

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