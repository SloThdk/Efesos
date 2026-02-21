import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Restaurant Efesos — Pizza, Steak & Kebab i Blåvand",
  description:
    "Oplev autentisk mad i hjertet af Blåvand. Pizza, steak, kebab og meget mere — lavet med friske råvarer. Tag-away og restaurant. Blåvandvej 31.",
  keywords: "restaurant blåvand, pizza blåvand, kebab blåvand, steak blåvand, efesos, takeaway blåvand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
