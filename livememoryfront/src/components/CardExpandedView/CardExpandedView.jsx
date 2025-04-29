import { motion } from 'framer-motion';
import React, { useState } from 'react';
import emojiIcon from '../../assets/img/love-emoji.svg';
import iconTrashMemory from '../../assets/img/icon-trash-memory.svg';
import iconEditMemory from '../../assets/img/icon-edit-memory.svg';
import iconCloseMemory from '../../assets/img/close-extended.svg';
import { api } from '../../services/api';
import { LivingMemoriesHook } from '../../hooks/LivingMemoriesHook/LivingMemoriesHook';

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
}) {
  const { readAllPostMemory, setMemories, memories } = LivingMemoriesHook();

  // Estado para controlar o modo de edição
  const [isEditing, setIsEditing] = useState(false);

  // Estados locais para os dados editáveis
  const [editedTitle, setEditedTitle] = useState(titleOfMemory);
  const [editedDescription, setEditedDescription] = useState(descriptionOfMemory);
  const [editedCategory, setEditedCategory] = useState(emotionName);
  const [editedDateLocal, setEditedDateLocal] = useState(dateLocal);
  const [editedDateHour, setEditedDateHour] = useState(dateHour);


  const removeOneItem = async () => {
    try {
      await api.delete(`/post/delete/${identifier}`);
     
      const updatedMemories = memories.filter((memory) => memory.id !== identifier);
      setMemories(updatedMemories);
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
    // Restaura os valores originais
    setEditedTitle(titleOfMemory);
    setEditedDescription(descriptionOfMemory);
    setEditedCategory(emotionName);
    setEditedDateLocal(dateLocal);
    setEditedDateHour(dateHour);
    setIsEditing(false);
  };


  const handleUpdateMemory = async () => {
    try {
      const updatedData = {
        title: editedTitle,
        description: editedDescription,
        category: editedCategory,
  
      };

      const response = await api.put(`/post/update/${identifier}`, updatedData);

      
      const updatedMemories = memories.map((memory) =>
        memory.id === identifier ? { ...memory, ...updatedData } : memory
      );
      setMemories(updatedMemories);

      // Sai do modo de edição
      setIsEditing(false);

      alert('Memória atualizada com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar memória:', error);
      alert('Erro ao atualizar memória. Tente novamente.');
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center bg-live-memory-semi-light-gray font-poppins rounded-2xl mb-8"
      initial={{ rotateX: '360deg', rotateY: '360deg', scale: 0.4 }}
      whileInView={{ x: 0, y: 0, rotate: 0, scale: 1 }}
      whileTap={{ scale: 1.07, cursor: 'zoom-in' }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: 'spring', stiffness: 180 }}
    >
      <div className="w-full justify-center text-center bg-black rounded-t-2xl items-center">
        <motion.p
          className="text-white"
          initial={{ rotateX: '360deg', rotateY: '360deg', scale: 0.4 }}
          whileInView={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 180 }}
        >
          {'História'}
        </motion.p>
      </div>
      <div className="overflow-y-auto h-[400px] flex flex-col items-center [-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {isEditing ? (
          <div className="flex flex-col items-center space-y-5 w-full px-4">
   
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="border rounded p-1 text-lg md:text-2xl text-center w-full"
              placeholder="Título"
              aria-label="Editar título da memória"
            />

        
           

        
            <div className="border-2 border-black flex flex-col items-center space-y-1 bg-white rounded-md py-4 md:py-2 md:px-12 px-6">
              <input
                type="text"
                value={editedCategory}
                onChange={(e) => setEditedCategory(e.target.value)}
                className="border rounded p-1 text-center"
                placeholder="Categoria"
                aria-label="Editar categoria da memória"
              />
              <img src={emojiIcon} alt="Emoji" className="w-[25px]" />
            </div>

            {ImageMoment && (
              <div className="w-full flex justify-center drop-shadow-2xl shadow-black/50">
                <img
                  src={ImageMoment}
                  alt="Momento"
                  className="md:w-[300px] w-[250px]"
                />
              </div>
            )}

            {/* Input para a descrição */}
            <div className="w-[80%] mt-4 flex justify-center mb-6 drop-shadow-2xl shadow-black/50">
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="border rounded p-1 text-xs text-center w-full"
                placeholder="Descrição"
                rows="3"
                aria-label="Editar descrição da memória"
              />
            </div>

            {/* Botões Salvar e Cancelar */}
            <div className="flex justify-center items-center flex-wrap mb-4 gap-x-2 gap-y-3">
              <motion.button
                className="py-2 px-8 flex items-center bg-green-500 text-white justify-center rounded-md"
                onClick={handleUpdateMemory}
              >
                Salvar
              </motion.button>
              <motion.button
                className="py-2 px-8 flex items-center bg-red-500 text-white justify-center rounded-md"
                onClick={handleCancel}
              >
                Cancelar
              </motion.button>
            </div>
          </div>
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
                <p className="md:text-2xl text-lg">{titleOfMemory}</p>
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
                <p>{emotionName}</p>
                <img src={emojiIcon} alt="Emoji" className="w-[25px]" />
              </motion.div>
            </div>

            {ImageMoment && (
              <div className="w-full flex justify-center drop-shadow-2xl shadow-black/50">
                <img
                  src={ImageMoment}
                  alt="Momento"
                  className="md:w-[300px] w-[250px]"
                />
              </div>
            )}

            <div className="w-[80%] mt-4 flex justify-center mb-6 drop-shadow-2xl shadow-black/50">
              <p className="text-center text-xs">{descriptionOfMemory}</p>
            </div>

            <div className="flex justify-center items-center flex-wrap mb-4 gap-x-2 gap-y-3">
              <motion.button
                className="py-2 px-8 flex items-center bg-live-memory-semi-light-red justify-center rounded-md"
                onClick={removeOneItem}
              >
                <img src={iconTrashMemory} alt="Deletar" className="w-[25px]" />
              </motion.button>
              <motion.button
                className="py-2 px-8 flex items-center bg-live-memory-light-green justify-center rounded-md"
                onClick={handleEdit}
              >
                <img src={iconEditMemory} alt="Editar" className="w-[25px]" />
              </motion.button>
              <motion.button
                type="button"
                className="py-2 px-4 flex items-center gap-x-2 bg-black justify-center rounded-md"
                onClick={() => setIsHandleCardOpen(!isHandleCardOpen)}
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