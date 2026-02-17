import { prisma } from "@/lib/prisma"; // uvoz Prisma klijenta koji se koristi za interakciju sa bazom podataka
import { NextResponse } from "next/server"; // NextResponse je klasa koja se koristi za kreiranje odgovora u Next.js API rutama

export async function POST(request: Request) {
  // funkcija koja se poziva kada se pošalje POST zahtev na ovaj endpoint
  const body = await request.json(); // parsiranje JSON tela zahteva
  const newTodo = await prisma.todo.create({
    //kreiranje novog todo-a u bazi
    data: {
      title: body.title, // naslov todo-a koji dolazi iz requesta
    },
  });

  const todos = [
    { id: 1, title: "Learn Next.js" },
    { id: 2, title: "Build a Todo app" },
  ];
  return NextResponse.json(todos); // JSON vraćamo serveru
}
