import { createContext, useState } from "react";

const FilterMemoriesContext = createContext()

export function FilterMemoriesProvider({children}){
    const [emojiName,setEmojiName] = useState('')
    const [categoryName,setCategoryName] = useState('')

    return(
        <FilterMemoriesContext.Provider value={{emojiName,setEmojiName,categoryName,setCategoryName}}>
            {children}
        </FilterMemoriesContext.Provider>
    )
}

export default FilterMemoriesContext;