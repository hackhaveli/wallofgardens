import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wall of Gardens — Living Architecture, Engineered | Delhi NCR",
  description: "Vertical gardens, terraces and living walls engineered for corporate and premium residential spaces across Delhi NCR. Design, installation and maintenance under one team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
