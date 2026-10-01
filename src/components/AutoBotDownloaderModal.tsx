import React, { useState, useEffect, useRef } from 'react';
import {
  Bot,
  Download,
  CheckCircle2,
  AlertCircle,
  X,
  Play,
  FileText,
  FolderArchive,
  RefreshCw,
  Terminal,
  ShieldCheck,
  Sparkles,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UnitChapter, Flashcard } from '../types/syllabus';
import {
  generateChapterPDF,
  generateAllUnit2MasterPDF,
  generateQuestionBankPDF,
  generateFlashcardsPDF,
} from '../utils/pdfGenerator';
import { generateUnit2ZipPackage } from '../utils/zipGenerator';

interface AutoBotDownloaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  chapters: UnitChapter[];
  flashcards: Flashcard[];
}

interface LogEntry {
  id: string;
  time: string;
  type: 'system' | 'bot' | 'success' | 'download';
  text: string;
}

export const AutoBotDownloaderModal: React.FC<AutoBotDownloaderModalProps> = ({
  isOpen,
  onClose,
  chapters,
  flashcards,
}) => {
  const [downloadMode, setDownloadMode] = useState<'batch-pdf' | 'master-pdf' | 'zip-package'>('batch-pdf');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [currentAction, setCurrentAction] = useState<string>('Bot idle. Ready to download Unit 2 notes automatically.');
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: 'init-1',
      time: new Date().toLocaleTimeString(),
      type: 'system',
      text: 'PCI Syllabus Bot v2.6 initialized for B. Pharmacy HAP Unit 2.',
    },
    {
      id: 'init-2',
      time: new Date().toLocaleTimeString(),
      type: 'bot',
      text: 'Target locked: HAP-I Unit 2 (BP101T) & HAP-II Unit 2 (BP201T). All notes loaded in memory.',
    },
  ]);
  const [completed, setCompleted] = useState<boolean>(false);
  const [downloadedCount, setDownloadedCount] = useState<number>(0);

  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const addLog = (type: 'system' | 'bot' | 'success' | 'download', text: string) => {
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 9),
        time: new Date().toLocaleTimeString(),
        type,
        text,
      },
    ]);
  };

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const startAutoDownload = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setProgress(5);
    setCompleted(false);
    setDownloadedCount(0);

    addLog('bot', '▶ Starting automated sequence: HAP New Syllabus B.Pharm 2nd Unit Only...');
    setCurrentAction('Connecting to internal PCI notes compilation engine...');
    await delay(600);

    try {
      if (downloadMode === 'batch-pdf') {
        // Sequentially download each chapter + question bank + flashcards
        const totalItems = chapters.length + 3; // chapters + master + qbank + flashcards
        let count = 0;

        for (const ch of chapters) {
          count++;
          const pct = Math.round((count / totalItems) * 85);
          setProgress(pct);
          setCurrentAction(`Bot auto-compiling & downloading: ${ch.title}...`);
          addLog('bot', `[THREAD-A] Rendering PDF: ${ch.subjectCode} - ${ch.title}`);
          
          await delay(700);
          generateChapterPDF(ch, { saveFile: true });
          
          addLog('download', `✓ Downloaded to device: ${ch.subjectCode}_Unit2_${ch.title.substring(0, 15)}.pdf`);
          setDownloadedCount((prev) => prev + 1);
          await delay(400);
        }

        // Master Consolidated PDF
        count++;
        setProgress(88);
        setCurrentAction('Bot compiling Master Unit 2 All-In-One Handbook PDF...');
        addLog('bot', '[THREAD-B] Compiling Complete 20-page Unit 2 Master Handbook...');
        await delay(800);
        generateAllUnit2MasterPDF(chapters, { saveFile: true });
        addLog('download', '✓ Downloaded: B_Pharm_HAP_UNIT_2_MASTER_NOTES_PCI_ALL.pdf');
        setDownloadedCount((prev) => prev + 1);

        // Solved Question Bank PDF
        count++;
        setProgress(94);
        setCurrentAction('Bot compiling Solved 2, 5 & 10 Marks Question Bank...');
        addLog('bot', '[THREAD-C] Formatting University Repeated Question Bank...');
        await delay(600);
        generateQuestionBankPDF(chapters, { saveFile: true });
        addLog('download', '✓ Downloaded: HAP_Unit2_Solved_Question_Bank_PCI.pdf');
        setDownloadedCount((prev) => prev + 1);

        // Flashcards PDF
        count++;
        setProgress(98);
        setCurrentAction('Bot generating Revision Flashcards & Mnemonics PDF...');
        addLog('bot', '[THREAD-D] Generating Rapid Recall Flashcard Cards...');
        await delay(500);
        generateFlashcardsPDF(flashcards, { saveFile: true });
        addLog('download', '✓ Downloaded: HAP_Unit2_Flashcards_Mnemonics_PCI.pdf');
        setDownloadedCount((prev) => prev + 1);

      } else if (downloadMode === 'master-pdf') {
        // Master consolidated
        setProgress(30);
        setCurrentAction('Bot compiling 100% complete Unit 2 master textbook...');
        addLog('bot', 'Collating Integumentary, Skeletal, Joints, and Digestive systems into single volume...');
        await delay(900);

        setProgress(70);
        setCurrentAction('Injecting PCI marking schemes, diagrams, and university model answers...');
        addLog('bot', 'Styling tables, Haversian system anatomy, and HCl secretion mechanism...');
        await delay(800);

        setProgress(95);
        generateAllUnit2MasterPDF(chapters, { saveFile: true });
        addLog('download', '✓ Downloaded: B_Pharm_HAP_UNIT_2_MASTER_NOTES_PCI_ALL.pdf');
        setDownloadedCount(1);

      } else if (downloadMode === 'zip-package') {
        // Zip package
        setProgress(20);
        setCurrentAction('Packaging complete Unit 2 study package into compressed ZIP archive...');
        addLog('bot', 'Bundling 4 chapter PDFs + Master Book + Question Bank + Flashcards + README...');

        await generateUnit2ZipPackage(chapters, flashcards, (cur, tot, msg) => {
          const calcPct = Math.round((cur / tot) * 90);
          setProgress(calcPct);
          setCurrentAction(msg);
          addLog('bot', msg);
        });

        addLog('download', '✓ Downloaded ZIP archive: B_Pharm_HAP_Unit_2_All_Notes_PCI_Complete_Package.zip');
        setDownloadedCount(chapters.length + 3);
      }

      setProgress(100);
      setIsRunning(false);
      setCompleted(true);
      setCurrentAction('🎉 Automated download completed successfully! Check your downloads folder.');
      addLog('success', '==================================================');
      addLog('success', '✨ ALL UNIT 2 NOTES HAVE BEEN AUTOMATICALLY DOWNLOADED!');
      addLog('success', 'Compliant with Pharmacy Council of India (PCI) BP101T/BP201T.');

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });

    } catch (err) {
      console.error(err);
      setIsRunning(false);
      setCurrentAction('Error encountered during automated download. Please retry.');
      addLog('system', `Error: ${String(err)}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-400 shadow-inner">
              <Bot className="w-7 h-7 animate-pulse text-blue-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold text-white tracking-tight">
                  PharmBot HAP Unit 2 Automated Downloader
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 inline mr-0.5" />
                  PCI B.Pharm Syllabus
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Automatically downloads all Unit 2 notes, diagrams, and question banks with zero manual effort
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 overflow-y-auto">
          
          {/* Download Mode Selector */}
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
              Select Automated Download Mode:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              <button
                type="button"
                disabled={isRunning}
                onClick={() => setDownloadMode('batch-pdf')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  downloadMode === 'batch-pdf'
                    ? 'bg-blue-600/20 border-blue-500 ring-2 ring-blue-500/20 text-white'
                    : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/30 text-blue-200">
                    RECOMMENDED
                  </span>
                </div>
                <div className="font-semibold text-sm">Sequential Auto-Batch</div>
                <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                  Bot downloads all 7 individual PDFs one-by-one automatically to your downloads folder
                </div>
              </button>

              <button
                type="button"
                disabled={isRunning}
                onClick={() => setDownloadMode('master-pdf')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  downloadMode === 'master-pdf'
                    ? 'bg-blue-600/20 border-blue-500 ring-2 ring-blue-500/20 text-white'
                    : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                    1-CLICK
                  </span>
                </div>
                <div className="font-semibold text-sm">Single Master PDF</div>
                <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                  Complete consolidated Unit 2 textbook in one document with cover page
                </div>
              </button>

              <button
                type="button"
                disabled={isRunning}
                onClick={() => setDownloadMode('zip-package')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  downloadMode === 'zip-package'
                    ? 'bg-blue-600/20 border-blue-500 ring-2 ring-blue-500/20 text-white'
                    : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <FolderArchive className="w-5 h-5 text-indigo-400" />
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                    ZIP BUNDLE
                  </span>
                </div>
                <div className="font-semibold text-sm">Complete ZIP Archive</div>
                <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                  All PDFs + Syllabus instructions archived into one tidy .zip download
                </div>
              </button>

            </div>
          </div>

          {/* Included Topics Checklist */}
          <div className="bg-slate-800/40 rounded-xl p-3.5 border border-slate-800 text-xs text-slate-300">
            <span className="font-semibold text-slate-200 block mb-2">
              All Notes Included in this Automated Unit 2 Download:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center space-x-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>BP101T: Integumentary System (Skin strata, glands, burns)</span>
              </div>
              <div className="flex items-center space-x-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>BP101T: Skeletal System (206 bones, Haversian system, Ca2+)</span>
              </div>
              <div className="flex items-center space-x-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>BP101T: Joints (6 Synovial classifications, arthritis)</span>
              </div>
              <div className="flex items-center space-x-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>BP201T: Digestive System (Parietal HCl pump, bile, histology)</span>
              </div>
              <div className="flex items-center space-x-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Master Unit 2 Solved 2, 5 & 10-Marks Question Bank</span>
              </div>
              <div className="flex items-center space-x-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Rapid Revision Flashcards & High-Yield Mnemonics</span>
              </div>
            </div>
          </div>

          {/* Bot Live Execution Terminal */}
          <div className="rounded-xl border border-slate-700 bg-slate-950 overflow-hidden shadow-inner font-mono text-xs">
            <div className="bg-slate-800/80 px-3 py-1.5 flex items-center justify-between border-b border-slate-700 text-slate-400">
              <div className="flex items-center space-x-2">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-semibold text-[11px] text-slate-300">PharmBot Automation Console</span>
              </div>
              <div className="flex items-center space-x-1 text-[10px]">
                <span className={`w-2 h-2 rounded-full ${isRunning ? 'bg-amber-400 animate-ping' : completed ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                <span>{isRunning ? 'EXECUTING AUTOMATION' : completed ? 'COMPLETE' : 'STANDBY'}</span>
              </div>
            </div>

            <div className="p-3 h-40 overflow-y-auto space-y-1.5 text-[11px] leading-relaxed">
              {logs.map((log) => (
                <div key={log.id} className="flex items-start space-x-2">
                  <span className="text-slate-500 select-none">[{log.time}]</span>
                  {log.type === 'system' && <span className="text-slate-400">{log.text}</span>}
                  {log.type === 'bot' && <span className="text-blue-400">{log.text}</span>}
                  {log.type === 'download' && <span className="text-amber-300 font-medium">{log.text}</span>}
                  {log.type === 'success' && <span className="text-emerald-400 font-bold">{log.text}</span>}
                </div>
              ))}
              <div ref={logsEndRef} />
            </div>

            {/* Current Action Banner */}
            <div className="bg-slate-900/90 px-3 py-2 border-t border-slate-800 text-[11px] flex items-center justify-between">
              <span className="text-slate-300 truncate max-w-[80%]">{currentAction}</span>
              <span className="text-blue-400 font-bold">{progress}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-slate-800 h-1.5">
              <div
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 h-1.5 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Trigger Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              {completed ? (
                <span className="text-emerald-400 font-medium flex items-center justify-center sm:justify-start space-x-1">
                  <CheckCircle2 className="w-4 h-4 inline" />
                  <span>Successfully downloaded {downloadedCount} Unit 2 files!</span>
                </span>
              ) : (
                <span>Clicking below triggers the bot to download all notes automatically</span>
              )}
            </div>

            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-semibold transition-colors"
              >
                Close
              </button>
              
              <button
                type="button"
                disabled={isRunning}
                onClick={startAutoDownload}
                className={`flex-1 sm:flex-none flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl text-white text-xs font-bold shadow-lg transition-all active:scale-95 ${
                  isRunning
                    ? 'bg-slate-700 cursor-not-allowed opacity-80'
                    : 'bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-500/25 ring-1 ring-white/20'
                }`}
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Bot Downloading Automatically...</span>
                  </>
                ) : completed ? (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    <span>Download Again</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Start Automated Download</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
