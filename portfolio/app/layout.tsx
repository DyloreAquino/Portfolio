import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavLink from "@/components/NavLink";
import ParallaxWrapper from "@/components/ParallaxProvider"
import ParallaxLayer from "@/components/ParallaxLayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "This is je.",
  description: "Jerold Aquino's portfolio. made in Next.js.",
  openGraph: {
    title: "This is je.",
    description: "Jerold Aquino's portfolio. Software engineer, game developer, musician, artist.",
    url: "https://thisisje.vercel.app",
    type: "website",
    images: [
      {
        url: "https://thisisje.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "This is je. - Je's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "This is je.",
    description: "Jerold Aquino's portfolio",
    images: ["https://thisisje.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ParallaxWrapper>
          <div>
            <ParallaxLayer src="/poly-bg.jpg" position="fixed-bg" speed={7} overlay="bg-black/40" />
          </div>
        
        <header className="flex fixed p-5 pl-10 justify-between text-2xl font-bold font-mono bg-[#1e453e] top-0 w-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-50">
          <NavLink href="/">this is je.</NavLink>
          <div className="flex gap-10 text-lg pr-10 pl-10 font-light">
            <NavLink href="/gamedev">gameDev</NavLink>
            <NavLink href="/softwaredev">softwareDev</NavLink>
            <NavLink href="/leadership">leadership</NavLink>
            <NavLink href="/creatives">creatives</NavLink>
            <NavLink href="/info">info</NavLink>
          </div>
        </header>

        <main className="m-35 z-10">
          {children}
        </main>
        
        <footer className="w-full text-center py-4 font-mono font-light text-sm text-gray-400 mt-auto">
          © 2026 je / dylore / jerold.
        </footer>

        </ParallaxWrapper>
      </body>
    </html>
  );
}
