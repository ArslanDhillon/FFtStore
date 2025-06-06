"use client";
// app/layout.tsx or layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex flex-col text-gray-900 overflow-y-auto">
        {/* Fixed Header */}
        <header className="w-full fixed top-0 left-0 z-50 bg-white">
          <Header />
        </header>

        {/* Push content below the fixed header */}
        <main className="pt-[40px] flex-1">
          {children}
        </main>

        <footer className="bg-black text-white">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

