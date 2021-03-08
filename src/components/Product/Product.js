import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './product.css'

const Product = (props) => {
    // const image = props.product.img;
    // const name = props.product.name;
    const {img, name, price} = props.product;
    return (
        <div className="productStyle">
            <div className="imageArea">
                <img src={img} alt="images"/>
            </div>
            <div className="detailArea">
                <h3>Product Name: {name}</h3>
                <p>Price : ${price}</p>
                <button onClick= {() => props.addEventHandeler(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>
            </div>
            
            
        </div>
    );
};

export default Product;