import React from 'react';

import './cart.css'

const Cart = (props) => {
    const buyProduct = props.buyProduct;

    let total = 0;
    for (let i = 0; i < buyProduct.length; i++) {
        const element = buyProduct[i];
        total = total + element.price * element.quantity;
    }


    let shipping = 0;
    if (total> 50) {
        shipping = 15;
    }
    else if(total> 30){
        shipping = 20;
    }
    else if(total >0 || total === 19){
        shipping = 25;
    }
    const tax = total/10;
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Product Ordered : {buyProduct.length}</h4>
            <p>Total Product Price : ${total}</p>
            <p>Shipping and Handling : ${shipping}</p>
            <p><small>Total Before Tax: ${total + shipping}</small></p>
            <p>VAT, Tax: ${tax}</p>
            <h4>Order Total : ${total + shipping + tax}</h4>
            <br/>
            {props.children}
        </div>
    );
};

export default Cart;