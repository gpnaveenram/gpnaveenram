import React from 'react';
import styles from './Content.module.css';
import Product from '../Components/Products/product';
import productDetails from './products.json';

function Content({ addItemstoCart, removeItemsfromCart }) {
    return (
        <div style={{ margin: 0 }}>
            <h2 style={{ margin: 0 }}>Products</h2>
            <div className={styles.container}>
                {productDetails.map(productdetail => (
                    <Product
                        productName={productdetail.ProductName}
                        price={productdetail.price}
                        img={productdetail.img}
                        addItemstoCart={addItemstoCart}
                        removeItemsfromCart={removeItemsfromCart}
                    />
                ))
                }
            </div>
        </div>
    );

}

export default Content;
