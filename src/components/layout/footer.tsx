import { Mail } from "lucide-react";
import DiscordIcon from "../icons/discord-icon";
import Image from "next/image"

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between space-y-6 sm:flex-row sm:space-y-0">
          <div className="flex items-center space-x-2">
             <Image src="/NexogenLogo.png" alt="NEXOGEN" width={40} height={40} />
{/*             <Logo className="h-8 w-8 text-primary" /> */}
            <span className="text-lg font-bold">NEXOGEN LABS</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:Nexogenlabz@proton.me"
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://discord.gg/matgfQTbVn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <DiscordIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NEXOGEN LABS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
