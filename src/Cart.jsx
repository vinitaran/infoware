import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Cart.css';
import CartProduct from './CartProduct';

const Cart = () => {
    return (
        <div className="cart">
            <ArrowBackIosIcon className="backArrow" />
            <CartProduct />
        </div>
    )
}

export default Cart
