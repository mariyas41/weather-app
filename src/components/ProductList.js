// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCart';

const products = [
    { id: 1, name: 'Plant 1', price: 10, image:'plant.jpeg' },
    { id: 2, name: 'Plant 2', price: 15, image: 'plant2.jpeg' },
    { id: 3, name: 'Plant 3', price: 20, image: 'plan3.jpeg' },
    { id: 4, name: 'Plant 4', price: 25, image: 'plant4.jpeg' },
    { id: 5, name: 'Plant 5', price: 30, image: 'plant.jpeg' },
    { id: 6, name: 'Plant 6', price: 35, image: 'path/to/image6.jpg' },
];

const ProductList = ({ addToCart }) => {
    return (
        <div className="product-list">
            <h2>Available Plants</h2>
            <div className="products">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
