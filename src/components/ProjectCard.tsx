"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }: { project: any; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const box = cardRef.current.getBoundingClientRect();
    setRotX(-(e.clientY - box.top - box.height / 2) / 15);
    setRotY((e.clientX - box.left - box.width / 2) / 15);
  };

  return (
    <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClick} className="cursor-pointer group">
      <div ref={cardRef} onMouseMove={onMouseMove} onMouseEnter={() => videoRef.current?.play().catch(()=>{})} onMouseLeave={() => { setRotX(0); setRotY(0); videoRef.current?.pause(); }} style={{ transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`, transformStyle: "preserve-3d" }} className="w-full bg-[#121214] border border-white/5 rounded-xl overflow-hidden transition-all duration-100 ease-out group-hover:border-[#00f0ff]/30">
        <div className="aspect-[4/3] w-full bg-zinc-900 relative overflow-hidden">
          {project.mediaType === "video" && (
            <video ref={videoRef} src={project.mediaUrl} loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          )}
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors">{project.title}</h3>
          <p className="text-zinc-500 text-xs mt-1">{project.category}</p>
        </div>
      </div>
    </motion.div>
  );
}