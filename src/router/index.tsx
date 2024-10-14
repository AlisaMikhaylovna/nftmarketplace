import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Create from "../pages/Create/index";
import Mint from "../pages/Mint";
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
    },
]);

export default router;
