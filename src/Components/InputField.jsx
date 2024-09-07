import React, { useState } from 'react'

const InputField = ({addTask}) => {
    const maxLength = 15
    const [value,setValue] = useState("")
    const handleChange = (e) => {
        setValue(e.target.value)

    }
    const handleSubmit = () => {
        if(value.trim()){
            addTask(value)
            setValue("")
        }
    }
  return (
   
    <div className="relative text-center">
        <textarea 
        onChange={handleChange} 
        value={value}
        maxLength={maxLength} 
        className="maxLength={10} flex justify-center items-center bg-slate-300 border border-solid border-black h-14 w-72 text-center shadow-2xl rounded-lg m-8 ">
        </textarea>
        <p className="text-sm text-gray-500">{maxLength - value.length} characters remaining</p>
        <p className="text-sm text-gray-500">Your Task will be saved for 7 Days</p>
        <button onClick={handleSubmit} className="absolute bottom-16 right-6 bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center"><img width="30" height="30" src="https://img.icons8.com/dotty/30/add.png" alt="add"/></button>
    </div>
  )
}

export default InputField