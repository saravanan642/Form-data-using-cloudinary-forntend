import React, { useState, useEffect } from 'react'
import { Header } from '../Components/Header'
import { useParams, Link } from 'react-router-dom'

const ViewStudent = () => {

  const { id } = useParams()

  const [student, setStudent] = useState(null)

  // Fetch Single Student
  const FetchStudent = async () => {

    const res = await fetch(`http://localhost:8000/student/fetch/${id}`)

    const data = await res.json()

    setStudent(data.data)
  }

  useEffect(() => {
    FetchStudent()
  }, [id])

  if (!student) {
    return <h2 className='text-center mt-10'>Loading...</h2>
  }

  return (
    <div>

      <Header />

      <div className='max-w-xl mx-auto mt-10 p-5 border rounded shadow'>

        <h2 className='text-2xl font-bold text-center mb-5'>
          Student Details
        </h2>

        <img
          src={student.image}
          alt={student.name}
          className='w-40 h-40 object-cover rounded-full mx-auto mb-5'
        />

        <p><b>Name:</b> {student.name}</p>
        <p><b>Age:</b> {student.age}</p>
        <p><b>Gender:</b> {student.gender}</p>
        <p><b>Country:</b> {student.country}</p>
        <p><b>State:</b> {student.state}</p>
        <p><b>Address:</b> {student.address}</p>
        <p><b>Education:</b> {student.education}</p>

        <Link
          to="/students"
          className='block bg-blue-600 text-white text-center p-3 mt-5 rounded'
        >
          Back to Students
        </Link>

      </div>

    </div>
  )
}

export default ViewStudent