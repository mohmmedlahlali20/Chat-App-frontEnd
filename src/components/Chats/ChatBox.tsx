import React, { useEffect, useState } from "react";
import { CircularProgress, IconButton, TextField } from "@mui/material";
import { Send } from "@mui/icons-material";
import profile from "../../assets/profile.png";
import { io, Socket } from "socket.io-client";
import { useGetMessagesQuery } from "../../services/messageApi";

interface ChatBoxProps {
    channelId?: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ channelId }) => {
    const { data: messages, error, isLoading } = useGetMessagesQuery(channelId);
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState<any[]>([]);
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const socketIo = io("http://localhost:3000", {
            transports: ["websocket"],
            query: { channelId },
        });

        setSocket(socketIo);

        socketIo.on("connect", () => {
            console.log("Connected to WebSocket server");
        });

        socketIo.on("disconnect", () => {
            console.log("Disconnected from WebSocket server");
        });

        socketIo.on("receive_message", (newMessage) => {
            if (newMessage.conversation === channelId) {
                setMessageList((prev) => [...prev, newMessage]);
            }
        });

        return () => {
            socketIo.disconnect();
        };
    }, [channelId]);

    useEffect(() => {
        if (messages) {
            // Filter messages by channelId
            const filteredMessages = messages.filter(
                (msg: any) => msg.conversation === channelId
            );
            setMessageList(filteredMessages);
        }
    }, [messages, channelId]);

    const userId = localStorage.getItem("user");
    const parsedUser = userId ? JSON.parse(userId) : null;
    const userLoggedId = parsedUser?._id;

    const handleSendMessage = () => {
        if (socket && message.trim()) {
            const newMessage = {
                senderId: userLoggedId,
                text: message,
                conversation: channelId,
                createdAt: new Date().toISOString(),
            };

            // Optimistic UI update
            setMessageList((prev) => [...prev, newMessage]);

            socket.emit("Send_message", newMessage, (response: any) => {
                if (response.success) {
                    // Update with server response if needed
                    setMessageList((prev) =>
                        prev.map((msg) =>
                            msg === newMessage ? response.message : msg
                        )
                    );
                } else {
                    console.error("Message send failed:", response.error);
                }
            });

            setMessage("");
        } else {
            console.error("Socket not connected or message is empty");
        }
    };

    const scrollToBottom = () => {
        const chatContainer = document.getElementById("chat-container");
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messageList]);

    return (
        <div className="my-auto h-[870px] w-[650px] shadow-md m-2 bg-white rounded-xl flex flex-col">
            {/* Header */}
            <div className="p-4 flex gap-4 px-5 items-center border-b border-gray-200">
                <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col flex-grow">
                    <span className="font-bold font-serif text-lg">Western</span>
                    <span className="text-sm text-gray-500 font-mono">En ligne</span>
                </div>
            </div>

            {/* Chat Container */}
            <div
                id="chat-container"
                className="flex-grow p-4 overflow-y-auto space-y-4 px-5 py-6"
            >
                {isLoading ? (
                    <div className="flex justify-center">
                        <CircularProgress />
                    </div>
                ) : (
                    messageList.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${
                                userLoggedId === msg.senderId ? "items-end" : "items-start"
                            }`}
                        >
                            <div
                                className={`${
                                    userLoggedId === msg.senderId
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 text-gray-800"
                                } py-2 px-4 rounded-2xl text-sm max-w-xs`}
                            >
                                <p>{msg.text}</p>
                            </div>
                            <span className="text-xs text-gray-400 py-1">
                                {new Date(msg.createdAt).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </span>
                        </div>
                    ))
                )}
            </div>

            {/* Message Input */}
            <div className="p-3 border-t border-gray-200 flex items-center space-x-2">
                <TextField
                    placeholder="Écrivez votre message ici..."
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
