import React, { useState } from 'react';
import { Bot, Send, X, Sparkles, User, RefreshCw, Copy, Check } from 'lucide-react';
import { askHapBot, BotChatMessage } from '../services/geminiService';

interface BotChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BotChatModal: React.FC<BotChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<BotChatMessage[]>([
    {
      role: 'assistant',
      content:
        'Hello! I am **PharmBot**, your automated tutor specialized exclusively in **HAP / HAPP Unit 2 (B. Pharmacy PCI Syllabus)**.\n\nAsk me any concept, 10-mark model answer, or 2-mark definition on:\n• Integumentary System (Skin strata, glands, thermoregulation, Rule of Nines)\n• Skeletal System & Bone Histology (Osteon, Haversian system, ossification, Ca2+ balance)\n• Joints & Articulations (Synovial joints, movements, arthritis)\n• Digestive System (GI histology, parietal cell HCl proton pump, bile & liver)',
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  if (!isOpen) return null;

  const quickPrompts = [
    'Explain Haversian system with exam diagram points',
    'Mechanism of HCl secretion by gastric parietal cells',
    'Wallace Rule of Nines in burns evaluation',
    'Classify synovial joints with anatomical examples',
    'Difference between Osteoarthritis and Rheumatoid Arthritis',
  ];

  const handleSend = async (queryText?: string) => {
    const text = queryText || inputQuery;
    if (!text.trim() || loading) return;

    const userMsg: BotChatMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setLoading(true);

    try {
      const answer = await askHapBot(text, messages);
      setMessages((prev) => [...prev, { role: 'assistant', content: answer }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an issue. Please try rephrasing your question about HAP Unit 2.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col h-[85vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-blue-950 p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
              <Bot className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-white text-sm">PharmBot Study Assistant</h3>
                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30">
                  PCI Unit 2 Specialist
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Ask doubts, exam answering schemes, and pharmaceutical relevance
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat message history */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start space-x-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-sm relative group ${
                  m.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-tl-none whitespace-pre-line'
                }`}
              >
                {m.content}

                {m.role === 'assistant' && (
                  <button
                    onClick={() => copyToClipboard(m.content, idx)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-slate-700/80 hover:bg-slate-600 rounded text-slate-300"
                    title="Copy Answer"
                  >
                    {copiedIdx === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>

              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center space-x-2 text-slate-400 text-xs py-2">
              <RefreshCw className="w-4 h-4 animate-spin text-blue-400" />
              <span>PharmBot is structuring PCI exam answer...</span>
            </div>
          )}
        </div>

        {/* Quick prompt pills */}
        <div className="px-4 py-2 border-t border-slate-800 bg-slate-900/60 flex items-center space-x-2 overflow-x-auto text-[11px]">
          <span className="text-slate-500 shrink-0">Ask:</span>
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p)}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg whitespace-nowrap border border-slate-700/60 transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input bar */}
        <div className="p-3 border-t border-slate-800 bg-slate-950 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Ask anything on HAP Unit 2 (e.g. explain parietal cells, 206 bones)..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputQuery.trim() || loading}
            className="p-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
