import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConfigureAmplifyClientSide from "@/components/ConfigureAmplifyClientSide";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Roamtheory | High-Performance Gear for Modern Nomads",
  description: "Equipping the Modern Nomad. Precision-engineered tools for the professional traveler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md text-body-md selection:bg-orange-100 antialiased">
        <CartProvider>
          <ConfigureAmplifyClientSide />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
