import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col sm-flex-row border border-gray-400'>
         {/* hero left side */}
         <div className='w-full sm:w1/2 flex items-center justify-center py-10 am:py-0'>
         <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w11 h-[2px] bg-[#414141]'></p>
                <p className='font-medium text-sm md:text-base'>OUR BEST SELLER</p>
                
                
            </div>
            <h1 className='teaxt-3xl sm:py-3 lg:text-5xl leading-relaxed'>
                    Latest Arrivals
                </h1>
            <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sum md:text-base'> SHOP IN</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[414141]'></p>
            </div>

         </div>

         </div>
    </div>
  )
}

export default Hero