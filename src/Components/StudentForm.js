import React from 'react'

const StudentForm = ({ formData, setFormData, handleSubmit }) => {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleImage = (e) => {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result
        })
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-xl mx-auto p-5 space-y-3'>

      <input name="name" placeholder="Name"
        value={formData.name} onChange={handleChange}
        className='border p-3 w-full' required />

      <input name="age" type="number" placeholder="Age"
        value={formData.age} onChange={handleChange}
        className='border p-3 w-full' required />

      <select name="gender" value={formData.gender}
        onChange={handleChange}
        className='border p-3 w-full' required>

        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>

      </select>

      <input name="country" placeholder="Country"
        value={formData.country} onChange={handleChange}
        className='border p-3 w-full' required />

      <input name="state" placeholder="State"
        value={formData.state} onChange={handleChange}
        className='border p-3 w-full' required />

      <textarea name="address" placeholder="Address"
        value={formData.address} onChange={handleChange}
        className='border p-3 w-full' required />

      <input name="education" placeholder="Education"
        value={formData.education} onChange={handleChange}
        className='border p-3 w-full' required />

      <input type="file" accept="image/*"
        onChange={handleImage}
        className='border p-3 w-full' />

      <button className='bg-blue-600 text-white p-3 w-full'>
        Submit
      </button>

    </form>
  )
}

export default StudentForm