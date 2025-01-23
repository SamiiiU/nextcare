import React, { useState } from 'react'
import Ngos from './AdminComps/Ngos'
import Donators from './AdminComps/Donators'
import TotalDonations from './AdminComps/TotalDonations'

const Admin = () => {
    const [ selected , setSelected] = useState(0)
    const handleSelected = (index) => {
        setSelected(index)
    }

    const controllers = ["Dashboard" , "Ngos" , "Donators" , "TotalDonations"]
  return (
    <div className='flex w-full '>
        <div className='min-w-80 relative max-w-[30%] px-10 py-6 min-h-screen bg-darkBG space-y-4'>
            <h1 className='mb-16 text-4xl font-bold text-white'>NextCare</h1>

            <div className='flex flex-col w-full gap-y-4'>
                {controllers.map((control , idx) => (
                    <span onClick={() => handleSelected(idx)} key={idx} className={`font-bold cursor-pointer text-white ${selected === idx ? ' bg-orangeBG' : 'bg-darkBG shadow-md'} px-4 py-2 rounded-xl`}>
                        {control}
                    </span>
                ))}
            </div>

            <span className={` text-white font-bold cursor-pointer absolute bottom-4  hover:bg-orangeBG bg-darkBG shadow-md'} px-4 py-2 rounded-xl`}>Log Out </span>

        </div>

        <div className='flex-1 px-10 py-6 bg-white'>
            <Ngos/>
            <Donators/>
            <TotalDonations/>
            <h1 className='mb-4 text-4xl font-bold'>{controllers[selected]}</h1>

        </div>
    </div>
  )
}

export default Admin
