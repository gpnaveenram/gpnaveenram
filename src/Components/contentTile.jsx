import React from 'react';

const ContentTile = () => {
    return (
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="image"></img>
            </div>
            <p>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
            <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                unDraw →</a>
        </div>
    );
};

export default ContentTile;
