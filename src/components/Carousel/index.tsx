import React, { useState } from 'react';
import './index.css'; // 自定义样式

export const Carousel: React.FC = () => {
    const images = [
        '/usaji.png',
        '/search.png',
        '/usaji.png',
        '/usaji.png',
        '/usaji.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel-container">
            <div className="arrow left" onClick={prevSlide}>
                <img src="/leftarrow.png" alt="Previous" />
            </div>
            <div className="carousel-slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <div className="arrow right" onClick={nextSlide}>
                <img src="/rightarrow.png" alt="Next" />
            </div>
        </div>
    );
};
