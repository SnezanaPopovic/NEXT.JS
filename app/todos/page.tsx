import { addTodo } from "./actions";

export default function TodosPage() {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">moji zadaci</h1>
      <form action={addTodo} className="flex gap-2 mb-8">
        <input
          type="text"
          name="title"
          placeholder="sta treba uraditi"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          dodaj
        </button>
      </form>
    </div>
  );
}
