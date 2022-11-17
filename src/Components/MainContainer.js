import React from 'react'
import { TaskBody } from './TaskBody'
import { TaskInput } from './TaskInput'

export const MainContainer = () => {
  return (
    <div className= 'max-w-sm sm:max-w-lg lg:max-w-6xl mx-auto shadow-lg mt-20 rounded-lg h-[1000px]' >
     <div className='p-3  bg-blue-700 '>
      <p className='text-white'>You Are Taking Challenges Of New Projects</p>
     </div>
     <div className='grid  grid-cols-1 lg:grid-cols-2'>
      <TaskBody />
      <TaskInput />
     </div>
    </div>
  )
}
