import React, { useState } from 'react'
import CustomButton from '../../../CommonComps/CustomButton/CustomButton'

const Form = () => {

    const categories = [
        "Mens Suits",
        "Ladies Suits",
        "Winter Wear",
        "Summer Wear",
        "Kids Cloths"
    ]

    const items = [
        "Trouser Kurta",
        "Pant & Shirt",
        "Hoodies",
        "Ladies Kurti",
        "Kids Frog",
        "Kids Kit",

    ]
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

      const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

        const [selectedItems, setSelectedItems] = useState([]);

        const handleItemsChange = (event) => {
            const value = event.target.value;
            setSelectedItems((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
            );
        };
    return (
        <div className='w-full text-white  bg-darkBG  px-4 sm:px-16 md:px-28 2xl:px-80 
    py-20 flex flex-col  relative z-0'>
            <CustomButton text={"Donation Form"} className={"text-xl mb-8"} />

            <p>NextCare began with a simple yet powerful vision: to connect compassionate
                individuals with those who are in need, creating a sustainable future for everyone
                involved. Founded in [Year], we started as a small community-driven initiative aimed
                at collecting clothing and essentials for those affected by</p>


            <div className='w-full rounded-2xl bg-white/20 px-10 py-4 flex flex-col mt-8 gap-y-4'>
                <div className='w-full'>
                    <h1 className='font-bold text-2xl'>Title</h1>
                    <input type='text' placeholder='Enter your title' className='w-full text-black outline-none border-none px-4 py-2 rounded-xl bg-white/50' />
                </div>

                <div className='w-full'>
                    <h1 className='font-bold text-2xl'>Description</h1>
                    <textarea type='text' placeholder='Enter your title' className='w-full outline-none border-none px-4 py-2 rounded-xl bg-white/50 text-black' />
                </div>


                <div className="w-full flex lg:flex-row flex-col  gap-4 ">
                    <div className="flex-1">
                        <h1 className="font-bold text-2xl">Select Categories</h1>
                        <div className="space-y-4">
                            {/* Mens Suits */}
                            {categories.map((category , idx) => (
                                <div key={idx} className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={handleCategoryChange}
                                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-orangeBG"
                                />
                                <label  className="ml-2">
                                    {category}
                                </label>
                            </div>
                            ))}


                        </div>

                    </div>

                    <div className="flex-1">
                        <h1 className="font-bold text-2xl">Select Items</h1>
                        <div className="space-y-4">
                            {/* Mens Suits */}
                            {items.map((item , idx) => (
                                <div key={idx} className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={item}
                                    checked={selectedItems.includes(item)}
                                    onChange={handleItemsChange}
                                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-orangeBG"
                                />
                                <label  className="ml-2">
                                    {item}
                                </label>
                            </div>
                            ))}


                        </div>

                    </div>

                </div>

                <div className="w-full">
                    <h1 className='font-bold text-2xl'>Select NGO</h1>

                    <select
                        id="menu"
                        value={selectedOption}
                        onChange={handleChange}
                        className="w-full outline-none text-black border-none px-4 py-2 rounded-xl bg-white/50"
                    >
                        <option value="">--Select--</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                </div>


            </div>
        </div>
    )
}

export default Form
