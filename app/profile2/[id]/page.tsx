export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  const user = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  if (!user || !user.id) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>User details for ID: {id}</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}
