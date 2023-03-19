import React from "react";
import HandWave from "../SVGs/HandWave";
import Email from "../SVGs/Email";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import Password from "../SVGs/Password";
import PirateEye from "../SVGs/PirateEye";

function Login() {
  const [credentials, setcredentials] = React.useState({ name: "", pass: "" });

  return (
    <div className="flex flex-1  w-full h-screen justify-center items-center  ">
      <div className="flex flex-1 flex-col items-center   rounded-lg p-5 w-[60%]   ">
        <text className="text-4xl font-Poppins font-bold text-[#2f2f2f] text-center md:mb-[3.4rem]  xs:mb-[2rem] ">
          LOGO
        </text>
        <div className="flex flex-row justify-center  mt-8 ml-[59px] ">
          <text className="text-4xl font-Poppins font-bold text-[#2f2f2f] text-center my-auto mr-6  ">
            Welcome Back Admin !
          </text>
          <HandWave />
        </div>
        <div className="flex flex-row justify-center items-center mt-0 mb-8 ">
          <text className="text-[1.2rem] font-Poppins font-normal leading-[27px] text-[#2f2f2f] text-center  ">
            Login to continue with activities
          </text>
        </div>
        <div className="w-[27%] xs:min-w-[70%] md:min-w-[27%] ">
          <div className="relative  flex mt-4 min-w-[12.5rem] w-full justify-center  self-center ">
            <span className="text-[#2f2f2f] text-4xl  absolute left-[0.9rem] bottom-[1.95rem] ">
              <Email />
            </span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Mail?"
              className="bg-[#ffffff] min-h-[5.6rem] min-w-[12.5rem] w-full p-2 mt-[1rem]  pl-[4.8rem] flex-[7] border-2 border-[#2f2f2f] text-[1.2rem] font-Poppins font-normal rounded-[8px]"
            />
          </div>

          <div className="relative  flex mt-4 min-w-[12.5rem] w-full justify-center  self-center ">
            <span className="text-[#2f2f2f] text-4xl  absolute left-[0.9rem] bottom-[1.58rem] ">
              <Password />
            </span>
            <span className="text-[#2f2f2f] text-4xl  absolute right-[0.9rem] bottom-[1.98rem] ">
              <PirateEye />
            </span>
            <input
              type="password"
              name=""
              id=""
              placeholder="Your Passcode?"
              className="bg-[#ffffff] min-h-[5.6rem] min-w-[12.5rem] w-full p-2 mt-[1rem]  pl-[4.8rem] flex-[7] border-2 border-[#2f2f2f] text-[1.2rem] font-Poppins font-normal rounded-[8px]"
            />
          </div>
          <text className="w-full flex justify-end ">Forget Password?</text>
        </div>
        <div className="w-[27%] xs:min-w-[70%] md:min-w-[27%] ">
          <input
            type="button"
            value="Login"
            className="btn mt-[3rem] bg-[#2f2f2f] min-w-[12.5rem] w-full min-h-[5.6rem] rounded-[8px] text-white font-normal font-Poppins text-[18px]  hover:scale-[1.02]"
          />
          <input
            type="button"
            value="Register"
            className="btn mt-7 bg-[white] min-w-[12.5rem] w-full min-h-[5.6rem] rounded-[8px] text-[#2f2f2f] border-2 border-[#2f2f2f] font-normal font-Poppins text-[18px]  hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-row justify-center items-center mt-4  ">
          <text className="text-[1.2rem] font-Poppins font-normal leading-[27px] text-[#2f2f2f] text-center  ">
            Don't have an account?{" "}
            <span className="font-semibold">tap on register</span>
          </text>
        </div>
      </div>
    </div>
  );
}

export default Login;
