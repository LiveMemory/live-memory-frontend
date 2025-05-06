import React, { useState } from 'react'

import ButtonSelectOption from '../ButtonSelectOption/ButtonSelectOption'

export default function MemoryDropDown({ toggle, setToggle, options, Options, selectedOption, SelectOneOption, emotes,grid }) {
  
    const [selectedButton, setSelectedButton] = useState(null)
    return (
        <div className={`flex ${grid?"w-full":"w-[55%]"}   text-black `}>

            <div className='flex flex-col w-full '>
                <div className="flex flex-col  h-fit  text-white  w-full ">
                    <button
                        type='button'

                        onClick={() => setToggle(() => !toggle)}
                        className="flex flex-row-reverse  px-4 py-2   justify-between gap-2 text-black bg-calygam-semi-light-red/45 border border-black rounded-t-lg  shadow-sm outline-none"
                    >
                        {selectedOption ? (
                            typeof selectedOption.label === 'string' && (selectedOption.label.includes('.png') || selectedOption.label.includes('.svg') || selectedOption.label.endsWith('%3e') || selectedOption.label.includes('.svg?')) ? (
                                <img src={selectedOption.label} alt="" className='w-[25px]' />
                            ) : (
                                selectedOption.label
                            )
                        ) : SelectOneOption}
                        <span className='w-10'>
                            {toggle ? String.fromCharCode(0x2193) : String.fromCharCode(0x2191)}
                        </span>
                    </button>


                    {toggle && (
                        <ul className="flex flex-col   bg-calygam-semi-light-red/45 h-[90px] overflow-y-auto [-webkit-scrollbar]:hidden [scrollbar-width:none] text-black border border-black  ">
                            {options.map((option, index) => (
                             
                                <li
                                    key={index}
                                    onClick={() => Options(option)}
                                    className="border-b border-black     group-hover:text-black    shadow-b-lg cursor-pointer"
                                >
                                    {emotes?
                                    <ButtonSelectOption identifier={index}  textAreaDash={option.label} selectedButton={selectedButton} setSelectedButton={setSelectedButton} iconAreaDash={option.label} />
                                    : <ButtonSelectOption identifier={index} textAreaDash={option.label} selectedButton={selectedButton} setSelectedButton={setSelectedButton} 
                                    />}
                                    

                                
                                </li>
                              
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
