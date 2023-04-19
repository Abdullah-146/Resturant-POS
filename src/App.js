import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Chats from "./pages/Chats";
import Rides from "./pages/Rides";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Coupons from "./pages/Coupons";
import SignOut from "./pages/SignOut";
import Login from "./pages/Login";
import Verifications from "./pages/Verifications";
import Products from "./pages/Products";
import MenuIcon from "@mui/icons-material/Menu";
import "./main.css";
import Notifications from "./pages/Notifications";
import Letsdothis from "./pages/letsdothis";;
// import dotenv from 'dotenv';

// dotenv.config();

function App() {
  const [visible, setVisible] = useState(true);
  const [authenticated, setauthenticated] = useState(true);
  const handleVisible = () => {
    setVisible(!visible);
  };

  return authenticated ? (
    <div className="flex min-w-screen max-w-screen w-screen min-h-screen overflow-x-hidden overflow-y-auto max-h-screen font-Poppins">
      {/* <div className=""> */}
      <SideBar visible={visible} handleVisible={handleVisible} />
      {/* </div> */}
      <div className="bg-[#F6F6F6] flex-1  min-h-screen">
        <div
          onClick={() => setVisible(true)}
          className={` ${
            !visible ? "sm:absolute" : "sm:hidden"
          } lg:hidden top-14 left-3`}
        >
          <MenuIcon />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/Dashboard" />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Chats" element={<Chats />} />
          <Route path="/Rides" element={<Rides />} />
          <Route path="/History" element={<History />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Coupons" element={<Coupons />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Signout" element={<SignOut />} />
          <Route path="/customerDetails" element={<Verifications />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div>
      <Login />
    </div>
  );
}

export default App;
