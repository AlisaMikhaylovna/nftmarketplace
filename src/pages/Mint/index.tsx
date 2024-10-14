import { NavBar } from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import "./index.css"

const Mint = () => {

    const navigate = useNavigate();

    return (
        <div>
            <NavBar isScrolled={true} />
            <div className="mint-container">
                <div className="mint-top">
                    <img src="/back.png" alt="back" className="mint-back" onClick={() => navigate("/create")} />
                    <span className="mint-title">Create an NFT</span>
                    <span className="mint-description">Once your item is minted you will not be able to change any of
                        its information.</span>
                </div>
                <div className="mint-bottom">
                    <div className="mint-left">

                    </div>
                    <div className="mint-right">
                        
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Mint;