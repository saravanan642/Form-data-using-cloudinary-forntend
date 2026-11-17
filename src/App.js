import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AddStudent from './pages/AddStudent'
import StudentList from './pages/StudentList'
import EditStudent from './pages/EditStudent'
import ViewStudent from './pages/VIewStudents'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/add" element={<AddStudent />} />

        <Route path="/students" element={<StudentList />} />

        <Route path="/edit/:id" element={<EditStudent />} />

        <Route path="/view/:id" element={<ViewStudent />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App