import React from 'react'

const OurPartners = () => {
     const companyLogos = [
        { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNRErTG9NDGxh3pn-QqGqPOisDm4T9iaUnQ&s",  },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNRErTG9NDGxh3pn-QqGqPOisDm4T9iaUnQ&s",  },
    { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNRErTG9NDGxh3pn-QqGqPOisDm4T9iaUnQ&s", },
    { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNRErTG9NDGxh3pn-QqGqPOisDm4T9iaUnQ&s", },
    { id: 5, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNRErTG9NDGxh3pn-QqGqPOisDm4T9iaUnQ&s",  },
    ]
  return (
    <div className='  w-full -translate-y-16 py-20  px-4 sm:px-16 md:px-28 2xl:px-80 
     flex flex-col justify-center relative z-0' >
        <h1 className='text-4xl font-bold text-darkBG mb-6'>Our Partners</h1>
        <p>We take immense pride in collaborating with some of the most impactful NGOs, working tirelessly to bring positive change to communities worldwide. Our trusted partners, like the ones listed above, share our vision of a better world. Together, we empower those in need, protect the environment, and create opportunities for sustainable development. Explore how our partnerships are transforming lives, one step at a time.</p>      

        <div className="overflow-hidden  py-4 pt-10">
      <div className="flex items-center gap-8 animate-scroll">
        {/* Original logos */}
        {companyLogos.map((logo , index) => (
          <div key={index} className="flex-none">
            <img
              src={logo.src}
              className="w-28 backdrop-brightness-200"
            />
          </div>
        ))}

        {/* Duplicate logos for smooth infinite scrolling */}
        {companyLogos.map((logo , index) => (
          <div key={`${index}-duplicate`} className="flex-none">
            <img
              src={logo.src}
              className="w-28"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default OurPartners
