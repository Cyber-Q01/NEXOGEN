"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import NexogenLogo from "./NexogenLogo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


const navLinks = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center space-x-2">
          <Image src={NexogenLogo} alt="NEXOGEN" width={40} height={40} />
{/*           <Logo className="h-8 w-8 text-primary" /> */}
          <span className="hidden font-bold sm:inline-block text-lg">
            NEXOGEN LABS
          </span>
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="#home" className="flex items-center space-x-2" onClick={handleLinkClick}>
<Image src={NexogenLogo} alt="NEXOGEN" width={40} height={40} />
{/*                     <Logo className="h-8 w-8 text-primary" /> */}
                    <span className="font-bold">NEXOGEN LABS</span>
                  </Link>
                </div>
                <nav className="mt-6 flex-1">
                  <ul className="flex flex-col space-y-4">
                    {navLinks.map(({ href, label }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={handleLinkClick}
                          className="block text-lg font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
