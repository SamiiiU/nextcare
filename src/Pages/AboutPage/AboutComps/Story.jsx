import React from 'react'
import mission from '../../../Assets/Images/AboutImages/missionicon.png'
import storyImg from '../../../Assets/Images/AboutImages/history.png'

const Story = () => {
  return (
    <div className=' w-full py-20 px-4 sm:px-16 md:px-28 2xl:px-80 
     flex flex-col justify-center relative z-0'>
        <h1 className='text-4xl font-bold text-darkBG mb-6'>Our Story: From a Vision to Reality</h1>

        <p>NextCare began with a simple yet powerful vision: to connect compassionate 
        individuals with those who are in need, creating a sustainable future for everyone 
        involved. Founded in Year, we started as a small community-driven initiative aimed 
        at collecting clothing and essentials for those affected by crises. Over the years, our v
        ision evolved, and we saw the potential to build a larger platform where donors could 
        effortlessly contribute, NGOs could reach out, and together, we could create a ripple effect 
        of generosity. From a handful of donors and one NGO partner, NextCare has grown into a 
        recognized platform that has touched thousands of lives worldwide</p>

        <div className='w-full py-16 md:px-40 my-20  h-80' style={{backgroundImage : `url(${storyImg})` , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat' , backgroundSize : 'cover'}}>
            <span className='w-96 h-20' />
        </div>

        <div className='w-full flex lg:flex-row flex-col flex-wrap gap-4'>
                <div className='lg:flex-1 '>
                <h1 className='text-4xl font-bold text-darkBG mb-6'>Mindset We Chase</h1>

                <p>NextCare began with a simple yet powerful vision: to connect compassionate 
                individuals with those who are in need, creating a sustainable future for everyone 
                involved. Founded in Year, we started as a small community-driven initiative aimed 
                at collecting clothing and essentials for those affected by crises. Over the years, our v
                ision evolved, and we saw the potential to build a larger platform where donors could 
                effortlessly contribute, NGOs could reach out, and together, we could create a ripple effect 
                of generosity. From a handful of donors and one NGO partner, NextCare has grown into a 
                recognized platform that has touched thousands of lives worldwide</p>
              </div>

              <div className='lg:w-1/2  h-80  '  style={{backgroundImage : `url(${mission})` , backgroundSize : 'contain' , backgroundPosition : 'center' , backgroundRepeat : 'no-repeat' }}>

              </div>
        </div>

    </div>
  )
}

export default Story
