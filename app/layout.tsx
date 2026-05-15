import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Perticari",
  description: "Hierros y aceros para construcción e industria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}