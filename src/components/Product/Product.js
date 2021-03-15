import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // const image = props.product.img;
    // const name = props.product.name;
    const {img, name, price, key} = props.product;
    // console.log(key);
    return (
        <div className="productStyle">
            <div className="imageArea">
                <img src={img} alt="images"/>
            </div>
            <div className="detailArea">
                <h3>Product Name: <Link to={"/product/"+key}>{name}</Link></h3>
                <p>Price : ${price}</p>
                { props.showAddToCart === true && <button onClick= {() => props.addEventHandeler(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Card</button>}
            </div>
            
            
        </div>
    );
};

export default Product;