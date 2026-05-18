"use client";
import { useEffect } from "react";
import Image from "next/image"; // For optimized 3D element placeholders
import Lenis from "lenis";
import CinematicHero from "@/components/CinematicHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import ResumeSection from "@/components/Resume";
import { Mail, Phone } from "lucide-react";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling configuration via Lenis
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="bg-[#09090b] min-h-screen selection:bg-[#00f0ff] selection:text-black overflow-x-hidden relative">
      
      {/* 1. FIXED BACKGROUND LAYERS (Replacing just dark theme) */}
      {/* 1. FIXED PURE CSS BACKGROUND PATHS (No Images Required) */}
<div className="fixed inset-0 z-0 pointer-events-none bg-[#050507]">
  
  {/* Pattern A: Cyberpunk Grid Matrix (Futuristic Tech Lines) */}
  <div 
    className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:50px_50px]" 
    style={{
      maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 100%)'
    }}
  />

  {/* Pattern B: Digital Dot Matrix (Subtle Tech Particles) */}
  <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

  {/* Pattern C: Hyper-Glow Ambient Orbs (Cyan & Purple 3D Depth) */}
  {/* Top Left Cyan Glow */}
  <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[radial-gradient(circle,#00f0ff_0%,transparent_70%)] opacity-[0.12] blur-[80px]" />
  
  {/* Center Deep Purple Glow */}
  <div className="absolute top-[30%] right-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,#9d4edd_0%,transparent_65%)] opacity-[0.15] blur-[100px]" />
  
  {/* Bottom Neon Accent */}
  <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,#00f0ff_0%,transparent_60%)] opacity-[0.08] blur-[90px]" />

  {/* Pattern D: Abstract Geometric Diagonal Lines (3D Mesh Vibe) */}
  <div 
    className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%,#fff),linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%,#fff)] bg-[size:120px_120px] bg-[position:0_0,60px_60px]" 
  />

</div>
        
        {/* Layer 1: Floating 3D Prisms & Spheres (Reference inspired) */}
        {/* Use Next Image for optimized placeholders or render Spline here */}
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/3d-bg-elements.webp" // Generate or source a high-quality, transparent background image of floating geometry
            alt="Floating 3D Background Geometry"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Layer 2: Neon Particle Trails & Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/neon-geometric-patterns.png" // Source a high-quality particle trail and line pattern image
            alt="Neon Particle Trails and Patterns"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Layer 3: Large Background Numbers/Shapes (like '03' from ref) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] opacity-10 blur-[8px] scale-110">
          <Image 
            src="/bg-numbers.webp" // Source an image of large, semi-transparent background numbers/shapes
            alt="Large Background Numbers and Shapes"
            fill
            className="object-contain object-right-bottom"
          />
        </div>


      {/* 2. FOREGROUND CONTENT LAYER (All existing content) */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center">
        
        {/* Premium Portfolio Sections Sequence */}
        <CinematicHero />
        <PortfolioGrid />
        <ResumeSection />

        {/* Premium Contact Section (Retained) */}
        <section id="contact" className="container mx-auto px-6 py-24 max-w-4xl text-center relative">
          <div className="bg-[#121214] border border-white/5 p-12 md:p-16 rounded-3xl relative overflow-hidden backdrop-blur-sm">
            {/* Retained Decorative Ambient Glow */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#9d4edd]/10 rounded-full blur-[100px]" />
            
            <span className="text-[#00f0ff] tracking-[0.3em] uppercase text-xs font-semibold mb-3 block [text-shadow:0_0_20px_rgba(0,240,255,0.4)] font-mono">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase mb-6 text-white">
              Let's Frame Reality
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-10">
              Currently accepting commissions for premium video editing, graphic design sprints, and high-end visual aesthetics.
            </p>
            
            {/* Interactive Contact Cards (Retained) */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-xl mx-auto relative z-10">
              
              {/* Email Card */}
              <a 
                href="mailto:artistkrishna18@gmail.com" 
                className="w-full sm:w-1/2 bg-white/5 border border-white/10 hover:border-[#00f0ff]/40 p-6 rounded-2xl flex flex-col items-center gap-2 group transition-all duration-300 backdrop-blur-sm"
              >
                <Mail className="w-6 h-6 text-zinc-400 group-hover:text-[#00f0ff] transition-colors" />
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Email Me</span>
                <span className="text-sm font-medium text-white break-all">artistkrishna18@gmail.com</span>
              </a>

              {/* Call/WhatsApp Card */}
              <a 
                href="https://wa.me/919523826477" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-1/2 bg-white/5 border border-white/10 hover:border-[#00f0ff]/40 p-6 rounded-2xl flex flex-col items-center gap-2 group transition-all duration-300 backdrop-blur-sm"
              >
                <Phone className="w-6 h-6 text-zinc-400 group-hover:text-[#00f0ff] transition-colors" />
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Call / WhatsApp</span>
                <span className="text-sm font-medium text-white">+91 9523826477</span>
              </a>

            </div>
          </div>
        </section>
      </div>

    </main>
  );
}