import React from 'react'

//components
import LivingMemory from '../../components/LivingMemory/LivingMemory.jsx'

//imagens
import logoPng from '../../assets/img/MemoriaViva.svg'
import pityLogo from '../../assets/img/pityLogo.svg'
import { motion } from 'framer-motion'



export default function MemoryHeader({ IconOfMode, isFixed }) {
    return (
        <motion.div className={`${isFixed ? "fixed z-10 pb-2 shadow-[0px_1px_rgba(0,0,0,0.1)] rounded-none" : "sticky"} bg-white  px-2 md:px-8 lg:px-12 transition-all flex justify-between items-center ease-in-out mb-7 pt-7  duration-[2000ms] w-full `}
        animate={isFixed
            ? { translateY: [-2200, 0] }  
            : { translateY: 0  }
        }
        transition={{
            type: 'tween',  
            duration: 2,  
            ease: 'easeInOut'  
        }}
        >
            <LivingMemory NameOfProject={logoPng} IconDecoration={pityLogo} />
            <div className='flex w-fit h-fit items-center'>
                <img src={IconOfMode} alt="" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px]' />
            </div>
        </motion.div>
        //     <div className={` ${isFixed?"fixed":"sticky"} bg-white  px-2 md:px-4 lg:px-6 transition-all flex justify-between items-center ease-in-out my-7 duration-1000 w-full  rounded-b-xl`}>
        //     <LivingMemory NameOfProject={logoPng} IconDecoration={pityLogo} />
        //     <div className='flex w-fit h-fit items-center'>
        //       <img src={IconOfMode} alt="" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px]' />
        //     </div>
        //   </div>
    )
}
