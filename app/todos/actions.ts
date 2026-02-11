"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
  let titleValue = formData.get("title") as string;

  if (!titleValue || !titleValue.trim()) {
    return;
  }
  prisma.todo.create({
    data: {
      title: titleValue.trim(),
    },
  });
  revalidatePath("/todos");
}

//prisma je konekcija sa bazom
//CRUD ,C create,R read(get metoda),U update, D delete
