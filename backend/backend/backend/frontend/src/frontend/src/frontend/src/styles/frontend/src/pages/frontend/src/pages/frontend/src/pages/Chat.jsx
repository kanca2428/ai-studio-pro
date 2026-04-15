import React, { useState } from 'react'

function Chat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('http://localhost:3001/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      })
      const data = await res.json()
      if (data.success) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="chat-container">
      <h2>AI Sohbet</h2>
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={'message ' + msg.role}>
            <strong>{msg.role === 'user' ? 'Sen' : 'AI'}</strong>
            <p>{msg.content}</p>
          </div>
        ))}
        {loading && <div className="loading">Yaziyor...</div>}
      </div>
      <div className="chat-input">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()} 
          placeholder="Mesaj yazin..." 
        />
        <button onClick={sendMessage} disabled={loading}>Gonder</button>
      </div>
    </div>
  )
}

export default Chat
