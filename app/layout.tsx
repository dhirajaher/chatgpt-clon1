import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          {/* All page content (Header + Page children) */}
          {children}
        </div>
      </body>
    </html>
  );
}
