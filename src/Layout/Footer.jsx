import React from 'react';
import styles from './Footer.module.css';


function Footer() {
    return (
        <footer className={styles.footer}>
            <div style={{ margin: '0 auto' }} className='container-fluid'>
                <p>&copy; 2023 e-Shooping. All rights reserved.</p>
                <p>Contact: gpnaveenram@gmail.com</p>
            </div>
        </footer>
    );


}

export default Footer;
