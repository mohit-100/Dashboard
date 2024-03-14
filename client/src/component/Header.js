import React from 'react'
import {FaSearch} from "react-icons/fa"

 function Header({handleFilterChange}) {

    return (
    <div className='flex items-center justify-start h-[70px] shadow-lg px-[25px]'>
    <div className='flex item-center rounded-[5px]'>
        <input type="text" id="country" className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search Country' 
        onChange={(e) => handleFilterChange('country', e.target.value)}></input>
        <div className='bg-[#4E73DF] h-[40px] px-[14px] pt-[10px] flex item-center justify-center cursor rounded-tr-[5px] rounded-br-[5px]'>
          <FaSearch color="white"/>
        </div>
  </div>
    
  </div>
  )
}

export default Header