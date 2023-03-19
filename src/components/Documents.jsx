import React from "react";
import MenuDots from "../SVGs/MenuDots";
import PicSvg from "../SVGs/picSvg";
import PdfSvg from "../SVGs/PdfSvg";
import FileArrowSvg from "../SVGs/fileArrowSvg";

const Documents = ({ fileName, sizeinMb }) => {
  return (
    <div className="drop-shadow-lg rounded-[0.75rem] max-w-[17.938rem] min-w-[17.938rem] w-[17.938rem] h-[20.063rem] max-h-[20.063rem] min-h-[20.063rem] bg-[#FFFFFF]">
      <div className="flex justify-end  px-[0.938rem] pt-[0.938rem] mb-[1.663rem]">
        <MenuDots />
      </div>
      <div className="flex flex-col items-center border-b">
        <div className="flex justify-center items-center p-[1.688rem] rounded-[0.75rem] w-[7.438rem] max-w-[7.438rem] min-w-[7.438rem] h-[7.438rem] max-h-[7.438rem] min-h-[7.438rem] border ">
          {fileName.split(".")[1] === "png" ? <PicSvg /> : <PdfSvg />}
        </div>
        <p className="mb-[2.063rem] mt-[1rem] font-Poppins leading-[1.688rem] text-[1.125rem] font-normal text-[#2F2F2F]">
          {fileName}
        </p>
      </div>
      <div className="flex justify-between items-center px-[0.938rem] pt-[0.438rem]">
        <div className="font-Poppins leading-[1.406rem] text-[0.938rem] font-normal">
          <p className="text-[#2F2F2FEB]">Filesize</p>
          <p className="text-[#35B368]">{sizeinMb}.mb</p>
        </div>
        <FileArrowSvg />
      </div>
    </div>
  );
};

export default Documents;
