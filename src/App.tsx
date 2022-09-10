import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './components/login/Login'

import './App.css'

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;
