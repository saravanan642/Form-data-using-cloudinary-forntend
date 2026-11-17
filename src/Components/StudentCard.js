import React from 'react'
import { Link } from 'react-router-dom'

const StudentCard = ({ student, handleDelete }) => {
  return (
    <div className='border p-4 rounded shadow'>

      <img src={student.image}
        alt={student.name}
        className='w-full h-40 object-cover' />

      <h2 className='font-bold text-xl mt-2'>
        {student.name}
      </h2>

      <p>Age: {student.age}</p>
      <p>Gender: {student.gender}</p>
      <p>Country: {student.country}</p>

      <div className='flex gap-2 mt-3'>

        <Link to={`/view/${student._id}`}
          className='bg-green-600 text-white p-2'>
          View
        </Link>

        <Link to={`/edit/${student._id}`}
          className='bg-blue-600 text-white p-2'>
          Edit
        </Link>

        <button onClick={() => handleDelete(student._id)}
          className='bg-red-600 text-white p-2'>
          Delete
        </button>

      </div>

    </div>
  )
}

export default StudentCard