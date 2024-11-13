
function channelList ({profile, name, message, date, count}) {

    return (
        <div className="flex justify-between items-center border-b py-3">
            <div className="flex justify-center items-center gap-6">
                <img src={profile} alt="" />
                <div>
                    <h1 className="font-medium text-lg">{name}</h1>
                    <p className="text-sm text-gray-600">{message}</p>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-sm text-gray-600">{date}</p>
                <p className=" bg-red-600 rounded-full  text-white font-medium txet-md mt-1 px-2 ml-16">{count}</p>
            </div>
        </div>
    );

}
export default channelList;