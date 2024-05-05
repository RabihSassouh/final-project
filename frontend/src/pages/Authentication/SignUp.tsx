import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
// import { useState } from 'react';
// import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  
//   const handleSignup= async ()=>{
    
//     try{
//         const response= await axios.post("http://127.0.0.1:8080/",{
//             email,
//             name,
//             username,
//             password,
//         });
//         window.localStorage.setItem("token", response.data.authorisation.token);
//         navigate("/homepage");
//     } catch (error){
//         console.error("error",error);
//     }
//   }

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="min-h-screen flex">
      <div className="hidden md:block md:w-1/2 ">
        <button
          className="w-full flex items-center justify-start font-poppins text-primary font-medium hover:text-secondary"
          onClick={handleGoBack}
        >
          <MdChevronLeft className="h-6 w-6" />
          Back
        </button>
        <div className="relative w-full h-full">
          <img
            src="../../offer2.jpg"
            alt="Wedding"
            className="w-full h-full object-cover rounded-tr-32 rounded-br-32"
          />
        </div>
      </div>
      <div className="w-full max-w-md mt-5 ml-10">
        <div className="bg-[#FFFFFFB2] p-8 rounded-lg max-w-md">
          <button className="flex items-center justify-center p-2 border-[2px] border-[#00000033] text-[#000000CC] rounded-lg mb-4 w-full hover:shadow-md font-medium font-poppins">
            <FcGoogle className="w-5 h-5 mr-2" />
            Sign Up with Google
          </button>
          <div className="flex items-center justify-center mt-9 mb-6">
                <div className="border-t border-gray-300 w-20 mr-4"></div>
                <div className="text-gray-600 text-xs font-bold">OR</div>
                <div className="border-t border-gray-300 w-20 ml-4"></div>
            </div>
          <form
            action=""
            method="post"
            className="space-y-4"
          >
            <div>
              <label
                className="flex flex-left font-poppins text[#494949]"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                id="first_name"
                name="first_name"
                type="first_name"
                placeholder="Your First Name"
                className="px-4 mt-1 bg-transparent border-[2px] border-[#00000033] w-full p-2 rounded-lg font-poppins placeholder:font-poppins placeholder:text-[#00000066] focus:border-[2px]"
              />
            </div>
            <div>
              <label className="flex flex-left font-poppins text[#494949]" htmlFor="last_name">
                Last Name
              </label>
              <input
                id="last_name"
                name="last_name"
                type="last_name"
                placeholder="Your Last Name"
                className="px-4 mt-1 bg-transparent border-[2px] border-[#00000033] w-full p-2 rounded-lg font-poppins placeholder:font-poppins placeholder:text-[#00000066] focus:border-[2px]"
              />
            </div>
            <div>
              <label className="flex flex-left font-poppins text[#494949]" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email Address"
                className="px-4 mt-1 bg-transparent border-[2px] border-[#00000033] w-full p-2 rounded-lg font-poppins placeholder:font-poppins placeholder:text-[#00000066] focus:border-[2px]"
              />
            </div>
            <div>
              <label className="flex flex-left font-poppins text[#494949]" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Your Password"
                className="px-4 mt-1 bg-transparent border-[2px] border-[#00000033] w-full p-2 rounded-lg font-poppins placeholder:font-poppins placeholder:text-[#00000066] focus:border-[2px]"
              />
            </div>
            <div>
              <label
                className="flex flex-left font-poppins text[#494949]"
                htmlFor="confirm_password"
              >
                Cofirm Password
              </label>
              <input
                id="confirm_password"
                name="confirm_password"
                type="confirm_password"
                placeholder="Cofirm Your Password"
                className="px-4 mt-1 bg-transparent border-[2px] border-[#00000033] w-full p-2 rounded-lg font-poppins placeholder:font-poppins placeholder:text-[#00000066] focus:border-[2px]"
              />
            </div>
            <button className=" bg-primary text-white font-poppins font-medium w-full p-2 rounded-lg hover:bg-secondary">
              Create Your Account
            </button>
          </form>
          <div className="text-center mt-4 flex justify-center">
            <p className="text-sm font-poppins text-[#494949]">
              I Already have an account?
            </p>
            <Link
              to="/login"
              className="underline text-primary text-sm font-poppins"
            >
              <span className="ml-1 underline">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;