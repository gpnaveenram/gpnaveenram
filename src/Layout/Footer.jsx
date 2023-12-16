import React from 'react';

const Footer = () => {

    return (

        <footer style={{ justifyItems: 'center' }}>
            <div style={{
                display: 'container-fluid',
                backgroundColor: 'white',
                height: 80
            }}>
                <br></br>
                <br></br>
                <div>
                    <p style={{
                        color: '#858796',
                        margin: 0
                    }}> &copy; &nbsp; All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;