import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Donators = () => {
  const [donators, setDonators] = useState([])
  const [formData, setFormData] = useState({ fullName: '', profileImageURL: '', phoneNumber: '' })

  useEffect(() => {
    // Get the JWT token from localStorage
    const token = localStorage.getItem('token')

    // Set the headers with the JWT token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios.get('https://nextcarebackend-production.up.railway.app/api/admin/getusers', config)
      .then(response => {
        console.log(response.data)
        setDonators(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the Donators!', error)
      })
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Get the JWT token from localStorage
    const token = localStorage.getItem('token')

    // Set the headers with the JWT token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios.post('https://nextcarebackend-production.up.railway.app/auth/signup', formData, config)
      .then(response => {
        // Update the Donators list with the new Donator
        setDonators([...donators, response.data])
        // Reset the form
        setFormData({ fullName: '', profileImageURL: '', phoneNumber: '' })
      })
      .catch(error => {
        console.error('There was an error creating the Donator!', error)
      })
  }

  return (
    <div className='w-full px-6 py-20 xl:px-20 '>
      <h1 className='mb-6 text-4xl font-bold text-darkBG'>Donators</h1>
      <div>
        <form onSubmit={handleSubmit} className='mb-8'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Full Name</label>
            <input 
              type='text' 
              name='fullName' 
              value={formData.fullName} 
              onChange={handleChange} 
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md' 
              required 
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Profile Image URL</label>
            <input 
              type='text' 
              name='profileImageURL' 
              value={formData.profileImageURL} 
              onChange={handleChange} 
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md' 
              required 
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Phone Number</label>
            <input 
              type='text' 
              name='phoneNumber' 
              value={formData.phoneNumber} 
              onChange={handleChange} 
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md' 
              required 
            />
          </div>
          <button 
            type='submit' 
            className='px-4 py-2 text-white bg-blue-500 rounded-md'>
            Create Donator
          </button>
        </form>
        {donators.length > 0 ? (
          donators.map((donator, index) => (
            <div key={index} className='p-4 mb-4 border rounded'>
              <h2 className='text-2xl font-semibold'>{donator.fullName}</h2>
              <img src={donator.profileImageURL} alt={donator.fullName} className='w-20 h-20 mb-2 rounded-full' />
              <p className='mb-2 text-md'><strong>Phone Number:</strong> {donator.phoneNumber}</p>
            </div>
          ))
        ) : (
          <p>Loading Donators...</p>
        )}
      </div>
    </div>
  )
}

export default Donators
