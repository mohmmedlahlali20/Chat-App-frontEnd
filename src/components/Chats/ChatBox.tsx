import React from 'react';
import { IconButton, TextField, Avatar } from '@mui/material';
import { Call, InsertEmoticon, MoreVert, Send, Videocam } from '@mui/icons-material';

const ChatBox: React.FC = () => {
    return (
        <div className="flex ml-5 h-screen">
            <div className="w-full max-w-md h-full bg-white border border-blue-300 rounded-xl shadow-lg flex flex-col">
                <div className="p-4 flex items-center border-b border-gray-200">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    <div className="flex flex-col flex-grow">
                        <span className="font-bold">Western</span>
                        <span className="text-sm text-gray-500">Online</span>
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
                <div className="flex-grow p-4 overflow-y-auto space-y-4">
                    <div className="flex items-start">
                        <div className="bg-gray-200 text-gray-800 py-2 px-4 rounded-2xl text-sm max-w-xs">
                            slm3alkyom
                        </div>
                        <span className="text-xs text-gray-400 ml-2">Today, 8:30pm</span>
                    </div>
                    <div className="flex items-end justify-end">
                        <span className="text-xs text-gray-400 mr-2">Today, 8:33pm</span>
                        <div className="bg-purple-500 text-white py-2 px-4 rounded-2xl text-sm max-w-xs">
                            nn bon8
                        </div>
                    </div>
                </div>

                {/* Input */}
                <div className="p-3 border-t border-gray-200 flex items-center space-x-2">
                    <IconButton>
                        <InsertEmoticon className="text-gray-500" />
                    </IconButton>
                    <TextField
                        placeholder="Type your message here..."
                        variant="outlined"
                        fullWidth
                        size="small"
                        className="bg-gray-100 rounded-full"
                        InputProps={{ classes: { notchedOutline: 'border-transparent' } }}
                    />
                    <IconButton color="primary">
                        <Send />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
