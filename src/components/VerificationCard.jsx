import { Avatar } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AddCardIcon from "@mui/icons-material/AddCard";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import React from "react";
import Documents from "./Documents";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SupportIcon from "@mui/icons-material/Support";
import AdjustIcon from "@mui/icons-material/Adjust";
import TwentyZeroMpIcon from "@mui/icons-material/TwentyZeroMp";
import Car from "../SVGs/Car";
import Steering_wheel from "../SVGs/Steering_wheel";
import CarPlate from "../SVGs/CarPlate";
import Idcardfilled from "../SVGs/Idcardfilled";

import { borderRadius } from "@mui/system";
import Table from "./Table";

function VerificationCard({
  source,
  name,
  email,
  username,
  ph,
  location,
  Cnic,
  Cnic2,
  date,
}) {
  const [choice, setChoice] = React.useState("drivers");
  return (
    <div className="min-h-full max-h-full overflow-y-auto w-full">
      <div className="mt-[1rem] pl-6 pr-7 flex flex-row w-[100%] font-Poppins   ">
        {/* main credentials div */}
        <div className="w-[13.25rem] max-w-[13.25rem] h-[13.1rem] max-h-[13.1rem] min-w-[13.25rem] min-h-[13.1rem] bg-[#181818] rounded-[0.75rem] ">
          <Avatar
            sx={{ width: "100%", height: "100%", borderRadius: "0.625rem" }}
            src={source}
            variant="square"
          />
        </div>

        <div className="w-full mt-4 font-Poppins ">
          {/* Name and Date */}
          <div className=" pl-3 flex flex-row justify-between  w-[33rem] h-[3rem] ">
            <p className="leading-[3rem] text-[2rem] text-[#2f2f2f] font-medium font-Poppins ">
              {name}
            </p>
            <p className="text-[1rem] font-normal leading-6 self-end mb-[6px] text-[#2f2f2f56] font-Poppins">
              {date}
            </p>
          </div>
          {/* below contains both coloumns */}
          <div className="flex">
            <div className="flex flex-col mt-7">
              <div className="flex pl-3 ">
                <Avatar
                  variant="circle"
                  sx={{ width: "1.6rem", height: "1.6rem" }}
                />
                <p className="ml-2 text-[1.12rem] text-[#2f2f2f84] font-normal font-Poppins">
                  {username}
                </p>
              </div>
              <div className="flex pl-3 mt-4">
                <EmailIcon />
                <p className="ml-2 text-[1.12rem] text-[#2f2f2f84] font-normal font-Poppins">
                  {email}
                </p>
              </div>
              <div className="flex pl-3 mt-4">
                <Idcardfilled />
                <p className="ml-2 text-[1.12rem] text-[#2f2f2f84] font-normal font-Poppins">
                  {Cnic}
                </p>
              </div>
            </div>
            {/* Coloumn 2 starts here */}
            <div className="flex flex-col mt-7  ml-[6rem]">
              <div className="flex pl-3 ">
                <PhoneIcon />
                <p className="ml-2 text-[1.12rem] text-[#2f2f2f84] font-normal font-Poppins">
                  {ph}
                </p>
              </div>
              <div className="flex pl-3 mt-4">
                <LocationCityIcon />
                <p className="ml-2 text-[1.12rem] text-[#2f2f2f84] font-normal font-Poppins">
                  {location}
                </p>
              </div>
              <div className="flex pl-3 mt-4">
                <Idcardfilled />
                <p className="ml-2 text-[1.12rem] text-[#2f2f2f84] font-normal font-Poppins">
                  {Cnic2}
                </p>
              </div>
            </div>
            {/* coloumn 2 ends here */}
          </div>
          {/* both coloumns end here */}
        </div>
      </div>
      <p className="font-Poppins leading-10 text-[2rem] font-semibold mt-[2.2rem] pl-6 ">
        Orders
      </p>
      <div className="flex flex-col  ">
        <Table
          data={null}
          menu={
            choice === "customers"
              ? ["View Conversations", "Delete User"]
              : ["View Details", "View Conversations", "Delete User"]
          }
        />
      </div>

      {/* button div */}
      <div className="flex flex-row mt-5 pl-6">
        <button className="w-[12.4rem] h-[2.9rem] font-Poppins bg-[#C90505] text-white text-[1.1rem] font-normal rounded-[0.52rem]  ">
          Delete
        </button>
        <button className="w-[12.4rem] h-[2.9rem] font-Poppins bg-[#2f2f2f] text-white text-[1.1rem] font-normal rounded-[0.52rem] ml-4">
          Suspend
        </button>
      </div>

      <div className="mt-[15rem]"></div>
    </div>
  );
}

export default VerificationCard;
