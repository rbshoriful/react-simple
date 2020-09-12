import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    return (
        <div className="review-item">
            <h2>{name}</h2>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className="main-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;