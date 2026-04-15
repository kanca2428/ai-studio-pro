import React from 'react'

function Dashboard({ stats }) {
  return (
    <div className="dashboard">
      <h1>AI Studio Pro</h1>
      <p>Yapay Zeka Kontrol Paneli</p>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Kullanicilar</h3>
          <p>{stats?.users || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Sohbetler</h3>
          <p>{stats?.chats || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Token</h3>
          <p>{stats?.tokensUsed || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Aktif</h3>
          <p>{stats?.activeUsers || 0}</p>
        </div>
      </div>
      <a href="/chat" className="btn-primary">Yeni Sohbet</a>
    </div>
  )
}

export default Dashboard
