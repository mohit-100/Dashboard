import React from 'react'
import { MdBarChart } from "react-icons/md";

export default function Cardsection({data,maxintensity }) {
  return (
    <div>
        {data.slice(0, 1).map((item, id) => {
        const { sector, topic, country } = item;

        return (
           <div key={id} className="pt-[25px] px-[25px] bg-[#F8F9FC]">
            <div className='flex  '>
              
               
               <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
                <div className=' mr-[10px] h-[90px] w-[250px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF]'>
                  <div className='pl-[10px]'>
                    <h2 className='text-[#B589DF] text-[20px] leading-[17px] font-bold mr-[5px]'>consumption {sector}</h2>
                    <div className='flex items-center gap-[150px] mt-[5px]'>
                <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{topic}  </h1>
                    <MdBarChart />
                    </div>
                    <p className='text-[20px] pl-[1-px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{maxintensity}</p>
                  </div>
                   
                </div>
               </div>
              
               <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
                <div className=' mr-[220px] h-[90px] w-[300px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF]'>
                  <div className='pl-[10px]'>
                    <h2 className='text-[#B589DF] text-[20px] leading-[17px] font-bold mr-[5px]'>{country}</h2>
                    
                <div className='flex items-center gap-[150px] mt-[5px]'>
                <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{topic}  </h1>
                    <MdBarChart />
                    </div>
                
                    <p className='text-[20px] pl-[1-px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>{maxintensity}</p>
                  </div>
                  
                </div>
               </div>
                
               
                  
                
               </div>
            </div>
        );
      })} 
    </div>
  )
}
