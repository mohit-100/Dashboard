import React from 'react'
import {FaChevronRight, FaRegChartBar, FaRegSun, FaStickyNote, FaTachometerAlt,FaWrench} from "react-icons/fa";

export default function Siderbar() {
  return (
    <div className='bg-[#4E73DF] h-screen px-[25px]'>
        <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
            <h1 className='text-white text-[20px] leading-[24px] font-bold cursor-pointer'>Dashboard</h1>
        </div>
        <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] '>
            <FaTachometerAlt color='white'/>
            <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
        </div>
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <p className='text-[10px] font-bold leading-[16px] text-white/[0.4]'>INTERFACE</p>
            <div className='flex item-center justify-center gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex item-center gap-[10px]'>
                     <FaRegSun color='white'/>
                     <p className='text-[14px] leading-[20px] front-normal text-white'>Pages</p>
                </div>
                
                    <FaChevronRight color="white"/>
                
            </div>

            <div className='flex item-center justify-center gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex item-center gap-[10px]'>
                     <FaRegChartBar color='white'/>
                     <p className='text-[14px] leading-[20px] front-normal text-white'>Charts</p>
                </div>
                
                    <FaChevronRight color="white"/>
                
            </div>
        </div>

        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <p className='text-[10px] font-bold leading-[16px] text-white/[0.4]'>ADDONS</p>
            <div className='flex item-center justify-center gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex item-center gap-[10px]'>
                     <FaStickyNote color='white'/>
                     <p className='text-[14px] leading-[20px] front-normal text-white'>component</p>
                </div>
                
                    <FaChevronRight color="white"/>
                
            </div>

            <div className='flex item-center justify-center gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex item-center gap-[10px]'>
                     <FaWrench color='white'/>
                     <p className='text-[14px] leading-[20px] front-normal text-white'>Utilities</p>
                </div>
                
                    <FaChevronRight color="white"/>
                
            </div>
        </div>
    </div>
  )
}
