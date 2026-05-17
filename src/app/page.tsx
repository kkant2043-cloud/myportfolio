"use client";
import { useEffect } from "react";
// @ts-ignore: module has no type declarations
import Lenis from "@studio-freight/lenis";
import CinematicHero from "@/components/CinematicHero";
import HorizontalShowcase from "@/components/HorizontalShowcase";

export default function Home() {
  useEffect(() => {
    // Lenis Smooth Scroll Configuration
    const lenis = new Lenis({ 
      duration: 1.4, 
      smoothWheel: true,
      wheelMultiplier: 1.1 
    });
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="bg-[#0a0508] min-h-screen selection:bg-[#ff0055] selection:text-white">
      {/* Ambient Grid overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] z-50" />
      
      {/* 1. Hero Landing Block */}
      <CinematicHero />
      
      {/* 2. Jesko Jets Inspired Horizontal Scroll Track */}
      <HorizontalShowcase />

      {/* 3. Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-32 max-w-4xl text-center">
        <div className="bg-[#140c11] border border-white/5 p-12 md:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#7a00ff]/10 rounded-full blur-[100px]" />
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase mb-4 text-white">Let's Frame Reality</h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-8">
            Currently accepting commissions for video editing masters, design sprints, and full stack interface creation.
          </p>
          <a href="mailto:your-email@studio.com" className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-[#ff0055] hover:text-white transition-all transform hover:scale-105 duration-300">
            Initiate Consultation
          </a>
        </div>
      </section>
    </main>
  );
}