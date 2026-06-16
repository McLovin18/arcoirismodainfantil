import "./globals.css";

import Footer from "./components/Footer";
import { cookies } from "next/headers";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";
import { OnboardingProvider } from "./context/OnboardingContext";
import { ToastProvider } from "./context/ToastContext";
import LayoutContentClient from "./components/LayoutContentClient";
import type { Metadata, Viewport } from "next";
import { Source_Serif_4 } from "next/font/google";

// ISR Global: Revalidar sitio cada 30 minutos
// Optimiza regeneración de página principal y otros contenidos estáticos
export const revalidate = 1800;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://arcoiris-moda-infantil.com";
const SITE_NAME = "Arcoíris Moda Infantil";
const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-source-serif-4",
});

export const metadata: Metadata = {
  title: {
    default: "Arcoíris Moda Infantil - Ropa de Bebés 0-24M | Ecuador",
    template: "%s | Arcoíris Moda Infantil",
  },
  description:
    "Arcoíris Moda Infantil - Ropa de bebés 0-24 meses con estilo y comodidad. Viste con estilo a tus pequeños. Envíos a todo Ecuador. Pedidos por WhatsApp.",
  keywords: [
    "ropa bebés Ecuador",
    "moda infantil",
    "ropa 0-24 meses",
    "bebé ropa Guayaquil",
    "ropa niños Samborondón",
    "envío ropa bebé",
    "Arcoíris Moda",
    "ropa infantil Ecuador",
  ],
  creator: "Arcoíris Moda Infantil",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  
  // Open Graph - Redes Sociales
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Arcoíris Moda Infantil - Ropa de Bebés",
    description:
      "Viste con estilo y comodidad a tus pequeños. Ropa de bebés 0-24M con envíos a todo Ecuador.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Julietas Flowers - Florería Samborondón",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Julietas Flowers - Florería Samborondón",
    description:
      "Creamos emociones con cada flor. Rosas y arreglos personalizados en Guayaquil.",
    images: [`${SITE_URL}/twitter-image.jpg`],
  },

  // Canonícal URL
  alternates: {
    canonical: SITE_URL,
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Verificación
  verification: {
    google: "tu-codigo-google-search-console", // Reemplazar con tu código
  },

  // Apple
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_NAME,
  },
};

// Viewport export - separate from metadata in Next.js 16
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={sourceSerif4.variable}>
      <head>
                {/* Google Analytics gtag.js - insertado justo después de <head> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K1Q0MYDSKF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K1Q0MYDSKF');
            `,
          }}
        />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
      </head>
      <body className="relative">
        <ToastProvider>
          <OnboardingProvider>
            <LayoutContentClient>{children}</LayoutContentClient>
          </OnboardingProvider>
        </ToastProvider>
      </body>
    </html>
  );
}

