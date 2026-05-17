"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import CinematicHero from "../components/CinematicHero";
import PortfolioGrid from "../components/PortfolioGrid";
import { Mail, Phone } from "lucide-react";

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

      {/* Premium Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-24 max-w-4xl text-center">
        <div className="bg-[#121214] border border-white/5 p-12 md:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#9d4edd]/10 rounded-full blur-[100px]" />
          
          <span className="text-[#00f0ff] tracking-[0.3em] uppercase text-xs font-semibold mb-3 block [text-shadow:0_0_20px_rgba(0,240,255,0.4)]">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase mb-6 text-white">Let's Frame Reality</h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-10">
            Currently accepting commissions for premium video editing, graphic design sprints, and high-end visual aesthetics.
          </p>
          
          {/* Interactive Contact Cards */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-xl mx-auto relative z-10">
            
            {/* Email Card */}
            <a href="mailto:artistkrishna18@gmail.com" className="w-full sm:w-1/2 bg-white/5 border border-white/10 hover:border-[#00f0ff]/40 p-6 rounded-2xl flex flex-col items-center gap-2 group transition-all duration-300 backdrop-blur-sm">
              <Mail className="w-6 h-6 text-zinc-400 group-hover:text-[#00f0ff] transition-colors" />
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Email Me</span>
              <span className="text-sm font-medium text-white break-all">artistkrishna18@gmail.com</span>
            </a>

            {/* Call/WhatsApp Card */}
            <a href="https://wa.me/919523826477" target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2 bg-white/5 border border-white/10 hover:border-[#00f0ff]/40 p-6 rounded-2xl flex flex-col items-center gap-2 group transition-all duration-300 backdrop-blur-sm">
              <Phone className="w-6 h-6 text-zinc-400 group-hover:text-[#00f0ff] transition-colors" />
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Call / WhatsApp</span>
              <span className="text-sm font-medium text-white">+91 9523826477</span>
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}