"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import CinematicHero from "@/components/CinematicHero";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="bg-[#09090b] min-h-screen selection:bg-[#00f0ff] selection:text-black">
      {/* Cinematic Film Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] z-50" />
      
      {/* Sections */}
      <CinematicHero />
      <PortfolioGrid />

      {/* Contact Footer */}
      <section id="contact" className="container mx-auto px-6 py-24 max-w-4xl text-center">
        <div className="bg-[#121214] border border-white/5 p-12 md:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#9d4edd]/10 rounded-full blur-[100px]" />
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase mb-4 text-white">Let's Frame Reality</h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-8">
            Now booking commercial editing and high-end visual designs.
          </p>
          <a href="mailto:krishna@studio.com" className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-[#00f0ff] transition-all">
            Initiate Consultation
          </a>
        </div>
      </section>
    </main>
  );
}