import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"; // 引入自定义样式

// 定义 ArrowProps 类型
interface ArrowProps {
    onClick?: () => void;
}

// 自定义箭头组件
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

// 定义 CarouselRef 接口
export interface CarouselRef {
    slickPrev: () => void;
    slickNext: () => void;
}

// 使用 forwardRef 让 Carousel 可以被父组件控制
export const Carousel = forwardRef<CarouselRef>((_, ref) => {
    const sliderRef = useRef<Slider>(null);

    // 使用 useImperativeHandle 来暴露 slick 的方法给父组件
    useImperativeHandle(ref, () => ({
        slickPrev: () => sliderRef.current?.slickPrev(),
        slickNext: () => sliderRef.current?.slickNext(),
    }));

    // 图片列表
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

    // Slick 的设置
    const settings = {
        dots: false, // 不显示导航点
        infinite: true, // 无限循环
        speed: 500, // 切换速度
        slidesToShow: 4, // 一次显示3张图片
        slidesToScroll: 1, // 每次滚动1张图片
        centerMode: false, // 禁用居中模式，确保图片不显示一半
        arrows: false, // 隐藏默认箭头
        autoplay: true, // 自动轮播
        responsive: [
            {
                breakpoint: 1440, // 大屏幕
                settings: {
                    slidesToShow: 3, // 大屏幕上显示4张图片
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // 调整显示数量
                    slidesToScroll: 1, // 滑动1张图片
                    centerMode: false, // 禁用居中模式
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1, // 在小屏幕上显示1张图片
                    slidesToScroll: 1, // 滑动1张图片
                    centerMode: false, // 禁用居中模式
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
