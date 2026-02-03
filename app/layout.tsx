import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "My App",
    template: "%s | My App",
  },
  description: "This is the description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <header>
          <h1>My App</h1>
          {/* <nav>
            <Link href="/">Home</Link>
            <Link href="about">About</Link>
            <Link href="profile">Profile</Link>
          </nav> */}
        </header>
        {children}
      </body>
    </html>
  );
}
