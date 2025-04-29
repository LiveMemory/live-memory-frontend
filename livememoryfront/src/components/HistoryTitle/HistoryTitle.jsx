import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function HistoryTitle({lineDecoration}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2, triggerOnce: true, margin: '0px 0px -100px 0px' });
  return (
    <div className='relative w-full   items-end flex my-16'>
      <motion.div  ref={ref}
      animate={{
        width: isInView ? "100%" : "0%",
        opacity: isInView ? 1 : 0,
        visibility: isInView ? "visible" : "hidden",
      }}
      transition={{ type:'spring',stiffness:170,damping:35,bounce:0.1}}
      initial={{ width: "0%" , opacity: 0,visibility:'hidden'}}
      className=" ">
       <img src={lineDecoration} alt="" className='w-full' />
      </motion.div>
      <div className='absolute lg:px-28 md:pt-22 lg:pt-0 md:px-32 px-6 -mb-4   transition-all ease-in-out duration-[2000ms]  '>
        <p className='md:text-4xl text-xl  md:mt-0'>Histórias...</p>
      </div>
    </div>
  )
}
