import React from 'react';

const SubscriptionHome = () => {
    return (
        <div className='container my-5'>
            <div className='bg-info p-5 rounded'>
                <h1 className='m-5'>Subscribe To Our Newsletter <br /> For Latest Update</h1>
                <input className='py-3 px-4 w-50' type="text" name="email" id="" placeholder="e-mail" />
                <button className='btn-warning py-3 px-4' type="submit">Subsribe Now</button>
            </div>
        </div>
    );
};

export default SubscriptionHome;