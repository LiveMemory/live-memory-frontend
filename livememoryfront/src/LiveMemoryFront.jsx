import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage.jsx'
import LivingMemoriesProviders from './providers/LivingMemoriesProviders/LivingMemoriesProviders.jsx'


function LiveMemoryFront() {
  const [count, setCount] = useState(0)

  return (
    <LivingMemoriesProviders>
      <HomePage />
    </LivingMemoriesProviders>


  )
}

export default LiveMemoryFront
