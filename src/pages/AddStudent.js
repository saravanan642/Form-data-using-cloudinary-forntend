import React, { useState } from 'react'
import { Header } from '../Components/Header'
import StudentForm from '../Components/StudentForm'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    country: '',
    state: '',
    address: '',
    education: '',
    image: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('http://localhost:8000/student/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const data = await res.json()

    alert(data.message)

    if (res.ok) {
      navigate('/students')
    }
  }

  return (
    <div>
      <Header />

      <h2 className='text-center text-2xl font-bold mt-5'>
        Add Student
      </h2>

      <StudentForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default AddStudent