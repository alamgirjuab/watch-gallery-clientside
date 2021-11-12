import React from 'react';
import './TopBanner.css';
import bannerImg from '../../../img/banner.png';

const TopBanner = () => {
    return (
        <div>
            <div className='banner'>
                <div className='container'>
                    <div className='row text-white'>
                        <div className='col-lg-6 banner-left'>
                            <h1 className='custom-font'>Lifestyle</h1>
                            <h1 className='custom-font'>Smart <span className='custom-color'>Watch</span></h1>
                            <h4 className=''>TECHNOLOGY OF THE FUTURE</h4>
                            <p>Define your style as classy and refined as you pick up distinctive types of watches for different events</p>
                            <button className='btn btn-danger'>Explore More</button>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 ps-5 my-5'>
                            <img className='img-fluid w-100' src={bannerImg} alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default TopBanner;