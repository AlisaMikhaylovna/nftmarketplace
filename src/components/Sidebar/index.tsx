import { NavLink } from "react-router-dom";
import "./index.css";

export const Sidebar = () => {
    return (
        <div className="sidebar-page">
            <span className="sidebar-title">Settings</span>
            <div className="sidebar-item">
                <NavLink
                    to="/settings"
                    end
                    className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                >
                    <img src="/profile.png" alt="Profile" className="sidebar-icon" />
                    <span className="sidebar-sub-title">Profile</span>
                </NavLink>
            </div>
            <div className="sidebar-item">
                <NavLink
                    to="/settings/nifitication"
                    className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                >
                    <img src="/notice.png" alt="Notification" className="sidebar-icon" />
                    <span className="sidebar-sub-title">Notification</span>
                </NavLink>
            </div>
            <div className="sidebar-item">
                <NavLink
                    to="/settings/developer"
                    className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                >
                    <img src="/developer.png" alt="Developer" className="sidebar-icon" />
                    <span className="sidebar-sub-title">Developer</span>
                </NavLink>
            </div>
        </div>
    );
}

