import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import CardViewDisplay from '../CardViewDisplay/CardViewDisplay';

// images
import emojiIcon from '../../assets/img/love-emoji.svg';
import imageMoment from '../../assets/img/mock-image-moment.png';

import { LivingMemoriesHook } from '../../hooks/LivingMemoriesHook/LivingMemoriesHook';
import { FilterMemoriesHook } from '../../hooks/FilterMemoriesHook/FilterMemoriesHook';

export default function MemorableUnionOfHistories() {
  const [isHandleCardOpen, setIsHandleCardOpen] = useState(false);
  const { emojiName, categoryName } = FilterMemoriesHook(); 
  const { memories } = LivingMemoriesHook();

  const memoriesRef = useRef();
  const memorieIsView = useInView(memoriesRef, { once: true, amount: 0.3 });

  const formatDate = (dateString) => {
    if (!dateString) return 'Data indisponível';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  const formatHourArray = (arr) => {
    if (!arr || arr.length < 3) return 'Horário inválido';
    const [hour, minute, second] = arr;
    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(hour)}:${pad(minute)}:${pad(second)}`;
  };

  const filteredMemories = memories.filter((memory) => {
    const emojiMatch = emojiName ? memory.emoji.includes(emojiName) : true;
    const categoryMatch = categoryName ? memory.category.includes(categoryName) : true;
    return emojiMatch && categoryMatch;
  });

  return (
    <div className="w-full flex justify-center items-center  mt-4">
      <div className="lg:w-[90%] mt-20 lg:max-h-[800px] mb-6  md:max-h-[400px] max-h-[350px] overflow-y-auto border-b-4 shadow-lg shadow-black/50 border-black/15 p-4 [-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {filteredMemories.length > 0 ? (
          <div className="sm:columns-2 lg:columns-3 md:columns-2 columns-1 [&>div]:break-inside-avoid">
            {filteredMemories.map((memory, index) => (
              <div key={index}>
                <CardViewDisplay
                  ImageMoment={memory.imgUrl}
                  dateHour={memory.hourModifiedPost}
                  dateLocal={formatDate(memory.datePost)}
                  descriptionOfMemory={memory.description}
                  titleOfMemory={memory.title}
                  emotionName={memory.emoji}
                  category={memory.category}
                  isHandleCardOpen={isHandleCardOpen}
                  setIsHandleCardOpen={setIsHandleCardOpen}
                  identifier={memory.id}
                />
              </div>
            ))}
          </div>
        ) : (
          <div ref={memoriesRef} className="w-full text-center">
            <motion.p
              role="status"
              initial={{ x: -50, y: -50 }}
              animate={memorieIsView ? { x: 0, y: 0 } : { x: -50, y: -50 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              Sem Memórias para recordar, contribua conosco eternize um momento cadastrando-o :)
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
}
