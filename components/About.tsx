
import React from 'react';

const About: React.FC = () => {
  const focusAreas = ['Multithreading', 'Cache Optimization', 'Signal Processing'];
  const strengths = [
    { title: 'Problem Solving', desc: 'Approaching challenges with mathematical rigor.' },
    { title: 'Algorithm Design', desc: 'Efficiently scaling logic for complex systems.' },
    { title: 'HW/SW Integration', desc: 'Bridging the gap between silicon and software.' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="text-emerald-500">01.</span> About Me
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I am Puspita Maji, a dedicated Computer Science student with a profound interest in the theoretical foundations of computing and the practical complexities of hardware design. My journey is driven by a curiosity about how abstract models like <span className="text-white font-medium italic">Automata Theory</span> translate into high-performance digital systems.
              </p>
              <p>
                Currently, I focus on optimizing software performance through cache-aware programming and exploring the boundaries of concurrency. I believe that deep technical knowledge is the key to building truly intelligent and efficient tools.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-white/5">
                <div className="text-emerald-500 text-xs font-mono uppercase mb-1">Location</div>
                <div className="text-white font-medium">India</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-white/5">
                <div className="text-emerald-500 text-xs font-mono uppercase mb-1">Time Zone</div>
                <div className="text-white font-medium">IST (GMT+5:30)</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-white/5">
                <div className="text-emerald-500 text-xs font-mono uppercase mb-1">Status</div>
                <div className="text-white font-medium">Student / Researcher</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <h3 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-2">Core Strengths</h3>
            {strengths.map((s, idx) => (
              <div key={idx} className="group p-6 rounded-2xl bg-slate-950 border border-white/5 hover:border-emerald-500/30 transition-all hover:scale-[1.02]">
                <h4 className="text-white font-bold mb-2 group-hover:text-emerald-400 transition-colors">{s.title}</h4>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </div>
            ))}
            
            <div className="mt-4">
              <h3 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4">Active Focus Areas</h3>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map(area => (
                  <span key={area} className="px-4 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
