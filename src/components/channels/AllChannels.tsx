import InputSearch from "../inputSearch";
import ChannelList from "../channelList";
import FriendList from "../friendList";

function AllChannels () {

        return (
            <>
                    <div className="my-auto w-[500px]">
                        <div className="w-full">
                            <div className="flex justify-between items-center">
                                <h1 className="text-black font-bold text-3xl font-mono ">Chats</h1>
                                <div className='flex items-center gap-2'>
                                    <div className="bg-[#D9D9D9] group hover:bg-[#6E00FF]/10 duration-300 cursor-pointer px-3 py-1 rounded-full">
                                        <svg className="w-6 h-6 text-[#612DD1] font-bold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"/>
                                        </svg>
                                    </div>
                                    <div className="bg-[#D9D9D9] group hover:bg-[#6E00FF]/10 duration-300 cursor-pointer px-3 py-1 rounded-full">
                                        <svg className="w-6 h-6 text-[#612DD1] font-bold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
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