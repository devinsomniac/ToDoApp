import React from 'react'
import InputField from './InputField'
import MyCard from './MyCard'

const MainBody = () => {
  return (
    <>
    
    <div>
      <InputField/>
    </div>
    <div className="flex displayarea flex-wrap justify-center items-center px-2 py-5">
      <MyCard/>
    </div>
    </>
  )
}

export default MainBody