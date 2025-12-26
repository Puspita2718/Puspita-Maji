
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Technical Proficiency</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          A comprehensive overview of my toolkit, ranging from high-level software development to low-level hardware design.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {SKILLS.map((cat, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:bg-slate-900/60 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
              {cat.icon === 'code' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>}
              {cat.icon === 'cpu' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>}
              {cat.icon === 'tool' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011-1V4z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </div>
            <h3 className="text-xl font-bold mb-6 text-white">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.items.map(item => (
                <li key={item} className="flex items-center gap-3 text-slate-400 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover:bg-emerald-500 transition-colors" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
