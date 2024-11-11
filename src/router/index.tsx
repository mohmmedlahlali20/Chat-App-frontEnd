import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/layouts";
import { AllChannels } from "../components";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <div>helo</div>
            },

            { 
                path: "/AllChannels",
                element: <AllChannels />

            }
        ]
    }
]);

export default router;