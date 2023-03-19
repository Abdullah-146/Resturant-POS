import { Badge } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SLinks = ({
  icon: ICON,
  text,
  to,
  color = null,
  manageClick,
  chats,
  verifications,
}) => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex"
    >
      {/* Below Div is for Green On Left Side of SideBar */}
      <div
        className={` rounded-r-[5px] ${
          !hover && !active ? "bg-[#FFFFFF]" : "bg-[#35B368]"
        } w-[5px] max-w-[5px]`}
      ></div>
      <div
        className={`flex-1 flex items-center px-10 text-[1.25rem] font-medium ${
          !hover && !active && !color ? "text-[#2F2F2F87]" : "text-[#2F2F2F]"
        } ${color && "text-[#C90505]"} `}
      >
        <div className="min-w-[30px] max-w-[30px] mr-2">
          <Badge
            color="success"
            badgeContent={
              to == "/Chats"
                ? chats
                : to == "/Verifications"
                ? verifications
                : 0
            }
          >
            <ICON
              hover={hover || active ? true : false}
              sx={{ width: 28, height: 28 }}
            />
          </Badge>
        </div>
        {/* change the below p tag to NavLink */}
        <NavLink
          onClick={manageClick}
          to={to}
          className={({ isActive }) => {
            if (isActive) {
              setActive(true);
              return !color ? "text-[#2F2F2F]" : "text-[#C90505]";
            } else {
              setActive(false);
              return !color ? "text-[#2F2F2F87]" : "text-[#C90505]";
            }
          }}
        >
          {text}
        </NavLink>
      </div>
    </div>
  );
};

export default SLinks;
