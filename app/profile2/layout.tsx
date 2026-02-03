import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Profile2 Layout</h2>
      {children}
    </div>
  );
}
