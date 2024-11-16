import { useState } from "react";

const useSelectedChannel = () => {
    const [selectedChannelId, setSelectedChannelId] = useState<string | null>(null);

    const selectChannel = (channelId: string) => {
        setSelectedChannelId(channelId);
    };

    return { selectedChannelId, selectChannel };
};

export default useSelectedChannel;
