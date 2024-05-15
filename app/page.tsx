import Features from "@/components/features/features";
import HeroSection from "@/components/herosection/hero-section";
import Testimonial from "@/components/testimonial/testimonial";

export default function Home() {
  return (
    <main className="bg-brand-dark flex h-full flex-col items-center justify-between">
     <HeroSection />
     <Features />
     <Testimonial />
    </main>
  );
}
