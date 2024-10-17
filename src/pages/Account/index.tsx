import { NavLink, Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import "./index.css"

const Account = () => {
    return (
        <div>
            <NavBar isScrolled={true} />
            <div className="account-container">
                <img src="/circle.png" />
                <span className="account-name">Unnamed</span>
                <div className="account-sub-title">
                    <span className="account-address">address</span>
                    <span className="account-time">time</span>
                </div>
                <div className="account-bar">
                    <div className="account-item">
                        <NavLink to="/account" end className={({ isActive }) => `account-link ${isActive ? 'active' : ''}`}>
                            <span>Collected</span>
                            <span className="account-number">8</span>
                        </NavLink>
                    </div>
                    <div className="account-item">
                        <NavLink to="/account/created" end className={({ isActive }) => `account-link ${isActive ? 'active' : ''}`}>
                            <span>Created</span>
                            <span className="account-number">80</span>
                        </NavLink>
                    </div>
                    <div className="account-item">
                        <NavLink to="/account/activity" end className={({ isActive }) => `account-link ${isActive ? 'active' : ''}`}>
                            <span>Activity</span>
                            <span className="account-number">20</span>
                        </NavLink>
                    </div>
                </div>
                <div className="account-search">
                    <img src="/search.png" />
                    <span style={{ fontWeight: "300", fontSize: "16px", color: "#999999" }}>Search by name</span>
                </div>
            </div>
            <div className="divider"></div>
            <Outlet />
        </div >
    );
}

export default Account;