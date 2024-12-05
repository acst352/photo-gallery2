import type { Metadata } from "next";
import { montserrat } from "@/src/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Galería de fotografía",
  description: "Creada con React",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="64x64" />
        <link href="./globals.css" rel="stylesheet" />
      </head>
      <body className={`${montserrat.className} light-theme`}>{children}</body>
    </html>
  );
}
