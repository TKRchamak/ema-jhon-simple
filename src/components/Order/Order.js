import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import OrderdItem from '../OrderdItem/OrderdItem';
import { Link } from 'react-router-dom';
import happyImages from '../../images/giphy.gif'

const Order = () => {
    const [cart, setCart] = useState([]);
    const [placeOrder, setPlaceOrder] = useState(false)

    const removeOrderItem = (removeOrderItemKey) => {
        const newCart = cart.filter(pd => pd.key !== removeOrderItemKey);
        setCart(newCart);
        removeFromDatabaseCart(removeOrderItemKey);
    }
    useEffect(() => {
        //cart
        const getProduct = getDatabaseCart();
        const productKey = Object.keys(getProduct);
        // console.log(getProduct[productKey]); //this is mean that "getProduct is an object" and "productKey is a property of this object", so in this [] this is use for take value.
        const product  = productKey.map(key => {
            const pd = fakeData.find(pd => pd.key === key);
            pd.quantity = getProduct[key]
            return pd;
        })
        setCart(product);
    }, []);

    let images;
    if (placeOrder) {
        images = <img src={happyImages} alt=""/>
    }
    const handleOrderPlace = () =>{
        console.log('clear all and take order');
        setCart([]);
        setPlaceOrder(true);
        processOrder();
    }

    return (
        <div className="shop-container">
            <div className="product-container">
            {
                cart.map(pd => <OrderdItem removeOrderItem={removeOrderItem} product ={pd} key = {pd.key}></OrderdItem>)
            }
            {images}
            </div>
            <div className="cardContainer">
                <Cart buyProduct={cart}>
                    <Link onClick={handleOrderPlace} to="/Order"><button>Order Place</button></Link>
                </Cart>
            </div>
        </div>
        
    );
};

export default Order;