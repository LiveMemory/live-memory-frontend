import React from 'react'

export default function LivingMemory({NameOfProject,IconDecoration}) {
  return (
    <div className='flex gap-x-1 items-center'>
      <img src={NameOfProject} alt="" className='w-[108px]  md:w-[145px]  lg:w-[165px] ' />
      
      <img src={IconDecoration} alt="" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px]' />
    </div>
  )
}
