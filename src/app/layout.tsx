import { ReactNode } from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { Sidebar } from "@root/components/Sidebar";

import { Providers } from "./Providers";
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
        <Providers>
          <div className="min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
            <Sidebar />

            <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pb-12 lg:pt-8">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
