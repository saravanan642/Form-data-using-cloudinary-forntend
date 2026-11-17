import React, { useEffect, useState } from 'react'
import { Header } from '../Components/Header'
import StudentCard from '../Components/StudentCard'
import { Link } from 'react-router-dom'

const StudentList = () => {

  const [students, setStudents] = useState([])

  const API = 'http://localhost:8000/student'

  const FetchStudent = async () => {
    const res = await fetch(`${API}/fetch`)
    const data = await res.json()

    setStudents(data.data || [])
  }

  useEffect(() => {
    FetchStudent()
  }, [])

  const handleDelete = async (id) => {

    if (window.confirm('Are you sure you want to delete this student?')) {

      const res = await fetch(`${API}/delete/${id}`, {
        method: 'DELETE'
      })

      const data = await res.json()

      alert(data.message)

      FetchStudent()
    }
  }

  return (
    <div className='min-h-screen bg-slate-100'>

      <Header />

      {/* Heading Section */}
      <div className='bg-white p-8 shadow-sm'>

        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5'>

          <div>
            <h1 className='text-3xl font-bold text-slate-800'>
              Student Directory
            </h1>

            <p className='text-gray-500 mt-2'>
              Manage and organize all student information in one place.
            </p>
          </div>

          <Link
            to='/add'
            className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold'
          >
            + Add New Student
          </Link>

        </div>

      </div>

      {/* Statistics Section */}
      <div className='max-w-7xl mx-auto px-5 py-8'>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

          <div className='bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500'>
            <p className='text-gray-500'>Total Students</p>
            <h2 className='text-3xl font-bold text-blue-600 mt-2'>
              {students.length}
            </h2>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500'>
            <p className='text-gray-500'>Male Students</p>
            <h2 className='text-3xl font-bold text-green-600 mt-2'>
              {students.filter(s => s.gender === 'Male').length}
            </h2>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500'>
            <p className='text-gray-500'>Female Students</p>
            <h2 className='text-3xl font-bold text-purple-600 mt-2'>
              {students.filter(s => s.gender === 'Female').length}
            </h2>
          </div>

        </div>

      </div>

      {/* Student List */}
      <div className='max-w-7xl mx-auto px-5 pb-10'>

        <div className='flex justify-between items-center mb-6'>

          <h2 className='text-2xl font-bold text-slate-800'>
            All Students
          </h2>

          <span className='bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold'>
            {students.length} Records
          </span>

        </div>

        {students.length === 0 ? (

          <div className='bg-white rounded-xl shadow-sm text-center p-12'>

            <h2 className='text-xl font-bold text-gray-700'>
              No Students Found
            </h2>

            <p className='text-gray-500 mt-2'>
              Start by adding your first student.
            </p>

            <Link
              to='/add'
              className='inline-block mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg'
            >
              Add Student
            </Link>

          </div>

        ) : (

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>

            {students.map((student) => (

              <StudentCard
                key={student._id}
                student={student}
                handleDelete={handleDelete}
              />

            ))}

          </div>

        )}

      </div>

      {/* Footer */}
      <footer className='bg-slate-900 text-white text-center p-5'>

        <p className='text-gray-400'>
          © 2026 Student Management System. All Rights Reserved.
        </p>

      </footer>

    </div>
  )
}

export default StudentList