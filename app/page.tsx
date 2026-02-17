// Ispravno uvezenje tipa Metadata
import type { Metadata } from "next";
import AddTodo from "./components/AddTodo";

import ClientComponent from "./components/ClientComponent";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <h1>Home page</h1>
      <ClientComponent />
      <AddTodo />
    </div>
  );
}
