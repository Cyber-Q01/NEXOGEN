import { Mail } from "lucide-react";
import DiscordIcon from "../icons/discord-icon";
import Image from "next/image"
import NexogenLogo from "./NexogenLogo.png";
import EmailLogo from "./icons8-email-100.png";
import DiscordLogo from "./icons8-discord-100.png";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-8">
{/*         <div className="flex flex-col items-center justify-between space-y-6 sm:flex-row sm:space-y-0"> */}
          <div className="flex items-center space-x-2">
           <Image src={NexogenLogo} alt="NEXOGEN" width={40} height={40} />
{/*             <Logo className="h-8 w-8 text-primary" /> */}
            <span className="text-lg font-bold">NEXOGEN LABS</span>
          </div>
          <div className="flex w-[400px] justify-center border mx-auto items-center space-x-6  relative border-4 border-gray-400 p-8 pt-6">

{/*             <div class="relative border-4 border-gray-400 p-8 pt-6"> */}
   <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background px-2 text-lg font-semibold text-gray-700">
  Contact Us
</span>
            <div style={{ width: '40px', height: '40px', position: 'relative' }}>
            <a
              href="mailto:Nexogenlabz@proton.me"
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
             <Image src={EmailLogo} alt="Email" />
            </a>
              </div>
            <a
              href="https://discord.gg/matgfQTbVn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
            <Image src={DiscordLogo} alt="Discord" width={40} height={40} />
            </a>
          </div>
{/*         </div> */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NEXOGEN LABS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
