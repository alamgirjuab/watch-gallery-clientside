import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-ocean-25875.herokuapp.com/products')
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
                        <Link to={`/booking/${product._id}`}>
                            <button className='btn btn-danger'>Order Now</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;