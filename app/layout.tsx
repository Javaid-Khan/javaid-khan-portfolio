import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Javaid Khan | Aspiring Junior Full-Stack Developer",
  description:
    "Modern developer portfolio for Javaid Khan, an Electronics Engineer transitioning into full-stack web development.",
  openGraph: {
    title: "Javaid Khan | Full-Stack Developer Portfolio",
    description:
      "Building scalable digital solutions with clean and efficient code.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-background font-sans text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
