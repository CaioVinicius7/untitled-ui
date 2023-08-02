import { ReactNode } from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwind + Next",
  description: "Tailwind + Next"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app">
          <aside className="border-r border-zinc-200 px-5 py-8">sidebar</aside>

          <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
