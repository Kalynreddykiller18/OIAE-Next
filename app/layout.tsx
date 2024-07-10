import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/navigation";
import "./components/services.css"
import "./components/industries.css"
import "./components/about.css"

export const metadata: Metadata = {
  title: "OIAE Systems",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body ><Navigation />{children}</body>
    </html>
  );
}
