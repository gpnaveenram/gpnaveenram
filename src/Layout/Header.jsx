import React from 'react';
import styles from './Header.module.css';

const Header = () => {

    return (

        <header>
            <div style={{
                display: 'flex',
                backgroundColor: 'white',
                justifyContent: 'space-between',

            }}>
                <div style={{ margin: 10 }}><i style={{ color: '#4e73df' }} className="fa-solid fa-chart-line fa-3x"></i></div>

                <div className={styles.search}>
                    <input type="text"
                        className={styles.searchInput}
                        placeholder=' search...' />
                    <button className={styles.searchbtn}><i className={"fa-solid fa-magnifying-glass fa-beat"} style={{ color: 'white' }}></i></button>
                </div>

                <div>
                    <i class="fa-solid fa-user fa-2x" style={{
                        color: "#4e73df",
                        marginTop: 15,
                        margin: 15
                    }}></i>
                </div>

            </div>
        </header>
    );
}

export default Header;