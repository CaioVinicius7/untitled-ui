import { ReactNode } from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { Sidebar } from "@root/components/Sidebar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Untitled UI",
  description: "Tailwind + Next"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />

          <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
