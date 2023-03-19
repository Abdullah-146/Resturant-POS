import React, { useState } from "react";
import Table from "../components/Table";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Clients = () => {
  const [choice, setChoice] = useState("drivers");

  return (
    <div className="flex max-w-full bg-[#F6F6F6]">
      <div className="flex-col px-12 py-11 xs:w-full lg:w-[70%]">
        <div>
          <p className="font-Poppins font-semibold text-[2rem] mb-9">Clients</p>
        </div>
        <div className="flex">
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
          <div className="flex">
            <div
              onClick={() => setChoice("customers")}
              className="text-[#2F2F2F] font-Poppins font-medium text-[1.25rem] leading-[30px] pb-[13px] mr-[2.138rem]"
            >
              Customers
            </div>
            <div
              onClick={() => setChoice("drivers")}
              className="text-[#2F2F2F] font-Poppins font-medium text-[1.25rem] leading-[30px] pb-[13px]"
            >
              Employes
            </div>
          </div>
          <div
            className={` w-[6.938rem] h-[10px] rounded-[2px] bg-[#2F2F2F] relative ${
              choice !== "customers" &&
              "left-[8rem] ease-in-out transition transform duration-150"
            }`}
          ></div>
        </div>
        <div className="flex flex-col">
          <Table
            data={null}
            menu={
              choice === "customers"
                ? ["View Conversations", "Delete User"]
                : ["View Details", "View Conversations", "Delete User"]
            }
          />
          <div className="self-end mt-10 flex items-center justify-center text-[#2F2F2F] font-Poppins font-normal text-[1rem] leading-[24px]">
            Page 1 of 22 <KeyboardArrowLeftIcon /> 1 <KeyboardArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
