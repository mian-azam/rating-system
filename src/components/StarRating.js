import React, { useState } from 'react';
import Star from './Star';

function StarRating() {
    const [rating, setRating] = useState(0);
    const words = ['Terrible', 'Bad', 'Average', 'Good', 'Excellent'];

    const handleClick = (index) => {
        setRating(index + 1);
    };

    return (
        <div className='starDiv'>
            <div className='flexBox'>
                {Array.from({ length: 5 }, (_, index) => (
                    <Star
                        key={index}
                        filled={index < rating}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
            <div>
                <h2>{words[rating - 1]}</h2>
            </div>
        </div>
    );
};

export default StarRating;
