import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Create from "../pages/Create/index";
import Mint from "../pages/Mint";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Nifitication from "../pages/Nitification";
import Developer from "../pages/Developer";
import Account from "../pages/Account";
import Collected from "../pages/Collected";
import Created from "../pages/Created";
import Activity from "../pages/Activity";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/create",
        element: <Create />,
    },
    {
        path: "/mint",
        element: <Mint />,
    },
    {
        path: "/settings",
        element: <Settings />,
        children: [
            {
                index: true,
                element: <Profile />,
            },
            {
                path: "nifitication",
                element: <Nifitication />,
            },
            {
                path: "developer",
                element: <Developer />,
            },
        ],
    },
    {
        path: "/account/:username?",
        element: <Account />,
        children: [
            {
                index: true,
                element: <Collected />,
            },
            {
                path: "created",
                element: <Created />,
            },
            {
                path: "activity",
                element: <Activity />,
            },
        ],
    },
]);

export default router;
