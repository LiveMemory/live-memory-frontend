import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import happyIcon from '../../assets/img/happy-icon.svg'
import loveIcon from '../../assets/img/love-icon.svg'
import sadIcon from '../../assets/img/sad-icon.svg'
import funnyIcon from '../../assets/img/funny-icon.svg'
import friendshipIcon from '../../assets/img/friend-ship-icon.svg'
import gratefulIcon from '../../assets/img/gratefull-icon.svg'
import admirationIcon from '../../assets/img/adimiration-icon.svg'
import warningContent from '../../assets/img/warning-content.svg'
import peaceIcon from '../../assets/img/peace-icon.svg'
import postIcon from '../../assets/img/post-icon.svg'
import backIcon from '../../assets/img/backIcon.svg'
import thoughtIcon from '../../assets/img/thought-icon.svg'
import surprizeIcon from '../../assets/img/surprize-icon.svg'
import ansietyIcon from '../../assets/img/ansiety-icon.svg'
import angryIcon from '../../assets/img/angry-icon.svg'

import iconTrashMemory from '../../assets/img/icon-trash-memory.svg';
import iconRedTrashMemory from '../../assets/img/red-trashing.svg'
import iconEditMemory from '../../assets/img/icon-edit-memory.svg';
import iconCloseMemory from '../../assets/img/close-extended.svg';
import { api } from '../../services/api';
import { LivingMemoriesHook } from '../../hooks/LivingMemoriesHook/LivingMemoriesHook';
import MemoryDropDown from '../MemoryDropDown/MemoryDropDown';
import { ValidateForm } from '../../utils/ValidateForm/ValidateForm';
import { TranslateEmotion } from '../../utils/TranslateEmotion/TranslateEmotion';

