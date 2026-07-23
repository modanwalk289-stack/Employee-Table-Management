import { Routes,Route } from 'react-router-dom'
import React from 'react'
import Loginpage from './pages/Loginpage'
import Register from './pages/Register'
import AddEmployee from "./pages/AddEmployee";
import EditEmployees from "./pages/EditEmployees";

import Dashboard from './pages/Dashboard'
const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Loginpage />} />
    <Route path="/register" element ={<Register />} />
     <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-employee" element={<AddEmployee />} />
     <Route path="/edit-employee/:id" element={<EditEmployees />} />
   </Routes>
  )
}

export default App