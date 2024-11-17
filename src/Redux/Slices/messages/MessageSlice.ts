import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Message {
    _id: string;
    sender: string;
    text: string;
    createdAt: Date;
    channel: string;
    updateAt: Date;
}

interface MessageState {
    messages: Message[];
}

const initialState: MessageState = {
    messages: [],
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        sendMessage: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload)
        },


        removeMessage: (state, action: PayloadAction<{ _id: string; sender: string }>) => {
            const {_id, sender} = action.payload;
            state.messages = state.messages.filter(
                (msg) => msg._id !== _id || msg.sender !== sender
            );
        }


    },
});

export const {
    sendMessage,
    removeMessage,
} = messageSlice.actions


export default messageSlice.reducer

