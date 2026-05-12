import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stowhive | Storage Made Simple",
  description: "Find convenient storage space near you or earn recurring income from unused space.",
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
