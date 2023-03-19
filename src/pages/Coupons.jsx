import React from "react";
import Table from "../components/Table";
import { useState } from "react";
import CreateCouponModal from "../components/CreateCouponModal";
import SearchIcon from "@mui/icons-material/Search";
import MenuDots from "../SVGs/MenuDots";

function Cards({ title, percentage, start, end, rides }) {
  let menuItems = ["edit", "Activate", "Delete Coupon"];
  const [menu, setMenu] = React.useState(false);
  return (
    <div className=" flex-1 w-full bg-white font-Poppins text-[#2F2F2F] rounded-[16px] p-3  ">
      <div>
        <div className="flex flex-row justify-between  items-center border-b-[#0000001F] border-b-[1px] w-full ">
          <p className="text-[#2F2F2F] text-[24px] font-normal ">{title}</p>
          <p className="text-[#35B368] text-[24px] font-normal ">
            {percentage}
          </p>
        </div>
        <div className="flex flex-row justify-evenly  items-center space-x-7  mx-5 mt-3">
          {/* 1 */}
          <div className="flex flex-col items-start ">
            <p className="text-[13px] font-light text-black font-Poppins min-w-[75px]">
              {start}
            </p>
            <p className="text-[#A6A6A6] text-[10px] font-normal font-Poppins  ">
              Start Date
            </p>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-start ">
            <p className="text-[13px] font-light text-black font-Poppins min-w-[75px] ">
              {end}
            </p>
            <p className="text-[#A6A6A6] text-[10px] font-normal font-Poppins ">
              End Date
            </p>
          </div>
          {/* 3 */}
          <div className="flex flex-col items-start ">
            <p className="text-[13px] font-light text-black font-Poppins min-w-[75px] ">
              {rides}
            </p>
            <p className="text-[#A6A6A6] text-[10px] font-normal font-Poppins ">
              No of orders
            </p>
          </div>
        </div>
      </div>
      <div
        onMouseOver={() => setMenu(true)}
        onMouseLeave={() => setMenu(false)}
        className="flex flex-1  items-center justify-end  relative mt-10  "
        style={{ alignSelf: "end" }}
      >
        <div className="flex  items-end rotate-90 justify-end mr-5 ">
          <MenuDots opacity={false} />
        </div>
        <div
          className={`${
            menu ? "absolute" : "hidden"
          } bg-[#2F2F2F] text-[#FFF] font-Poppins font-normal text-[1rem] leading-[24px]  z-50 -right-30 top-[10]  `}
        >
          <ul className="z-50">
            {menuItems.map((item) => (
              <li className="px-10 py-1 flex items-center justify-center w-[180px] border-b border-[#fff]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const Coupons = () => {
  const [modal, setModal] = useState(false);
  const [choice, setChoice] = useState("Active");

  let array = [
    {
      title: "Cupoun 1",
      percentage: "50%",
      start: "20 Dec 2021",
      end: "20 Dec 2021",
      rides: "5 Orders",
    },
    {
      title: "Cupoun 1",
      percentage: "50%",
      start: "20 Dec 2021",
      end: "20 Dec 2021",
      rides: "5 Orders",
    },
    {
      title: "Cupoun 1",
      percentage: "50%",
      start: "20 Dec 2021",
      end: "20 Dec 2021",
      rides: "5 Orders",
    },
    {
      title: "Cupoun 1",
      percentage: "50%",
      start: "20 Dec 2021",
      end: "20 Dec 2021",
      rides: "5 Orders",
    },
    {
      title: "Cupoun 1",
      percentage: "50%",
      start: "20 Dec 2021",
      end: "20 Dec 2021",
      rides: "5 Orders",
    },
    {
      title: "Cupoun 1",
      percentage: "50%",
      start: "20 Dec 2021",
      end: "20 Dec 2021",
      rides: "5 Orders",
    },
    {
      title: "Cupoun 1",
      percentage: "50%",
      start: "20 Dec 2021",
      end: "20 Dec 2021",
      rides: "5 Orders",
    },
    {
      title: "Cupoun 1",
      percentage: "50%",
      start: "20 Dec 2021",
      end: "20 Dec 2021",
      rides: "5 Orders",
    },
  ];

  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <div className="flex max-w-full bg-[#F6F6F6]">
      {modal && <CreateCouponModal handleClick={handleCloseModal} />}
      <div className="flex-col px-12 py-11  xs:w-full lg:w-full ">
        <div>
          <p className="font-Poppins font-semibold text-[2rem] mb-9">Coupons</p>
        </div>
        <div className="flex w-[70%] ">
          {/* //////////  Search Bar///////////// */}
          <div className="flex items-center shadow-[0px_14px_39px_#0000000D] w-full border bg-[#ffffff] rounded-[10px] pl-5">
            <SearchIcon className="text-[#2f2f2f] text-3xl" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search area, city"
              className=" w-full h-[4rem] rounded-r-[10px] p-2  border-none  outline-none"
            />
          </div>
          {/* ////////////// Search Button /////////// */}
          <div className="flex justify-center items-center bg-[#2F2F2F] text-[#FFF] rounded-[10px] font-Poppins font-medium text-[1.25rem] py-4 px-14 ml-5">
            Search
          </div>
        </div>
        {/* //////////// Slider Div ///////////// */}
        <div className="flex flex-col border-[#2F2F2F17] border-b px-3 my-14">
          <div className="flex justify-between items-center ">
            <div className="flex ml-4">
              <div
                onClick={() => setChoice("Active")}
                className="text-[#2F2F2F] font-Poppins font-medium text-[1.25rem] leading-[30px] pb-[13px] mr-[2.138rem]"
              >
                Active
              </div>
              <div
                onClick={() => setChoice("Non Active")}
                className="text-[#2F2F2F] font-Poppins font-medium text-[1.25rem] leading-[30px] pb-[13px]"
              >
                Non Active
              </div>
            </div>
            <div
              onClick={() => setModal(true)}
              className="px-8  py-4 bg-[#0066FF] font-Poppins text-white cursor-pointer flex justify-center items-center rounded-md text-[20px] font-normal "
            >
              + Create Coupon
            </div>
          </div>
          <div
            className={` w-[6.938rem] h-[10px] rounded-[2px] bg-[#2F2F2F] relative ${
              choice == "Non Active" &&
              "left-[6.88rem] ease-in-out transition transform duration-800"
            }`}
          ></div>
        </div>
        {/*  /////////////lets map component\\\\\\\\\\\\\\\\\ */}
        <div className="flex xs:flex-col xs:items-center md:flex-row xs:space-y-7    flex-wrap ">
          {array.map(({ title, start, end, rides, percentage }) => {
            return (
              <div className=" min-w-[291px] xs:w-full md:w-[23.33%] mt-6 ml-5 ">
                <Cards
                  title={title}
                  start={start}
                  end={end}
                  rides={rides}
                  percentage={percentage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Coupons;

{
  /* 

*/
}
