import ClientComponent from "./components/ClientComponent";
import ToggleButton from "./components/ToggleButton";
export default async function Home() {
  const respoonse = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await respoonse.json();

  return (
    <div>
      {/* <h1>Posts</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa mollitia,
        vitae unde soluta incidunt, ullam veritatis iusto, id culpa rerum beatae
        corrupti ipsum facilis ex excepturi laudantium. Placeat, veniam ratione?
      </p>
      <ClientComponent />
      <ToggleButton /> */}
    </div>
  );
}
