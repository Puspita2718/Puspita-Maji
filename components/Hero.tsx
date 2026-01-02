
import React from 'react';

interface HeroProps {
  photoSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ photoSrc = "/images/profile.jpg" }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            AVAILABLE FOR INTERNSHIPS & RESEARCH
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
            I build intelligent <br /> 
            <span className="text-emerald-500 italic">systems</span> through code
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Computer Science enthusiast specializing in Java & C development, 
            Automata Theory, and Digital Systems Design. Based in India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-all hover:-translate-y-1 shadow-lg shadow-emerald-500/20"
            >
              Let's Connect
            </a>
            <div className="px-6 py-4 text-slate-400 font-mono text-sm border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
              contact@puspita.dev
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-emerald-500/20 shadow-2xl">
              <img 
                src={photoSrc} 
                alt="Puspita Maji" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">👋</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
