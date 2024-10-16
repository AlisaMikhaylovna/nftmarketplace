import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { Sidebar } from "../../components/Sidebar";
import "./index.css"

const Settings = () => {
    return (
        <div>
            <NavBar isScrolled={true} />
            <div className="setting-page">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
}

export default Settings;