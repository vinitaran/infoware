import React from 'react';
import './Subtotal.css';

const Subtotal = () => {
    return (
        <div className="subtotal">
            <div className="cart_total">
                <h2>Cart Total</h2>
                <span><h3>5.000 KWD</h3></span>
            </div>
            <div className="delivery_charges">
                <h2>Delivery Charges</h2>
                <span><h3>1.000 KWD</h3></span>
            </div>
            <div className="total">
                <h2>Total</h2>
                <span><h3>5.000 KWD</h3></span>
            </div>
        </div>
    )
}

export default Subtotal
