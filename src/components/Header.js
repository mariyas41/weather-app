// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
    return (
        <header>
            <h1>My Plant Store</h1>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart ({cartCount})</Link>
        </header>
    );
};

export default Header;
