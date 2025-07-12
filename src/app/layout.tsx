import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "~/styles/globals.css";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import content from "~/content.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pressure Bros - Professional Pressure Washing Services",
  description:
    "Transform your property with Pressure Bros professional pressure washing services. Residential and commercial cleaning for driveways, houses, decks, and more.",
};

const { navbar, footer } = content.navigation;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar logo={"/logo.png"} navItems={navbar.navItems} quoteButton={navbar.quoteButton} />
        <main>{children}</main>
        <Footer title={footer.title} description={footer.description} contactInfo={footer.contactInfo} services={footer.services} />
      </body>
    </html>
  );
}