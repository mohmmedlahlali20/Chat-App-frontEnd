import InputSearch from "../inputSearch";
import ChannelList from "../channelList";
import FriendList from "../friendList";

function AllChannels () {

        return (
            <>
                    <div className="my-auto w-[500px]">
                        <div className="w-full">

                            <h1 className="text-black font-bold text-3xl font-mono ">Chats</h1>

                            <InputSearch />

                            <div className=" px-5 py-5  rounded-2xl bg-white shadow shadow-md shadow-[#79C5EF]/60">
                                <h1 className="text-xl font-bold font-serif mb-2">Channels</h1>

                                <div className="h-[230px] overflow-y-auto custom-scroll">
                                    
                                    <ChannelList />
                                    <ChannelList />
                                    <ChannelList />
                                    <ChannelList />
                                    <ChannelList />
                                    <ChannelList />


                                </div>
                            </div>


                            <div className=" px-5 py-5 mt-8  rounded-2xl bg-white shadow shadow-md shadow-[#79C5EF]/60">
                                <h1 className="text-xl font-bold font-serif mb-2">Peoples</h1>

                                <div className="h-[300px] overflow-y-auto custom-scroll">

                                    <FriendList />
                                    <ChannelList />
                                    <ChannelList />
                                    <ChannelList />
                                    <ChannelList />
                                    <ChannelList />


                                </div>
                            </div>


                        </div>
                    </div>
            </>
        );
}

export default AllChannels;