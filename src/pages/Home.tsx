import { Sidebar } from "./layouts";
import { AllChannels } from "../components";
import { ChatBox } from "../components";
import { FriendDetails } from "../components";
import {useState} from "react";




function Home() {
    const [selectedChannelId, setSelectedChannelId] = useState<string | null>(null);


    return (
        <>
            <div className="flex gap-6 bg-[#EFF6FC] h-screen w-screen px-5 ">
                <Sidebar />
                <AllChannels onSelectChannel={setSelectedChannelId} />
                <ChatBox channelId={selectedChannelId} />
                <FriendDetails />
            </div>
        </>
    );
}

export default Home;