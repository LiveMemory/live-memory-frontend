import { scale, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';


//components
import ComumViewCardDefault from '../../components/ComumViewCardDefault/ComumViewCardDefault.jsx'
import CardExpandedView from '../../components/CardExpandedView/CardExpandedView.jsx'
//imagens
import extendCard from '../../assets/img/extends-card.svg'
import { dataMockMemories } from '../../utils/dataMockMemories/dataMockMemories.js';


export default function CardViewDisplay({ titleOfMemory, descriptionOfMemory, ImageMoment, emotionName, emotionIcon, dateHour, dateLocal, isHandleCardOpen, setIsHandleCardOpen, identifier, index }) {

    // useEffect(()=>{
    //     console.log(identifier)
    // },[identifier])

    const [isOpen, setIsOpen] = useState(false);

    return (

        <>

            <div className='relative text-center'>
            <motion.div className={`flex  text-center font-poppins flex-col mb-4 hover:cursor-zoom-in ${isOpen?"opacity-[0.07]":"opacity-100"}`}

                initial={{ x: -80, y: -80, }}
                whileInView={{ x: 0, y: 0, }}
                whileHover={{ scale: 1.02, cursor: 'zoom-in' }}
                whileTap={{ scale: 1.02, cursor: 'zoom-in' }}
                viewport={{ once: true, amount: 0.1 }}

                transition={{ type: 'spring', stiffness: 470, }}>
                    
                <ComumViewCardDefault titleOfMemory={titleOfMemory} descriptionOfMemory={descriptionOfMemory} ImageMoment={ImageMoment} emotionName={emotionName} dateHour={dateHour} dateLocal={dateLocal} isHandleCardOpen={isHandleCardOpen} setIsHandleCardOpen={setIsHandleCardOpen} identifier={identifier} setIsOpen={setIsOpen}
                
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
                <div className='fixed bg-black/50 h-full w-full justify-center items-center inset-0 z-50 cursor-not-allowed'   >
                    <div className='lg:w-[35%] md:w-[50%] w-[95%] md:mt-12 mt-6 mx-auto cursor-default'>
                        <CardExpandedView titleOfMemory={titleOfMemory} descriptionOfMemory={descriptionOfMemory} ImageMoment={ImageMoment} setIsHandleCardOpen={setIsOpen} isHandleCardOpen={isOpen} emotionName={emotionName} dateHour={dateHour} dateLocal={dateLocal} identifier={identifier} />
                    </div>

                </div>}
        </>
    )
}


