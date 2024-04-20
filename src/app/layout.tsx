import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { Suspense } from "react";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PossibleWeb",
  description: "An web that showcases the power of Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-[100vh] fixed"
          particleColor="#FFFFFF"
        />
        <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        <Suspense>
        {children}
        </Suspense>
      </body>
    </html>
  );
}
