import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ProductsSection from '@/components/sections/products';
import AboutSection from '@/components/sections/about';
import TestimonialsSection from '@/components/sections/testimonials';
import ScrollToTop from '@/components/scroll-to-top';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
