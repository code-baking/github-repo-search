import { Route, Routes } from 'react-router-dom'

import Login from './components/login/Login'

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/page" element={<div>테스트페이지</div>} />
      </Routes>
    </div>
  )
}

export default App;
