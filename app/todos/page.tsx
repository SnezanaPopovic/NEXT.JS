import { prisma } from "@/lib/prisma";
import { addTodo, updateTodo, deleteTodo } from "./actions";

export default async function TodosPage() {
  const todos = await prisma.todo.findMany({
    // uzima sve todo iz tabele u bazi
    orderBy: {
      createdAt: "desc", // desc raspoređuje u opadajućem nizu
    },
  });

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Moji zadaci</h1>

      <form action={addTodo} className="flex gap-2 mb-8">
        <input
          type="text"
          name="title"
          placeholder="Šta treba uraditi"
          required
          className="border px-2 py-1 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Dodaj
        </button>
      </form>

      {todos.length === 0 ? (
        <p className="text-gray-500">Nema zadataka. Dodaj prvi!</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 group"
            >
              <form action={updateTodo}>
                <input type="hidden" name="id" value={todo.id} />
                <input
                  type="hidden"
                  name="completed"
                  value={String(todo.completed)}
                />

                <button
                  type="submit"
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    todo.completed
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-gray-300 hover:border-green-400"
                  }`}
                >
                  {todo.completed && <span className="text-xs">✓</span>}
                </button>
              </form>

              <span
                className={`flex-1 ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.title}
              </span>
              <form action={deleteTodo}>
                <input type="hidden" name="id" value={todo.id} />
                <button
                  type="submit"
                  className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  x
                </button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
