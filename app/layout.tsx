import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EXELSIOR | Perfumes Arabes Premium",
  description:
    "Descubre fragancias arabes premium con notas de oud, ambar, musk y especias orientales. Perfumes intensos, elegantes y memorables.",
  keywords:
    "perfumes arabes, oud, ambar, musk, fragancias premium, perfumes de lujo",
  authors: [{ name: "EXELSIOR" }],
  openGraph: {
    title: "EXELSIOR | Perfumes Arabes Premium",
    description: "Fragancias arabes premium para quienes buscan dejar huella",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased bg-black text-white">
        <div className="neon-page-border" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
