import profile from "../assets/profile.png"

function channelList () {

    return (
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
    );

}
export default channelList;