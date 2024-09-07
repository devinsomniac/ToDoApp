import React from 'react'

const Card = ({task,index,deleteTask}) => {
  return (
    <div className="bg-slate-300 border-solid border-black  
    h-14 w-64 text-center relative shadow-2xl 
    rounded-lg m-8 flex justify-center items-center
    sm:py-3 sm:m-3
    ">
      {task}
      <button onClick={() => deleteTask(index)} className=" bg-yellow-400 rounded-3xl absolute top-2 right-0 h-10 w-10 text-center flex justify-center items-center"><img width="30" height="30" src="https://img.icons8.com/dotty/30/filled-trash.png" alt="filled-trash"/></button>
    </div>
  )
}

export default Card