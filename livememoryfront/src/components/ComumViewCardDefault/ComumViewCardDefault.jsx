import React, { useEffect } from 'react'
import emotionIcon from '../../assets/img/love-emoji.svg'
import { motion } from 'framer-motion'
import extendCard from '../../assets/img/extends-card.svg'
import happyIcon from '../../assets/img/happy-icon.png'
import loveIcon from '../../assets/img/love-icon.svg'
import sadIcon from '../../assets/img/sad-icon.svg'
import funnyIcon from '../../assets/img/funny-icon.svg'
import friendshipIcon from '../../assets/img/friend-ship-icon.svg'
import gratefulIcon from '../../assets/img/gratefull-icon.svg'
import admirationIcon from '../../assets/img/adimiration-icon.svg'
import peaceIcon from '../../assets/img/peace-icon.svg'
import thoughtIcon from '../../assets/img/thought-icon.svg'
import surprizeIcon from '../../assets/img/surprize-icon.svg'
import ansietyIcon from '../../assets/img/ansiety-icon.svg'
import angryIcon from '../../assets/img/angry-icon.svg'
import postIcon from '../../assets/img/post-icon.svg'
import backIcon from '../../assets/img/backIcon.svg'
import { TranslateEmotion } from '../../utils/TranslateEmotion/TranslateEmotion'
export default function ComumViewCardDefault( {titleOfMemory,descriptionOfMemory,ImageMoment,emotionName,dateHour,dateLocal,isHandleCardOpen ,setIsHandleCardOpen,identifier,index,isOpen,setIsOpen,category}) {

    // useEffect(()=>{
    //     console.log(identifier)
    // },[isHandleCardOpen])
    const handleExpandClick = () => {
        setIsOpen(true)
        console.log(`Cartão clicado - Index: ${identifier}`);
      };
  return (
    <>
    <div className='w-full  p-6 gap-x-2 cursor-zoom-in     flex   shadow-black/75 bg-live-memory-semi-light-gray  rounded-t-2xl'


    >
        <div className='grid font-poppins gap-x-4 justify-center  grid-cols-2'>
            <div className={`flex flex-col ${ImageMoment? "space-y-3":"space-y-2"}`}>
                
                <p className=' text-base  font-normal'> {titleOfMemory} </p>

                {ImageMoment && 
                    <>
                        <p className='text-xs font-light' >{descriptionOfMemory}</p>
                        <div className=' drop-shadow-2xl  shadow-black/50'>
                            <img src={ImageMoment} alt="" className='w-[125px] h-[75px] ' />
                        </div>
                    </>
                }
    
                      {!ImageMoment &&
                    <p className='text-xs font-light' >{descriptionOfMemory}</p>
                }
            
            </div>
            <div className={`flex flex-col items-center space-y-3`}>
                {ImageMoment &&
                    <div className='h-fit rounded-lg py-2  flex gap-x-2 items-center flex-wrap  justify-center w-full border-[3px] border-black'>
                        <p className='text-xs'>    {TranslateEmotion[emotionName]}</p>

                        <img src={emotionName =='HAPPY'?happyIcon:
                                    emotionName=="LOVE"?loveIcon:
                                    emotionName=="SAD"?sadIcon:
                                    emotionName=="FUNNY"?funnyIcon:
                                    emotionName=="FRIENDSHIP"?friendshipIcon:
                                    emotionName=="GRATEFUL"?gratefulIcon:
                                    emotionName=="ADMIRATION"?admirationIcon:
                                    emotionName=="PEACE"?peaceIcon:
                                    emotionName=="THOUGHT"?thoughtIcon:
                                    emotionName=="SURPRIZE"?surprizeIcon:
                                    emotionName=='ANSIETY'?ansietyIcon:
                                    emotionName=="ANGRY"?angryIcon:null} alt="" className='w-[25px]  md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px]' />
                    </div>
                }
                    {!ImageMoment &&
                    <div className='h-fit rounded-lg py-2  flex gap-x-2 items-center flex-wrap  justify-center w-full border-[3px] border-black'>
                        <p className='text-xs'>    {emotionName}</p>

                        <img src={emotionName =='HAPPY'?happyIcon:
                                    emotionName=="LOVE"?loveIcon:
                                    emotionName=="SAD"?sadIcon:
                                    emotionName=="FUNNY"?funnyIcon:
                                    emotionName=="FRIENDSHIP"?friendshipIcon:
                                    emotionName=="GRATEFUL"?gratefulIcon:
                                    emotionName=="ADMIRATION"?admirationIcon:
                                    emotionName=="PEACE"?peaceIcon:
                                    emotionName=="THOUGHT"?thoughtIcon:
                                    emotionName=="SURPRIZE"?surprizeIcon:
                                    emotionName=="ANGRY"?angryIcon:null
} alt="" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px]' />
                    </div>
                }
          
                <div className='flex flex-col font-extralight items-center text-base'>
                    <p>{dateLocal}</p>
                    <p>ás {dateHour}</p>
                </div>
                <div className='flex '>
                    <motion.button type='button' className={`py-2 px-6 flex justify-center group ${isOpen?"opacity-0 hidden":"opacity-100 flex"} items-center gap-x-1 bg-black rounded-md`}
                        whileHover={{ boxShadow: '2px 4px 6px 2px rgba(0,0,0,0.9)' }}
                        transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                        onTouchStart={handleExpandClick} 
                        onClick={handleExpandClick}

                       
                    >
                        <img src={extendCard} alt="" className='w-[25px] transition-all ease-in-out duration-1000  group-hover:rotate-[360deg]'  />
                        <p className='text-white text-xs'>Expandir</p>
                    </motion.button>
                </div>
            </div>
        </div>


    </div>
    <div className={`w-full bg-black rounded-b-2xl flex justify-center`}>
        <p className='text-white'>{category =='FAMILY'?"FAMÍLIA":
                                    category=="SCHOOL"?"ESCOLA":
                                    category=="WORK"?"TRABALHO":
                                    category=="FRIENDS"?"AMIGOS":
                                    category=="TRAVEL"?"VIAGEM":
                                    category=="HOBBY"?"PASSATEMPO":
                                    category=="RELATIONSHIP"?"RELAÇÃO":
                                    category=="ACHIEVEMENT"?"CONQUISTA":
                                    category=="OTHER"?"OUTROS":null}    </p>
    </div>
    </>
  )
}


















