import {Sidebar} from "./index.ts";

function Layout() {
    return (
        <>
            <header>
                <Sidebar />
            </header>
            <main>
                <div className="container">
                    <div className="chat-box">

                    </div>
                </div>
            </main>

        </>
    );
}

export default Layout;