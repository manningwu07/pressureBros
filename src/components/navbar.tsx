"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "~/components/ui/button";
import type { NavItem, Button as ButtonType } from "~/types/types";

interface NavbarProps {
  logo: string;
  navItems: NavItem[];
  quoteButton: ButtonType;
}

const Navbar = ({ logo, navItems, quoteButton }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" width={120} height={40} />
          </Link>
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-400 ..."
              >
                {item.name}
              </Link>
            ))}
            <a href={quoteButton.href}>
              <Button className="bg-blue-400 text-white hover:bg-blue-500">
                <Phone className="mr-2 h-4 w-4" />
                {quoteButton.text}
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t bg-white md:hidden"
          >
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-2 w-full bg-blue-400 text-white hover:bg-blue-500">
                <Phone className="mr-2 h-4 w-4" />
                {quoteButton.text}
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
