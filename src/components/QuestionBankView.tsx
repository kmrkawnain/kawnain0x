import React, { useState } from 'react';
import { Download, HelpCircle, Filter, BookOpen, CheckCircle, Search, Award } from 'lucide-react';
import { UnitChapter } from '../types/syllabus';
import { generateQuestionBankPDF } from '../utils/pdfGenerator';

interface QuestionBankViewProps {
  chapters: UnitChapter[];
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({ chapters }) => {
  const [selectedMarks, setSelectedMarks] = useState<number | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Flatten all questions with chapter metadata
  const allQuestions = chapters.flatMap((ch) =>
    ch.frequentlyAskedQuestions.map((q) => ({
      ...q,
      chapterTitle: ch.title,
      subjectCode: ch.subjectCode,
      unit: ch.unit,
    }))
  );

  const filteredQuestions = allQuestions.filter((q) => {
    const matchesMarks = selectedMarks === 'all' || q.marks === selectedMarks;
    const matchesSearch =
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.chapterTitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesMarks && matchesSearch;
  });

  const handleDownload = () => {
    generateQuestionBankPDF(chapters, { saveFile: true });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>PCI B.PHARM CURATED REVISION</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            HAP Unit II Solved Question Bank
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            University examination questions repeated across RGUHS, AKTU, PTU, KUHS, and GTU with step-by-step model answers and marking breakdown.
          </p>
        </div>

        <button
          onClick={handleDownload}
          className="shrink-0 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center space-x-2 shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
        >
          <Download className="w-4 h-4" />
          <span>Download Question Bank (PDF)</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
        
        <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <span className="text-xs font-semibold text-slate-500 flex items-center mr-1">
            <Filter className="w-3.5 h-3.5 mr-1" /> Marks:
          </span>
          <button
            onClick={() => setSelectedMarks('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedMarks === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Questions ({allQuestions.length})
          </button>
          <button
            onClick={() => setSelectedMarks(10)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedMarks === 10
                ? 'bg-rose-600 text-white'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
            }`}
          >
            10 Marks (Essays)
          </button>
          <button
            onClick={() => setSelectedMarks(5)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedMarks === 5
                ? 'bg-amber-600 text-white'
                : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
            }`}
          >
            5 Marks (Short Notes)
          </button>
          <button
            onClick={() => setSelectedMarks(2)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedMarks === 2
                ? 'bg-blue-600 text-white'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            2 Marks (Compulsory)
          </button>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Filter questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
          />
        </div>

      </div>

      {/* Questions Grid */}
      <div className="space-y-4">
        {filteredQuestions.map((q, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-shadow space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <span className={`px-2.5 py-0.5 rounded-md font-bold text-[11px] ${
                  q.marks === 10
                    ? 'bg-rose-100 text-rose-800 border border-rose-200'
                    : q.marks === 5
                    ? 'bg-amber-100 text-amber-800 border border-amber-200'
                    : 'bg-blue-100 text-blue-800 border border-blue-200'
                }`}>
                  {q.marks} MARKS
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {q.subjectCode} • {q.unit}
                </span>
              </div>
              <span className="text-xs text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 font-medium">
                {q.frequentlyRepeatedIn}
              </span>
            </div>

            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              {q.question}
            </h3>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1">
              <div className="font-semibold text-slate-900 mb-1 flex items-center space-x-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>PCI Standard Model Answer:</span>
              </div>
              <p>{q.answer}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
