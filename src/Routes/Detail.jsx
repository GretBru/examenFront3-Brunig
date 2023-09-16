import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Detail = () => {
  const params = useParams()
  const [odontologo, setOdontologo] = useState()

  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(res => {
      setOdontologo(res.data)
    })
    },[params.id]);
    
  return (
    <div className='detail-container'>
      <h2>Dentist Details N°{params.id}</h2>
      {odontologo &&
          <div>
            <img src="../images/doctor.jpg" width={200} alt="" />
            <div>
              <h3>{odontologo.name}</h3>
              <p><strong>Username:</strong> {odontologo.username}</p>
              <p><strong>Email:</strong> {odontologo.email}</p>
              <p><strong>Phone:</strong> {odontologo.phone}</p>              
              <p><strong>Website:</strong> https://{odontologo.website}</p>
            </div>
          </div>
      }
    </div>
  )
}

export default Detail