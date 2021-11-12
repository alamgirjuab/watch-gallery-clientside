import React from 'react';
import './Footer.css';
import logo from '../../../img/footerLogo.png';

const Footer = () => {
    return (
        <div className='footer-area pt-5'>
            <div className='container'>
                <div className='row text-white'>
                    <div className='col-lg-4'>
                        <img src={logo} alt="" />
                        <p>watches are an expression of your personality and style</p>

                    </div>
                    <div className='col-lg-4'>
                        <div className='link'>
                            <h2>Best Experience</h2>
                            <a href="#">FAQPolicies</a>
                            <a href="#">Shipment</a>
                            <a href="#">Returns</a>
                            <a href="#">Gift cards</a>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='link'>
                            <h2>Our Company</h2>
                            <a href="#">About us</a>
                            <a href="#">Press</a>
                            <a href="#">Returns</a>
                            <a href="#">Affiliates</a>
                        </div>
                    </div>
                </div>
                <div className='py-5 text-white'>
                    <small>Copyright © 2021 || Watch Gallery</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;