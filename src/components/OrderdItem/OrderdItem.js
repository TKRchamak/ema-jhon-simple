import React from 'react';
import './OrderdItem.css';

const OrderdItem = (props) => {


    const {name,quantity, key, price} = props.product;
    return (
        <div className="itemStyle">
            <h2>name: {name}</h2>
            <h4>Quantity : {quantity}</h4>
            <h4>price :{price}</h4>
            <button onClick={() => props.removeOrderItem(key)}>Remove</button>
        </div>
    );
};

export default OrderdItem;