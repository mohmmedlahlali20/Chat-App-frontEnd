import React, {useEffect, useRef, useState} from "react";
import {CircularProgress, IconButton, TextField} from "@mui/material";
import {Send} from "@mui/icons-material";
import {io, Socket} from "socket.io-client";
import {useGetMessagesQuery} from "../../services/messageApi";

const ChatBox: React.FC<{ channelId?: string }> = ({channelId}) => {
    const {data: messages, isLoading} = useGetMessagesQuery(channelId);
    console.log(messages)
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState<any[]>([]);
    const [socket, setSocket] = useState<Socket | null>(null);
    const chatRef = useRef<HTMLDivElement | null>(null);

    const userId = JSON.parse(localStorage.getItem("user") || "{}")?._id;

    useEffect(() => {
        const socketIo = io("http://localhost:3000", {
            transports: ["websocket"],
            query: {channelId, userId},
        });

        setSocket(socketIo);

        socketIo.on("receive_message", (newMessage) => {
            if (newMessage.conversation === channelId) {
                setMessageList((prev) => [...prev, newMessage]);
            }
        });

        return () => socketIo.disconnect();
    }, [channelId, userId]);

    // Sync fetched messages
    useEffect(() => {
        if (messages) {
            const filteredMessages = messages.filter(
                (msg: any) => msg.conversation === channelId
            );
            setMessageList(filteredMessages);
        }
    }, [messages, channelId]);

    // Scroll to bottom
    useEffect(() => {
        chatRef.current?.scrollTo({top: chatRef.current.scrollHeight, behavior: "smooth"});
    }, [messageList]);

    const handleSendMessage = () => {
        if (!socket || !message.trim()) return;

        const newMessage = {
            senderId: userId,
            text: message,
            channelId,
            createdAt: new Date().toISOString(),
        };

        setMessageList((prev) => [...prev, newMessage]);

        socket.emit("Send_message", newMessage, (response: any) => {
            if (response.success) {
                setMessageList((prev) =>
                    prev.map((msg) => (msg === newMessage ? response.message : msg))
                );
            } else {
                console.error("Message send failed:", response.error);
            }
        });

        setMessage("");
    };

    return (
        <div className="h-[870px] w-[650px] shadow-md bg-white rounded-xl flex flex-col">
            {/* Header */}
            <div className="p-4 flex gap-4 items-center border-b border-gray-200">
                <img src="/profile.png" alt="Profile" className="w-12 h-12 rounded-full border-2 border-blue-500"/>
                <div className="flex flex-col flex-grow">
                    <span className="font-semibold text-lg text-gray-800">Western</span>
                    <span className="text-xs text-gray-500">En ligne</span>
                </div>
            </div>

            {/* Chat Messages */}
            <div ref={chatRef} className="flex-grow p-4 overflow-y-auto space-y-4">
                {isLoading ? (
                    <div className="flex justify-center">
                        <CircularProgress/>
                    </div>
                ) : Array.isArray(messages) ? (
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${userId === msg.senderId ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`${
                                    userId === msg.senderId
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 text-gray-800"
                                } py-2 px-4 rounded-xl max-w-xs shadow-md`}
                            >
                                {msg.text}
                            </div>
                            <span className="text-xs text-gray-400 mt-1 ml-2">
                        {new Date(msg.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </span>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">No messages available</div>
                )}
            </div>

            {/* Additional Messages List */}
            <div className="p-4 space-y-2 border-t border-gray-100">
                {messageList.length > 0 &&
                    messageList.map((message) => (
                        <div key={message._id || message.id || Math.random()} className="text-gray-700">
                            {message.text}
                        </div>
                    ))}
            </div>

            {/* Message Input */}
            <div className="p-3 border-t flex items-center space-x-2 bg-gray-50">
                <TextField
                    placeholder="Type a message..."
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    size="small"
                    className="rounded-md border-2 border-gray-300 focus:border-blue-500"
                />
                <IconButton color="primary" onClick={handleSendMessage} className="text-blue-500 hover:text-blue-700">
                    <Send />
                </IconButton>
            </div>
        </div>
    );
};

export default ChatBox;
