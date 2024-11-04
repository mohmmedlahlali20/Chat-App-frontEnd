import {createBrowserRouter} from "react-router-dom";
import {Channel, CreateChannel} from "../components";


const router = createBrowserRouter([
    {
        path: "/Channels",
        element: <Channel />
    },
    {
        path: "/Channels/Create",
        element: <CreateChannel />
    }
]);

export default router;