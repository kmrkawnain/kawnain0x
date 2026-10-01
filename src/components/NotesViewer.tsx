import React, { useState } from 'react';
import {
  Download,
  BookOpen,
  Volume2,
  VolumeX,
  Search,
  CheckCircle,
  HelpCircle,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Clock,
  Award
} from 'lucide-react';
import { UnitChapter, NoteSection } from '../types/syllabus';
import { generateChapterPDF } from '../utils/pdfGenerator';

interface NotesViewerProps {
  chapters: UnitChapter[];
  selectedChapterId: string;
  onSelectChapter: (id: string) => void;
  onOpenBotDownloader: () => void;
}

export const NotesViewer: React.FC<NotesViewerProps> = ({
  chapters,
  selectedChapterId,
  onSelectChapter,
  onOpenBotDownloader,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingText, setSpeakingText] = useState('');

  const currentChapter = chapters.find((c) => c.id === selectedChapterId) || chapters[0];

  // TTS Read Aloud
  const handleToggleSpeak = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Prepare text
    const textToRead = `${currentChapter.title}. ${currentChapter.summary}. ` +
      currentChapter.sections.map((s) => `${s.title}. ${s.content.join('. ')}`).join(' ');

    const utterance = new SpeechSynthesisUtterance(textToRead.substring(0, 3000));
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsSpeaking(false);
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleDownloadThisChapter = () => {
    generateChapterPDF(currentChapter, { saveFile: true });
  };

  // Filter sections if search is applied
  const filteredSections = searchQuery.trim()
    ? currentChapter.sections.filter(
        (sec) =>
          sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sec.content.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
          sec.keyPoints?.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : currentChapter.sections;

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Sidebar: Unit 2 Chapters Menu */}
      <aside className="w-full lg:w-80 shrink-0 space-y-4">
        
        {/* Banner Card */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-4 rounded-2xl border border-blue-800/80 shadow-md text-white">
          <div className="flex items-center justify-between text-xs text-blue-300 font-semibold mb-1">
            <span>PCI B. PHARMACY SYLLABUS</span>
            <span className="bg-blue-500/20 px-2 py-0.5 rounded text-blue-200 border border-blue-500/30">UNIT II</span>
          </div>
          <h3 className="font-bold text-base text-white">Human Anatomy & Physiology</h3>
          <p className="text-xs text-blue-200 mt-1">
            4 Core Chapters covering 100% of Unit 2 syllabus requirements.
          </p>

          <button
            onClick={onOpenBotDownloader}
            className="mt-3.5 w-full py-2 px-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white text-xs font-bold flex items-center justify-center space-x-1.5 shadow-md transition-all active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Auto-Download All Unit 2 Notes</span>
          </button>
        </div>

        {/* Chapter Selection List */}
        <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-sm space-y-1">
          <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Unit II Topics (Click to Read)
          </div>

          {chapters.map((chapter) => {
            const isSelected = chapter.id === currentChapter.id;
            return (
              <button
                key={chapter.id}
                onClick={() => onSelectChapter(chapter.id)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-start justify-between ${
                  isSelected
                    ? 'bg-blue-50 border border-blue-200 text-blue-900 shadow-xs'
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="space-y-1 pr-2">
                  <div className="flex items-center space-x-1.5">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-blue-200 text-blue-800' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {chapter.subjectCode}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {chapter.unit}
                    </span>
                  </div>
                  <h4 className="font-semibold text-xs leading-snug line-clamp-2">
                    {chapter.title}
                  </h4>
                  <div className="flex items-center space-x-3 text-[10px] text-slate-400">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {chapter.readTime}
                    </span>
                    <span className="text-amber-600 font-medium">
                      {chapter.pciWeightage}
                    </span>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 mt-2 transition-transform ${isSelected ? 'text-blue-600 translate-x-0.5' : 'text-slate-300'}`} />
              </button>
            );
          })}
        </div>

        {/* Quick Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search keywords (e.g. Haversian, Parietal)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 shadow-sm"
          />
        </div>

      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        
        {/* Chapter Header */}
        <div className="border-b border-slate-100 pb-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded-lg">
                {currentChapter.subjectCode} - {currentChapter.unit}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg">
                PCI Weightage: {currentChapter.pciWeightage}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              {/* TTS Read button */}
              <button
                onClick={handleToggleSpeak}
                className={`p-2 rounded-xl border text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  isSpeaking
                    ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
                title="Read Notes Aloud (Audio Study)"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{isSpeaking ? 'Stop Audio' : 'Audio Revision'}</span>
              </button>

              {/* Direct PDF Download */}
              <button
                onClick={handleDownloadThisChapter}
                className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-sm transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download This Chapter (PDF)</span>
              </button>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {currentChapter.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <span className="font-semibold text-slate-800">Syllabus Scope: </span>
            {currentChapter.summary}
          </p>
        </div>

        {/* Sections Content */}
        <div className="space-y-8">
          {filteredSections.map((section) => (
            <article key={section.id} className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2 border-l-4 border-blue-600 pl-3">
                <span>{section.title}</span>
              </h2>

              <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Exam Points Box */}
              {section.keyPoints && section.keyPoints.length > 0 && (
                <div className="bg-amber-50/70 border border-amber-200/90 rounded-xl p-4 text-xs space-y-2">
                  <div className="flex items-center space-x-1.5 font-bold text-amber-900">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Key Exam Revision Points & High-Yield Facts:</span>
                  </div>
                  <ul className="space-y-1.5 text-amber-800 pl-5 list-disc">
                    {section.keyPoints.map((kp, kIdx) => (
                      <li key={kIdx}>{kp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Clinical & Pharmaceutical Relevance Box */}
              {section.clinicalCorrelations && section.clinicalCorrelations.length > 0 && (
                <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-xl p-4 text-xs space-y-2">
                  <div className="flex items-center space-x-1.5 font-bold text-emerald-900">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>Clinical & Pharmaceutical Applications (B.Pharm Context):</span>
                  </div>
                  <ul className="space-y-1.5 text-emerald-800 pl-5 list-disc">
                    {section.clinicalCorrelations.map((cc, cIdx) => (
                      <li key={cIdx}>{cc}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tables */}
              {section.tableData && (
                <div className="overflow-x-auto rounded-xl border border-slate-200 my-4 shadow-2xs">
                  <table className="w-full text-xs text-left text-slate-700">
                    <thead className="bg-slate-100 text-slate-800 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                      <tr>
                        {section.tableData.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-2.5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {section.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-2.5 font-medium">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Solved Exam Questions for this chapter */}
        <section className="mt-12 pt-8 border-t border-slate-200 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              <span>University Solved Questions for {currentChapter.unit}</span>
            </h3>
            <span className="text-xs text-slate-500">PCI Model Answers</span>
          </div>

          <div className="space-y-3">
            {currentChapter.frequentlyAskedQuestions.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs space-y-2 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                    faq.marks === 10
                      ? 'bg-rose-100 text-rose-800'
                      : faq.marks === 5
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {faq.marks} MARKS ESSAY
                  </span>
                  <span className="text-slate-400 text-[10px] italic">
                    Repeated in: {faq.frequentlyRepeatedIn}
                  </span>
                </div>

                <h4 className="font-bold text-slate-800 text-sm">
                  {faq.question}
                </h4>

                <p className="text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-200/60">
                  <span className="font-semibold text-slate-800">Model Answer: </span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

    </div>
  );
};
