import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VideoCallState {
    localStreamId: string | null;
    remoteStreamId: string | null;
}

const initialState: VideoCallState = {
    localStreamId: null,
    remoteStreamId: null,
};

const videoCallSlice = createSlice({
    name: 'videoCall',
    initialState,
    reducers: {
        setLocalStreamId: (state, action: PayloadAction<string | null>) => {
            state.localStreamId = action.payload;
        },
        setRemoteStreamId: (state, action: PayloadAction<string | null>) => {
            state.remoteStreamId = action.payload;
        },
    },
});

export const { setLocalStreamId, setRemoteStreamId } = videoCallSlice.actions;
export default videoCallSlice.reducer;
