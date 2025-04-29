import React from 'react'

//componentes
import RegisterAnewMemory from '../../components/RegisterAnewMemory/RegisterAnewMemory.jsx'

import githubIcon from '../../assets/img/github-icon.svg'
import reactIcon from '../../assets/img/react-icon.svg'
import javaIcon from '../../assets/img/java.svg'
import copyrightIcon from '../../assets/img/copyrightIcon.svg'
import filterIcon from '../../assets/img/filter-icon.svg'
import createIcon from '../../assets/img/create-icon.svg'

export default function MemoryFooter({scrolling,setIsCreating,isCreating}) {
    return (
    
            <div className='w-full h-min font-poppins bg-black  mt-[400px] shrink-0  pb-[68px] md:py-0   flex transition-all duration-[2000ms] ease-in-out flex-col space-y-3 md:pb-4'>
                <div className='grid grid-cols-3 w-full    place-items-center px-2 pt-3 '>
                    <div className=' flex flex-col justify-center '>

                        <p className='text-white lg:text-3xl md:text-2xl text-lg font-bold'>#GOODLIFE</p>
                        <p className='text-white text-nowrap text-xs md:text-lg lg:text-2xl'>Vivendo o melhor,</p>
                        <p className='text-white text-xs md:text-lg lg:text-2xl'>todos os dias.</p>

                    </div>
                    <div className='  flex flex-col  justify-center '>
                        <img src={githubIcon} alt="" className='w-[44px]' />
                        <p className='text-xs font-light text-white'>Senai Suiço </p>
                        <p className='text-xs font-light text-white'>Brasileira</p>
                    </div>
                    <div className='flex flex-col text-xs justify-center font-poppins font-light text-white'>
                        <p>@nightbop9</p>
                        <p>@devcaiodb</p>
                        <div className='flex justify-center flex-wrap gap-x-2'>
                            <img src={reactIcon} alt="" className='w-[25px]'/>
                            <img src={javaIcon} alt=""  className='w-[25px]'/>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
         
                <img src={copyrightIcon} alt="" className='w-[25px]' />
                <p className='font-normal text-white text-base'>Copyright 2025</p>
                </div>

                <div className={`w-full h-full justify-end    md:hidden flex fixed flex-col  z-50 bottom-0 right-0 left-0`}>
                {isCreating&&<div className='w-full h-full bg-black/50  flex items-end justify-center  '>
                <RegisterAnewMemory isCreating={isCreating} setIsCreating={setIsCreating}/>
                </div>}
                <div className='h-fit flex bg-black  justify-around px-12 items-center '>
                    <button type='button' className='w-fit cursor-pointer flex'>
                        <img src={filterIcon} alt="" className='w-[35px]' />
                    </button>
                    <button type='button' className='w-fit cursor-pointer flex' onClick={()=>setIsCreating(!isCreating)}>
                        <img src={createIcon} alt="" className='w-[35px]' />
                    </button>
                    </div>
                </div>
            </div>
      
    )
}
