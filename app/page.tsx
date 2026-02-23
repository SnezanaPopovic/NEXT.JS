import AddTodo from "./components/AddTodo";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

async function deleteTodo(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  await prisma.todo.delete({
    where: { id: parseInt(id) },
  });
  revalidatePath("/");
}

export default async function Home() {
  const todos = await prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
  });

  type TodoType = (typeof todos)[number];

  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Todo Lista</h1>
      <AddTodo />

      <div style={{ marginTop: "30px" }}>
        <h2>Taskovi ({todos.length})</h2>
        {todos.length === 0 ? (
          <p>Nema taskova.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {todos.map((todo: TodoType) => (
              <li
                key={todo.id}
                style={{
                  padding: "15px",
                  marginBottom: "10px",
                  background: "#f5f5f5",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{todo.title}</span>
                <form action={deleteTodo}>
                  <input type="hidden" name="id" value={todo.id} />
                  <button
                    style={{
                      padding: "6px 12px",
                      background: "#ff4444",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Obriši
                  </button>
                </form>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
