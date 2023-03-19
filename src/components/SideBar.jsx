import React, { useState } from "react";
import LOGO from "../SVGs/LOGO";
import Dashboard from "../SVGs/Dashboard";
import Clients from "../SVGs/Clients";
import Chat from "../SVGs/Chat";
import Ride from "../SVGs/Ride";
import History from "../SVGs/History";
import Verifications from "../SVGs/Verifications";
import Settings from "../SVGs/Settings";
import Signout from "../SVGs/Signout";
import Coupons from "../SVGs/Coupons";
import Notification from "../SVGs/Notification";
import SLinks from "./SLinks";
import { Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const SideBar = ({ visible, handleVisible }) => {
  const [verifications, setVerifications] = useState(10);
  const [chats, setChats] = useState(1);
  return (
    <nav
      className={`flex flex-col pt-[2.688rem] pb-[4.732rem] space-y-32 min-h-screen max-h-screen ${
        visible ? "xs:absolute" : "xs:hidden "
      }  lg:relative lg:flex bg-[#FFFFFF] overflow-y-auto xs:z-50`}
    >
      <div className="flex-1 w-full flex flex-col items-center">
        {/* LOGO DIV */}
        <div
          onClick={handleVisible}
          className="xs:block lg:hidden absolute top-1 right-1"
        >
          <CloseIcon />
        </div>
        <div className="mb-[4.063rem]">
          <LOGO />
        </div>

        {/* Links DIV */}
        <div className="flex-1 flex flex-col space-y-14 w-full font-Poppins text-[1rem]  font-medium overflow-y-auto">
          <SLinks
            manageClick={handleVisible}
            icon={Dashboard}
            text={"Dashboard"}
            to={"/Dashboard"}
          />
          <SLinks
            manageClick={handleVisible}
            icon={MenuBookIcon}
            text={"Products"}
            to={"/Products"}
          />
          {/* <SLinks
            manageClick={handleVisible}
            icon={Clients}
            text={"Clients"}
            to={"/Clients"}
          /> */}

          <SLinks
            manageClick={handleVisible}
            icon={History}
            text={"History"}
            to={"/History"}
          />
          <SLinks
            manageClick={handleVisible}
            icon={Verifications}
            text={"Customer Details"}
            to={"/customerDetails"}
            verifications={verifications}
          />
          <SLinks
            manageClick={handleVisible}
            icon={Settings}
            text={"Change Password"}
            to={"/Settings"}
          />
          <SLinks
            manageClick={handleVisible}
            icon={Coupons}
            text={"Coupons"}
            to={"/Coupons"}
          />
          <SLinks
            manageClick={handleVisible}
            icon={Notification}
            text={"Notifications"}
            to={"/Notifications"}
          />
          <SLinks
            manageClick={handleVisible}
            icon={Signout}
            text={"SignOut"}
            to={"/SignOut"}
            color={true}
          />
        </div>
      </div>

      {/* User Avatar DIV */}
      <div className="flex-1 flex justify-center items-end">
        <div className="flex items-center justify-center">
          <Avatar
            sx={{
              border: 1,
              marginRight: 1,
              width: "3.286rem",
              height: "3.286rem",
            }}
            src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
            alt="User Image or Avatar"
          />
          <p className="font-normal text-[1rem] leading-[24px]">User Name</p>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
