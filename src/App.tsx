import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { TopButton } from "./components/TopButton";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeButton, setActiveButton] = useState<string>("All");

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
      </div>
    </div>
  );
}

export default App;
