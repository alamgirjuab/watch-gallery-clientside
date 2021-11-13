import React from 'react';
import img1 from '../../../img/Light Pink-600x716.jpg';
import img2 from '../../../img/Mint Green-600x716.jpg';
import img3 from '../../../img/Pink Lemonade-600x716.jpg';
import img4 from '../../../img/Purple Berry-600x716.jpg';
import img5 from '../../../img/Sky Blue-600x716.jpg';
import img6 from '../../../img/Snow White-600x716.jpg';
import './GalleryHome.css';

const GalleryHome = () => {
    return (
        <div>
            <h2 className='text-primary mb-5'>Gallery</h2>
            <div className='container bottom-image mb-5'>
                <div className='image'>
                    <img className='img-fluid' src={img1} alt="" />
                </div>
                <div className='image'>
                    <img className='img-fluid' src={img2} alt="" />
                </div>
                <div className='image'>
                    <img className='img-fluid' src={img3} alt="" />
                </div>
                <div className='image'>
                    <img className='img-fluid' src={img4} alt="" />
                </div>
                <div className='image'>
                    <img className='img-fluid' src={img5} alt="" />
                </div>
                <div className='image'>
                    <img className='img-fluid' src={img6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default GalleryHome;