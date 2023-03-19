import { Button } from "@mui/material";
import React from "react";

function SubcribeCard({ name, email, source }) {
  const [emil, setemil] = React.useState([]);
  const [sec, setsec] = React.useState(email);
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
  return (
    <div className="flex bg-[#FFFFFF]   rounded-[0.625rem] py-3 pl-2 pb-2 pr-1 drop-shadow-[0_9px_29px_rgba(0, 0, 0, 0.04)]">
      <img
        src={source}
        className="rounded-[0.625rem] w-[5.25rem] min-w-[5.25rem] max-w-[5.25rem] h-[5.25rem] min-h-[5.25rem] max-h-[5.25rem]"
        alt="Avatar"
      />
      <div className="flex flex-col  ml-2  flex-1 min-w-[10rem] ">
        <div className="font-medium text-[1rem] items-font-[Poppins] text-[#2f2f2f] ">
          {name}
        </div>
        <div className="font-normal text-[0.75rem] font-Poppins text-[#2f2f2f80] leading-[19px] overflow-hidden text-ellipsis line-clamp-1   ">
          {sec}
        </div>
        <div className="self-end flex justify-center items-center justify-self-stretch mt-auto items-font-[Poppins] bg-[#35b368] text-white text-[0.75rem]  py-1 px-2  w-[6.375rem] min-w-[6.375rem] max-w-[6.375rem] h-[1.438rem] min-h-[1.438rem] max-h-[1.438rem] rounded-[0.313rem] ">
          Subscribed
        </div>
      </div>
    </div>
  );
}

export default SubcribeCard;
