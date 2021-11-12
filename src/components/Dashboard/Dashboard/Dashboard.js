import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='row main-body'>
            <div className='col-lg-3 col-sm-3 side-nav'>
                <h1>this is side bar</h1>
            </div>
            <div className='col-lg-9 col-sm-9'>
                <h1>This is content area</h1>
            </div>
        </div>
    );
};

export default Dashboard;