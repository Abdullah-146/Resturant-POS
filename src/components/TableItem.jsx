import { Avatar } from "@mui/material";
import { useState } from "react";

const TableItem = ({
  AvatarSrc,
  name,
  email,
  phone,
  city,
  icon: ICON,
  handleMenuClick,
  menuItems,
}) => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(true);
  };
  const handleMenu = (choosed) => {
    if (choosed === "View Details") {
      handleDetails();
    } else if (choosed === "View Conversations") {
      handleConv();
    } else if (choosed === "Delete User") {
      handleDelete();
    }
  };
  const handleDetails = () => {
    alert("Details Clicked");
  };
  const handleConv = () => {
    alert("Conversations Clicked");
  };
  const handleDelete = () => {
    alert("Delete Clicked");
  };

  return (
    <div className="flex items-center space-x-6 ">
      <div className="max-w-[30%] w-[30%] flex items-center">
        <Avatar
          src={AvatarSrc}
          sx={{ width: "3.188rem", height: "3.188rem" }}
        />
        <p className="ml-[16px] font-DMsans font-normal text-[1rem] leading-[20.384px] overflow-auto text-ellipsis line-clamp-1">
          {name}
        </p>
      </div>
      <div className="max-w-[30%] w-[30%]">
        <p className="overflow-auto text-ellipsis line-clamp-1 font-DMsans font-normal text-[1rem] leading-[20.384px]">
          {email}
        </p>
      </div>
      <div className="max-w-[15%] w-[15%]">
        <p className="overflow-auto text-ellipsis line-clamp-1 font-DMsans font-normal text-[1rem] leading-[20.384px]">
          {phone}
        </p>
      </div>
      <div className="max-w-[15%] w-[15%]">
        <p className="overflow-auto text-ellipsis line-clamp-1 font-DMsans font-normal text-[1rem] leading-[20.384px]">
          {city}
        </p>
      </div>
      <div className="max-w-[10%] w-[10%]">
        <div
          onMouseOver={handleClick}
          onMouseLeave={() => setMenu(false)}
          className="flex items-center justify-center rotate-90 relative"
        >
          <ICON opacity={false} />
          <div
            className={`${
              menu ? "absolute" : "hidden"
            } bg-[#2F2F2F] text-[#FFF] font-Poppins font-normal text-[1rem] leading-[24px] -rotate-90 z-50 -left-10 xs:-bottom-44 md:bottom-20`}
          >
            <ul className="z-50">
              {menuItems.map((item) => (
                <li
                  onClick={() => handleMenu(item)}
                  className="px-10 py-1 flex items-center justify-center w-[180px] border-b border-[#fff]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableItem;
