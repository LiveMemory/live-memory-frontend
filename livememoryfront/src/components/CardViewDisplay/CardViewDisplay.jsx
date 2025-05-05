import { scale, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';


//components
import ComumViewCardDefault from '../../components/ComumViewCardDefault/ComumViewCardDefault.jsx'
import CardExpandedView from '../../components/CardExpandedView/CardExpandedView.jsx'
//imagens
import extendCard from '../../assets/img/extends-card.svg'
import { dataMockMemories } from '../../utils/dataMockMemories/dataMockMemories.js';


export default function CardViewDisplay({ titleOfMemory, descriptionOfMemory, ImageMoment, emotionName, emotionIcon, dateHour, dateLocal, isHandleCardOpen, setIsHandleCardOpen, identifier, index,category }) {
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
       const [isOpen, setIsOpen] = useState(false);
    
    // useEffect(()=>{
    //     console.log(identifier)
    // },[identifier])
// useEffect(()=>{
//     console.log(dateHour)
//     setIsOpen(false)
//     setIsHandleCardOpen(false)
//     },[])
    

    return (

        <>

            <div className='relative text-center '>
            <motion.div className={`flex  text-center font-poppins flex-col mb-4 hover:cursor-zoom-in ${isOpen?"opacity-[0.07]":"opacity-100"}`}

          

                transition={{ type: 'spring', stiffness: 470, }}>
                    
                <ComumViewCardDefault titleOfMemory={titleOfMemory} descriptionOfMemory={descriptionOfMemory} category={category} ImageMoment={ImageMoment} emotionName={emotionName} dateHour={dateHour} dateLocal={dateLocal} isHandleCardOpen={isHandleCardOpen} setIsHandleCardOpen={setIsHandleCardOpen} identifier={identifier} setIsOpen={setIsOpen}
                
                    isOpen={isOpen} />
                    
            </motion.div>
            {isOpen&&
            <motion.p className=' absolute inset-0 inset-y-52 '
            
            initial={{ x: -80, y: -80, rotateX:"200deg", rotateY:'150deg' }}
            whileInView={{ x: 0, y: 0,rotateX:'0deg',rotateY:'0deg'}}
            viewport={{ once: true, amount: 0.1 }}
            
            transition={{ type: 'spring', stiffness: 170, }}
            > Visualizando...</motion.p>
}
            </div>

            {isOpen &&
                <div className='fixed bg-black/50   w-full justify-center items-center inset-0 z-20   md:h-auto overflow-y-auto  '   >
                    <div className='lg:w-[35%] md:w-[50%] w-[95%] md:mt-12 mt-6 mx-auto cursor-default   '>
                        <CardExpandedView  categoryToggle={categoryToggle} 
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
                      category={category}
                      setTeste={setTeste} titleOfMemory={titleOfMemory} descriptionOfMemory={descriptionOfMemory} ImageMoment={ImageMoment} setIsHandleCardOpen={setIsOpen} isHandleCardOpen={isOpen} emotionName={emotionName} dateHour={dateHour} dateLocal={dateLocal} identifier={identifier} />
                    </div>
{/* {remove&&
      <div className='w-full fixed flex justify-center items-center  z-50 bg-black/50 h-full rounded-2xl p-4'>
        <motion.div initial={{ rotateX: '360deg', rotateY: '360deg', opacity:0,width:'2px' }}
          whileInView={{ x: 0, y: 0, rotate: 0,  opacity:1,width:'100%'  }}

          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 60,damping:15 }}
          className='w-[85%] md:top-16  flex flex-col gap-y-6    bg-black h-min rounded-2xl p-4'>
            <p className='text-center text-white text-base'>Deseja realmente <span className='font-bold'>Excluir</span>?</p>
            <div className='flex items-center justify-center md:justify-between gap-x-4 flex-wrap gap-y-4'>
              <motion.button
                className="py-2 px-8 flex items-center gap-x-2 justify-center rounded-md"
                // onClick={removeOneItem}
                onClick={() => removeOneItem(identifier)}
                whileHover={{ boxShadow: '2px 4px 6px 2px rgba(0,0,0,0.9)' }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}

              >
                <img src={iconRedTrashMemory} alt="Deletar" className="w-[25px]" />
                <p className='text-red-600'>Deletar</p>
              </motion.button>
              <motion.button
                type="button"
                className="py-2 px-4 flex items-center gap-x-2 bg-black justify-center rounded-md"
                onClick={() => setRemove(!remove)}
                whileHover={{ boxShadow: '2px 4px 6px 2px rgba(0,0,0,0.9)' }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
              >
                    <img src={backIcon} alt="" className='w-[25px]' />
                    <p className='text-base text-white'>Voltar</p>
              </motion.button>
              </div>
        </motion.div>
      
      </div>
} */}
                </div>}
        </>
    )
}


