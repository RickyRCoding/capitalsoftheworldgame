import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capitals of the World Game",
  description: "A game from that one nerdy guy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
