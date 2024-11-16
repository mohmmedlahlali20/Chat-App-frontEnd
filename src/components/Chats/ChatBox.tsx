import React, { useState } from "react";
import {
    IconButton,
    TextField,
    CircularProgress,
    Typography,
} from "@mui/material";
import { Call, InsertEmoticon, MoreVert, Send, Videocam } from "@mui/icons-material";
import profile from "../../assets/profile.png";
import { useGetMessagesQuery } from "../../services/messageApi";

interface ChatBoxProps {
    channelId?: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ channelId }) => {
    const { data: messages, error, isLoading } = useGetMessagesQuery(channelId);
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        console.log("Message Sent:", message);
        setMessage("");
    };

    return (
        <div className="my-auto h-[870px] w-[650px] shadow shadow-md shadow-[#79C5EF]/60 m-2 bg-white rounded-xl flex flex-col">
            <div className="p-4 flex gap-4 px-5 items-center border-b border-gray-200">
                <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col flex-grow">
                    <span className="font-bold font-serif text-lg">Western</span>
                    <span className="text-sm text-gray-500 font-mono">Online</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-500">
                    <IconButton>
                        <Call />
                    </IconButton>
                    <IconButton>
                        <Videocam />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 px-5 py-6">
                {isLoading ? (
                    <div className="flex justify-center">
                        <CircularProgress />
                    </div>
                ) : error ? (
                    <Typography color="error" variant="body1">
                        Failed to load messages.
                    </Typography>
                ) : (
                    messages?.map((msg: any) => (
                        <div
                            key={msg._id}
                            className={`flex flex-col ${
                                msg.sender === "me" ? "items-end" : "items-start"
                            }`}
                        >
                            <div
                                className={`${
                                    msg.sender === "me"
                                        ? "bg-[#6E00FF] text-white"
                                        : "bg-[#E7E7E7] text-gray-800"
                                } py-2 px-4 rounded-2xl text-sm max-w-xs`}
                            >
                                <p>{msg.text}</p>
                            </div>
                            <span className="text-xs text-gray-400 py-1">
                                {new Date(msg.createdAt).toLocaleTimeString()}
                            </span>
                        </div>
                    ))
                )}
            </div>

            <div className="p-3 border-t border-gray-200 flex items-center space-x-2">
                <IconButton>
                    <InsertEmoticon className="text-gray-500" />
                </IconButton>
                <TextField
                    placeholder="Type your message here..."
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "999px" } }}
                />
                <IconButton color="primary" onClick={handleSendMessage}>
                    <Send />
                </IconButton>
            </div>
        </div>
    );
};

export default ChatBox;
