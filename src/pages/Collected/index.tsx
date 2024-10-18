import { useState } from "react";
import "./index.css";

const Collected = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const [priceExpanded, setPriceExpanded] = useState(false);

    const data = [{ collection: "Chii", value: 3 }, { collection: "Kawa", value: 5 }];

    return (
        <div>
            <div className="collected-sidebar">
                <div className="collected-header" onClick={() => setIsExpanded(!isExpanded)}>
                    <span className="collected-title">Collections</span>
                    <img src={isExpanded ? "/up.png" : "/down.png"} />
                </div>
                {isExpanded && (
                    <>
                        <div className="collected-search">
                            <span>search</span>
                        </div>
                        <table className="collected-table">
                            <thead>
                                <tr>
                                    <th className="collected-table-header">Collection</th>
                                    <th className="collected-table-header">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? (
                                    data.map((item, index) => (
                                        <tr key={index}>
                                            <td style={{ padding: '8px', border: 'none' }}>{item.collection}</td>
                                            <td style={{ padding: '8px', border: 'none' }}>{item.value}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={2} style={{ padding: '8px', textAlign: 'center', border: 'none' }}>
                                            No data available
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </>)}
                <div className="price-search">
                    <div onClick={() => setPriceExpanded(!priceExpanded)}>
                        <span>Price</span>
                        <img src={priceExpanded ? "/up.png" : "/down.png"} />
                    </div>
                    {priceExpanded && (<>
                        <select className="price-select" defaultValue={"USD"}>
                            <option value="USD" className="price-option">USD</option>
                            <option value="TBC" className="price-option">TBC</option>
                        </select>
                        <div className="price-form">
                            <input className="price-input" placeholder="Min" />
                            <span style={{ fontWeight: "400", fontSize: "16px", color: "#1A1A1A", marginLeft: "14px", marginRight: "14px" }}>to</span>
                            <input className="price-input" placeholder="Max" />
                        </div>
                        <button className="price-button">Apply</button>
                    </>)}
                </div>


            </div>
        </div>
    );
};

export default Collected;
