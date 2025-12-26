
import React, { useState } from 'react';
import { askAI } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setIsLoading(true);
    setResponse(null);
    const result = await askAI(question);
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-emerald-500 rounded-full shadow-2xl shadow-emerald-500/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-pulse"
        >
          <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      ) : (
        <div className="w-[350px] bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-scale-up">
          <div className="bg-emerald-500 p-6 flex justify-between items-center">
            <div>
              <h3 className="text-slate-950 font-bold">Ask Puspita's AI</h3>
              <p className="text-slate-950/70 text-xs">Powered by Gemini Pro</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-950/50 hover:text-slate-950 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-6 max-h-[400px] overflow-y-auto bg-slate-950 flex flex-col gap-4">
            <div className="p-4 rounded-2xl rounded-bl-none bg-slate-900 text-slate-400 text-sm italic">
              "Hi! Ask me anything about Puspita's projects in VHDL, Java, or her research in Automata Theory."
            </div>
            
            {response && (
              <div className="p-4 rounded-2xl rounded-br-none bg-emerald-500/10 border border-emerald-500/20 text-emerald-100 text-sm leading-relaxed">
                {response}
              </div>
            )}
            
            {isLoading && (
              <div className="flex gap-2 p-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-slate-900 border-t border-white/5 flex gap-2">
            <input 
              type="text" 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type a question..." 
              className="flex-grow bg-slate-950 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-emerald-500 p-2 rounded-xl text-slate-950 hover:bg-emerald-400 transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
