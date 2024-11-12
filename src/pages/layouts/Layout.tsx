
import { Sidebar } from "./index";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <main className="flex-grow flex items-center justify-center">
                <Sidebar />
                <div className="container mx-auto h-full">
                    <div className="h-full">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Layout;
