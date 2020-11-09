import React from 'react';
import './Product.css';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Product = () => {
    return (
        <div className='product'>
                <div className="product_image">
                    <img src="https://media.istockphoto.com/photos/turkey-sandwich-picture-id157431311?k=6&m=157431311&s=612x612&w=0&h=AHxozU3EVhaym-0rJhg00sY4_L2UQl8MNUalaQjfIGY=" alt="" />
                </div>
                <div className="product_info">
                    <div className="product_title">
                        <p>Chicken Sandwich</p>
                    </div>
                    <div className="product_details">
                        <div className="product_calorie">
                            <WhatshotIcon className="calorie"/>
                            <p>1506 Calories</p>
                        </div>
                        <h3>1.500 KWD</h3>
                    </div>
                    <div className="product_count">
                        <div className="counter">
                            <RemoveIcon className="remove_icon"/>
                            <div className="count_div">
                                <span className="count">1</span>
                            </div>
                            <AddIcon className="add_icon"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Product
