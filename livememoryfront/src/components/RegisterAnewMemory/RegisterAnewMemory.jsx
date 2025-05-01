import React, { useEffect, useState } from 'react'
import MemoryDropDown from '../MemoryDropDown/MemoryDropDown.jsx';

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

import warningContent from '../../assets/img/warning-content.svg'
import { api } from '../../services/api.js';

export default function RegisterAnewMemory({  isCreating,
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


   

    const getSelectedFile = (event) => {
        console.log('Evento onChange disparado:', event.target.files);
        const file = event.target.files[0];
        setSelectedFile(file);
        setSucessImage(null);
    
        if (file) {
            console.log('Arquivo selecionado:', file);
            const reader = new FileReader();
            reader.onload = (e) => {
                const readerResult = e.target.result;
                console.log('Imagem carregada:', readerResult);
                setTeste(readerResult);
            };
            reader.readAsDataURL(file);
        } else {
            setTeste(null);
        }
    };
    

    const CreateOneMemory = async(e)=>{
        e.preventDefault()
        console.log(emoteOption)
        try{
        const response = await api.post("post/create",{
            "title":titleValue,
            "description":descriptionValue,
            "category":emoteOption.value,
            "sensitiveContent":isWarningContent,
            
        })

        }
        catch(e){
            console.log(e)
        }
    }


    const categoryOptions = [

        { value: "EASY", label: "FÁCIL" },
        { value: "MEDIUM", label: "MÉDIO" },
        { value: "HARD", label: "DÍFICIL" },
        { value: "BOSS", label: "CHEFE" },

    ]
    const CollectCategoryOption = (option) => {
        setCategoryOption(option);
        setCategoryToggle(false);
    }


    useEffect(() => {
        console.log(descriptionValue.length)
    }, [emoteOption])
    

    const emoteOptions = [

        { value: "HAPPY", label: happyIcon },
        { value: "LOVE", label: loveIcon },
        { value: "SAD", label: sadIcon },
        { value: "FUNNY", label: funnyIcon },
        { value: "FRIENDSHIP", label: friendshipIcon },
        { value: "GRATEFUL", label: gratefulIcon },
        { value: "ADIMIRATION", label: admirationIcon },
        { value: "PEACE", label: peaceIcon },
        { value: "THOUGHT", label: thoughtIcon },
        { value: "ANSIETY", label: ansietyIcon },
        { value: "ANGRY", label: angryIcon },

    ]
    const CollectEmoteOption = (option) => {
        setEmoteOption(option);
        setEmoteToggle(false);
    }

    return (
        <form className='w-[98%] bg-white pb-24 flex flex-col items-center  space-y-6  text-black rounded-md ' onSubmit={CreateOneMemory}>
            <div className='flex px-6 gap-x-2 mt-2 items-center  justify-center '>
                <input type="text" className='w-[45%] h-fit border border-black rounded-md outline-none ' placeholder='categoria' value={categoryValue} onChange={(e)=>setCategoryValue(e.target.value)} />
                <MemoryDropDown toggle={EmoteToggle} emotes={true} setToggle={setEmoteToggle} options={emoteOptions} selectedOption={emoteOption} Options={CollectEmoteOption} SelectOneOption={"reações"} />
            </div>
            <div className='flex flex-col space-y-3'>
                <div className='border-b-2 border-black'>
                    <label htmlFor="titulo">Titulo:</label>
                    <input type="text" placeholder='Um titulo' className='w-full bg-transparent outline-none' id='titulo' value={titleValue} onChange={(e)=>setTitleValue(e.target.value)}  />
                </div>
                <div className='border-b-2 border-black'>
                    <label htmlFor="desc">Texto:</label>
                    <input type="text" placeholder='Uma descrição' className='w-full bg-transparent outline-none' id='desc' value={descriptionValue} onChange={(e)=>setDescriptionValue(e.target.value)} />
                </div>
                <label className={`bg-ocean-gray/30 border-2 flex justify-center items-center text-center cursor-pointer w-[150px] mx-auto mt-5 hover:bg-ocean-gray/55 border-dashed   
                                ${selectedFile!=null?"border-white":"border-gray-500"} rounded-full min-h-[75px]   text-white`} id='place-image-picture' htmlFor="select-type-file" >
                                    {selectedFile !=null? <img className=' w-full     hover:animate-pulse  rounded-full' src={teste} alt="" />
                                    :null}</label>
                      
                <input type={"file"} accept='image/*' className="hidden" name="inputfiles" id='select-type-file' onChange={getSelectedFile}   required />
            </div>
            <div className='w-full justify-center flex'>
                <button type='button' className={`flex ${isWarningContent? "bg-yellow-300 justify-around":"bg-gray-500/15 justify-center"} rounded-md py-2 px-4  items-center gap-x-2`} onClick={()=> setIsWarningContent(!isWarningContent)}>

                    <img src={warningContent} alt="" className='w-[25px]' />
                    <p className={`transition-all ease-in-out duration-[1010ms]  ${isWarningContent?"w-fit opacity-100 text-xs": "w-0 overflow-hidden absolute -z-50 opacity-0"}`}>Conteúdo Sensível!</p>

                </button>
            </div>
            <div className='w-full justify-center gap-x-2 flex'>
                <button type='button' className='py-2 px-8 flex gap-x-1 rounded-md bg-black' onClick={()=>setIsCreating(!isCreating)}>
                    <img src={backIcon} alt="" className='w-[25px]' />
                    <p className='text-base text-white'>Voltar</p>
                </button>
                <button type='submit' className='py-2 px-4 flex gap-x-1 rounded-md bg-live-memory-light-blue'>
                <p className='text-base text-black'>Postar</p>
                    <img src={postIcon} alt="" className='w-[25px]' />

                </button>
            </div>
        </form>
    )
}
