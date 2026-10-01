import React, { useState } from 'react';
import {
  Bot,
  Download,
  BookOpen,
  HelpCircle,
  Image,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  FileText,
  FolderArchive,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { NotesViewer } from './components/NotesViewer';
import { QuestionBankView } from './components/QuestionBankView';
import { DiagramsGallery } from './components/DiagramsGallery';
import { FlashcardsView } from './components/FlashcardsView';
import { AutoBotDownloaderModal } from './components/AutoBotDownloaderModal';
import { BotChatModal } from './components/BotChatModal';
import { HAP_UNIT_2_CHAPTERS, HAP_UNIT_2_FLASHCARDS } from './data/hapUnit2Notes';
import { SemesterType } from './types/syllabus';
import { generateAllUnit2MasterPDF } from './utils/pdfGenerator';
import { generateUnit2ZipPackage } from './utils/zipGenerator';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'notes' | 'questions' | 'diagrams' | 'flashcards'>('notes');
  const [selectedSemester, setSelectedSemester] = useState<SemesterType>('all');
  const [selectedChapterId, setSelectedChapterId] = useState<string>(HAP_UNIT_2_CHAPTERS[0].id);
  const [isBotDownloaderOpen, setIsBotDownloaderOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  // Filter chapters if semester is selected
  const filteredChapters = selectedSemester === 'all'
    ? HAP_UNIT_2_CHAPTERS
    : HAP_UNIT_2_CHAPTERS.filter((c) => c.semester === selectedSemester);

  const handleQuickMasterDownload = () => {
    generateAllUnit2MasterPDF(filteredChapters, { saveFile: true });
  };

  const handleQuickZipDownload = () => {
    generateUnit2ZipPackage(filteredChapters, HAP_UNIT_2_FLASHCARDS);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        selectedSemester={selectedSemester}
        setSelectedSemester={setSelectedSemester}
        onOpenBotDownloader={() => setIsBotDownloaderOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Hero Bot Automation Card */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold">
                  <Bot className="w-3.5 h-3.5 text-blue-400" />
                  <span>Automated Notes Downloader Bot</span>
                </span>
                <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>PCI B.Pharm 2026 Syllabus Approved</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                HAP New Syllabus <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">Unit II Only</span> All Notes
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dedicated download bot strictly curated for B. Pharmacy 2nd Unit. Covers the complete Integumentary System, Skeletal System & Bone Histology, Joints (BP101T), and Digestive System & HCl Secretion (BP201T) with 2, 5 & 10 marks solved questions.
              </p>
            </div>

            {/* Automation Launcher Box */}
            <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-3xl shadow-xl w-full lg:w-auto shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="space-y-1 pr-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-blue-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>BOT READY FOR AUTO-DOWNLOAD</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Downloads all Unit 2 chapter PDFs & Question Bank to device automatically
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                <button
                  onClick={() => setIsBotDownloaderOpen(true)}
                  className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-500/30 flex items-center justify-center space-x-2 active:scale-95 transition-all ring-1 ring-white/20"
                >
                  <Bot className="w-4 h-4 animate-bounce" />
                  <span>Launch Auto-Download Bot</span>
                </button>

                <button
                  onClick={handleQuickMasterDownload}
                  className="px-4 py-3 rounded-2xl bg-slate-700/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all border border-slate-600"
                  title="Direct Single Master PDF"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Master PDF</span>
                </button>

                <button
                  onClick={handleQuickZipDownload}
                  className="px-4 py-3 rounded-2xl bg-slate-700/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all border border-slate-600"
                  title="Direct Zip Archive Package"
                >
                  <FolderArchive className="w-4 h-4 text-indigo-400" />
                  <span>ZIP All</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main App Body */}
      <div className="flex-1">
        {currentTab === 'notes' && (
          <NotesViewer
            chapters={filteredChapters}
            selectedChapterId={selectedChapterId}
            onSelectChapter={setSelectedChapterId}
            onOpenBotDownloader={() => setIsBotDownloaderOpen(true)}
          />
        )}

        {currentTab === 'questions' && (
          <QuestionBankView chapters={filteredChapters} />
        )}

        {currentTab === 'diagrams' && (
          <DiagramsGallery />
        )}

        {currentTab === 'flashcards' && (
          <FlashcardsView flashcards={HAP_UNIT_2_FLASHCARDS} />
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-slate-300">
              PharmBot HAP Unit 2 Automated Downloader
            </span>
            <span>• PCI B. Pharmacy Standard</span>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <span>BP101T (HAP-I Unit 2)</span>
            <span>•</span>
            <span>BP201T (HAP-II Unit 2)</span>
            <span>•</span>
            <button
              onClick={() => setIsBotDownloaderOpen(true)}
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Auto-Download All (.pdf / .zip)
            </button>
          </div>
        </div>
      </footer>

      {/* Automated Downloader Bot Modal */}
      <AutoBotDownloaderModal
        isOpen={isBotDownloaderOpen}
        onClose={() => setIsBotDownloaderOpen(false)}
        chapters={filteredChapters}
        flashcards={HAP_UNIT_2_FLASHCARDS}
      />

      {/* AI Bot Chat / Doubt Clearance Modal */}
      <BotChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

    </div>
  );
}
