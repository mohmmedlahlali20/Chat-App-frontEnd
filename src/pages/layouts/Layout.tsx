import { Sidebar } from "./index";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex flex-col overflow-y-hidden">
            <main className="flex-grow flex items-center justify-center  ">
                <Sidebar />
                <div className="container mx-auto ">
                    <div className="">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Layout;
