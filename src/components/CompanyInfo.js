// src/components/CompanyInfo.js
import React from 'react';

const CompanyInfo = () => {
    return (
        <div className="company-info">
            <img src="office.jpeg" alt="Background" />
            <h2>Welcome to My Plant Store</h2>
            <p>We offer a variety of unique houseplants for your home.</p>
            <a href="/products" className="get-started">Get Started</a>
        </div>
    );
};

export default CompanyInfo;
