import { Avatar } from "@mui/material";
import React from "react";

const ChatUser = ({ src, name, text, time, chat, handleClick }) => {
  return (
    <div onClick={()=>{!chat && handleClick(name)}} className={`flex items-center mb-[39.008px] ${!chat && 'border-b pb-[12px]'}`}>
      <Avatar sx={{ width: "3.813rem", height: "3.813rem" , alignSelf:chat && 'start'}} src={src} />
      <div className={`${chat ? 'ml-[12px] ' : 'ml-[17.008px]'} ${!chat && 'flex-1'}`}>
        <div className={`flex items-center ${!chat && 'justify-between pr-1'}`}>
          <p className={`font-Poppins font-medium ${chat ? 'text-[1.125rem] leading-[27.008px] mr-5' :' text-[1.25rem] leading-[30px]'}  text-[#000000]`}>
            {name}
          </p>
          <p className="font-Poppins font-medium text-[0.875rem] leading-[21.008px] text-[#7777778A]">
            {time}
          </p>
        </div>
        {chat ? (
            <p
              className={`inline-block px-3 pt-[12px] pb-[13.008px] bg-[#EDEDED] rounded-tr-[16px] rounded-b-[16px] font-Poppins font-normal text-[1rem] leading-[24px] text-[#777777]`}
            >
            {text}
            </p>
        ) : (
          <p
            className={`max-w-[80%] font-Poppins font-normal text-[1rem] leading-[24px] text-[#777777] overflow-hidden text-ellipsis line-clamp-1`}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatUser;
