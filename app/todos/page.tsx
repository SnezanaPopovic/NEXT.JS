// import { prisma } from "@/lib/prisma";
// import { addTodo } from "./actions";

// export default async function TodosPage() {
//   const todos = await prisma.todo.findMany({
//     //uzima sve todo iz tabele u bazi
//     orderBy: {
//       createdAt: "desc", //desc rasporedjuje u opadajucem nizu
//     },
//   });

//   return (
//     <div className="max-w-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-6">moji zadaci</h1>

//       <form action={addTodo} className="flex gap-2 mb-8">
//         <input
//           type="text"
//           name="title"
//           placeholder="sta treba uraditi"
//           required
//           className="border px-2 py-1 rounded w-full"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Dodaj
//         </button>
//       </form>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id} className={todo.completed ? "line-through" : ""}>
//             {todo.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
