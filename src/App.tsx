import { useEffect, useRef, useState } from "react";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { TopButton } from "./components/TopButton";
import { Carousel, PrevArrow, NextArrow, CarouselRef } from "./components/Carousel"; // 导入 CarouselRef
import { Category } from "./components/Category";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeButton, setActiveButton] = useState<string>("All");

  // 使用 CarouselRef 类型
  const carouselRef = useRef<CarouselRef>(null);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="topbar">
        <NavBar isScrolled={isScrolled} />
        <div className="top-button-container">
          <TopButton label="All" isActive={activeButton === "All"} setActive={setActiveButton} />
          <TopButton label="Art" isActive={activeButton === "Art"} setActive={setActiveButton} />
          <TopButton label="Gaming" isActive={activeButton === "Gaming"} setActive={setActiveButton} />
          <TopButton label="Photography" isActive={activeButton === "Photography"} setActive={setActiveButton} />
          <TopButton label="Music" isActive={activeButton === "Music"} setActive={setActiveButton} />
        </div>
        <div className="top-carousel">
          <PrevArrow onClick={() => carouselRef.current?.slickPrev()} />
          <Carousel ref={carouselRef} /> {/* 将 ref 传递给 Carousel */}
          <NextArrow onClick={() => carouselRef.current?.slickNext()} />
        </div>
      </div>
      <div className="category">
        <Category title={"Trending in Art"} />
      </div>
    </div>
  );
}

export default App;
