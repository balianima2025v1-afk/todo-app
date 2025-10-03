'use client'
import { useState } from 'react'

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tambahkan todo baru..."
          style={{
            flex: 1,
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '12px 20px',
            backgroundColor: '#007acc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Tambah
        </button>
      </div>
    </form>
  )
}
