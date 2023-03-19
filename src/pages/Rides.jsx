import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ProgressCard from "../components/ProgressCard";
import Tabs from "../components/Tabs";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../components/Scrollbar.css";
import Maps from "../components/Maps";
const Rides = () => {
  const [progressCards, setProgressCards] = useState([]);
  const [hidden, sethidden] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [route, setRoute] = useState({
    start: { lat: 40, lng: -80 },
    end: { lat: 50, lng: -85 },
  });
  const [move, setMove] = useState({ lat: 49, lng: -70 });
  useEffect(() => {
    let mount = true;

    if (mount) {
      setProgressCards([
        {
          id: "23442",
          done: false,
          pickup: "Street abc, ABC Road, Town Abc",
          dropoff: "Street abc, ABC Road, Town Abc",
        },
        {
          id: "23234",
          done: true,
          pickup: "Street abc, ABC Road, Town Abc",
          dropoff: "Street abc, ABC Road, Town Abc",
        },
        {
          id: "54891",
          done: false,
          pickup: "Street abc, ABC Road, Town Abc",
          dropoff: "Street abc, ABC Road, Town Abc",
        },
        {
          id: "51891",
          done: false,
          pickup: "Street abc, ABC Road, Town Abc",
          dropoff: "Street abc, ABC Road, Town Abc",
        },
        {
          id: "59891",
          done: false,
          pickup: "Street abc, ABC Road, Town Abc",
          dropoff: "Street abc, ABC Road, Town Abc",
        },
        {
          id: "53891",
          done: false,
          pickup: "Street abc, ABC Road, Town Abc",
          dropoff: "Street abc, ABC Road, Town Abc",
        },
      ]);
      return () => (mount = false);
    }
  }, []);

  const handleClicked = (id) => {
    setSelectedId(id);
    setShow(true);
  };

  const handleClose = () => {
    setSelectedId(null);
    setShow(false);
  };

  return (
    <div className="flex flex-1">
      {/* left one */}
      <div
        className={`flex flex-col bg-[#f6f6f6f] min-w-[30%] w-[30%] max-h-screen px-[1rem] pt-[1rem] xs:w-full xs:${
          !show ? "flex" : "hidden"
        } md:flex md:w-[30%]  `}
      >
        <p className="text-[2rem] text-[#2f2f2f] font-Poppins leading-[3rem] font-semibold">
          All Rides
        </p>
        <div className="relative mb-4 pr-4 w-full min-w-[250px] ">
          <span>
            <SearchIcon className="text-[#2f2f2f] text-3xl  absolute left-[0.9rem] bottom-[1.29rem] " />
          </span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Active, completed rides"
            className="bg-[#ffffff] w-full h-[4rem] rounded-[0.625rem] p-2 mt-[1rem] border-none pl-[2.8rem] flex-[7] outline-none"
          />
        </div>
        <div className="overflow-y-auto pr-4 min-w-[250px] pb-5">
          {progressCards.map(({ id, done, pickup, dropoff }) => {
            return (
              <div className="mt-4">
                <ProgressCard
                  id={id}
                  done={done}
                  pickup={pickup}
                  dropoff={dropoff}
                  touchable={true}
                  handleClicked={handleClicked}
                  show={selectedId === id ? true : false}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* Right one  */}
      <div
        className={`relative xs:${
          show ? "flex" : "hidden"
        } md:flex flex-col w-full h-screen flex `}
      >
            <Maps route={route} move={move} />
            <div onClick={()=>setMove({...move,lat:move.lat + 0.01})} className="bg-[#0066FF] rounded-[10px] font-Poppins font-medium text-[0.875rem] leading-[21px] text-[#FFFFFF] px-10 py-4 absolute bottom-16 left-10 cursor-pointer">Show Chat</div>

        <div
          className={`absolute top-10 self-center  md:${
            hidden ? "hidden" : ""
          } flex flex-col `}
        >
          <div onClick={handleClose} className="md:hidden mr-3">
            <ArrowBackIosIcon />
          </div>
          <Tabs
            RiderImgSrc={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            }
            Ridername="ABDULLAH"
            RiderCity={"Wah_Cantt"}
            RiderPhone={"03485517655"}
            RiderEmail={"Abdullah@gmail.com"}
            DriverImgSrc={
              "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
            }
            Drivername="Muzammil"
            DriverCity={"Pindi"}
            DriverPhone={"0348564455"}
            DriverEmail={"Muzammil@gmail.com"}
            CarImg="https://www.kindpng.com/picc/m/13-136992_toyota-corolla-car-png-transparent-png.png"
            CarName={"Toyota Corolla"}
            License={"LXE 5364"}
            Year={"2012"}
            Color={"Green"}
          />
        </div>
        <div
          className={`hamburger cursor-pointer ${
            hidden ? "" : "hidden"
          } xs:hidden md:flex w-[2.2rem] h-[2.2rem] rounded-full bg-white flex items-center justify-center absolute top-6 right-5 `}
          onClick={() => {
            sethidden(!hidden);
          }}
        >
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Rides;
