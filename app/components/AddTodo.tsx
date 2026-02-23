"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      setTitle("");
      router.refresh();
    } catch (error) {
      console.error("Greška:", error);
      alert("Nije uspelo dodavanje!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Unesi task"
        style={{ padding: "8px", marginRight: "10px", width: "300px" }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>
        Dodaj
      </button>
    </form>
  );
}
