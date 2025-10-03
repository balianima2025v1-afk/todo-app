import TodoItem from './TodoItem'

export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        color: '#666',
        padding: '40px'
      }}>
        Tidak ada todo. Yuk tambahkan yang baru!
      </div>
    )
  }

  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
