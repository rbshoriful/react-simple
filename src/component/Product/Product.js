import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
     console.log(props.product);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><span>by: {seller}</span></p>
                <p>${price}</p>
                <p>Only {stock} left in stock - Order soon</p>
                <button className="main-btn"
                    onClick={ () => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;