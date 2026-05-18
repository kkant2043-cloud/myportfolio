// cspell:ignore Linkedin
import React from 'react';
import { Briefcase, GraduationCap, Code, Award, Mail, Phone, MapPin, Calendar, Sparkles, Palette, Film } from 'lucide-react';

const ResumeSection = () => {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-200 py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVE PREMIUM GLOWS */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto space-y-6 relative z-10">
        
        {/* ==================== BENTO GRID START ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 1: MAIN IDENTITY (Large Glassmorphic Box) */}
          <div className="md:col-span-2 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700/50 transition-all duration-300 shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-3">
                <Sparkles size={14} className="animate-pulse" /> Available for Opportunities
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 font-mono">
                KRISHNA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">KANT</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-400 max-w-md leading-relaxed">
                Creative Multimedia Artist & Graphic Designer crafting high-end digital aesthetics.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 mt-8 pt-4 border-t border-slate-800/60">
              <span className="flex items-center gap-1.5 bg-slate-800/30 px-3 py-1.5 rounded-full border border-slate-800/50">
                <MapPin size={14} className="text-indigo-400" /> Siwan, Bihar, India
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/30 px-3 py-1.5 rounded-full border border-slate-800/50">
                <Calendar size={14} className="text-indigo-400" /> DOB: 13 March, 2005
              </span>
            </div>
          </div>

          {/* CARD 2: QUICK CONTACTS (Glassmorphic Contact Dock) */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-700/50 transition-all duration-300 shadow-xl">
            <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-4 border-b border-slate-800/60 pb-2">
              Connect & Hire
            </div>
            <div className="space-y-3 flex-grow flex flex-col justify-center">
              <a href="tel:+919523826477" className="group flex items-center justify-between p-3 rounded-xl bg-slate-800/20 border border-slate-800/40 hover:bg-slate-800/40 hover:border-blue-500/30 transition-all text-sm">
                <span className="flex items-center gap-3"><Phone size={16} className="text-slate-400 group-hover:text-blue-400" /> +91 9523826477</span>
                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-slate-500 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
              <a href="mailto:artistkrishna18@gmail.com" className="group flex items-center justify-between p-3 rounded-xl bg-slate-800/20 border border-slate-800/40 hover:bg-slate-800/40 hover:border-blue-500/30 transition-all text-sm">
                <span className="flex items-center gap-3"><Mail size={16} className="text-slate-400 group-hover:text-blue-400" /> artistkrishna18@gmail.com</span>
                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-slate-500 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
              <a href="https://linkedin.com/in/krishnakant00" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-3 rounded-xl bg-slate-800/20 border border-slate-800/40 hover:bg-slate-800/40 hover:border-blue-500/30 transition-all text-sm">
                <span className="flex items-center gap-3">
                  <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-blue-400" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  linkedin.com/in/krishnakant00
                </span>
                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-slate-500 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            </div>
          </div>

          {/* CARD 3: PROFESSIONAL SUMMARY (Full Width Point-wise) */}
          <div className="md:col-span-3 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 hover:border-slate-700/50 transition-all duration-300 shadow-xl">
            <h2 className="text-md font-bold tracking-wider text-blue-400 uppercase flex items-center gap-2 mb-4 border-b border-slate-800/60 pb-2">
              <Briefcase size={18} /> Professional Summary
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300 list-none">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></span>
                <span>Multimedia Specialist & Graphic Designer backed by a profound grasp of standard design core principles and modern spatial layouts.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></span>
                <span>Highly skilled in translating raw creative concepts into premium branding materials, corporate frameworks, and motion graphics.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></span>
                <span>Expert in rendering high-end cinematic video edits featuring synchronized multi-channel audio tracks and timeline pacing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></span>
                <span>Highly motivated to collaborate with fast-paced engineering and creative teams to build high-fidelity digital interfaces.</span>
              </li>
            </ul>
          </div>

          {/* CARD 4: TECHNICAL TOOLKIT & SKILLS (Adjusted to 3 Balanced Columns) */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700/50 transition-all duration-300">
              <div className="flex items-center gap-2 font-semibold text-indigo-300 text-sm mb-3">
                <Palette size={16} className="text-indigo-400" /> UI/UX & Design Tools
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe InDesign</li>
                <li>Figma Interface Design</li>
              </ul>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700/50 transition-all duration-300">
              <div className="flex items-center gap-2 font-semibold text-indigo-300 text-sm mb-3">
                <Film size={16} className="text-indigo-400" /> Video & Motion
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                <li>Adobe Premiere Pro</li>
                <li>Adobe After Effects</li>
                <li>Cinematic Production</li>
                <li>Audio Editing Software</li>
              </ul>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700/50 transition-all duration-300">
              <div className="flex items-center gap-2 font-semibold text-indigo-300 text-sm mb-3">
                <Code size={16} className="text-indigo-400" /> Core Expertise
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                <li>Corporate Branding & Logos</li>
                <li>Advanced Color Correction</li>
                <li>DSLR & Vector Mapping</li>
                <li>Sound Synchronization</li>
              </ul>
            </div>

          </div>

          {/* CARD 5: FEATURED PROJECTS (2 Blocks Side by Side) */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 hover:border-slate-700/50 transition-all duration-300 shadow-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">Automobile UI/UX Interface Design</h3>
                <span className="text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-1 rounded-md border border-slate-700/50">01/2025</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-400 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Rendered a high-fidelity application framework focusing on absolute spatial mechanics and asset sorting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Maintained absolute dark mode consistency and seamless interactive prototype user journeys using Figma.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 hover:border-slate-700/50 transition-all duration-300 shadow-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">Motion Graphics & Infographic Production</h3>
                <span className="text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-1 rounded-md border border-slate-700/50">11/2024</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-400 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Engineered complete commercial vectors displaying dynamic maps and custom synchronized progress layouts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Achieved flawless asset pacing along the timeline using After Effects keyframe automation metrics.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* CARD 6: EDUCATION TIMELINE (Spans 2 Cols) */}
          <div className="md:col-span-2 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 hover:border-slate-700/50 transition-all duration-300 shadow-xl">
            <h2 className="text-md font-bold tracking-wider text-blue-400 uppercase flex items-center gap-2 mb-6 border-b border-slate-800/60 pb-2">
              <GraduationCap size={18} /> Academic Foundation
            </h2>
            <div className="space-y-6">
              
              <div className="relative pl-5 border-l border-slate-800">
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-1.5 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <h4 className="text-sm font-bold text-slate-200">B.Sc. in Mathematics</h4>
                  <span className="text-[10px] font-mono text-indigo-400">05/2023 – Present</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Jamtara College, Jharkhand</p>
              </div>

              <div className="relative pl-5 border-l border-slate-800">
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-1.5 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <h4 className="text-sm font-bold text-slate-200">Advanced Multimedia Course</h4>
                  <span className="text-[10px] font-mono text-indigo-400">09/2024 – Present</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Lalani Computer Academy, Jamtara</p>
              </div>

              <div className="relative pl-5 border-l border-slate-800">
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-1.5 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <h4 className="text-sm font-bold text-slate-200">Higher Secondary Education (12th Science)</h4>
                  <span className="text-[10px] font-mono text-emerald-400">Passed: 05/2023</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">JBC +2 High School, Jamtara</p>
              </div>

              <div className="relative pl-5 border-l border-slate-800">
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-1.5 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <h4 className="text-sm font-bold text-slate-200">Matriculation (10th Standard)</h4>
                  <span className="text-[10px] font-mono text-emerald-400">Passed: 08/2021</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">St. Joseph's Convent High School, Chittaranjan</p>
              </div>

            </div>
          </div>

          {/* CARD 7: LANGUAGES & HOBBIES (Compact 1 Col) */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 hover:border-slate-700/50 transition-all duration-300 shadow-xl flex flex-col justify-between gap-6">
            
            <div className="space-y-3">
              <div className="text-xs font-bold tracking-wider text-slate-400 uppercase border-b border-slate-800/60 pb-1.5">
                Languages
              </div>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between"><span className="text-slate-300 font-medium">Hindi</span><span className="text-slate-500">Native / Bilingual</span></li>
                <li className="flex justify-between"><span className="text-slate-300 font-medium">English</span><span className="text-slate-500">Professional Working</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold tracking-wider text-slate-400 uppercase border-b border-slate-800/60 pb-1.5">
                Interests & Activities
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                  Concept Digital Graphics Setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                  Cinematic Photography & Travel Vlogs
                </li>
              </ul>
            </div>

          </div>

        </div>
        {/* ==================== BENTO GRID END ==================== */}

      </div>
    </div>
  );
};

export default ResumeSection;