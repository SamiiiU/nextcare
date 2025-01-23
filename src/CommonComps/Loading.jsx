import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center bg-darkBG justify-center text-4xl h-screen w-screen '>
      <span className='p-5 border-4 border-white rounded-full border-b-transparent animate-spin'></span>
    </div>
  )
}

export default Loading
