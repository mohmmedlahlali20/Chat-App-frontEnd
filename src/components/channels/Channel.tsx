import {useGetChannelsQuery} from "../../services/channelApi.tsx";

function Channel() {
    const {data, error, isLoading} = useGetChannelsQuery('publicChannel');
    console.log(data)
    if (isLoading) {
        return <p>Chargement des canaux...</p>;
    }

    if (error) {
        return <p className="text-red-500">Erreur lors de la récupération des canaux.</p>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Channels</h1>
            {data && data.map((channel: any) => (
                <div key={channel._id} className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-bold">{channel.Title}</h2>
                    <p className="text-sm text-gray-600">
                        Créé par : {channel.userId?.username || "Utilisateur inconnu"}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Channel;
