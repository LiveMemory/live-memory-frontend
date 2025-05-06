import React, { useEffect, useState } from 'react'
import MemoryDropDown from '../MemoryDropDown/MemoryDropDown.jsx';

import happyIcon from '../../assets/img/happy-icon.svg'
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
import { LivingMemoriesHook } from '../../hooks/LivingMemoriesHook/LivingMemoriesHook.js';
import { ValidateForm } from '../../utils/ValidateForm/ValidateForm.js';

export default function RegisterAnewMemory({ isCreating,
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
    setTeste,setIsFilter,isFilter }) {

    const { readAllPostMemory, setMemories, memories } = LivingMemoriesHook();
    const [validText, setValidText] = useState(false)
    const [validDescription, setValidDescription] = useState(false)
        useEffect(()=>{
            setIsFilter(false)
        },[])
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
        
                setTeste(readerResult);
            };
            reader.readAsDataURL(file);
        } else {
            setTeste(null);
        }
    };


    const CreateOneMemory = async (e) => {
        e.preventDefault()
        // console.log(emoteOption)
        try {
            var data = new FormData();
            data.append('title', titleValue);
            data.append('description', descriptionValue);
            data.append('emoji', emoteOption.value);
            data.append('category', categoryOption.value);
            data.append('image', selectedFile);
         
            const response = await api.post("create", data)
            await readAllPostMemory();




        }
        catch (e) {
            console.log(e)

        }
        finally {
            setIsWarningContent(false)
            setTitleValue('')
        setDescriptionValue('')
            setEmoteOption({ value: 'FRIENDSHIP', label: friendshipIcon })
            setCategoryOption({ value: 'WORK', label: 'TRABALHO' })
            setIsCreating(!isCreating)
        }

    }


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


    // useEffect(() => {
    //     console.log(descriptionValue.length)
    // }, [emoteOption])
    useEffect(() => {
        setEmoteOption({ value: 'FRIENDSHIP', label: friendshipIcon })
        setCategoryOption({ value: 'WORK', label: 'TRABALHO' })
    }, [isCreating])




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

    const handleChangeTitle =(e)=>{
        const inputText = e.target.value
        if(inputText.length>25) return
        setTitleValue(inputText)
        if(inputText.length<5){
            setValidText(false)
        }
        else{
            setValidText(true)
        }
    }
    const handleChangeDescription =(e)=>{
        const inputDescription = e.target.value
        if(inputDescription.length>500) return
        setDescriptionValue(inputDescription)
        if(inputDescription.length<50){
            setValidDescription(false)
        }
        else{
            setValidDescription(true)
        }
    }

    return (
        // <form className='w-[98%] md:min-h-[300px] font-poppins h-[240px]  [-webkit-scrollbar]:hidden [scrollbar-width:none] md:h-auto overflow-y-auto  bg-white pb-24 flex flex-col items-center  space-y-6  text-black rounded-md ' onSubmit={CreateOneMemory} onMouseMoveCapture={()=>ValidateForm(setValidText,setValidDescription,titleValue,descriptionValue)} onClick={()=>ValidateForm(setValidText,setValidDescription,titleValue,descriptionValue)}>
        <form className='w-[98%] md:min-h-[300px] font-poppins h-[240px]  [-webkit-scrollbar]:hidden [scrollbar-width:none] md:h-auto overflow-y-auto  bg-white pb-24 flex flex-col items-center  space-y-6  text-black rounded-md ' onSubmit={CreateOneMemory} >

            <div className='flex px-6 gap-x-2 mt-2 justify-center '>
                <MemoryDropDown toggle={categoryToggle} setToggle={setCategoryToggle} options={categoryOptions} selectedOption={categoryOption} Options={CollectCategoryOption} SelectOneOption={"Categorias"} />
                <MemoryDropDown toggle={EmoteToggle} emotes={true} setToggle={setEmoteToggle} options={emoteOptions} selectedOption={emoteOption} Options={CollectEmoteOption} SelectOneOption={"reações"} />
            </div>
            <div className='flex flex-col w-[75%] space-y-3'>
                <div className={`border-b-2 transition-all ease-in-out duration-[1200ms]   ${validText?"border-black":"border-red-500"}`}>
                    <label htmlFor="titulo">Titulo:</label>
                    <input type="text" placeholder='Um titulo' className='w-full bg-transparent outline-none' id='titulo' value={titleValue} onChange={handleChangeTitle} />

                </div>
                {!validText ? <p className='text-xs text-red-500/85 text-wrap  font-extrabold'>*Este campo de deve contêr de 5 a 25 caracteres!</p> : <></>}
                <div className={`border-b-2 transition-all ease-in-out duration-[1200ms]   ${validDescription?"border-black":"border-red-500"}`}>
                    <label htmlFor="desc">Texto:</label>
                    <input type="text" placeholder='Uma descrição' className='w-full bg-transparent outline-none' id='desc' value={descriptionValue} onChange={handleChangeDescription} />
                </div>
                {!validDescription ? <p className='text-xs text-red-500/85 font-extrabold'>*Este campo de deve contêr de 50 a 500 caracteres!</p> : <></>}
                <label className={`bg-ocean-gray/30 border-2 flex justify-center items-center text-center min-h-[50px] cursor-pointer  mx-auto mt-5 hover:bg-blue-600/35 border-dashed   
                                ${selectedFile != null ? "border-black" : "border-black/50  "} rounded-md transition-all ease-in-out duration-[2000ms]    text-white`} id='place-image-picture' htmlFor="select-type-file" >
                    {selectedFile != null ? <img className=' w-[150px] md:w-[300px]  rounded-md    hover:animate-pulse  ' src={teste} alt="" />
                        : <span className='p-2 text-black opacity-65 flex'>Selecione uma imagem</span>}</label>

                <input type={"file"} accept='image/*' className="hidden" id='select-type-file' onChange={getSelectedFile} />
            </div>
            <div className='w-full justify-center flex'>
                <button type='button' className={`flex ${isWarningContent ? "bg-yellow-300 justify-around" : "bg-gray-500/15 justify-center"} rounded-md py-2 px-4  items-center gap-x-2`} onClick={() => setIsWarningContent(!isWarningContent)}>

                    <img src={warningContent} alt="" className='w-[25px]' />
                    <p className={`transition-all ease-in-out duration-[1010ms]  ${isWarningContent ? "w-fit opacity-100 text-xs" : "w-0 overflow-hidden absolute -z-50 opacity-0"}`}>Conteúdo Sensível!</p>

                </button>
            </div>
            <div className='w-full justify-center gap-x-2 flex'>
                <button type='button' className='py-2 px-8 flex gap-x-1 rounded-md bg-black' onClick={() => setIsCreating(!isCreating)}>
                    <img src={backIcon} alt="" className='w-[25px]' />
                    <p className='text-base text-white'>Voltar</p>
                </button>
                {validText && validDescription ?
                    <button type='submit' className='py-2 px-4 flex gap-x-1 rounded-md bg-live-memory-light-blue'>
                        <p className='text-base text-black'>Postar</p>
                        <img src={postIcon} alt="" className='w-[25px]' />

                    </button> : <button type='button' className='py-2 px-4 flex gap-x-1 cursor-not-allowed rounded-md bg-live-memory-light-blue opacity-65'>
                        <p className='text-base text-black'>Postar</p>
                        <img src={postIcon} alt="" className='w-[25px]' />

                    </button>}
            </div>
        </form>
    )
}
