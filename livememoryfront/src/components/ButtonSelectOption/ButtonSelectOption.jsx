import React, { useEffect, useState } from 'react'

export default function ButtonSelectOption({ iconAreaDash, textAreaDash,identifier,selectedButton,setSelectedButton }) {

    return (
        <button type='button' className='flex justify-center font-poppins cursor-pointer items-center  w-full group   rounded-l-xl relative   lg:p-4 py-4 px-6    ' onClick={()=> setSelectedButton(identifier)}>
            {iconAreaDash?
            <div className='absolute w-full transition-all   group h-full flex justify-end'>
                <div className={`  delay-0 duration-[750ms] w-0 ease-in-out  group-hover:rounded-l-xl group-hover:w-full   group-hover:h-full bg-white ${identifier === selectedButton? "w-full rounded-l-xl bg-pink-700 ":"w-0 "}`}></div>
            </div>: <div className='absolute w-full transition-all   group h-full flex justify-end'>
                <div className={`  delay-0 duration-[750ms] w-0 ease-in-out  group-hover:rounded-0 group-hover:w-full   group-hover:h-full bg-black/15 ${identifier === selectedButton? "w-full bg-black/35 ":"w-0 "}`}></div>
            </div>
}
                <div className='flex items-center  w-full pl-4 gap-2 z-10'>
                {iconAreaDash &&
                <div className='w-fit'>
                    <img src={iconAreaDash} alt={"Home"} className='w-6 h-6' />
                </div>
}      
                {!iconAreaDash&&
                <div>
                    <p className={`  ${identifier === selectedButton?  " text-black font-semibold":" text-black font-semibold"}`}>{textAreaDash}</p>
                </div>
}
                </div>
           
        </button>

    )
}
