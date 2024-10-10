import { Login } from "../Login";
import { UserButton } from "../UserButton";
import "./index.css";

interface NavBarProps {
    isScrolled?: boolean;
}

export const NavBar = ({ isScrolled }: NavBarProps) => {
    return (
        <div className={`top ${isScrolled ? '' : 'transparent'}`}>
            <div className="nav">
                <img className="logo" src="/NFTlogo.png" alt="Logo" />
                <span className="title">TuringNFT</span>
                <a href="">Drops</a>
                <a href="">Stats</a>
                <a href="">Create</a>
            </div>
            <div className="search-container">
                <img src="/search.png" className="search-logo" alt="Search" />
                <span className="search-text">Search</span>
            </div>
            <Login />
            <UserButton />
        </div>
    );
};
