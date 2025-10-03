"use client"; // Biar bisa pake state (client-side)

import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Add a task..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
