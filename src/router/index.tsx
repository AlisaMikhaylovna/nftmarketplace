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
                path: "nifitication", // 移除前面的 /
                element: <Nifitication />,
            },
            {
                path: "developer", // 移除前面的 /
                element: <Developer />,
            },
        ],
    },
    {
        path: "/account/:username?", // username 可选
        element: <Account />,
        children: [
            {
                index: true,
                element: <Collected />,
            },
            {
                path: "created", // 相对路径，不需要前缀
                element: <Created />,
            },
            {
                path: "activity", // 相对路径，不需要前缀
                element: <Activity />,
            },
        ],
    },
]);

export default router;
