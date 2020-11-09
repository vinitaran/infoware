import React from 'react';
import './CartProduct.css';
import Checkout from './Checkout';
import ExtraNote from './ExtraNote';
import Product from './Product';
import Subtotal from './Subtotal';

const CartProduct = () => {
    return (
        <div className='cartProduct'>
            <Product />
            <ExtraNote />
            <Subtotal />
            <Checkout />
        </div>
    )
}

export default CartProduct
