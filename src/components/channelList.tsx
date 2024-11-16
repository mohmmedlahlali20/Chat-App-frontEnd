import profile from "../assets/profile.png";
import {useGetChannelsQuery} from "../services/channelApi";

interface ChannelListProps {
    onChannelClick: (id: string) => void;
}

function ChannelList({ onChannelClick }: ChannelListProps) {
    const { data: channels, error, isLoading } = useGetChannelsQuery("publicChannel");

    if (isLoading) {
        return <p>Chargement des canaux...</p>;
    }

    if (error) {
        return (
            <p className="text-red-500 bg-red-100 p-4 rounded-lg border border-red-300 shadow-lg">
                Erreur lors de la récupération des canaux.
            </p>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {channels && channels.map((channel) => (
                <div
                    key={channel._id}
                    className="flex justify-between items-center border-b py-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => onChannelClick(channel._id)}
                >
                    <div className="flex items-center gap-6">
                        <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
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
