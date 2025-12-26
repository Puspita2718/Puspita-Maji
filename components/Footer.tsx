
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-mono">
        <p>© {currentYear} PUSPITA.DEV — Built with Logic and Creativity.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-emerald-500 transition-colors uppercase tracking-widest">Design System</a>
          <a href="#" className="hover:text-emerald-500 transition-colors uppercase tracking-widest">Curriculum Vitae</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
