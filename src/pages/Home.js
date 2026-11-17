import React from 'react'
import { Header } from '../Components/Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      {/* Welcome Section */}
      <div className="bg-blue-600 text-white text-center py-20 px-5">

        <h1 className="text-4xl font-bold mb-5">
          Welcome to Student Management System
        </h1>

        <p className="text-lg mb-7">
          Manage Student Information Easily and Efficiently
        </p>

        <div className="flex justify-center gap-5 flex-wrap">

          <Link to="/add"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200">
            Add Student
          </Link>

          <Link to="/students"
            className="bg-blue-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-900">
            View Students
          </Link>

        </div>

      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto py-12 px-5">

        <h2 className="text-3xl font-bold text-center mb-5">
          About Our System
        </h2>

        <p className="text-gray-600 text-center leading-7 max-w-3xl mx-auto">
          Student Management System is a web-based application
          designed to manage student personal information.
          It helps users to add, view, update and delete student
          records easily. All student details are stored securely
          in the database.
        </p>

      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-5 pb-12">

        <h2 className="text-3xl font-bold text-center mb-8">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Add Student
            </h3>

            <p className="text-gray-600">
              Easily add new student details including name,
              age, gender, address and education.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-green-600 mb-3">
              View Student
            </h3>

            <p className="text-gray-600">
              View complete student information and
              personal details whenever needed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-purple-600 mb-3">
              Update Student
            </h3>

            <p className="text-gray-600">
              Update existing student information
              whenever changes are required.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-red-600 mb-3">
              Delete Student
            </h3>

            <p className="text-gray-600">
              Remove unwanted student records easily
              from the database.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-orange-600 mb-3">
              Image Upload
            </h3>

            <p className="text-gray-600">
              Upload and store student profile images
              using Cloudinary.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-indigo-600 mb-3">
              Database Storage
            </h3>

            <p className="text-gray-600">
              Store and manage student records using
              MongoDB database.
            </p>
          </div>

        </div>

      </div>

      {/* Technology Section */}
      <div className="bg-white py-12 px-5">

        <h2 className="text-3xl font-bold text-center mb-8">
          Technologies Used
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">

          {["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary", "Tailwind CSS"].map((tech) => (

            <span key={tech}
              className="bg-blue-100 text-blue-700 px-5 py-3 rounded-lg font-semibold">
              {tech}
            </span>

          ))}

        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6">

        <h2 className="text-xl font-bold mb-2">
          Student Management System
        </h2>

        <p className="text-gray-400">
          Manage Student Records Smartly and Easily.
        </p>

        <p className="text-gray-500 mt-4">
          © 2026 Student Management System. All Rights Reserved.
        </p>

      </footer>

    </div>
  )
}

export default Home