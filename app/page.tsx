"use client"

import Features from "@/components/features/features";
import Footer from "@/components/footer/footer";
import HeroSection from "@/components/herosection/hero-section";
import Price from "@/components/price/price";
import Testimonial from "@/components/testimonial/testimonial";
import { useEffect } from "react";

import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      // setTimeout(() => {
      //   setIsLoading(false);
      //   document.body.style.cursor = 'default';
      //   window.scrollTo(0, 0);
      // }, 2000);
    })();
  }, [])
  return (
    <main className="bg-brand-dark flex h-full flex-col items-center justify-between">
     <HeroSection />
     <Features />
     <Testimonial />
     <Price />
     <Footer />
    </main>
  );
}
