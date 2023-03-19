import { useState } from "react";
import { Avatar } from "@mui/material";
import "./Tabs.css";

function Tabs({
  RiderImgSrc,
  Ridername,
  RiderCity,
  RiderPhone,
  RiderEmail,
  DriverImgSrc,
  Drivername,
  DriverCity,
  DriverPhone,
  DriverEmail,
  License,
  Year,
  Color,
  CarImg,
  CarName,
}) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container" style={{ borderRadius: "13px" }}>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Rider Information
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Driver Information
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Vehicle
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="flex justify-between">
            <div className="flex flex-row justify-center items-center ">
              <Avatar
                sx={{ width: "3.18rem", height: "3.18rem" }}
                src={RiderImgSrc}
              />
              <div>
                <p className="pl-3">{Ridername}</p>
              </div>
            </div>
            <button className="w-[6.5rem] h-[3rem] rounded-[0.625rem] bg-[#2f2f2f] text-white ">
              Call
            </button>
          </div>
          <div className="mt-3 flex justify-between w-[66%]">
            <div>
              <div className="font-sans text-[#969696] text-lg font-medium">
                City
              </div>
              <div className=" font-sans text-lg text-[#2f2f2f] font-normal mt-1">
                {RiderCity}
              </div>
            </div>
            <div>
              <div className="font-sans text-[#969696] text-lg font-medium">
                Phone
              </div>
              <div className=" font-sans text-lg text-[#2f2f2f] font-normal mt-1">
                {RiderPhone}
              </div>
            </div>
            <div>
              <div className="font-sans text-[#969696] text-lg font-medium">
                Email
              </div>
              <div className=" font-sans text-lg text-[#2f2f2f] font-normal mt-1">
                {RiderEmail}
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="flex justify-between">
            <div className="flex flex-row justify-center items-center ">
              <Avatar
                sx={{ width: "3.18rem", height: "3.18rem" }}
                src={DriverImgSrc}
              />
              <div>
                <p className="pl-3">{Drivername}</p>
              </div>
            </div>
            <button className="w-[6.5rem] h-[3rem] rounded-[0.625rem] bg-[#2f2f2f] text-white ">
              Call
            </button>
          </div>
          <div className="mt-3 flex justify-between w-[66%]">
            <div>
              <div className="font-sans text-[#969696] text-lg font-medium">
                City
              </div>
              <div className=" font-sans text-lg text-[#2f2f2f] font-normal mt-1">
                {DriverCity}
              </div>
            </div>
            <div>
              <div className="font-sans text-[#969696] text-lg font-medium">
                Phone
              </div>
              <div className=" font-sans text-lg text-[#2f2f2f] font-normal mt-1">
                {DriverPhone}
              </div>
            </div>
            <div>
              <div className="font-sans text-[#969696] text-lg font-medium">
                Email
              </div>
              <div className=" font-sans text-lg text-[#2f2f2f] font-normal mt-1">
                {DriverEmail}
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="flex justify-between">
            <div className="flex flex-row justify-center items-center ">
              <div className="w-[3.625rem] h-[3.938rem] bg-[#181818] rounded-[0.75rem] flex items-center justify-center">
                <Avatar
                  sx={{ width: "100%", height: "100%" }}
                  src={CarImg}
                  variant="square"
                />
              </div>
              <div>
                <p className="pl-3">{CarName}</p>
              </div>
            </div>
            <button className="w-[7.813rem] h-[2.315rem] rounded-[1.3rem] bg-[#0066ff] text-white font-Poppins font-normal ">
              Standrad
            </button>
          </div>
          <div className="mt-3 flex justify-between w-[66%]">
            <div>
              <div className="font-sans text-[#969696] text-lg font-medium">
                License Plate
              </div>
              <div className=" font-sans text-lg text-[#2f2f2f] font-normal mt-1">
                {License}
              </div>
            </div>
            <div>
              <div className="font-sans text-[#969696] text-lg font-medium">
                Year
              </div>
              <div className=" font-sans text-lg text-[#2f2f2f] font-normal mt-1">
                {Year}
              </div>
            </div>
            <div>
              <div className="font-sans text-[#969696] text-lg font-medium">
                Color
              </div>
              <div className=" font-sans text-lg text-[#2f2f2f] font-normal mt-1">
                {Color}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
