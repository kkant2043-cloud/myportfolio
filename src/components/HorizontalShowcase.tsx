"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projectsData from "@/data/projects.json";

// GSAP Plugin Register kar rahe hain
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const trigger = triggerRef.current;

    if (!container || !trigger) return;

    // Jesko Jets jaisa Horizontal Pinning Animation
    const scrollTween = gsap.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        pin: true, // Screen ko ek jagah lock karega
        scrub: 1,   // Scroll ke sath smooth track karega
        start: "top top",
        end: () => `+=${container.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      scrollTween.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} className="bg-[#0a0508] overflow-hidden">
      {/* Dynamic Header */}
      <div className="absolute top-12 left-12 z-20">
        <span className="text-[#ff0055] font-mono tracking-widest text-xs uppercase block mb-2">
          // ARCHIVE ROSTER
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter">
          SELECTED DESIGNS
        </h2>
      </div>

      {/* Horizontal Moving Track */}
      <div ref={containerRef} className="flex h-screen items-center pl-[10vw] pr-[20vw] gap-12 raw-flex w-max">
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className="w-[300px] md:w-[500px] flex-shrink-0 group relative overflow-hidden bg-[#140c11] border border-white/5 p-4 rounded-2xl transition-all duration-300 hover:border-[#ff0055]/30"
          >
            {/* Project Image */}
            <div className="aspect-[16/10] w-full bg-zinc-900 rounded-xl overflow-hidden relative">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-black/70 border border-white/10 text-white text-[10px] font-mono px-3 py-1 rounded-full">
                0{index + 1} // 2026
              </div>
            </div>

            {/* Project Details */}
            <div className="mt-6">
              <span className="text-[#ff0055] text-xs font-mono uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mt-1 group-hover:text-[#ff0055] transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-xs mt-2 line-clamp-2 font-light">
                {project.description}
              </p>
              
              {/* Software tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.software.map((sw) => (
                  <span key={sw} className="bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-mono px-2 py-1 rounded">
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}