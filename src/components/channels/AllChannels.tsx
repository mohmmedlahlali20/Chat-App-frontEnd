import profile from "../../assets/profile.png";

function AllChannels () {

        return (
            <>
                <div className="flex gap-10 px-5">
                    <div className="py-10 w-[570px]">
                        <div className="w-full">

                            <h1 className="text-black font-bold text-3xl font-mono">Chats</h1>

                            <form className="w-full py-8">   
                                <label for="default-search" className="mb-2 text-sm font-medium text-gray-600 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 ps-10 px-3 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-white placeholder:text-gray-600 shadow shadow-lg shadow-[#79C5EF]" placeholder="Search ..." required />
                                </div>
                            </form>

                            <div className=" px-5 py-5 border border-gray-300 rounded-2xl bg-white shadow shadow-lg shadow-[#79C5EF]">
                                <h1 className="text-xl font-bold font-serif mb-2">Channels</h1>

                            <div className="h-[230px] overflow-y-auto custom-scroll">
                                <div className="flex justify-between items-center border-b py-3">
                                    <div className="flex justify-center items-center gap-6">
                                        <img src={profile} alt="" />
                                        <div>
                                            <h1 className="font-medium text-lg">Mera Gang</h1>
                                            <p className="text-sm text-gray-600">How are you?</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-600">Today, 9.52pm</p>
                                        <p className=" bg-red-600 rounded-full  text-white font-medium txet-md  px-2 ml-16">4</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b py-3">
                                    <div className="flex justify-center items-center gap-6">
                                        <img src={profile} alt="" />
                                        <div>
                                            <h1 className="font-medium text-lg">Mera Gang</h1>
                                            <p className="text-sm text-gray-600">How are you?</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-600">Today, 9.52pm</p>
                                        <p className=" bg-red-600 rounded-full  text-white font-medium txet-md  px-2 ml-16">4</p>
                                    </div>
                                </div>   <div className="flex justify-between items-center border-b py-3">
                                    <div className="flex justify-center items-center gap-6">
                                        <img src={profile} alt="" />
                                        <div>
                                            <h1 className="font-medium text-lg">Mera Gang</h1>
                                            <p className="text-sm text-gray-600">How are you?</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-600">Today, 9.52pm</p>
                                        <p className=" bg-red-600 rounded-full  text-white font-medium txet-md  px-2 ml-16">4</p>
                                    </div>
                                </div>   <div className="flex justify-between items-center border-b py-3">
                                    <div className="flex justify-center items-center gap-6">
                                        <img src={profile} alt="" />
                                        <div>
                                            <h1 className="font-medium text-lg">Mera Gang</h1>
                                            <p className="text-sm text-gray-600">How are you?</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-600">Today, 9.52pm</p>
                                        <p className=" bg-red-600 rounded-full  text-white font-medium txet-md  px-2 ml-16">4</p>
                                    </div>
                                </div>

                            </div>


                            </div>


                            <div className=" px-5 py-5 mt-8 border border-gray-300 rounded-2xl bg-white shadow shadow-lg shadow-[#79C5EF]">
                                <h1 className="text-xl font-bold font-serif mb-2">Peoples</h1>

                            <div className="h-[300px] overflow-y-auto custom-scroll">
                                <div className="flex justify-between items-center border-b py-3">
                                    <div className="flex justify-center items-center gap-6">
                                        <img src={profile} alt="" />
                                        <div>
                                            <h1 className="font-medium text-lg">Mera Gang</h1>
                                            <p className="text-sm text-gray-600">How are you?</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-600">Today, 9.52pm</p>
                                        <p className=" bg-red-600 rounded-full  text-white font-medium txet-md  px-2 ml-16">4</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b py-3">
                                    <div className="flex justify-center items-center gap-6">
                                        <img src={profile} alt="" />
                                        <div>
                                            <h1 className="font-medium text-lg">Mera Gang</h1>
                                            <p className="text-sm text-gray-600">How are you?</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-600">Today, 9.52pm</p>
                                        <p className=" bg-red-600 rounded-full  text-white font-medium txet-md  px-2 ml-16">4</p>
                                    </div>
                                </div>   <div className="flex justify-between items-center border-b py-3">
                                    <div className="flex justify-center items-center gap-6">
                                        <img src={profile} alt="" />
                                        <div>
                                            <h1 className="font-medium text-lg">Mera Gang</h1>
                                            <p className="text-sm text-gray-600">How are you?</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-600">Today, 9.52pm</p>
                                        <p className=" bg-red-600 rounded-full  text-white font-medium txet-md  px-2 ml-16">4</p>
                                    </div>
                                </div>   <div className="flex justify-between items-center border-b py-3">
                                    <div className="flex justify-center items-center gap-6">
                                        <img src={profile} alt="" />
                                        <div>
                                            <h1 className="font-medium text-lg">Mera Gang</h1>
                                            <p className="text-sm text-gray-600">How are you?</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-600">Today, 9.52pm</p>
                                        <p className=" bg-red-600 rounded-full  text-white font-medium txet-md  px-2 ml-16">4</p>
                                    </div>
                                </div>

                            </div>


                            </div>


                        </div>
                    </div>
                </div>
            </>
        );
}

export default AllChannels;