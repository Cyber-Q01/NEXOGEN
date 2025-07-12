"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex R.",
    title: "Pro Bodybuilder",
    quote: "The purity of NEXOGEN's Tirzepatide is unmatched. It's been a game-changer for my competition prep, helping me stay lean and focused.",
    avatar: "AR",
    image: "https://placehold.co/100x100.png",
    aiHint: "man portrait"
  },
  {
    name: "Dr. Elena Vance",
    title: "Metabolic Researcher",
    quote: "As a scientist, I value data and purity. NEXOGEN's lab-tested Retatutide is a breakthrough for metabolic research. Highly recommend for its quality.",
    avatar: "EV",
    image: "https://placehold.co/100x100.png",
    aiHint: "woman portrait"
  },
  {
    name: "Mark 'The Titan' L.",
    title: "Strength Coach",
    quote: "My clients and I have seen incredible strength and recovery gains with their Testosterone. This is the real deal—pharmaceutical grade as promised.",
    avatar: "ML",
    image: "https://placehold.co/100x100.png",
    aiHint: "strong man"
  },
  {
    name: "Samantha K.",
    title: "Fitness Influencer",
    quote: "I was skeptical at first, but the results speak for themselves. NEXOGEN LABS delivers on its promise of performance and quality. My energy has never been better!",
    avatar: "SK",
    image: "https://placehold.co/100x100.png",
    aiHint: "fitness woman"
  },
];

const AUTO_PLAY_INTERVAL = 3000; // ms

const TestimonialsSection = () => {
  const [emblaApi, setEmblaApi] = React.useState(null);

  // Auto-advance logic
  React.useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
            Trusted by the Elite
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hear from athletes, coaches, and researchers who trust NEXOGEN LABS.
          </p>
        </div>

        <Carousel
          setApi={setEmblaApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="h-full bg-card/80 border-primary/20">
                    <CardContent className="flex flex-col items-start justify-between p-6 space-y-4 h-full">
                      <p className="text-muted-foreground italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-4 pt-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
