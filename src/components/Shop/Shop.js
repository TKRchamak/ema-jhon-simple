import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const fastProduct10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(fastProduct10);
    const [buyProduct, setBuyProduct] = useState([])


    useEffect(() =>{
        const getProduct = getDatabaseCart();
        const productKey = Object.keys(getProduct);
        const selectProduct = productKey.map(pdKey => {
            const selectItem = fakeData.find(product => product.key === pdKey);
            selectItem.quantity = getProduct[pdKey];
            return selectItem;
        });
        console.log(selectProduct);
        setBuyProduct(selectProduct)
    }, [])

    const addEventHandeler =(product) => {
        const addProductKey = product.key;
        const sameProduct = buyProduct.find(pd => pd.key === addProductKey);
        let count = 1;
        let newProduct; 
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const otherProduct = buyProduct.filter(pd => pd.key !== addProductKey);
            console.log(otherProduct);
            newProduct = [...otherProduct, sameProduct];
            console.log(newProduct);
        }
        else{
            product.quantity = 1;
            newProduct = [...buyProduct, product]
        }
        setBuyProduct(newProduct);
        
        
        addToDatabaseCart(product.key, count)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product showAddToCart={true} product={pd} key={pd.key} addEventHandeler = {addEventHandeler} ></Product>)
                }
            </div>
            <div className="cardContainer">
                <Cart buyProduct = {buyProduct}>
                    <Link to="/Order"><button>Review Your Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;