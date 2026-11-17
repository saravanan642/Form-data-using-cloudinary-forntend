import React, { useState, useEffect } from 'react'
import { Header } from '../Components/Header'
import StudentForm from '../Components/StudentForm'
import { useParams, useNavigate } from 'react-router-dom'

const EditStudent = () => {

  const { id } = useParams()
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

  // Fetch Single Student
  const FetchStudent = async () => {

    const res = await fetch(`http://localhost:8000/student/fetch/${id}`)

    const data = await res.json()

    const student = data.data

    setFormData({
      name: student.name,
      age: student.age,
      gender: student.gender,
      country: student.country,
      state: student.state,
      address: student.address,
      education: student.education,
      image: ''
    })
  }

  useEffect(() => {
    FetchStudent()
  }, [id])

  // Update Student
  const handleSubmit = async (e) => {

    e.preventDefault()

    const res = await fetch(`http://localhost:8000/student/update/${id}`, {
      method: 'PUT',
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

      <h2 className='text-2xl text-center font-bold mt-5'>
        Edit Student
      </h2>

      <StudentForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />

    </div>
  )
}

export default EditStudent