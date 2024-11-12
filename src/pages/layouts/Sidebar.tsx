// Sidebar.tsx
import React from 'react';
import {Badge} from '@mui/material';
import {AccountCircleOutlined, ChatBubble, Dashboard, HomeOutlined, LogoutOutlined, PeopleOutlined} from '@mui/icons-material';

const Sidebar: React.FC = () => {
    return (
        <div
            className="h-screen w-16 container   ml-3 bg-white shadow-lg flex flex-col items-center py-4 border border-blue-300 rounded-xl">
            <div className="mb-6">
                <Dashboard fontSize="large" className="text-blue-500"/>
            </div>

            <div className="mb-6 cursor-pointer">
                <HomeOutlined fontSize="large" className="text-blue-500"/>
            </div>

            <div className="mb-6 cursor-pointer bg-blue-100 rounded-full p-2">
                <ChatBubble fontSize="large" className="text-blue-500"/>
            </div>

            <div className="mb-6 cursor-pointer relative">
                <Badge badgeContent={2} color="error" overlap="circular">
                    <PeopleOutlined fontSize="large" className="text-blue-500"/>
                </Badge>
            </div>

            <div className="flex-grow border-b border-dashed border-blue-300 w-full"></div>

            <div className="flex flex-col items-center mt-4 space-y-6">
                <AccountCircleOutlined
                    fontSize="large" className="text-blue-500"
                />

                <div className="cursor-pointer">
                    <LogoutOutlined fontSize="large" className="text-blue-500"/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
