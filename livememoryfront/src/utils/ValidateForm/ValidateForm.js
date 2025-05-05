export const ValidateForm =
(setValidText,
setValidDescription,
titleValue,
descriptionValue)=>{
    const isValidText = (text) => {
        text.length < 5 || text.length > 25 ? setValidText(false) : setValidText(true)
    }

    isValidText(titleValue)


    const isValidDescription = (text) => {
        text.length < 20 || text.length > 200 ? setValidDescription(false) : setValidDescription(true)
    }
    
    isValidDescription(descriptionValue)
}

