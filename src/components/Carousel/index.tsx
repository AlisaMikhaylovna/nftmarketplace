import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

interface ArrowProps {
    onClick?: () => void;
}

export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
        <img src="/leftarrow.png" alt="Previous" />
    </div>
);

export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div className="custom-arrow next-arrow" onClick={onClick}>
        <img src="/rightarrow.png" alt="Next" />
    </div>
);

export interface CarouselRef {
    slickPrev: () => void;
    slickNext: () => void;
}

export const Carousel = forwardRef<CarouselRef>((_, ref) => {
    const sliderRef = useRef<Slider>(null);

    useImperativeHandle(ref, () => ({
        slickPrev: () => sliderRef.current?.slickPrev(),
        slickNext: () => sliderRef.current?.slickNext(),
    }));

    const images = [
        '/usaji.png',
        '/usaji.png',
        '/usaji.png',
        '/usaji.png',
        '/usaji.png',
        '/usaji.png',
        '/usaji.png',
        '/usaji.png',
        '/usaji.png',
        '/usaji.png'
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    };




    return (
        <div className="carousel-wrapper">
            <Slider ref={sliderRef} {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="image-container">
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="carousel-image"
                        />
                    </div>
                ))}
            </Slider>
        </div>

    );
});
