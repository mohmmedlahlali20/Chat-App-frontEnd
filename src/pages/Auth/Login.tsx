import logo from "../../assets/logo.png";
import background from '../../assets/background.jpg';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../../Redux/Slices/Auth/LoginSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



function Login () {

    const navigate = useNavigate();

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const dispatch = useDispatch();
        

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            const result = await dispatch(login({ email, password }));
            if (login.rejected.match(result)) {
                toast.error(result.payload || "Login failed");
            } else {
                navigate('/Home');
                toast.success("Login successful");
            }
        };

    return (
        <>
            
            <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md shadow-[#79C5EF]/70 mt-32 lg:max-w-6xl">
                <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: `url(${background})`}}></div>

                <div className="w-full px-6 py-4 md:px-8 lg:w-1/2 h-[710px]">
                    <div className="flex justify-center mx-auto">
                        <img className="w-[220px] h-[220px]" src={logo} alt="" />
                    </div>

                    <p className="text-xl text-center font-medium font-serif text-gray-600 dark:text-gray-500">
                        Welcome !
                    </p>

                    <a href="" className="flex items-center justify-center mt-4 text-gray-600 bg-[#79C5EF] transition-colors duration-300 transhtmlForm border rounded-lg dark:bg-[#612DD1] dark:text-gray-100 dark:hover:bg-[#612DD1] hover:text-white">
                        <div className="px-4 py-2">
                            <svg className="w-6 h-6" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                        </div>

                        <span className="w-5/6 px-4 py-3  font-bold text-center">Sign in with Google</span>
                    </a>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-[#612DD1] lg:w-1/4"></span>

                        <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login
                            with email</a>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>
                    <ToastContainer />

                    <form onSubmit={handleSubmit}>
                    
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-serif font-medium text-gray-600 dark:text-gray-400" htmlFor="LoggingEmailAddress">Email Address</label>
                            <input  name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-purple-50 dark:text-black dark:border-[#612DD1] focus:border-[#612DD1] focus:ring-opacity-40 dark:focus:border-[#612DD1] focus:outline-none focus:ring" type="email" />
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm  font-serif font-medium text-gray-600 dark:text-gray-400" htmlFor="loggingPassword">Password</label>
                                <a href="#" className="text-xs text-gray-500 dark:text-gray-400 hover:underline">Forget Password?</a>
                            </div>

                            <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-purple-50 dark:text-black dark:border-[#612DD1] focus:border-[#612DD1] focus:ring-opacity-40 dark:focus:border-[#612DD1] focus:outline-none focus:ring" type="password" />
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transhtmlForm bg-[#612DD1] rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-[#612DD1] md:w-1/4"></span>

                        <a href="register" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</a>

                        <span className="w-1/5 border-b dark:border-[#612DD1] md:w-1/4"></span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;