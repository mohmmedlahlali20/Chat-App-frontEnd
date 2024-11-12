// ChatBox.tsx
import React from 'react';
import {  IconButton, TextField } from '@mui/material';
import {
    Call,
    Videocam,
    MoreVert,
    Send,
    InsertEmoticon,
    PhotoCamera,
    AccountCircle
} from '@mui/icons-material';
import profile from "../../assets/profile.png";


const ChatBox: React.FC = () => {
    return (
      
      
            <div className="my-auto h-[870px] w-[650px] shadow shadow-md shadow-[#79C5EF]/60 m-2 bg-white rounded-xl shadow-lg flex flex-col">
 
            <div className="p-4 flex gap-4 px-5 items-center border-b border-gray-200">
                <img src={profile} alt="" />
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


            <div className="flex-grow p-4 overflow-y-auto space-y-4 px-5 py-6">

                <div className="flex flex-col items-start">
                    <div className="bg-[#E7E7E7] font-medium font-sans text-gray-800 py-2 px-4 rounded-2xl text-sm max-w-xs">
                        <p>slm3alkyom</p>
                    </div>
                    <span className="text-xs text-gray-400 ml-2 py-1">Today, 8:30pm</span>
                </div>



                <div className="flex flex-col items-end justify-end">
                    <div className="bg-[#6E00FF] text-white font-medium font-sans py-2 px-4 rounded-2xl text-sm max-w-xs">
                        nn bon8
                    </div>
                    <span className="text-xs text-gray-400 py-1 mr-2">Today, 8:33pm</span>
                </div>




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
                    className="bg-gray-100 rounded-full"
                    InputProps={{ classes: { notchedOutline: 'border-transparent' } }}
                />
                <IconButton color="primary">
                    <Send />
                </IconButton>
     
        </div>
               </div>

     
    );
};

export default ChatBox;
