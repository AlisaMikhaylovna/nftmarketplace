import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'; // 自定义样式

// 定义箭头的 props 类型
interface ArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>; // 设置 onClick 的类型
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
        <img src="/rightarrow.png" />
    </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
        <img src='leftarrow.png' />
    </div>
);

export const Carousel: React.FC = () => {
    const images = [
        "/usaji.png",
        "/usaji.png",
        "/usaji.png",
        "/usaji.png",
        "/usaji.png",
        "/usaji.png",
        "/usaji.png",
        "/usaji.png",
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div className="carousel-slide" key={index}>
                        <img src={src} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

