import profile from "../assets/profile.png";
import { useGetChannelsQuery } from "../services/channelApi.tsx";

function ChannelList() {
    // @ts-ignore
    const { data, error, isLoading } = useGetChannelsQuery('publicChannel');

    if (isLoading) {
        return <p>Chargement des canaux...</p>;
    }

    if (error) {
        return <p className="text-red-500">Erreur lors de la récupération des canaux.</p>;
    }

    return (
        <div className="flex flex-col gap-4">
            {data && data.map((channel: any) => (
                <div key={channel._id} className="flex justify-between items-center border-b py-3">
                    <div className="flex justify-center items-center gap-6">
                        <img src={profile} alt="Profile" />
                        <div>
                            <h1 className="font-medium text-lg">{channel.Title}</h1>
                            <p className="text-sm text-gray-600">{channel.type}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-sm text-gray-600">Today, 9.52pm</p>
                        <p className="bg-red-600 rounded-full text-white font-medium text-md px-2">4</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ChannelList;
