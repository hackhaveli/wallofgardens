import type { Metadata } from "next";
import "./globals.css";
import ClientObserver from "./components/ClientObserver";
import MobileQuickBar from "./components/MobileQuickBar";

export const metadata: Metadata = {
  title: "Wall of Gardens — Living Architecture, Engineered | Delhi NCR",
  description: "Vertical gardens, terraces and living walls engineered for corporate and premium residential spaces across Delhi NCR. Design, installation and maintenance under one team.",
  icons: {
    icon: "/icon.jpg",
    apple: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400&family=Carlito:wght@400;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ClientObserver />
        <MobileQuickBar />
      </body>
    </html>
  );
}
