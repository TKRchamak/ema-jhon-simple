import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
    const fastProduct10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(fastProduct10);
    const [buyProduct, setBuyProduct] = useState([])
    const addEventHandeler =(product) => {
        const totalCart = [...buyProduct, product];
        setBuyProduct(totalCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product product={pd} key={pd.key} addEventHandeler = {addEventHandeler}></Product>)
                }
            </div>
            <div className="cardContainer">
                <Cart buyProduct = {buyProduct}></Cart>
            </div>
        </div>
    );
};

export default Shop;