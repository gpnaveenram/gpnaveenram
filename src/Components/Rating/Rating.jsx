import React, { useState } from 'react';

const ProductRatingScale = () => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <div>
            <div>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        onClick={() => handleStarClick(star)}
                        style={{
                            cursor: 'pointer',
                            color: star <= rating ? 'gold' : 'gray',
                        }}
                    >
                        &#9733;
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProductRatingScale;