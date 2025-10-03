export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '12px',
      marginBottom: '8px',
      backgroundColor: 'white',
      borderRadius: '4px',
      border: '1px solid #eee',
      textDecoration: todo.completed ? 'line-through' : 'none',
      color: todo.completed ? '#888' : '#333'
    }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{
          marginRight: '12px',
          transform: 'scale(1.2)'
        }}
      />
      
      <span style={{ flex: 1 }}>
        {todo.text}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '6px 12px',
          cursor: 'pointer',
          fontSize: '12px'
        }}
      >
        Hapus
      </button>
    </div>
  )
}
