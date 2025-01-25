import React from 'react'
import ScrollCounter from '../../../CommonComps/PrebuiltComs/ScrollCounter'

const Role = () => {

    const role = [
        {num : 10000 , text : "Items Donated"},
        {num : 500 , text : "NGo's Partnered"},
        {num : 50000 , text : "People Got Clean Clothes"},
    ]
  return (
    <div className=' w-full py-20 px-4 sm:px-16 md:px-28 2xl:px-80 
    flex flex-col justify-center relative z-0'>
       <h1 className='text-4xl font-bold text-darkBG mb-6'>The Role Of NextCare In The World</h1>

        <p>"Since our inception, NextCare has been at the forefront of creating sustainable 
        change. We've helped thousands of individuals, supported numerous NGOs, and p
        rovided essential resources to communities in need. We measure our success not 
        by the numbers alone but by the lives touched and the smiles created."</p>

        <div className='  w-full   
        flex flex-col justify-center relative z-0'>
        <div className='w-full flex justify-center gap-8 flex-wrap '>
        {role.map((isHow , index) => (
            <div key={index} className='max-w-[300px]  shadow-lg rounded-2xl bg-white p-4 flex flex-col justify-center items-center gap-4'>
                <span className='text-orangeBG text-4xl'><ScrollCounter from={0} to={isHow.num}/></span>
                <h1 className='text-black font-bold'>{isHow.text}</h1>
            </div>
        ))}
        </div>
    </div>
      
    </div>
  )
}

export default Role
