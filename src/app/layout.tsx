import type { Metadata } from "next";
import { roboto } from "@/config/fonts";

import "./globals.css";
import { BackButton, TopMenu } from "@/components";

export const metadata: Metadata = {
  title: "WAG app",
  description: "Coding Challenge for U-League",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} font-sans antialiased`}>
        <TopMenu />
        <div className="min-h-screen px-12 py-9 bg-gray-100">
          <BackButton />
          {children}
        </div>
      </body>
    </html>
  );
}
