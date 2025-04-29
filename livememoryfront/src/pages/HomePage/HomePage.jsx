import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

//componentes
import MemoryHeader from '../../components/MemoryHeader/MemoryHeader.jsx'
import AcessToActionLargest from '../../components/AcessToActionLargest/AcessToActionLargest.jsx'
import MemoryHero from '../../components/MemoryHero/MemoryHero.jsx'
import HistoryTitle from '../../components/HistoryTitle/HistoryTitle.jsx'
import MemorableUnionOfHistories from '../../components/MemorableUnionOfHistories/MemorableUnionOfHistories.jsx'
import MemoryFooter from '../../components/MemoryFooter/MemoryFooter.jsx'
//images
import moonMode from '../../assets/img/moon-mode.svg'
import lineDecoration from '../../assets/img/line-decoration-one.svg'

export default function HomePage() {
const[isCreating,setIsCreating] = useState(false)


  const [isfixed, setIsFixed] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
 
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col font-poppins  w-full  '>
   <MemoryHeader IconOfMode={moonMode} isFixed={isfixed}/>
   
   <AcessToActionLargest isCreating={isCreating} setIsCreating={setIsCreating}/>
   <main className='flex flex-col '>
   <MemoryHero/>
   <HistoryTitle lineDecoration={lineDecoration}/>
   
  <MemorableUnionOfHistories />
  </main>
  <MemoryFooter scrolling={isfixed} setIsCreating={setIsCreating} isCreating={isCreating} />

    </div>
  )
}
