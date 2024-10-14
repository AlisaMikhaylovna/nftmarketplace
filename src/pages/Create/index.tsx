
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavBar } from "../../components/NavBar";
import "./index.css";

const images = [
    "/usaji.png",
    "/haji.png",
    "/chii.png"
];

const Create = () => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div>
            <NavBar isScrolled={true} />
            <div className="create-page">
                <img src="/back.png" alt="back" className="back" onClick={() => navigate("/")} />
                <div className="create-container">
                    <div className="create-left">
                        <span className="create-title">Create</span>
                        <div className="create-collection">
                            <div className="create-collection-left">
                                <div className="create-collection-top">
                                    <img src="/more.png" alt="more" className="more" />
                                    <span className="create-sub-title">Collection or item</span>
                                </div>
                                <div className="description">
                                    Create a new NFT collection or add an NFT to an existing
                                    one. Your items will display immediately. List for sale
                                    when you're ready.
                                </div>
                            </div>
                            <img src="/next.png" alt="next" className="next" onClick={() => navigate("/mint")} />
                        </div>
                    </div>
                    <div className="create-right" onClick={handleImageClick}>
                        <img src={images[currentImageIndex]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
