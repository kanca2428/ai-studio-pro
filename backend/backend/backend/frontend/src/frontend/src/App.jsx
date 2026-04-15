import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Sidebar from './components/Sidebar'

function App() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/api/dashboard/stats')
      .then(res => res.json())
      .then(data => setStats(data.data))
      .catch(console.error)
  }, [])

  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard stats={stats} />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
