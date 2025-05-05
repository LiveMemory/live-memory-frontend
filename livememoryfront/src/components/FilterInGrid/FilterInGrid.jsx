import React, { useEffect } from 'react'


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
import { FilterMemoriesHook } from '../../hooks/FilterMemoriesHook/FilterMemoriesHook'
import MemoryDropDown from '../MemoryDropDown/MemoryDropDown'

export default function FilterInGrid({setIsFilter,isFilter,setIsCreating,    categoryToggle,
    setCategoryToggle,categoryOption,
    setCategoryOption,}) {
    const {emojiName,setEmojiName,categoryName,setCategoryName} = FilterMemoriesHook() 
    useEffect(()=>{
        setIsCreating(false)
    },[])
    const categoryOptions = [

        { value: "FAMILY", label: "FAMÍLIA" },
        { value: "SCHOOL", label: "ESCOLA" },
        { value: "WORK", label: "TRABALHO" },
        { value: "FRIENDS", label: "AMIGOS" },
        { value: "TRAVEL", label: "VIAGEM" },
        { value: "HOBBY", label: "PASSATEMPO" },
        {value:"RELATIONSHIP",label: "RELAÇÃO"},
        { value: "ACHIEVEMENT", label: "CONQUISTA" },
        { value: "OTHER", label: "OUTROS" }

    ]
    const CollectCategoryOption = (option) => {
        setCategoryOption(option);
        setCategoryToggle(false);
    }
    useEffect(()=>{
        isFilter&&
        setCategoryName(categoryOption.value)
   
    },[categoryOption.value])
    
  return (
    <div className='w-full md:fixed bottom-0 p-2 flex flex-col gap-y-4  bg-black min-h-[100px]'>
        <div className='flex justify-between'>
        <h3 className='text-white font-semibold my-2'>Filtro</h3>
        <button className='text-white' onClick={()=>setIsFilter(!isFilter)}>X</button>
        </div>
        <div className=' lg:w-[25%] md:w-[44%] w-[50%] mx-auto rounded-t-xl  bg-white/50 flex  justify-center'>
     <MemoryDropDown grid={true} toggle={categoryToggle} setToggle={setCategoryToggle} options={categoryOptions} selectedOption={categoryOption} Options={CollectCategoryOption} SelectOneOption={"Categorias"} />
     </div>
        <div className='grid grid-cols-4 w-[50%] mx-auto   place-items-center'>
           <div className='flex flex-col gap-y-2'>
            <button onClick={()=>setEmojiName('HAPPY')}><img src={happyIcon} alt=""  className='w-[25px]'/></button>
            <button onClick={()=>setEmojiName('FRIENDSHIP')}><img src={friendshipIcon} alt=""  className='w-[25px]'/></button>
            <button onClick={()=>setEmojiName('THOUGHT')}><img src={thoughtIcon} alt=""  className='w-[25px]'/></button>

    
           </div>
           <div className='flex flex-col gap-y-2'>
           <button onClick={()=>setEmojiName('LOVE')}><img src={loveIcon} alt=""  className='w-[25px]'/></button>
           <button onClick={()=>setEmojiName('GRATEFUL')}><img src={gratefulIcon} alt=""  className='w-[25px]'/></button>
           <button onClick={()=>setEmojiName('SURPRISE')}><img src={surprizeIcon} alt=""  className='w-[25px]'/></button>
           </div>
           <div className='flex flex-col gap-y-2 '>
           <button onClick={()=>setEmojiName('SAD')}><img src={sadIcon} alt=""  className='w-[25px]'/></button>
           <button onClick={()=>setEmojiName('ADMIRATION')}><img src={admirationIcon} alt=""  className='w-[25px]'/></button>
           <button onClick={()=>setEmojiName('ANSIETY')}><img src={ansietyIcon} alt=""  className='w-[25px]'/></button>
           </div>
           <div className='flex flex-col gap-y-2'>
           <button onClick={()=>setEmojiName('FUNNY')}><img src={funnyIcon} alt=""  className='w-[25px]'/></button>
           <button onClick={()=>setEmojiName('PEACE')}><img src={peaceIcon} alt=""  className='w-[25px]'/></button>
           <button onClick={()=>setEmojiName('ANGRY')}><img src={angryIcon} alt=""  className='w-[25px]'/></button>
           </div>
        </div>
    </div>
  )
}
