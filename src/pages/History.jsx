import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ProgressCard from "../components/ProgressCard";
import Calender from "../SVGs/Calender";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Maps from "../components/Maps";


const History = () => {
  const [cards, setCards] = useState([]);
  const [route, setRoute] = useState({start:{lat:40, lng:-80},end:{lat:50, lng:-85}});
  const [move, setMove] = useState({lat:49, lng:-70});
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);


  const handleClicked = (id) => {
    setRoute({start:{lat:60, lng:-70},end:{lat:50, lng:-85}})
    setSelectedId(id);
    setVisible(true);

  };

  const handleClose = ()=>{
    setSelectedId(null);
    setVisible(false);
  }

  useEffect(() => {
    setCards([
      {
        id: "23442",
        done: true,
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
        done: true,
        pickup: "Street abc, ABC Road, Town Abc",
        dropoff: "Street abc, ABC Road, Town Abc",
      },
      {
        id: "58891",
        done: true,
        pickup: "Street abc, ABC Road, Town Abc",
        dropoff: "Street abc, ABC Road, Town Abc",
      },
      {
        id: "50891",
        done: true,
        pickup: "Street abc, ABC Road, Town Abc",
        dropoff: "Street abc, ABC Road, Town Abc",
      },
      {
        id: "52891",
        done: true,
        pickup: "Street abc, ABC Road, Town Abc",
        dropoff: "Street abc, ABC Road, Town Abc",
      },
    ]);
  },[]);

  return (
    <div className="flex w-full max-w-full  overflow-y-hidden max-h-screen">
      <div className={`flex ${
            visible ? "md:min-w-[30%] md:w-[30%] md:max-w-[30%] md:flex xs:hidden" : "w-full px-12 py-11"
          } flex-col bg-[#F6F6F6] h-screen max-h-screen`}>
        <p className={`font-Poppins font-semibold text-[2rem] mb-9 ${visible && 'mx-5 my-11'}`}>History</p>

        {/* //////////  Search Bar///////////// */}
        <div className={`flex items-center shadow-[0px_14px_39px_#0000000D] ${visible ?  'mx-5 mb-3' : 'xs:w-full md:max-w-[30%] md:w-[30%] md:min-w-[30%] '} bg-[#ffffff] rounded-[10px] pl-5`}>
          <SearchIcon className="text-[#2f2f2f] text-3xl" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search area, city"
            className=" w-full h-[4rem] rounded-r-[10px] p-2  border-none  outline-none"
          />
        </div>
        {/* MAP this div according to time and date after filtering and making a 2d Array*/}
        <div
          className={`flex flex-col mt-5 space-y-5 pb-2 overflow-y-scroll ${visible && 'pr-5 ml-5'}`}
        >
          <div className="flex mt-5">
            <p className="text-[#B5B5B5] font-Play font-normal text-[1.5rem] leading-[28px] mr-8">
              20, Jan, 2022
            </p>
            <Calender />
          </div>
          <div
            className={` ${
              visible ? "grid-cols-1" : "xs:grid-cols-1 md:grid-cols-3"
            } grid  max-w-full gap-y-5 gap-x-10 `}
          >
            {cards.map(({ id, done, pickup, dropoff }) => (
              <div className="flex-1">
                <ProgressCard
                  id={id}
                  done={done}
                  pickup={pickup}
                  dropoff={dropoff}
                  touchable={true}
                  shadow={false}
                  handleClicked = {handleClicked}
                  show = { selectedId === id ? true : false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${visible ? "flex" : "hidden"} h-screen w-full relative`}>
            <Maps route={route} move={move} />
            <div onClick={handleClose} className="absolute top-10 left-10 w-[40px] h-[40px] bg-transparent"><ArrowBackIosIcon /></div>
            <div onClick={()=>setMove({...move,lat:move.lat + 0.01})} className="bg-[#0066FF] rounded-[10px] font-Poppins font-medium text-[0.875rem] leading-[21px] text-[#FFFFFF] px-10 py-4 absolute bottom-16 left-10 cursor-pointer">Show Chat</div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default History;
