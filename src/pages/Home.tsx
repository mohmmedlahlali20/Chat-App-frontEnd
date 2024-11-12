import { Sidebar } from "./layouts";
import { AllChannels } from "../components";
import { ChatBox } from "../components";
import { FriendDetails } from "../components";




function Home() {

    return (
        <>
            <div className="flex gap-6 bg-[#EFF6FC] h-screen w-screen px-5 ">
                <Sidebar />
                <AllChannels />
                <ChatBox />
                <FriendDetails />
            </div>
        </>
    );
}

export default Home;