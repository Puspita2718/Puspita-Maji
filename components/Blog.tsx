
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Writings & Insights</h2>
          <p className="text-slate-400">Occasional thoughts on programming languages and theory.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer group">
              <div className="flex justify-between text-xs font-mono text-slate-500 mb-4">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="text-emerald-500 font-bold flex items-center gap-2">
                Read Full Post <div className="w-8 h-[2px] bg-emerald-500 group-hover:w-12 transition-all" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
