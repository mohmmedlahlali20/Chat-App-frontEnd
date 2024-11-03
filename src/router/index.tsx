import {createBrowserRouter} from "react-router-dom";
import {Channel} from "../components";


const router = createBrowserRouter([
    {
        path: "/Channels",
        element: <Channel />
    }
]);

export default router;