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
                        <span className="mint-sub-title" >Collectioin *</span>
                        <div className="create-mint">
                            <img src="/plus.png" alt="add" className="plus-icon" />
                            <span className="mint-text">Create a new Collection</span>
                        </div>
                        <div>
                            <span className="mint-sub-title" >Name *</span>
                            <input type="text" className="mint-input" placeholder="Name your NFT" required />
                            <span className="mint-sub-title">Supply *</span>
                            <input type="text" className="mint-input" autoComplete="true" required value={1} />
                            <span className="mint-sub-title">Description</span>
                            <textarea className="mint-input mint-input-description" />
                            <span className="mint-sub-title">External link</span>
                            <input type="text" className="mint-input" placeholder="https://collection.io/item/123" />
                            <span className="mint-sub-title">Traits</span>
                            <span className="mint-trait">
                                Traits describe attributes of your item. They appear as filters inside your collection page and are also listed out inside your item page.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mint;