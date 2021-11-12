import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import regImg from '../../../img/registration.jpg';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <div className='container'>
            <div className='row login-style'>
                <div className='col-lg-6'>
                    <div className='shadow p-3 mb-5 bg-body rounded py-5'>
                        <h2 className='my-5'>Please Register</h2>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <input className='w-50' type="email" name="email" onChange={handleOnChange} id="" placeholder="Your Email" /><br />
                            <input className='my-3 w-50' type="password" name="password" onChange={handleOnChange} id="" placeholder="Password" /><br />
                            <input className='w-50' type="password" name="password2" onChange={handleOnChange} id="" placeholder="Retype-password" /><br />
                            <button type="submit" className='btn-warning w-50 px-5 py-2'>Register</button><br />
                            <NavLink to="/login">
                                <button type="button" style={{ textDecoration: "none" }} class="btn btn-link">Already Registered? Please Login</button>
                            </NavLink>
                        </form>}
                        {isLoading && <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>}
                        {user?.email && <div class="alert alert-success" role="alert">
                            User Created Successfully
                        </div>}
                        {authError && <div class="alert alert-danger" role="alert">
                            {authError}
                        </div>}
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img className='img-fluid' src={regImg} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Register;