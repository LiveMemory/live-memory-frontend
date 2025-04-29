import { useContext } from "react"
import LivingMemoriesContext from "../../context/LivingMemoriesContext/LivingMemoriesContext"

export const LivingMemoriesHook = ()=>{
    return useContext(LivingMemoriesContext)
}