import React from 'react';
import styles from './Header.module.css';


function Header({ cartCount }) {
    return (
        <div className={styles.header}>
            <img style={{
                display: 'contain',
                height: 40,
                margin: 16
            }} src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Amazon-512.png" alt="logo"></img>
            <div className={styles.headerTitle}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e-Shopping
            </div>
            <button className={styles.cart}>
                &nbsp;<i className="fa-solid fa-cart-shopping fa-2x"></i>&nbsp;
                My Cart&nbsp;({cartCount})</button>
        </div>
    );

}

export default Header;
