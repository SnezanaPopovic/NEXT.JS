"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
  let titleValue = formData.get("title") as string;

  if (!titleValue || !titleValue.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      title: titleValue.trim(),
    },
  });

  revalidatePath("/todos");
}

export async function deleteTodo(formData: FormData) {
  const id = Number(formData.get("id"));

  await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidatePath("/todos");
}

export async function deleteCompleted() {
  await prisma.todo.deleteMany({
    where: {
      completed: true,
    },
  });
  revalidatePath("/todos");
}

export async function updateTodo(formData: FormData) {
  const id = Number(formData.get("id"));
  const completed = formData.get("completed") === "true";

  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      completed: !completed,
    },
  });
  revalidatePath("/todos");
}
