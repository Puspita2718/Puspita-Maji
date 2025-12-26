
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Open to Collaboration</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <br /> meaningful together.</h3>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Currently looking for opportunities in software development, academic research, or digital hardware design. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <a 
            href="mailto:contact@puspita.dev" 
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-emerald-500 rounded-2xl text-slate-950 text-xl font-bold transition-all hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Say Hello</span>
            <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>
          
          <div className="flex gap-8 mt-4">
            <a href="https://github.com/prem-k-r/materialYouNewTab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 font-mono text-sm transition-colors uppercase tracking-widest">
              GitHub
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 font-mono text-sm transition-colors uppercase tracking-widest">
              LinkedIn
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-500 font-mono text-sm transition-colors uppercase tracking-widest">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
