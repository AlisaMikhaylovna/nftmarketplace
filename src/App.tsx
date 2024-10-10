import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { Button } from "antd";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <div>
          <ul>
            <li><Button>All</Button></li>
          </ul>
        </div>

      </div>
      <div style={{ height: '2000px', padding: '20px' }}>
        <h1>欢迎来到首页</h1>
        <p>这里是一些内容...</p>
        {/* 更多内容 */}
      </div>
    </div>
  );
}

export default App;
