import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsHome.css';

/* const products = [
    {
        "id": 1,
        "name": "Analog Watch",
        "description": "Simple to read with a classic feel, analog watches have an hour hand, a minute hand, and sometimes a second hand.",
        "img": "https://i.ibb.co/4fryjgQ/analog-watch.png",
        "price": 250
    },
    {
        "id": 2,
        "name": "Chronograph Watch",
        "description": "Chronograph watches’ popularity is driven by their eccentric styling and multi-faceted dial.",
        "img": "https://i.ibb.co/MfSmQQH/Chronograph-Watch.jpg",
        "price": 280
    },
    {
        "id": 3,
        "name": "Digital Watch",
        "description": "Digital watches made hour hands obsolete and instead flashes digits in the way of telling time.",
        "img": "https://i.ibb.co/6Pw7brx/digital-watch.jpg",
        "price": 200
    },
    {
        "id": 4,
        "name": "Pilots Watch",
        "description": "The crown of these watches is considerably bigger than other watches to facilitate easy reading.",
        "img": "https://i.ibb.co/gWGJTG1/Pilots-Watch.jpg",
        "price": 300
    },
    {
        "id": 5,
        "name": "Quartz Watches",
        "description": "One of the most common types of electric watches, quartz watches come in different varieties for you to choose from.",
        "img": "https://i.ibb.co/cwzK4ZM/Quartz-Watches.jpg",
        "price": 350
    },
    {
        "id": 6,
        "name": "Smart Watch",
        "description": "From recording your footsteps to sending an urgent message, these kinds of watches are extremely user-friendly.",
        "img": "https://i.ibb.co/P57zYc8/smart-watch.jpg",
        "price": 260
    },
    {
        "id": 7,
        "name": "Swiss Watches",
        "description": "With their metal gears and stronger materials used for other components, these kinds of watches will last you a lifetime or maybe more.",
        "img": "https://i.ibb.co/xzBT1vS/Swiss-Watches.jpg",
        "price": 500
    },
    {
        "id": 8,
        "name": "Table Watch",
        "description": "A table clock is a special watch type. Many of the early mechanical clocks hung on walls or were standing on wooden boxes in which the weights wound down.",
        "img": "https://i.ibb.co/tPbtJrf/Table-Watches.jpg",
        "price": 180
    },
    {
        "id": 9,
        "name": "Tactile Watches",
        "description": "These kinds of watches are to facilitate people who cannot see. Different methods are employed to make discerning time efficient.",
        "img": "https://i.ibb.co/qjg4mhc/Tactile-Watches.jpg",
        "price": 320
    },
    {
        "id": 10,
        "name": "Wall Hanging Watches",
        "description": "A wall clock is the ultimate accessory that offers the perfect touch to a bare wall, and you can easily substitute them for a painting or mirror.",
        "img": "https://i.ibb.co/WBNzdq6/wall-hanging-watch.jpg",
        "price": 150
    }
] */
const ProductsHome = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-ocean-25875.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container my-5 product-display'>
            <div className="row gx-4">
                {
                    products.map(product => <div
                        key={product._id}
                        className='col-md-4 mb-5  border'>
                        <div className="m-2">
                            <img className='img-fluid w-25' src={product.img} alt="" />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <h5>Price :${product.price}</h5>
                            <Link to={`/booking/${product._id}`}>
                                <button className='btn btn-danger'>Order Now</button>
                            </Link>
                        </div>
                    </div>).slice(0, 6)
                }
            </div>
        </div>
    );
};

export default ProductsHome;