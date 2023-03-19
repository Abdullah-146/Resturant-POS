import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";

const InpuputContainer = ({ type, placeholder, icon: ICON }) => {
  return (
    <div
      className={`flex flex-row flex-1 pr-8 ${
        !ICON && "pl-7"
      } py-6 border border-[#2F2F2F] rounded-lg justify-between items-center font-Poppins font-[400] text-lg leading-7`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="outline-none max-w-[100%] "
      />
      {ICON && <ICON />}
    </div>
  );
};

const CreateCouponModal = (props) => {
  return (
    <div className="absolute flex-1 flex items-center justify-center w-[100%] h-full bg-[#00000066] z-[100]">
      <div className="bg-[#fff] rounded-3xl w-[40%]">
        {/* heading and close button container */}
        <div className="flex flex-row justify-between items-center py-7 px-8 border-b-[1px] border-[#00000038]">
          <p className="font-medium font-Poppins text-[1.5rem]">
            Create Coupon
          </p>
          <div onClick={() => props.handleClick()}>
            <CancelIcon sx={{ width: 25, height: 25 }} />
          </div>
        </div>
        {/* Middle container */}
        <div className="py-7 px-8">
          <div className="mb-7">
            <p className="font-Poppins font-[500] text-lg leading-7">
              Enter Details given below
            </p>
          </div>
          {/* Inputs Container */}
          <div className="grid grid-cols-2 gap-3 mb-20">
            <InpuputContainer type={"text"} placeholder={"Title"} />
            <InpuputContainer type={"text"} placeholder={"Percentage off"} />
            <InpuputContainer type={"date"} placeholder={"Start Date"} />
            <InpuputContainer type={"date"} placeholder={"End Date"} />
            <InpuputContainer type={"Number"} placeholder={"No of rides"} />
          </div>
          {/* Button Container */}
          <div className="flex justify-center mb-8">
            <button className="bg-[#161616] text-[#fff] px-12 py-5 rounded-md">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCouponModal;
