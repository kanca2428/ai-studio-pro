import React, { useState } from 'react'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3001/api/auth/login', { email, password })
      localStorage.setItem('token', res.data.token)
      alert('Giris basarili!')
    } catch (error) {
      alert('Giris basarisiz')
    }
  }

  return (
    <div className="login-container">
      <h2>Giris Yapin</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Sifre" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Giris</button>
      </form>
    </div>
  )
}

export default Login
