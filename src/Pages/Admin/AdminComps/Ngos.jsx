import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Ngos = () => {
  const [ngos, setNgos] = useState([])
  const [formData, setFormData] = useState({ name: '', email: '', description: '' })

  useEffect(() => {
    // Get the JWT token from localStorage
    const token = localStorage.getItem('token')

    // Set the headers with the JWT token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios.get('https://nextcarebackend-production.up.railway.app/api/admin/getNGOs', config)
      .then(response => {
        setNgos(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the NGOs!', error)
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

    axios.post('https://nextcarebackend-production.up.railway.app/api/admin/createNGO', formData, config)
      .then(response => {
        // Update the NGOs list with the new NGO
        setNgos([...ngos, response.data])
        // Reset the form
        setFormData({ name: '', email: '', description: '' })
      })
      .catch(error => {
        console.error('There was an error creating the NGO!', error)
      })
  }

  return (
    <div className='w-full px-6 py-20 xl:px-20 '>
      <h1 className='mb-6 text-4xl font-bold text-darkBG'>NGOs</h1>
      <div>
        <form onSubmit={handleSubmit} className='mb-8'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Name</label>
            <input 
              type='text' 
              name='name' 
              value={formData.name} 
              onChange={handleChange} 
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md' 
              required 
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Email</label>
            <input 
              type='email' 
              name='email' 
              value={formData.email} 
              onChange={handleChange} 
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md' 
              required 
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Description</label>
            <textarea 
              name='description' 
              value={formData.description} 
              onChange={handleChange} 
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md' 
              required 
            ></textarea>
          </div>
          <button 
            type='submit' 
            className='px-4 py-2 text-white bg-blue-500 rounded-md'>
            Create NGO
          </button>
        </form>
        {ngos.length > 0 ? (
          ngos.map((ngo, index) => (
            <div key={index} className='p-4 mb-4 border rounded'>
              <h2 className='text-2xl font-semibold'>{ngo.name}</h2>
              <p className='mb-2 text-md'><strong>Email:</strong> {ngo.email}</p>
              <p className='text-md'>{ngo.description}</p>
            </div>
          ))
        ) : (
          <p>Loading NGOs...</p>
        )}
      </div>
    </div>
  )
}

export default Ngos
