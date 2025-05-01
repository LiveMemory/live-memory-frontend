import React from 'react'
import filterIcon from '../../assets/img/filter-icon.svg'
import createIcon from '../../assets/img/create-icon.svg'
import { motion } from 'framer-motion'
import RegisterAnewMemory from '../RegisterAnewMemory/RegisterAnewMemory'
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
     setTeste,}) {
    return (
 
            <div className='hidden md:flex'>

                <motion.div className={`fixed hidden md:flex transition-all ease-in-out duration-1000  bg-black rounded-l-lg z-40  p-4  flex-col space-y-2 ${isCreating ? "top-2 left-[35%]" : "right-0 top-44"}`}

                    initial={{ x: 10 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ type: 'spring', stiffness: 71 }}
                >
                    {isCreating && <div className='fixed w-full h-full bg-black/50 inset-0 -z-30'></div>}
                    <button type='button' className='w-fit cursor-pointer flex'>
                        <img src={filterIcon} alt="" className='w-[35px]' />
                    </button>
                    <button type='button' className='w-fit cursor-pointer flex' onClick={() => setIsCreating(!isCreating)}>
                        <img src={createIcon} alt="" className='w-[35px]' />
                    </button>
                    {isCreating &&
                        <RegisterAnewMemory isCreating={isCreating} 
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
                         setTeste={setTeste} />
                    }

                </motion.div>
            </div>
           


    )
}
