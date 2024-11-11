import { Outlet } from "react-router-dom";
import {Sidebar} from "./index.ts";

function Layout() {
    return (
        <>
        <div className="flex">
                <header>
                    <Sidebar />
                </header>
                <main>
                    <div className="container">
                        <div className="chat-box">
                            <Outlet/>
                        </div>
                    </div>
                </main>

            </div>

        </>
    );
}

export default Layout;