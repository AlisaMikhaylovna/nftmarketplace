import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar";

const Account = () => {
    return (
        <div>
            <NavBar isScrolled={true} />
            <Outlet />
        </div>
    );
}

export default Account;