export default function CardExpandedView({
  titleOfMemory,
  descriptionOfMemory,
  ImageMoment,
  emotionName,
  dateHour,
  dateLocal,
  identifier,
  setIsHandleCardOpen,
  isHandleCardOpen,
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
  category,
  setTeste,
}) {
  const { readAllPostMemory, setMemories, memories } = LivingMemoriesHook();

  const [isEditing, setIsEditing] = useState(false);


  const [editedTitle, setEditedTitle] = useState(titleOfMemory);
  const [editedDescription, setEditedDescription] = useState(descriptionOfMemory);
  const [editedCategory, setEditedCategory] = useState(emotionName);
  const [editedDateLocal, setEditedDateLocal] = useState(dateLocal);
  const [editedDateHour, setEditedDateHour] = useState(dateHour);
  const [remove, setRemove] = useState(false)
  const [validText, setValidText] = useState(false)
  const [validDescription, setValidDescription] = useState(false)


  const removeOneItem = async () => {
    try {
      await api.delete(`delete/${identifier}`);


    } catch (e) {
      console.log('Erro ao deletar memória:', e);
    } finally {
      readAllPostMemory();
    }
  };


  const handleEdit = () => {
    setIsEditing(true);
  };


  const handleCancel = () => {
    //caio<- Restaura os valores originais
    setEditedTitle(titleOfMemory);
    setEditedDescription(descriptionOfMemory);
    setEditedCategory(emotionName);
    setEditedDateLocal(dateLocal);
    setEditedDateHour(dateHour);
    setIsEditing(false);
  };



  useEffect(()=>{
    setSelectedFile(null)
  },[isEditing])

  const handleUpdateMemory = async (e) => {
    e.preventDefault()
    console.log(editedDescription)
    try {
      var data = new FormData();


      data.append('title', editedTitle);

      data.append('description', editedDescription);
      data.append('emoji', emoteOption.value);
      data.append('category', categoryOption.value);

      data.append('image', selectedFile ? selectedFile : ImageMoment)

      await api.put(`update/${identifier}`, data)

    } catch (error) {
      console.error('Erro ao atualizar memória:', error);
      alert('Erro ao atualizar memória. Tente novamente.');
    }
    finally {
      readAllPostMemory()
      setIsEditing(false);
    }
  };




  //TESTANDO
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


  // const CreateOneMemory = async(e)=>{
  //     e.preventDefault()
  //     console.log(emoteOption)
  //     try{
  //     const response = await api.post("create",{
  //         "title":editedTitle,
  //         "description":descriptionValue,
  //         "category":emoteOption.value,
  //         "sensitiveContent":isWarningContent,

  //     })
  //      await readAllPostMemory(); 




  //     }
  //     catch(e){
  //         console.log(e)

  //     }
  //     finally{
  //         setIsCreating(!isCreating)
  //     }

  // }
  useEffect(() => {
    console.log(categoryOption.value)
  }, [categoryOption.value])



  const categoryOptions = [

    { value: "FAMILY", label: "FAMÍLIA" },
    { value: "SCHOOL", label: "ESCOLA" },
    { value: "WORK", label: "TRABALHO" },
    { value: "FRIENDS", label: "AMIGOS" },
    { value: "TRAVEL", label: "VIAGEM" },
    { value: "HOBBY", label: "PASSATEMPO" },
    { value: "RELATIONSHIP", label: "RELAÇÃO" },
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
    setEmoteOption({
      value: emotionName,
      label: emotionName == 'HAPPY' ? happyIcon :
        emotionName == "LOVE" ? loveIcon :
          emotionName == "SAD" ? sadIcon :
            emotionName == "FUNNY" ? funnyIcon :
              emotionName == "FRIENDSHIP" ? friendshipIcon :
                emotionName == "GRATEFUL" ? gratefulIcon :
                  emotionName == "ADMIRATION" ? admirationIcon :
                    emotionName == "PEACE" ? peaceIcon :
                      emotionName == "THOUGHT" ? thoughtIcon :
                        emotionName == "SURPRIZE" ? surprizeIcon :
                          emotionName == 'ANSIETY' ? ansietyIcon :
                            emotionName == "ANGRY" ? angryIcon : ':/'
    })
    setCategoryOption({
      value: category, label: category == 'FAMILY' ? "FAMÍLIA" :
        category == "SCHOOL" ? "ESCOLA" :
          category == "WORK" ? "TRABALHO" :
            category == "FRIENDS" ? "AMIGOS" :
              category == "TRAVEL" ? "VIAGEM" :
                category == "RELATIONSHIP" ? "RELAÇÃO" :
                  category == "HOBBY" ? "PASSATEMPO" :
                    category == "ACHIEVEMENT" ? "CONQUISTA" :
                      category == "OTHER" ? "OUTROS" : ':/'
    }

    )
    console.log(category)
  }, [isEditing])







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
  useEffect(() => {
    if (isEditing || isHandleCardOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isEditing, isHandleCardOpen]);

  return (
    <motion.div
      className="flex flex-col items-center bg-live-memory-semi-light-gray  font-poppins rounded-2xl mb-8"
      initial={{ rotateX: '360deg', rotateY: '360deg', scale: 0.4 }}
      whileInView={{ x: 0, y: 0, rotate: 0, scale: 1 }}

      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: 'spring', stiffness: 180 }}

    >
      {remove&&
      <div className='w-full fixed flex justify-center items-center  z-50 bg-black/50 h-full rounded-2xl p-4'>
        <motion.div initial={{ rotateX: '360deg', rotateY: '360deg', opacity:0,width:'2px' }}
          whileInView={{ x: 0, y: 0, rotate: 0,  opacity:1,width:'100%'  }}

          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 60,damping:15 }}
          className='w-[85%] md:top-16 bottom-0 absolute md:sticky    flex flex-col gap-y-6    bg-black h-min rounded-2xl p-4'>
            <p className='text-center text-white text-base'>Deseja realmente <span className='font-bold'>Excluir</span>?</p>
            <div className='flex items-center justify-center md:justify-between gap-x-4  gap-y-4'>
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
}
      <div className="w-full justify-center text-center bg-black rounded-t-2xl items-center">
        <motion.p
          className="text-white"
          initial={{ rotateX: '360deg', rotateY: '360deg', scale: 0.4 }}
          whileInView={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 180 }}
        >
          {category == 'FAMILY' ? "FAMÍLIA" :
            category == "SCHOOL" ? "ESCOLA" :
              category == "WORK" ? "TRABALHO" :
                category == "FRIENDS" ? "AMIGOS" :
                  category == "TRAVEL" ? "VIAGEM" :
                    category == "HOBBY" ? "PASSATEMPO" :
                      category == "RELATIONSHIP" ? "RELAÇÃO" :
                        category == "ACHIEVEMENT" ? "CONQUISTA" :
                          category == "OTHER" ? "OUTROS" : null}
        </motion.p>
      </div>
      <div className=" flex flex-col items-center px-6    ">
        {isEditing ? (


          <form className='w-[98%]  font-poppins        bg-white pb-24 flex flex-col items-center  space-y-6  text-black rounded-md ' onSubmit={handleUpdateMemory} onClick={() => ValidateForm(setValidText, setValidDescription, editedTitle, editedDescription)}>
            <div className='flex px-6 gap-x-2 mt-2 justify-center '>
              <MemoryDropDown toggle={categoryToggle} setToggle={setCategoryToggle} options={categoryOptions} selectedOption={categoryOption} Options={CollectCategoryOption} SelectOneOption={"Categorias"} />
              <MemoryDropDown toggle={EmoteToggle} emotes={true} setToggle={setEmoteToggle} options={emoteOptions} selectedOption={emoteOption} Options={CollectEmoteOption} SelectOneOption={"reações"} />
            </div>
            <div className='flex flex-col w-[75%] space-y-3'>
              <div className='border-b-2  border-black'>
                <label htmlFor="titulo">Titulo:</label>
                <input type="text" placeholder='Um titulo' className='w-full bg-transparent outline-none' id='titulo' value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />

              </div>
              {!validText ? <p className='text-xs text-red-500/85 text-wrap  font-extrabold'>*Este campo de deve contêr de 5 a 25 caracteres!</p> : <></>}
              <div className='border-b-2 border-black'>
                <label htmlFor="desc">Texto:</label>
                <input type="text" placeholder='Uma descrição' className='w-full bg-transparent outline-none' id='desc' value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
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
              <button type='button' className='py-2 px-8 flex gap-x-1 rounded-md bg-black' onClick={() => setIsEditing(false)}>
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
        ) : (
          <>
            <div className="grid grid-cols-2 gap-x-2 my-4 place-items-center">
              <motion.div
                className="flex flex-col items-center space-y-5"
                initial={{ rotateX: '360deg', rotateY: '360deg', scale: 0.4 }}
                whileInView={{ x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ type: 'spring', stiffness: 180 }}
              >
                <p className="md:text-base text-xs">{titleOfMemory}</p>
                <div className="flex flex-col text-xs font-light">
                  <p>
                    {dateLocal}, às {dateHour}
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="border-2 border-black flex flex-col items-center space-y-1 bg-white rounded-md py-4 md:py-2 md:px-12 px-6"
                initial={{ rotateX: '360deg', rotateY: '360deg', scale: 0.4 }}
                whileInView={{ x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ type: 'spring', stiffness: 180 }}
              >
                <p>{TranslateEmotion[emotionName]}</p>
                <img src={emotionName == 'HAPPY' ? happyIcon :
                  emotionName == "LOVE" ? loveIcon :
                    emotionName == "SAD" ? sadIcon :
                      emotionName == "FUNNY" ? funnyIcon :
                        emotionName == "FRIENDSHIP" ? friendshipIcon :
                          emotionName == "GRATEFUL" ? gratefulIcon :
                            emotionName == "ADMIRATION" ? admirationIcon :
                              emotionName == "PEACE" ? peaceIcon :
                                emotionName == "THOUGHT" ? thoughtIcon :
                                  emotionName == "SURPRIZE" ? surprizeIcon :
                                    emotionName == 'ANSIETY' ? ansietyIcon :
                                      emotionName == "ANGRY" ? angryIcon : null} alt="Emoji" className="w-[25px]" />
              </motion.div>
            </div>

            {ImageMoment && (
              <div className="w-full flex justify-center drop-shadow-2xl shadow-black/50">
                <img
                  src={ImageMoment}
                  alt="Momento"
                  className=" w-full max-h-[350px] hover:scale-105 transition-all shadow-lg shadow-black/50 ease-linear rounded-xl"
                />
              </div>
            )}

            <div className="w-[80%] mt-4 flex justify-center mb-6 drop-shadow-2xl shadow-black/50">
              <p className="text-center text-xs">{descriptionOfMemory}</p>
            </div>

            <div className="flex justify-center items-center flex-wrap mb-4 gap-x-2 gap-y-3">

              <motion.button
                className="py-2 px-8 flex items-center bg-live-memory-semi-light-red justify-center rounded-md"
                // onClick={removeOneItem}
                onClick={() => setRemove(!remove)}
                whileHover={{ boxShadow: '2px 4px 6px 2px rgba(0,0,0,0.9)' }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}

              >
                <img src={iconTrashMemory} alt="Deletar" className="w-[25px]" />
              </motion.button>
              <motion.button
                className="py-2 px-8 flex items-center bg-live-memory-light-green justify-center rounded-md"
                onClick={handleEdit}
                whileHover={{ boxShadow: '2px 4px 6px 2px rgba(0,0,0,0.9)' }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
              >
                <img src={iconEditMemory} alt="Editar" className="w-[25px]" />
              </motion.button>
              <motion.button
                type="button"
                className="py-2 px-4 flex items-center gap-x-2 bg-black justify-center rounded-md"
                onClick={() => setIsHandleCardOpen(!isHandleCardOpen)}
                whileHover={{ boxShadow: '2px 4px 6px 2px rgba(0,0,0,0.9)' }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
              >
                <img src={iconCloseMemory} alt="Fechar" className="w-[25px]" />
                <p className="text-base text-white">Fechar</p>
              </motion.button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}