import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, FlaskConical, Zap } from "lucide-react";
import Image from "next/image";

const aboutFeatures = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Peak Performance",
    description: "Our compounds are engineered for those who demand the best, helping you push your limits and achieve peak physical and mental performance.",
  },
  {
    icon: <Droplets className="h-8 w-8 text-primary" />,
    title: "Uncompromising Purity",
    description: "We guarantee the highest purity standards. Every batch is meticulously tested for quality and consistency, ensuring a premium product every time.",
  },
  {
    icon: <FlaskConical className="h-8 w-8 text-primary" />,
    title: "Lab-Tested Formulas",
    description: "Rigorously tested in state-of-the-art labs, our formulas are backed by science to deliver safe, reliable, and effective results for your fitness journey.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
            The Science of Enhancement
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            At NEXOGEN LABS, we merge cutting-edge science with the pursuit of
            human potential. Our mission is to provide elite,
            pharmaceutical-grade compounds that you can trust.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aboutFeatures.map((feature) => (
            <div key={feature.title} className="text-center flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
