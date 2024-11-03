import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../Redux/Store/store';
import {getChannel} from '../../Redux/Slices/Channel/ChannelSlice';
import path from '../../axios/axios';

function Channel() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const fetchChannels = async () => {
            try {
                const response = await path.get('/channels');
                console.log(response.data)
                dispatch(getChannel(response.data));
            } catch (error) {
                console.error('Error fetching channels:', error);
            }
        };

        fetchChannels();
    }, [dispatch]);

    const channels = useSelector((state: RootState) => state.channel.channels);

    return (
        <div>
            <h1>Channels</h1>
            {channels.map((channel) => (
                <div key={channel._id}>
                    <h2>{channel.Title}</h2>

                </div>
            ))}
        </div>
    );
}

export default Channel;
