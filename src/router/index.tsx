import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/layouts";
import { NotFound } from "../pages";
import {ChatBox, VideoCall} from "../components";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <ChatBox />
            },
            {
                path: "/video-call",
                element: <VideoCall />

            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;
