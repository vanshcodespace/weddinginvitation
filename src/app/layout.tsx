import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Petit_Formal_Script, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const petit = Petit_Formal_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-petit",
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["devanagari"],
  weight: ["400"],
  variable: "--font-tiro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akshit & Aarushi - Wedding Invitation",
  description: "Together with our families, we invite you to celebrate our wedding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lora.variable} ${petit.variable} ${tiro.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-ivory text-brown-dark">
        {children}
      </body>
    </html>
  );
}
