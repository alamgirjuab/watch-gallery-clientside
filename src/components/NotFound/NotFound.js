import React from 'react';
import notFound from '../../../src/img/404.png';

const NotFound = () => {
    return (
        <div className='container'>
            <img className='img-fluid my-5' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;