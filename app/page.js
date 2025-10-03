'use client'
import { useState } from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Belajar Next.js', completed: false },
    { id: 2, text: 'Buat Todo App', completed: true },
    { id: 3, text: 'Deploy ke Vercel', completed: false }
  ])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333',
        marginBottom: '30px'
      }}>
        📝 My Todo App
      </h1>
      
      <AddTodo onAdd={addTodo} />
      <TodoList 
        todos={todos} 
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      
      <div style={{ 
        marginTop: '20px', 
        textAlign: 'center',
        color: '#666',
        fontSize: '14px'
      }}>
        Total: {todos.length} | 
        Selesai: {todos.filter(t => t.completed).length} | 
        Belum: {todos.filter(t => !t.completed).length}
      </div>
    </div>
  )
}
