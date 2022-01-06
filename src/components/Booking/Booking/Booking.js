import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const Booking = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://enigmatic-ocean-25875.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div>
            {/* <h2>Your purchase ID is: {productId}</h2>
            <h2>Product Name: {product.name}</h2> */}

            <div className="container my-5">
                <h2 className="text-primary mb-4">Order Your Products</h2>
                <div className="shadow-lg p-3 mb-5 pb-5 bg-body rounded text-center">
                    <h2 className="my-4">Booking ID: {productId}</h2>
                    <img className="rounded mb-4" src={product.img} alt="" />
                    <h2 className="mb-4">{product.name}</h2>
                    <p className="w-50 mx-auto mb-4">{product.description}</p>
                    <NavLink className='btn-success px-3 py-2 rounded-pill mb-4 text-decoration-none' to="/home">Go Home</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Booking;