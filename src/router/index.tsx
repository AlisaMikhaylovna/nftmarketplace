import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Create from "../pages/Create/index";
import Mint from "../pages/Mint";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Nifitication from "../pages/Nitification";
import Developer from "../pages/Developer";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    }, {
        path: "/create",
        element: <Create />,
    }, {
        path: "/mint",
        element: <Mint />
    }, {
        path: "/settings",
        element: <Settings />,
        children: [{
            index: true,
            element: <Profile />
        }, {
            path: "/settings/nifitication",
            element: <Nifitication />
        }, {
            path: "/settings/developer",
            element: <Developer />
        }]
    }
]);

export default router;
