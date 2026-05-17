"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as random from "maath/random";

function ParticleSwarm() {
  const ref = useRef<any>(null);
  const sphere = random.inSphere(new Float32Array(3000), { radius: 1.5 });
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as any} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#00f0ff" size={0.004} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export default function CinematicHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090b]">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}><ParticleSwarm /></Canvas>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent z-1" />
      <div className="relative z-10 text-center px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <span className="text-[#00f0ff] tracking-[0.4em] uppercase text-xs font-semibold mb-4 block [text-shadow:0_0_20px_rgba(0,240,255,0.4)]">
            CREATIVE DIRECTOR // DIGITAL ARCHITECT
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-white uppercase">
  IMAGINATION RENDERED <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#9d4edd]">
    BY KRISHNA KANT
  </span>
</h1>
          <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto font-light mb-8">
            Video Editing, Premium UI/UX, and Custom Interactive Code crafted for high-tier brands.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#portfolio" className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-[#00f0ff] transition-all duration-300">View Gallery</a>
            <a href="#contact" className="border border-white/20 px-6 py-3 rounded-full text-white hover:bg-white/5 transition-all duration-300">Contact Me</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}