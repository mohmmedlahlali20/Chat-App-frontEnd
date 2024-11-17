import logo from "../../assets/logo.png";
import background2 from '../../assets/background2.jpg';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from '../../Redux/Slices/Auth/RegisterSlice';
import React, { useState } from "react";
import { toast } from "react-toastify";


function Register () {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); 
        try {
            await dispatch(register(formData)).unwrap();
            toast.success('Registration Successfully');
            navigate('/login');
        } catch (err: any) {
            toast.error(err);
        }
    };



    return (

        <>

            <section className="bg-gradient-to-b from-purple-100 ">
                <div className="flex justify-center min-h-screen">
                    <div className=" bg-cover w-[1100px]" style={{ backgroundImage: `url(${background2})`}}></div>

                    <div className="flex items-center w-full max-w-3xl px-8 mx-auto lg:px-12 lg:w-3/5">


                        <div className="w-full">
                            <div className="flex justify-center items-center mb-10">
                                <img className="w-[220px] " src={logo} alt="" />
                            </div>
                            <h1 className="text-3xl font-semibold font-mono tracking-wider text-gray-800 capitalize">
                                Get your free account now.
                            </h1>

                            <p className="mt-4 text-gray-500 font-mono mb-10">
                                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                            </p>


                            <div id="forms-container" className="flex overflow-hidden transition-transform transform ease-in-out duration-500">
                                <div id="clientForm" className="w-full">
                                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 ">
                                        <div>
                                            <label className="block mb-2 text-sm text-gray-600 font-serif ">UserName</label>
                                            <input name="name" value={formData.name} onChange={handleChange} required type="text" placeholder="John" className="block w-full px-5 py-3 mt-2 text-gray-300 placeholder-gray-300   bg-purple-50 border border-gray-200 rounded-lg dark:text-gray-800 dark:border-purple-600 focus:border-purple-600 focus:ring-purple-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>

                                        <div>
                                            <label className="block mb-2 text-sm text-gray-600 font-serif">Email address</label>
                                            <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-300 bg-purple-50 border border-gray-200 rounded-lg dark:text-gray-800 dark:border-purple-600 focus:border-purple-600 focus:ring-purple-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>


                                        <div>
                                            <label className="block mb-2 text-sm text-gray-600  font-serif">Password</label>
                                            <input name="password" value={formData.password} onChange={handleChange} required type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-300 bg-purple-50 border border-purple-200 rounded-lg dark:text-gray-800 dark:border-purple-600 focus:border-purple-600 focus:ring-purple-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>

                                        <button type="submit"
                                                className="flex items-center justify-between w-full px-6 h-12 mt-7 text-sm tracking-wide text-black capitalize transition-colors duration-300 transform bg-[#612DD1] rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            <span className="text-white font-medium font-serif">Sign Up </span>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </form>
                                    <div className="flex justify-center items-center mt-10 gap-3">
                                        <div className="w-48 h-[2px] bg-gray-200"></div>
                                        <Link to="/Login"><div className="text-gray-500 text-sm hover:underline font-serif">Or Sign in</div></Link>
                                        <div className="w-48 h-[2px] bg-gray-200"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}

export default Register;