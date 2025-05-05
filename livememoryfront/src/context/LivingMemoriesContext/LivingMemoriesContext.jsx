import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

import loadingIcon from '../../assets/img/loading-white.svg'

const LivingMemoriesContext = createContext()

export function LivingMemoriesProvider({children}){
    const [memories,setMemories] = useState([])

    const [loading,setLoading] = useState(false)

    const readAllPostMemory = async()=>{
        setLoading(true)
        try{
            
        const response = await api.get("list")
        setMemories(response.data)
  

        }
        catch(e){
            console.log("deu um erro - "+ e)
        }
        finally{
     
                setLoading(false)

            
        }
        
    }
    useEffect(()=>{
        readAllPostMemory()
    },[])

    return (
        <LivingMemoriesContext.Provider value={{memories,readAllPostMemory,setMemories}}>
            {loading&&<div className="w-full font-poppins h-full  z-[70] text-center text-xs md:text-base bg-black/95 text-white uppercase flex flex-col font-extrabold justify-center items-center fixed inset-0">
            <img src={loadingIcon} alt="" />
            <p>Carregando...</p>
            </div>}
            {children}
        </LivingMemoriesContext.Provider>
    )

}
export default LivingMemoriesContext;