import { useState } from 'react'



function LiveMemoryFront() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <p></p>
    <p className={`w-full h-full min-h-lvh bg-gray-800 ${count ==2 || count==5 || count==9?  "bg-red-500": "bg-green-500"} text-center `} onClick={()=> setCount(count+1)}>Hello World! </p>
    </>
  )
}

export default LiveMemoryFront
