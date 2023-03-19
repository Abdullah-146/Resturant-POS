import React, { useEffect, useState } from "react";
import ChatUser from "../components/ChatUser";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let mount = true;

    if (mount) {
      setChats([
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Suleman Sohail",
          text: "Hey! where are you?",
          time: "10.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Abdullah Ali",
          text: "Hi, i just reached here. Where are you?",
          time: "10.15",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
      ]);

      setMessages([
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Suleman Sohail",
          text: "I’m coming in 5 minutes",
          time: "10.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Abdullah Ali",
          text: "Hi, i just reached here. Where are you?",
          time: "10.15",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
        {
          src: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
          name: "Ahmed Sheikh",
          text: "You are quite late. why?",
          time: "12.00",
        },
      ]);
    }

    return () => (mount = false);
  }, []);

  const handleClick = (name) => {
    setVisible(true);
    setSelectedUser(name);
  };

  return (
    <>
      <div className="flex flex-1 max-h-full min-h-full ">
        {/* ///////////////////////////////       Left Side Chats Div    ////////////////////////////////////////// */}
        <div
          className={`flex flex-col xs:w-full xs:${
            !visible ? "flex" : "hidden"
          } md:flex md:w-[40%] h-screen border-r `}
        >
          <div className=" px-[30px] pt-[32px]">
            <p className="font-Poppins font-semibold text-[2rem] leading-[48px] ">
              Huzayfah's Chats
            </p>
            {/* //////////  Search Bar///////////// */}
            <div className="flex items-center shadow-[0px_14px_39px_#0000000D] w-full border bg-[#ffffff]  mt-[35.008px] mb-[45.008px] rounded-[10px] pl-5">
              <SearchIcon className="text-[#2f2f2f] text-3xl" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Search area, city"
                className=" w-full h-[4rem] rounded-r-[10px] p-2  border-none  outline-none"
              />
            </div>
          </div>
          {/* //////////  Chats Map Div  ///////////// */}
          <div className="flex-1 pl-[30px] xs:pr-[30px] md:pr-1 overflow-y-auto ">
            {chats.map(({ src, name, text, time }) => (
              <div className="cursor-pointer">
                <ChatUser
                  handleClick={handleClick}
                  src={src}
                  name={name}
                  text={text}
                  time={time}
                  chat={false}
                />
              </div>
            ))}
          </div>
        </div>
        {/* ///////////////////////////////       Rigth Side Messages Div    ////////////////////////////////////////// */}
        {selectedUser ? (
          <div
            className={`flex flex-col xs:${
              visible ? "flex" : "hidden"
            } md:flex w-full pt-[24px]`}
          >
            {/* /////// Inside Rider image, Email And Rider etc status Div ///////// */}
            <div className="flex items-center px-[32px] justify-between mb-[24px]">
              <div className="flex items-center">
                <div
                  onClick={() => setVisible(false)}
                  className="md:hidden mr-3"
                >
                  <ArrowBackIosIcon />
                </div>
                <div className="flex">
                  <Avatar
                    className="mr-[22px]"
                    sx={{ width: "4.875rem", height: "4.875rem" }}
                    src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
                  />
                </div>

                <div>
                  <div className="flex items-center font-Poppins font-medium text-[1.875rem] leading-[45.008px] ">
                    <p className="mr-[13.008px]">{selectedUser}</p>
                    <div className="text-center inline rounded-[3.008px] py-[2px] px-[21.008px] bg-[#FFB545] text-[#ffffff] font-medium text-[0.813rem] leading-[19.504px]">
                      Rider
                    </div>
                  </div>
                  <p className="font-Poppins font-normal text-[1rem] leading-[2rem] text-[#777777]">
                    Dale@gmial.com
                  </p>
                </div>
              </div>
              <MoreHorizIcon onClick={() => alert("Don't know hat")} />
            </div>
            <hr />
            {/* //////////  Messages Map Div  ///////////// */}
            <div className="max-w-full flex-1 px-[32px]  pt-[30.008px] overflow-y-auto">
              <div className="w-full flex-1 flex items-center justify-center px-[128px] mb-6">
                <div className="flex-1 h-[1px] bg-[#e5e7eb]" />
                <div className="w-[6.25rem] text-center font-Poppins font-normal text-[0.938rem] leading-[22.496px]">
                  Today
                </div>
                <div className="flex-1 h-[1px] bg-[#e5e7eb]" />
              </div>
              {messages.map(({ src, text, name, time }) => (
                <ChatUser
                  src={src}
                  name={name}
                  text={text}
                  time={time}
                  chat={true}
                />
              ))}
            </div>
            {/* ////////// For Last Line in Figma  ///////////// */}
            <hr className="mb-[80px]" />
          </div>
        ) : (
          <div className="flex w-full h-screen items-center justify-center xs:hidden md:flex">
            <InsertCommentIcon sx={{ minWidth: "100%" }} />
          </div>
        )}
      </div>
    </>
  );
};

export default Chats;
