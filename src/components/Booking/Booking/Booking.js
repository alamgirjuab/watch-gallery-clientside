import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div>
            <h2>Your purchase ID is: {productId}</h2>
            <h2>Product Name: {product.name}</h2>

        </div>
    );
};

export default Booking;