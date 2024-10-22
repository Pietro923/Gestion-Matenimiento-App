import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Mantenimiento App",
  description: "Aplicación de gestión de mantenimiento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen flex">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100 ml-64">{children}</main>
      </body>
    </html>
  );
}
