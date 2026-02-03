import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2>Users</h2>
      <Link href="/profile2/1">User 1</Link>
      <br />
      <Link href="/profile2/2">User 2</Link>
      <br />
      <Link href="/profile2/3">User 3</Link>
      <br />
      <Link href="/profile2/4">User 4</Link>
    </div>
  );
}
