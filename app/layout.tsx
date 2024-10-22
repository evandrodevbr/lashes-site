import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const allura = localFont({
  src: "./fonts/Allura-Regular.ttf",
  variable: "--font-allura",
});

const lato = localFont({
  src: [
    {
      path: './fonts/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-lato',
});

const greatVibes = localFont({
  src: './fonts/GreatVibes-Regular.ttf',
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: "Julia's Beauty Lash Studio | Extensão de Cílios em Camboriú",
  description: "Transforme seu olhar no Julia's Beauty Lash Studio em Camboriú. Especialistas em extensão de cílios, oferecemos técnicas como fio a fio, volume russo e híbrido. Agende sua sessão para realçar sua beleza natural com cílios deslumbrantes.",
  keywords: "extensão de cílios, Julia's Beauty Lash Studio, Camboriú, fio a fio, volume russo, volume híbrido, beleza, cílios",
  authors: [{ name: "Julia Andraede" }],
  openGraph: {
    title: "Julia's Beauty Lash Studio | Extensão de Cílios em Camboriú",
    description: "Transforme seu olhar com extensões de cílios profissionais. Técnicas: fio a fio, volume russo e híbrido. Agende sua sessão!",
    url: "https://juliasbeautylashstudio.com.br",
    siteName: "Julia's Beauty Lash Studio",
    images: [
      {
        url: "https://juliasbeautylashstudio.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Julia's Beauty Lash Studio - Extensão de Cílios",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julia's Beauty Lash Studio | Extensão de Cílios em Camboriú",
    description: "Transforme seu olhar com extensões de cílios profissionais. Agende sua sessão!",
    images: ["https://juliasbeautylashstudio.com.br/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://juliasbeautylashstudio.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} ${greatVibes.variable} ${allura.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}