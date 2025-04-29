import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

const LivingMemoriesContext = createContext()

export function LivingMemoriesProvider({children}){
    const [memories,setMemories] = useState([])

    const [loading,setLoading] = useState(false)

    const readAllPostMemory = async()=>{
        setLoading(true)
        try{
            
        const response = await api.get("post/list")
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
    },[memories.length])

    return (
        <LivingMemoriesContext.Provider value={{memories,readAllPostMemory,setMemories}}>
            {loading&&<div className="w-full h-full text-center text-xs md:text-base bg-black/95 text-white uppercase flex flex-col font-extrabold justify-center items-center fixed inset-0">
            <p>Pegando dados...</p>
            </div>}
            {children}
        </LivingMemoriesContext.Provider>
    )

}
export default LivingMemoriesContext;