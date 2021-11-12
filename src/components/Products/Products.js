import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Header />
            <div className='container product-display my-5'>
                {
                    products.map(product => <div
                        key={product._id}
                        className="single-product"
                    >
                        <img className='img-fluid' src={product.img} alt="" />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <h5>Price: $ {product.price}</h5>
                        <button className='btn btn-danger'>Order Now</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;