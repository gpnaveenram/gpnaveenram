import React, { useState } from 'react';
import styles from './Product.module.css';
import ProductRatingScale from '../Rating/Rating';



const Product = ({ productName, price, img, addItemstoCart, removeItemsfromCart }) => {
    const [addtoCart, addedtoCart] = useState(false);

    const cartAction = () => {
        if (addtoCart) {
            addedtoCart(false);
            removeItemsfromCart(productName);
        } else {
            addedtoCart(true);
            addItemstoCart(productName);
        }
    }

    return (
        <div className={styles.container}>
            <img className={styles.productImage}
                src={img}
                alt='product'>
            </img>
            <h2 style={{ margin: 0 }}>{productName}</h2>
            <ProductRatingScale />
            <h3>{price}</h3>
            <button className={styles.addtoCart} onClick={cartAction}>{addtoCart ? 'Remove' : 'Add to Cart'}</button>
        </div>
    );

}

export default Product;
