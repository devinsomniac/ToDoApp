import React, { useState } from 'react'
import InputField from './InputField'
import MyCard from './MyCard'

const MainBody = () => {
  const [tasks,setTasks] = useState([])
  const addTask = (task)=>{
    setTasks([...tasks,task])
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i)=>i!==index))
  }
  return (
    <>
    
    <div>
      <InputField addTask = {addTask}/>
    </div>
    <div className="flex displayarea flex-wrap justify-center items-center px-2">
      {tasks.map((task,index)=>(
          <MyCard
          task={task} key={index} deleteTask={deleteTask} index={index}
          />
      ))}
    </div>
    </>
  )
}

export default MainBody