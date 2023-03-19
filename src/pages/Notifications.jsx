import React from 'react'
import OtherNotif from "../SVGs/otherNotif";
import Stearing from "../SVGs/Stearing";
import Lock from "../SVGs/Lock";
import OtherEmail from "../SVGs/OtherEmail";



const SettingListItem = ({iconColor, icon:ICON, text, time})=>{
    return <div className='flex flex-1 flex-row justify-between items-center py-8 border-b border-[#98989847]'>
        <div className='flex flex-row items-center'>
            <div className='max-w-6 w-6 min-w-6'><ICON color={iconColor}/></div>
            <p className='ml-10 font-normal text-lg font-Poppins text-[#232323]'>{text}</p>
        </div>
        <p className='font-DMsans font-normal text-base text-[#23232380]'>{time}</p>
        
    </div>
}


const Notifications = () => {
  return (
    <div className='pt-12 pr-52'>
        {/* Main Heading */}
        <div className='flex-1'><p className='pl-12 font-Poppins font-semibold text-3xl leading-10'>Notifications</p></div>
        {/* Second Heading and Fields Container */}
        <div className='flex flex-1 flex-col mt-12'>
            {/* Heading div */}
            <div className='border-b-[1px] border-[#98989847] pl-12 flex-1 pb-6'>
                <p className='font-Poppins font-medium text-2xl'>Security</p>
            </div>
            {/* Items Div */}
            <div className='flex-1 pl-12'>
                <SettingListItem iconColor={"#17A1FA"} icon={OtherNotif} text={<>You have new client. See <span className='text-[#FF7F50] text-lg font-medium' >Clients</span></>} time={"12.00 PM"} />
                <SettingListItem iconColor={"#0066FF"} icon={Stearing} text={<>You have 10 new <span className='text-[#0066FF] text-lg font-medium' >ongoing rides</span></>} time={"12.00 PM"} />
                <SettingListItem iconColor={"#232323"} icon={OtherEmail} text={<>Email success.</>} time={"12.00 PM"} />
                <SettingListItem iconColor={"#FF7F50"} icon={Lock} text={<>Password succesfully changed.</>} time={"12.00 PM"} />
                <SettingListItem iconColor={"#232323"} icon={OtherEmail} text={<>Email success.</>} time={"12.00 PM"} />
            </div>

        </div>

    </div>
  )
}

export default Notifications