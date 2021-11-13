import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-ocean-25875.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const url = `https://enigmatic-ocean-25875.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            })
    }
    return (
        <div>
            <h1>Manage Products</h1>
            {
                products.map(product => <div
                    key={product._id}
                >
                    <h2>{product.name}</h2>
                    <button onClick={() => handleDelete(product._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;