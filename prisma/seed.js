const { PrismaClient } = require("../app/generated"); // putanja do generisanog Prisma Clienta

const prisma = new PrismaClient();

async function main() {
  const todos = [
    { title: "Napravi seed skriptu", completed: false },
    { title: "Testiraj Prisma Client", completed: false },
    { title: "Pokreni Next.js aplikaciju", completed: true },
  ];

  for (const todo of todos) {
    await prisma.todo.create({ data: todo });
  }

  console.log("Seed podaci su dodati ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