// export default function ComumViewCardDefault({memories}) {
//     return (
//         <>
//             <div className='w-full h-fit  p-6 gap-x-2 cursor-zoom-in     flex   shadow-black/75 bg-live-memory-semi-light-gray  rounded-t-2xl'


//             >
//                 <div className='grid font-poppins gap-x-10 justify-center  grid-cols-2'>
//                     <div className={`flex flex-col ${memories.memoryImage ? "space-y-3" : "space-y-2"}`}>
//                         <p className=' text-base text-wrap font-normal'> {memories.memoryTitle}</p>

//                         {memories.memoryImage && 
//                             <>
//                                 <p className='text-xs font-light' >{memories.memoryDescription}</p>
//                                 <div className='w-[125px] h-[75px]  drop-shadow-2xl  shadow-black/50'>
//                                     <img src={memories.memoryImage} alt="" />
//                                 </div>
//                             </>
//                         }

//                         {!memories.memoryImage &&
//                             <p className='text-xs font-light' >{memories.memoryDescription}</p>
//                         }

//                     </div>
//                     <div className={`flex flex-col space-y-3`}>
//                         {memories.memoryImage  &&
//                             <div className='h-fit rounded-lg py-2  flex gap-x-2 items-center flex-wrap  justify-center w-full border-[3px] border-black'>
//                                 <p className='text-xs'>    {memories.memoryIconName}</p>

//                                 <img src={emotionIcon} alt="" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px]' />
//                             </div>
//                         }
//                         {!memories.memoryImage  &&
//                             <div className=' rounded-lg py-2  flex gap-x-2 items-center flex-wrap  justify-center w-[125px] h-[75px]  border-[3px] border-black'>
//                                 <p className='text-xs'>    {memories.memoryIconName}</p>

//                                 <img src={emotionIcon} alt="" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px]' />
//                             </div>
//                         }

//                         <div className='flex flex-col font-extralight items-center text-lg'>
//                             <p>{memories.memoryLocalDate}</p>
//                             <p>ás {memories.memoryLocalHour}</p>
//                         </div>
//                         <div className='flex '>
//                             <motion.button type='button' className='py-2 px-6 flex justify-center  items-center gap-x-1 bg-black rounded-md'
//                                 whileHover={{ boxShadow: '2px 4px 6px 2px rgba(0,0,0,0.9)' }}
//                                 transition={{ type: 'spring', stiffness: 500, damping: 15 }}
//                             >
//                                 <img src={extendCard} alt="" className='w-[25px]' />
//                                 <p className='text-white text-xs'>Expandir</p>
//                             </motion.button>
//                         </div>
//                     </div>
//                 </div>


//             </div>
//             <div className={`w-full bg-black rounded-b-2xl flex justify-center`}>
//                 <p className='text-white'>{"Historias"}</p>
//             </div>
//         </>
//     )
// }
