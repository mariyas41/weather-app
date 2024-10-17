import React from 'react';
import '../ShoppingCart.css'; // Create a CSS file for styling

const ShoppingCart = ({ cartItems, addToCart, removeFromCart, updateItemQuantity }) => {
    const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="shopping-cart">
            <h2>Your Shopping Cart</h2>
            <p>Total Plants: {totalItems}</p>
            <p>Total Cost: ${totalCost.toFixed(2)}</p>

            <button className="checkout-button">Checkout (Coming Soon)</button>
            <Link to="/products" className="continue-shopping-button">Continue Shopping</Link>

            <div className="cart-items">
                {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={process.env.PUBLIC_URL + '/' + item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>Increase</button>
                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>Decrease</button>
                        <button onClick={() => removeFromCart(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoppingCart;
