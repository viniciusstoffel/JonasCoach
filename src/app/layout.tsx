import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Jonas Coach — Transformação Física e Performance",
  description: "Chega de promessas. Resultados reais com método comprovado, acompanhamento personalizado e ciência aplicada ao seu corpo.",
  openGraph: {
    title: "Jonas Coach — Transformação Física e Performance",
    description: "Resultados reais com método comprovado e acompanhamento personalizado.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
