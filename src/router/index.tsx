import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/layouts";
import { NotFound } from "../pages";
import {ChatBox} from "../components";
import { Home } from "../pages";
import { Login } from "../pages";
import { Register } from "../pages";
 
const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <ChatBox />
            },
          
        ]   
    },
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "/Home",
        element: <Home />
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/Register",
        element: <Register />
    }
    
]);

export default router;