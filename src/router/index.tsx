import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/layouts";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <div>helo</div>
            },
        ]
    }
]);

export default router;
