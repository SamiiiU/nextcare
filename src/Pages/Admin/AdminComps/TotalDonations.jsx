import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TotalDonations = () => {
  const [donations, setDonations] = useState([])

  useEffect(() => {
    // Get the JWT token from localStorage
    const token = localStorage.getItem('token')

    // Set the headers with the JWT token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios.get('https://nextcarebackend-production.up.railway.app/api/admin/getitems', config)
      .then(response => {
        setDonations(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the donations!', error)
      })
  }, [])

  return (
    <div className='w-full px-6 py-20 xl:px-20 '>
      <h1 className='mb-6 text-4xl font-bold text-darkBG'>Donations</h1>
      <div>
        {donations.length > 0 ? (
          donations.map((donation, index) => (
            <div key={index} className='p-4 mb-4 border rounded'>
              <h2 className='text-2xl font-semibold'>{donation.title}</h2>
              <p className='mb-2 text-md'><strong>Description:</strong> {donation.description}</p>
              <p className='mb-2 text-md'><strong>Category:</strong> {donation.category}</p>
              <p className='mb-2 text-md'><strong>Condition:</strong> {donation.condition}</p>
              <p className='mb-2 text-md'><strong>NGO Name:</strong> {donation.ngoName}</p>
              <p className='mb-2 text-md'><strong>Status:</strong> {donation.status}</p>
            </div>
          ))
        ) : (
          <p>Loading donations...</p>
        )}
      </div>
    </div>
  )
}

export default TotalDonations
