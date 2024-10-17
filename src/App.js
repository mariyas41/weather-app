// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css'
import Header from './components/Header';
import CompanyInfo from './components/CompanyInfo';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingList';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (

// Inside your component
<Router>
    <Header cartCount={cartItems.length} />
    <Routes>
        <Route path="/" element={<CompanyInfo />} />
        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<ShoppingCart cartItems={cartItems} />} />
    </Routes>
</Router>

    );
};

export default App;

