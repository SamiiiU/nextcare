import React from 'react'

const OurPartners = () => {
     const companyLogos = [
        { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNRErTG9NDGxh3pn-QqGqPOisDm4T9iaUnQ&s",  },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNRErTG9NDGxh3pn-QqGqPOisDm4T9iaUnQ&s",  },
    { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tB2aU_u4qdG0AGtC7d_7jeLHGWomPcNU_g&s", },
    { id: 4, src: "https://images-platform.99static.com//NnfsZfhWECwMKeuj4yxeInkbKN8=/0x126:874x1000/fit-in/500x500/99designs-contests-attachments/35/35657/attachment_35657633", },
    { id: 5, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXy1zw2qkfCuFxk8wjk49Wbu_bKC7Q-IMFA&s",  },

    { id: 6, src: "https://i.pinimg.com/474x/4a/a5/51/4aa5513e3d51532bf9991e5ad904d62f.jpg",  },

    { id: 7, src: "https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_448,dpr_2/f_auto,q_auto/v1705305212/ideas-and-advice-prod/en-us/3b715000-b75f-41fb-95ec-c5b83708b00a-e1600092409874/3b715000-b75f-41fb-95ec-c5b83708b00a-e1600092409874.jpg?_i=AA",  },
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
