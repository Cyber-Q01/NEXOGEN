import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import tirzepitideImg from "./Tirzepitide.png";

const products = [
  {
    name: "TIRZEPITIDE ",
    description: "Dual GIP and GLP-1 receptor agonist",
    benefits: [
      "Supports healthy glucose metabolism",
      "May aid in weight management",
      "Promotes satiety signals",
    ],
    purity: "Research-grade purity",
   image: tirzepitideImg,
    aiHint: "serum bottle"
  },
  {
    name: "RETATUTIDE",
    description: "Triple receptor peptide (GIP, GLP-1, glucagon)",
    benefits: [
      "Triple receptor action",
      "Supports metabolic efficiency",
      "May enhance energy utilization",
    ],
    purity: "Laboratory tested",
    image: "https://placehold.co/600x400.png",
    aiHint: "lab equipment"
  },
  {
    name: "TESTOSTERONE",
    description: "Hormone support for strength & recovery",
    benefits: [
      "Supports muscle growth",
      "Enhances recovery",
      "Improves strength and endurance",
    ],
    purity: "Pharmaceutical grade",
    image: "https://placehold.co/600x400.png",
    aiHint: "science fitness"
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
            Featured Compounds
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our curated selection of premium, lab-verified peptides and
            supplements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group relative overflow-hidden bg-card/60 backdrop-blur-lg border border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_35px_rgba(167,139,250,0.25)] hover:-translate-y-2"
            >
              <CardHeader>
                <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden">
                    <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" data-ai-hint={product.aiHint}/>
                </div>
                <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Badge variant="secondary" className="bg-primary/10 text-primary font-medium">
                  {product.purity}
                </Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
