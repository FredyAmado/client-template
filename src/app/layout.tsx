import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nombre de tu Empresa",
  description: "Descripción de tu negocio. Transformamos ideas en soluciones digitales.",
  metadataBase: new URL("https://tudominio.com"),
  openGraph: {
    title: "Nombre de tu Empresa",
    description: "Descripción de tu negocio. Transformamos ideas en soluciones digitales.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
