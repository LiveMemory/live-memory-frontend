import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import CardViewDisplay from '../CardViewDisplay/CardViewDisplay';


//images
import emojiIcon from '../../assets/img/love-emoji.svg'
import imageMoment from '../../assets/img/mock-image-moment.png'
import { dataMockMemories } from '../../utils/dataMockMemories/dataMockMemories';
import { LivingMemoriesHook } from '../../hooks/LivingMemoriesHook/LivingMemoriesHook';


export default function MemorableUnionOfHistories() {
  const [isHandleCardOpen, setIsHandleCardOpen] = useState(false)
  const [identifier, setIdentifier] = useState(null)
  const { memories } = LivingMemoriesHook()
  const memoriesRef = useRef()
  const memorieIsView = useInView(memoriesRef,{once:true,amount:0.3})
  const formatDate = (dateString) => {
    if (!dateString) return 'Data indisponível';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR'); // Ex.: "29/04/2025"
  };
  

  return (
    <div className="w-full flex justify-center  items-center lg:my-16 my-4">
      <div className="lg:w-[90%] mt-20 lg:max-h-[800px] md:max-h-[400px] max-h-[350px] overflow-y-auto border-b-4 shadow-lg shadow-black/50 border-black/15 p-4 [-webkit-scrollbar]:hidden [scrollbar-width:none] ">
      {memories.length > 0 ?
        <div className=" sm:columns-2  lg:columns-3 md:columns-2 columns-1  [&>div]:break-inside-avoid">
          {
            memories.map((memories, index) => (

              <div key={index} >


                <CardViewDisplay ImageMoment={imageMoment} dateHour={memories.hourPost} dateLocal={formatDate(memories.datePost)} descriptionOfMemory={memories.description} titleOfMemory={memories.title} emotionName={memories.category} isHandleCardOpen={isHandleCardOpen} setIsHandleCardOpen={setIsHandleCardOpen} identifier={memories.id} />
              </div>
            ))} 


        </div>
        
        : <div ref={memoriesRef} className='w-full text-center'>
              <motion.p
              initial={{x:-50, y:-50}}
              animate={memorieIsView?{x:0,y:0}:{x:-50,y:-50}}
            
              transition={{type:'spring',stiffness:200}}
              >Sem Memórias para recordar, contribua conosco eternize um momento cadastrando-o :)</motion.p>
              </div>}

      </div>
    </div>
  );
}
