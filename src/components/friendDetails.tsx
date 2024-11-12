import  Profile  from "../assets/profile.png";
import img from "../assets/lacasa.jpeg";
import {Call, Videocam ,MoreVert} from '@mui/icons-material';
import {  IconButton } from '@mui/material';

function friendDetails () {

    return (
        <>
         <div className="bg-white w-[520px] h-[870px] my-auto rounded-2xl shadow shadow-md shadow-[#79C5EF]/60">
                    <div className="flex justify-center mt-10">
                        <img className="w-[220px] rounded-full border-4 border-[#9747FF]" src={Profile} alt="" />
                    </div>
                    <h1 className="font-bold font-serif text-center py-3 text-3xl">Walid Lhaila</h1>

                    <div className="flex justify-center items-center gap-3 py-5">
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

                    <div className="flex justify-between items-center px-8">
                        <h1 className="font-medium font-serif text-lg">Media, Files, And Links</h1>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    </div>

                    <div className="flex gap-5 items-center px-8 py-3">
                        <p className="font-medium text-md font-serif bg-gray-100 rounded-xl px-4 py-1 bg-[#6E00FF]/10 text-[#6E00FF] hover:bg-[#6E00FF]/10 hover:text-[#6E00FF] duration-200 cursor-pointer">Media</p>
                        <p className="font-medium text-md font-serif bg-gray-100 rounded-xl px-4 py-1 hover:bg-[#6E00FF]/10 hover:text-[#6E00FF] duration-200 cursor-pointer">Files</p>
                        <p className="font-medium text-md font-serif bg-gray-100 rounded-xl px-4 py-1 hover:bg-[#6E00FF]/10 hover:text-[#6E00FF] duration-200 cursor-pointer">Links</p>
                    </div>

                    <div className=" h-[340px] overflow-y-scroll custom-scroll px-8 py-2 flex flex-wrap gap-2">
                        <img className="w-[108px] h-[100px] rounded-md" src={img} alt="" />
                        <img className="w-[108px] h-[100px] rounded-md" src={img} alt="" />
                    </div>

                </div>
        </>
    );
}
export default friendDetails;