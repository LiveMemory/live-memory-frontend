import React from 'react'

//imagens
import memoryExemple from '../../assets/img/memory-exemple.svg'

export default function MemoryHero() {
  return (
    <div className='w-full  font-poppins transition-all ease-in-out duration-[2000ms] items-center justify-between flex py-2 px-4 md:py-4 md:px-20'>
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-col'>
        <p className='text-xl md:text-4xl'>Eternize seus</p>
        <p className='text-xl font-bold md:text-4xl'>momentos</p>
        </div>
        <div className='flex flex-col'>
        <p className='text-xs font-normal md:text-lg'>Contribua para uma</p>
        <p className='text-xs font-normal md:text-lg'>comunidade anônima de</p>
        <p className='text-xs font-normal md:text-lg'>relatos, sentimentos e histórias.</p>

        </div>
      </div>
      <div className=''>
        <img src={memoryExemple} alt="" className='w-[100px] md:w-[225px] lg:w-[300px]' />
      </div>
    </div>
  )
}
