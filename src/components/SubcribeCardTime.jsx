import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SubcribeCard({ name, email, source, time, numbool, handleClick }) {
  const [emil, setemil] = React.useState([]);
  const [sec, setsec] = React.useState(email);
  const [click, setclick] = React.useState(false);
  React.useEffect(() => {
    if (email.length > 21) {
      for (let i = 0; i < 19; i++) {
        emil.push(email[i]);
      }
      let string = "";
      emil.forEach((element) => {
        string += element;
      });
      setsec(string + "....");
    }
  }, []);
  const [active, setActive] = useState(false);

  return (
    <div
      className="flex bg-[#FFFFFF] w-full  min-w-[210px] h-[6.875rem] min-h-[6.875rem] max-h-[6.875rem] rounded-[1rem] py-3 pl-0 pb-2 pr-4 shadow-[0px_13px_21px_#0000000D]"
      onClick={handleClick}
    >
      <div
        className={` rounded-r-[5px] ${
          numbool == email ? "bg-[#35B368]" : "bg-[#FFFFFF]"
        } w-[7px] h-[70%] max-w-[5px] mr-2 my-auto`}
      ></div>
      <img
        src={source}
        className="rounded-[0.625rem] w-[5.25rem] min-w-[5.25rem] max-w-[5.25rem] h-[5.25rem] min-h-[5.25rem] max-h-[5.25rem]"
        alt="Avatar"
      />
      <div className="flex flex-col  ml-2  max-w-[10rem] min-w-[10rem] ">
        <div className="font-medium text-[1rem] items-font-[Poppins] text-[#2f2f2f] ">
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return setActive(true);
              } else {
                return setActive(false);
              }
            }}
          >
            {name}
          </NavLink>
        </div>
        <div className="font-normal text-[0.75rem] font-Poppins text-[#2f2f2f80] leading-[19px] overflow-hidden text-ellipsis line-clamp-1   ">
          {sec}
        </div>
      </div>
      <div className="w-full flex justify-end">
        <p className="font-Poppins font-medium text-[0.875rem] leading-[21px] text-[#7777778A] ">
          {time}
        </p>
      </div>
    </div>
  );
}

export default SubcribeCard;
