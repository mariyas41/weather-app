// src/components/ProductCard.js
import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
    const [disabled, setDisabled] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setDisabled(true);
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={handleAddToCart} disabled={disabled}>
                {disabled ? 'Added to Cart' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductCard;
