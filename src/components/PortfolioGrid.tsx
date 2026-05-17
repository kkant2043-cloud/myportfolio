"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import projectsData from "@/data/projects.json";
import ProjectCard from "./ProjectCard";

const CATEGORIES = ["All", "Video Editing", "Photo Editing", "UI/UX Design", "Graphic Design", "Posters", "Banners", "Branding", "Motion Graphics", "Web Design"];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="portfolio" className="container mx-auto px-6 py-24 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">Showcase Ledger</h2>
          <p className="text-zinc-500">Filter parameters across global creative mediums.</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input type="text" placeholder="Search archive..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-[#140c11] border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff0055]" />
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-white/5 no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${activeCategory === cat ? "bg-white text-black" : "bg-[#140c11] text-zinc-400 hover:text-white"}`}>
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-[#140c11] border border-white/10 rounded-2xl overflow-hidden relative">
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center border border-white/10">×</button>
              <div className="aspect-video w-full bg-black">
                {selectedProject.mediaType === "video" ? (
                  <video src={selectedProject.mediaUrl} controls autoPlay className="w-full h-full object-contain" />
                ) : (
                  <img src={selectedProject.mediaUrl} alt={selectedProject.title} className="w-full h-full object-contain" />
                )}
              </div>
              <div className="p-6 md:p-8">
                <span className="text-[#ff0055] text-xs font-mono uppercase block mb-1">{selectedProject.category}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-zinc-400 text-sm">{selectedProject.description}</p>
                <div className="mt-4 flex gap-4 text-xs text-zinc-500 font-mono">
                  <span>Client: {selectedProject.client}</span>
                  <span>Year: {selectedProject.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}