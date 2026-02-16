// "use server";
// import { prisma } from "@/lib/prisma";
// import { revalidatePath } from "next/cache";

// export async function addTodo(formData: FormData) {
//   const titleValue = formData.get("title") as string;
//   if (!titleValue || !titleValue.trim()) {
//     return;
//   }

//   await prisma.todo.create({
//     data: {
//       title: titleValue.trim(),
//     },
//   });

//   revalidatePath("/todos"); //refresh
// }

// //crud create,read,update,delete
// //preko prisma komuniciramo sa bazom
