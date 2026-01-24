import type { Metadata } from "next";
import { constants } from "node:crypto";

export const metadata: Metadata = {
  title: "About",
  description: "This is the about page",
};
export default function page() {
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
}
