import { Button } from "@/components/ui/button";
import Link from "next/link";
import NexogenLogo from '../layout/NexogenLogo.png';
import Image from "next/image"

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden py-32 sm:py-48">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-purple-500/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[40rem] h-[40rem] bg-blue-500/20 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
    <div className=" flex justify-center items-center gap-[2px]">
  <Image
      src={NexogenLogo}
      alt="NEXOGEN"
      fill
      className="object-contain"
      sizes="1em"
    />
  <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
    NEXOGEN LABS
  </h1>
</div>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
          PEPTIDES & SPORTS SUPPLEMENTS - Premium pharmaceutical-grade compounds
          designed to enhance your performance and support your fitness goals.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="font-bold text-base bg-gradient-to-r from-[#A78BFA] to-[#D8B4FE] text-black hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
            <Link href="#products">Explore Compounds</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
