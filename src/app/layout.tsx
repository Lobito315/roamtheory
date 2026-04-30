import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConfigureAmplifyClientSide from "@/components/ConfigureAmplifyClientSide";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "AnchorNone | Gear & Apparel for the Modern Nomad",
  description: "AnchorNone — No anchor, no limits. Premium gear and apparel precision-engineered for the professional traveler and digital nomad.",
  keywords: "digital nomad, travel gear, nomad apparel, tech accessories, lifestyle brand",
  openGraph: {
    title: "AnchorNone | Gear & Apparel for the Modern Nomad",
    description: "No anchor, no limits. Premium gear and apparel for the modern nomad.",
    siteName: "AnchorNone",
  },
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
