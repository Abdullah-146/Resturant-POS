import React from 'react'
import MenuDots from '../SVGs/MenuDots'
import TableItem from './TableItem'


const Table = ({data,menu}) => {

  const handleMenuClick = ()=>{
    alert("Clicked")
  }

  return (
    <div className='flex flex-1 flex-col '>
        <div className='flex items-center border-b-[2px] border-[#2F2F2F] font-DMsans font-normal text-[1rem] text-[#2F2F2F80] pb-[18px] px-6 space-x-6'>
            <div className='w-[30%] '>Name</div>
            <div className='w-[30%] '>Email</div>
            <div className='w-[15%] '>Phone</div>
            <div className='w-[15%] '>City</div>
            <div className='w-[10%] '></div>
        </div>
        <div className='px-6 w-full mt-5 space-y-10 '>
          <TableItem AvatarSrc={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"} name={"Dale Philip"} email={"Dale@gmail.com"} phone={"02323490932"} city={"New York"} icon={MenuDots}  handleMenuClick={handleMenuClick} menuItems={menu}/>
          <TableItem AvatarSrc={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"} name={"Dale Philips"} email={"Dale@gmail.com"} phone={"02323490932"} city={"New York"} icon={MenuDots}  handleMenuClick={handleMenuClick} menuItems={menu}/>
          <TableItem AvatarSrc={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"} name={"Dale Philips"} email={"Dale@gmail.com"} phone={"02323490932"} city={"New York"} icon={MenuDots}  handleMenuClick={handleMenuClick} menuItems={menu}/>
          <TableItem AvatarSrc={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"} name={"Dale Philips"} email={"Dale@gmail.com"} phone={"02323490932"} city={"New York"} icon={MenuDots}  handleMenuClick={handleMenuClick} menuItems={menu}/>
          <TableItem AvatarSrc={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"} name={"Dale Philips"} email={"Dale@gmail.com"} phone={"02323490932"} city={"New York"} icon={MenuDots}  handleMenuClick={handleMenuClick} menuItems={menu}/>
          <TableItem AvatarSrc={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"} name={"Dale Philips"} email={"Dale@gmail.com"} phone={"02323490932"} city={"New York"} icon={MenuDots}  handleMenuClick={handleMenuClick} menuItems={menu}/>
        </div>

    </div>
  )
}

export default Table