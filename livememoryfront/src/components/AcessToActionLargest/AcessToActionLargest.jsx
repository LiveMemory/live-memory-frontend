import React, { useEffect } from 'react'
import filterIcon from '../../assets/img/filter-icon.svg'
import createIcon from '../../assets/img/create-icon.svg'
import { motion } from 'framer-motion'
import RegisterAnewMemory from '../RegisterAnewMemory/RegisterAnewMemory'
import FilterInGrid from '../FilterInGrid/FilterInGrid'

export default function AcessToActionLargest({  
    isCreating,
    setIsCreating,
    categoryToggle,
    setCategoryToggle,
    categoryOption, 
    setCategoryOption,
    categoryValue,
    setCategoryValue,
    titleValue,
    setToggle,
    setTitleValue,
    descriptionValue,
    setDescriptionValue,
    isWarningContent,
    setIsWarningContent,
    EmoteToggle,
    setEmoteToggle,
    emoteOption,
    setEmoteOption,
    SucessImage,
    setSucessImage,
    selectedFile,
    setSelectedFile,
    teste,
    setTeste,
    isFilter,
    setIsFilter
}) {


    return (
        <div className="hidden md:flex ">
            <motion.div className="fixed right-0 top-44  flex flex-col space-y-2 p-4 bg-black rounded-l-lg">
                <button type="button" className="w-fit cursor-pointer flex" onClick={()=>setIsFilter(!isFilter)}>
                    <img src={filterIcon} alt="" className="w-[35px]" />
                </button>
                <button
                    type="button"
                    className="w-fit cursor-pointer flex"
                    onClick={() => setIsCreating(!isCreating)}
                >
                    <img src={createIcon} alt="" className="w-[35px]" />
                </button>
            </motion.div>
            {isCreating && !isFilter&&(
                <>
   
                    <div className="fixed inset-0 bg-black/50 z-10" onClick={() => setIsCreating(false)} />

               
                    <motion.div
                        className="fixed z-10 top-0 left-0 w-full h-full flex items-start justify-center overflow-y-auto pt-20 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="bg-black rounded-lg p-6 w-full max-w-[400px]">
                            <RegisterAnewMemory
                                isCreating={isCreating}
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
                        </div>
                    </motion.div>
                </>
            )}
            {isFilter&&!isCreating&&
          
          <div className="hidden md:flex  ">
        
            
            <FilterInGrid setIsCreating={setIsCreating} setCategoryToggle={setCategoryToggle}  setIsFilter={setIsFilter}  isFilter={isFilter} categoryOption={categoryOption} categoryToggle={categoryToggle} setCategoryOption={setCategoryOption} />

            </div>}
        </div>
    )
}
