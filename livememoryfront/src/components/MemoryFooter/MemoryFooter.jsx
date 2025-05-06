import React, { useEffect, useState } from 'react'

//componentes
import RegisterAnewMemory from '../../components/RegisterAnewMemory/RegisterAnewMemory.jsx'

import githubIcon from '../../assets/img/github-icon.svg'
import reactIcon from '../../assets/img/react-icon.svg'
import javaIcon from '../../assets/img/java.svg'
import copyrightIcon from '../../assets/img/copyrightIcon.svg'
import filterIcon from '../../assets/img/filter-icon.svg'
import createIcon from '../../assets/img/create-icon.svg'
import AcessToActionLargest from '../AcessToActionLargest/AcessToActionLargest.jsx'
import { motion } from 'framer-motion'

import FilterInGrid from '../../components/FilterInGrid/FilterInGrid.jsx'

export default function MemoryFooter({scrolling,setIsCreating,isCreating,isFilter,setIsFilter}) {
    const [categoryToggle, setCategoryToggle] = useState(false);
    const [categoryOption, setCategoryOption] = useState('')
    const [categoryValue,setCategoryValue] = useState('')
    const [titleValue,setTitleValue] = useState('')
    const [descriptionValue,setDescriptionValue] = useState('')
    const [isWarningContent,setIsWarningContent] = useState(false)
    const [EmoteToggle, setEmoteToggle] = useState(false);
    const [emoteOption, setEmoteOption] = useState({})
    const [SucessImage,setSucessImage] = useState(null)
    const [selectedFile,setSelectedFile] = useState(null)
    const [teste,setTeste] = useState(null)

    return (
    
            <div className='w-full h-min font-poppins bg-black   shrink-0  pb-[68px] md:py-0   flex transition-all duration-[2000ms] ease-in-out flex-col space-y-3 md:pb-4'>
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
                     <div className='hidden md:flex'>
                     <AcessToActionLargest 
                        setIsCreating={setIsCreating}
                        isCreating={isCreating}
                      categoryToggle={categoryToggle} 
                      setCategoryToggle={setCategoryToggle} 
                      categoryOption={categoryOption} 
                      setCategoryOption={setCategoryOption}
                      categoryValue={categoryValue}
                      setCategoryValue={setCategoryValue}
                      titleValue={titleValue}
                      setTitleValue={setTitleValue}
                      descriptionValue={descriptionValue} 
                      setDescriptionValue={setDescriptionValue}
                      isWarningContent={isWarningContent} 
                      setIsWarningContent={setIsWarningContent}
                      EmoteToggle={EmoteToggle} 
                       setEmoteToggle={setEmoteToggle}
                      emoteOption={emoteOption} 
                       setEmoteOption={setEmoteOption}
                      SucessImage={SucessImage} 
                      setSucessImage={setSucessImage}
                      selectedFile={selectedFile} 
                      setSelectedFile={setSelectedFile}
                      teste={teste} 
                      setTeste={setTeste}
                      setToggle={setCategoryToggle}
                      setIsFilter={setIsFilter}
                      isFilter={isFilter}/>
                     </div>

                <div className={`w-full  ${isCreating?"h-full":"h-fit"} justify-end z-30   md:hidden flex fixed flex-col   bottom-0 right-0 left-0`}>
                {isCreating && <div className={`w-full  bg-black/50 ${isCreating?"h-full":"h-fit"}  flex items-end justify-center  `}>
                    <RegisterAnewMemory  isCreating={isCreating} 
                     setIsCreating={setIsCreating}
                      categoryToggle={categoryToggle} 
                      setCategoryToggle={setCategoryToggle} 
                      categoryOption={categoryOption} 
                      setCategoryOption={setCategoryOption}
                      categoryValue={categoryValue}
                      setCategoryValue={setCategoryValue}
                      titleValue={titleValue}
                      setTitleValue={setTitleValue}
                      descriptionValue={descriptionValue} 
                      setDescriptionValue={setDescriptionValue}
                      isWarningContent={isWarningContent} 
                      setIsWarningContent={setIsWarningContent}
                      EmoteToggle={EmoteToggle} 
                       setEmoteToggle={setEmoteToggle}
                      emoteOption={emoteOption} 
                       setEmoteOption={setEmoteOption}
                      SucessImage={SucessImage} 
                      setSucessImage={setSucessImage}
                      selectedFile={selectedFile} 
                      setSelectedFile={setSelectedFile}
                      teste={teste} 
                      setTeste={setTeste}
                      setIsFilter={setIsFilter}
                      isFilter={isFilter}
                      
                       />

                </div>}
                {isFilter&&<FilterInGrid setIsCreating={setIsCreating} setIsFilter={setIsFilter} isFilter={isFilter} categoryOption={categoryOption} categoryToggle={categoryToggle} setCategoryOption={setCategoryOption} setCategoryToggle={setCategoryToggle}/>}
                <div className='h-fit flex bg-black  justify-around px-12 items-center '>
                    <button type='button' className='w-fit cursor-pointer flex' onClick={() => setIsFilter(!isFilter)}>
                        <img src={filterIcon} alt="" className='w-[35px]' />
                    </button>
                    <button type='button' className='w-fit cursor-pointer flex' onClick={() => setIsCreating(!isCreating)}>
                        <img src={createIcon} alt="" className='w-[35px]' />
                    </button>
                </div>
            </div>
            </div>
      
    )
}
