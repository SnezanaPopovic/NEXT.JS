import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Profile",
    template: "%s | Profile",
  },
  description: "This is the description",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>layout for profile</h1>
      {children}
    </>
  );
}
