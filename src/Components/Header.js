import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='bg-blue-600 text-white p-5 flex justify-between'>

      <h1 className='text-2xl font-bold'>
        Student Management
      </h1>

      <div className='flex gap-5'>
        <Link to="/">Home</Link>
        <Link to="/add">Add Student</Link>
        <Link to="/students">Students</Link>
      </div>

    </div>
  )
}