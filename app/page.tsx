// Ispravno uvezenje tipa Metadata
import type { Metadata } from "next";
import ClientComponent from "./components/ClientComponent";

export const metadata: Metadata = {
  title: "Home page",
  description: "This is home page",
};

export default async function Home() {
  // Fetch podataka
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        exercitationem fugiat alias asperiores vero quisquam illo quaerat
        aliquam? Magnam harum voluptatibus enim eveniet rerum natus ea vitae
        temporibus laborum quam repudiandae, ad mollitia. Molestias nihil quasi
        quis perferendis eum quo pariatur aut perspiciatis architecto, optio,
        sequi dolores labore? Ipsum rem enim quia dignissimos repellat quasi
        corporis earum sed illum sequi quae, recusandae minima odit dolore sit
        praesentium asperiores, accusamus ducimus voluptatibus nemo. Debitis
        voluptatum accusamus in quas sequi, veniam incidunt quibusdam illo sunt
        quasi officia sapiente! Quasi praesentium placeat dolorum nemo, dolores
        incidunt sunt aliquid facere, velit unde consequatur.
      </p>
      {/* Primer client component */}
      <ClientComponent />
    </div>
  );
}
