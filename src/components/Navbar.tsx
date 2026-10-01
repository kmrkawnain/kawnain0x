import React from 'react';
import { Bot, Download, BookOpen, Layers, HelpCircle, Sparkles, CheckCircle2, FileText, Image } from 'lucide-react';
import { SemesterType } from '../types/syllabus';

interface NavbarProps {
  currentTab: 'notes' | 'questions' | 'diagrams' | 'flashcards';
  setCurrentTab: (tab: 'notes' | 'questions' | 'diagrams' | 'flashcards') => void;
  selectedSemester: SemesterType;
  setSelectedSemester: (sem: SemesterType) => void;
  onOpenBotDownloader: () => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  selectedSemester,
  setSelectedSemester,
  onOpenBotDownloader,
  onOpenChat,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/20 ring-1 ring-white/20">
              <Bot className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-blue-200 via-white to-blue-400 bg-clip-text text-transparent">
                  PharmBot
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  PCI HAP UNIT II ONLY
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                B. Pharmacy Automated Notes Downloader Bot
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
            <button
              onClick={() => setCurrentTab('notes')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentTab === 'notes'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Unit 2 Notes</span>
            </button>

            <button
              onClick={() => setCurrentTab('questions')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentTab === 'questions'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Exam Question Bank</span>
            </button>

            <button
              onClick={() => setCurrentTab('diagrams')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentTab === 'diagrams'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Image className="w-3.5 h-3.5" />
              <span>Anatomical Diagrams</span>
            </button>

            <button
              onClick={() => setCurrentTab('flashcards')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentTab === 'flashcards'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Flashcards & Mnemonics</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-2.5">
            {/* Ask Bot AI button */}
            <button
              onClick={onOpenChat}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-indigo-200 text-xs font-medium transition-all"
              title="Ask AI Doubt Clearance"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
              <span className="hidden sm:inline">Ask Bot</span>
            </button>

            {/* Primary Automated Download Bot Button */}
            <button
              onClick={onOpenBotDownloader}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-blue-500/25 transition-all ring-1 ring-white/20 active:scale-95"
            >
              <Bot className="w-4 h-4 animate-bounce" />
              <span>Auto-Download Bot</span>
            </button>
          </div>

        </div>

        {/* Mobile Tab Row */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-800 text-xs">
          <button
            onClick={() => setCurrentTab('notes')}
            className={`px-2 py-1 rounded ${currentTab === 'notes' ? 'text-blue-400 font-bold' : 'text-slate-400'}`}
          >
            Unit 2 Notes
          </button>
          <button
            onClick={() => setCurrentTab('questions')}
            className={`px-2 py-1 rounded ${currentTab === 'questions' ? 'text-blue-400 font-bold' : 'text-slate-400'}`}
          >
            Question Bank
          </button>
          <button
            onClick={() => setCurrentTab('diagrams')}
            className={`px-2 py-1 rounded ${currentTab === 'diagrams' ? 'text-blue-400 font-bold' : 'text-slate-400'}`}
          >
            Diagrams
          </button>
          <button
            onClick={() => setCurrentTab('flashcards')}
            className={`px-2 py-1 rounded ${currentTab === 'flashcards' ? 'text-blue-400 font-bold' : 'text-slate-400'}`}
          >
            Flashcards
          </button>
        </div>

      </div>
    </header>
  );
};
