import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "~/styles/globals.css";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pressure Bros - Professional Pressure Washing Services",
  description:
    "Transform your property with Pressure Bros professional pressure washing services. Residential and commercial cleaning for driveways, houses, decks, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}