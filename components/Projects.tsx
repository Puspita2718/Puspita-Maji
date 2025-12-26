
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Software' | 'Hardware' | 'Theory'>('All');

  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
            <p className="text-slate-400 max-w-lg">
              A selection of projects exploring complex logic, hardware architectures, and performance-critical software.
            </p>
          </div>
          
          <div className="flex gap-2 p-1 bg-slate-900 rounded-xl border border-white/5">
            {['All', 'Software', 'Hardware', 'Theory'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === cat ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-slate-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-emerald-500/20 transition-all flex flex-col h-full">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest">{project.category}</span>
                  <div className="flex gap-2">
                    {project.technologies.slice(0, 2).map(tech => (
                      <span key={tech} className="text-[10px] bg-white/5 px-2 py-1 rounded text-slate-300">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 mb-6">
                  <p className="text-xs text-emerald-400 leading-relaxed italic">
                    <span className="font-bold uppercase not-italic">Impact: </span>{project.impact}
                  </p>
                </div>

                <a href="#" className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                  View Project Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
