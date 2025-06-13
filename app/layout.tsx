import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixan AI | Automatizaciones con alma - Automation with soul",
  description: "Agencia de automatizaciones y agentes AI para pymes. Ahorramos tiempo y dinero a tu equipo con soluciones inteligentes. AI automation agency for SMBs.",
  keywords: "automatización, AI, chatbots, agentes IA, pymes, SMB, automation, artificial intelligence",
  authors: [{ name: "Pixan AI" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Pixan AI | Automatizaciones con alma",
    description: "Agencia de automatizaciones y agentes AI para pymes. Ahorramos tiempo y dinero a tu equipo.",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixan AI | Automatizaciones con alma",
    description: "Agencia de automatizaciones y agentes AI para pymes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#14192B" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster 
          theme="dark"
          position="top-right"
          richColors
          closeButton
        />
      </body>
    </html>
  );
}