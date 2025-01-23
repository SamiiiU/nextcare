import React, { useState } from 'react';
import axios from 'axios';
import CustomButton from '../../../CommonComps/CustomButton/CustomButton';
import BASE_URL from '../../../GlobalProvider/BASE_URL';

const Form = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        condition: '',
    });
    const [massageText , setMassageText] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        console.log('Form data:', formData);
        const token = localStorage.getItem('token');
        
        if(formData.description !== "" && formData.title !== ""){
            try {
                const response = await axios.post(`${BASE_URL}/api/users/createItem`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log('Form submitted successfully:', response.data);
                setMassageText(`Thank You ${localStorage.getItem('username')} For Your Donations`)
                // Handle successful form submission
            } catch (error) {
                console.error('Error submitting form:', error);
                setMassageText("Try Again!")
                // Handle form submission error
            }
        }else{
            setMassageText("Fill The Form Correctly")
        }
    };

    return (
        <div className='w-full text-white bg-darkBG px-4 sm:px-16 md:px-28 2xl:px-80 py-20 flex flex-col relative z-0'>
            <CustomButton text={"Donation Form"} className={"text-xl mb-8"} />

            <p>NextCare began with a simple yet powerful vision: to connect compassionate
                individuals with those who are in need, creating a sustainable future for everyone
                involved. Founded in [Year], we started as a small community-driven initiative aimed
                at collecting clothing and essentials for those affected by</p>

            <div className='w-full rounded-2xl bg-white/20 px-10 py-4 flex flex-col mt-8 gap-y-4'>
                <div className='w-full'>
                    <h1 className='font-bold text-2xl'>Title</h1>
                    <input
                        type='text'
                        name='title'
                        placeholder='Enter your title'
                        className='w-full text-black outline-none border-none px-4 py-2 rounded-xl bg-white/50'
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                <div className='w-full'>
                    <h1 className='font-bold text-2xl'>Description</h1>
                    <textarea
                        name='description'
                        placeholder='Enter your description'
                        className='w-full outline-none border-none px-4 py-2 rounded-xl bg-white/50 text-black'
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <div className='w-full'>
                    <h1 className='font-bold text-2xl'>Category</h1>
                    <input
                        type='text'
                        name='category'
                        placeholder='Enter your category'
                        className='w-full text-black outline-none border-none px-4 py-2 rounded-xl bg-white/50'
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>

                <div className='w-full'>
                    <h1 className='font-bold text-2xl'>Condition</h1>
                    <input
                        type='text'
                        name='condition'
                        placeholder='Enter item condition'
                        className='w-full text-black outline-none border-none px-4 py-2 rounded-xl bg-white/50'
                        value={formData.condition}
                        onChange={handleChange}
                    />
                </div>
                <p className='text-xl font-bold'>{massageText}</p>

                <div className="w-fit mt-8">
                    <CustomButton text={"Submit You Donation Details"} onClick={handleSubmit} className={"w-full py-4"} />
                </div>
            </div>
        </div>
    );
};

export default Form;
