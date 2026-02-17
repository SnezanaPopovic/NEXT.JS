"use client";
import { useState } from "react";

export default function AddTodo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input) return;
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
