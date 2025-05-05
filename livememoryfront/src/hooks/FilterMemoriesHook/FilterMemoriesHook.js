import { useContext } from "react"

import FilterMemoriesContext from "../../context/FilterMemoriesContext/FilterMemoriesContext"

export const FilterMemoriesHook = ()=>{
    return useContext(FilterMemoriesContext)
}