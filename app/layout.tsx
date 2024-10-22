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
  title: "Julia's Beauty Lash Studio",
  description: "Transforme seus cílios e realce sua beleza natural",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} ${greatVibes.variable} ${allura.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}