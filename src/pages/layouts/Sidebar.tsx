// Sidebar.tsx
import React from 'react';
import {Badge} from '@mui/material';
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import friendIcon from "../../assets/friends_request.png"
import {AccountCircleOutlined, ChatBubble, HomeOutlined, LogoutOutlined, PeopleOutlined} from '@mui/icons-material';

const Sidebar: React.FC = () => {
    return (
        <div
            className=" flex flex-col my-auto h-[870px] w-[74px] container ml-3 bg-white  flex flex-col items-center py-4  shadow shadow-md shadow-[#79C5EF]/60 rounded-xl">
            <div className="mb-6">
                <img className="w-16" src={logo} alt="" />
            </div>

            <div className="py-5 cursor-pointer">
                <HomeOutlined fontSize='large' className="text-[#612DD1]"/>
            </div>

            <div className="mt-2 py-5  bg-[#9886FD]/40 w-full items-center text-center">
                <ChatBubble fontSize="large" className="text-[#612DD1]"/>
            </div>

            <div className="mb-6 py-5 cursor-pointer relative">
                <Badge badgeContent={2} color="error" overlap="circular">
                    <img className="w-8" src={friendIcon} alt="" />
                </Badge>
            </div>

            <div className="flex-grow border-b border-dashed border-blue-300 w-full"></div>

            <div className="flex flex-col items-center mt-4 space-y-6">
            <img className="rounded-full border-2 border-[#9747FF]" src={profile} alt="" />

                <div className="cursor-pointer">
                    <LogoutOutlined fontSize="large" className="text-white bg-[#612DD1] rounded"/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
