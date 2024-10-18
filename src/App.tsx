import { useEffect, useRef, useState } from "react";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { TopButton } from "./components/TopButton";
import { Carousel, PrevArrow, NextArrow, CarouselRef } from "./components/Carousel";
import { Category } from "./components/Category";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeButton, setActiveButton] = useState<string>("All");

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
          <TopButton label="PFPs" isActive={activeButton === "PFPs"} setActive={setActiveButton} />
          <TopButton label="Photography" isActive={activeButton === "Photography"} setActive={setActiveButton} />
          <TopButton label="Music" isActive={activeButton === "Music"} setActive={setActiveButton} />
        </div>
        <div className="top-carousel">
          <PrevArrow onClick={() => carouselRef.current?.slickPrev()} />
          <Carousel ref={carouselRef} />
          <NextArrow onClick={() => carouselRef.current?.slickNext()} />
        </div>
      </div>
      <div className="category">
        <Category title={"Trending in Art"} />
        <Category title={"Trending in Gaming"} />
        <Category title={"Trending in PFPs"} />
        <Category title={"Trending in Photography"} />
        <Category title={"Trending in Music"} />
      </div>
      <div className="footer">
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
