import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KeyIcon from "@mui/icons-material/Key";
function ChangePassword() {
  const [hidden, sethidden] = React.useState(false);

  return (
    <div
      style={{ backdropFilter: "blur(2px)" }}
      className={`absolute flex items-center justify-center  bg-white bg-opacity-60 bg-clip-padding z-10 min-w-screen w-screen h-screen  min-h-screen ${
        hidden ? "hidden" : ""
      }`}
    >
      <div className=" w-[45rem] h-[31.315rem] min-w-[45rem] min-h-[31.315rem] max-w-[45rem] max-h-[31.315rem] bg-[white] border-[2px] flex flex-col justify-center items-center z-20 relative">
        <div
          className="absolute top-0 right-0 p-4 cursor-pointer"
          onClick={() => sethidden(true)}
        >
          <CloseIcon />
        </div>
        <div className="font-Poppins font-semibold text-[2rem] text-[#2f2f2f] leading-[3rem]">
          Change Password
        </div>
        <div className="relative  ">
          <span>
            <KeyIcon
              className="text-[#2f2f2f] text-2xl flex-1 h-[100%] absolute left-[0.9rem] bottom-[1.5rem] "
              style={{ transform: "rotate(-60.21deg)" }}
            />
          </span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Old Password"
            className="bg-[#f4f4f4] w-[23.688rem] h-[4.563rem] rounded-[0.625rem] p-2 mt-[3rem] border-none pl-[2.8rem] flex-[7] outline-none"
          />
          <button className="text-[#2f2f2f] text-2xl flex-1 h-[100%] absolute right-[0.9rem] top-[1.2rem]">
            <VisibilityOffIcon />
          </button>
        </div>
        <div className="relative ">
          <span>
            <KeyIcon
              className="text-[#2f2f2f] text-2xl flex-1 h-[100%] absolute left-[0.9rem] bottom-[1.5rem] "
              style={{ transform: "rotate(-60.21deg)" }}
            />
          </span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Old Password"
            className="bg-[#f4f4f4] w-[23.688rem] h-[4.563rem] rounded-[0.625rem] p-2 mt-[1rem] border-none pl-[2.8rem] flex-[7] outline-none"
          />
        </div>
        <div>
          <button className="h-[4.5rem] w-[23.688rem] bg-[#2f2f2f] rounded-[0.625rem] text-white mt-[2rem]">
            Send confirmation
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
