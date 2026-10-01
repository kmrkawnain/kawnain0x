import React, { useState } from 'react';
import { Download, RefreshCw, Sparkles, Check, X, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { Flashcard } from '../types/syllabus';
import { generateFlashcardsPDF } from '../utils/pdfGenerator';

interface FlashcardsViewProps {
  flashcards: Flashcard[];
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [knownCards, setKnownCards] = useState<Set<string>>(new Set());

  const categories = ['all', 'Integumentary', 'Skeletal', 'Joints', 'Digestive', 'Histology'];

  const filteredCards = selectedCategory === 'all'
    ? flashcards
    : flashcards.filter((c) => c.category === selectedCategory);

  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const toggleKnown = (id: string) => {
    setKnownCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleDownload = () => {
    generateFlashcardsPDF(flashcards, { saveFile: true });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
              RAPID RECALL ENGINE
            </span>
            <span className="text-xs text-slate-500">
              Mastered: {knownCards.size} / {flashcards.length}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            HAP Unit II Flashcards & Memory Mnemonics
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Spaced repetition flashcards designed for 2-mark definitions and rapid exam recall.
          </p>
        </div>

        <button
          onClick={handleDownload}
          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-sm active:scale-95 transition-all shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download Flashcards (PDF)</span>
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat === 'all' ? 'All Categories' : cat}
          </button>
        ))}
      </div>

      {/* Flashcard Box */}
      {currentCard && (
        <div className="space-y-4">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`cursor-pointer transition-all duration-300 min-h-[260px] sm:min-h-[300px] p-8 rounded-3xl border flex flex-col justify-between shadow-md relative select-none ${
              isFlipped
                ? 'bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white border-blue-800'
                : 'bg-white text-slate-900 border-slate-200 hover:border-blue-300'
            }`}
          >
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                isFlipped ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-slate-100 text-slate-700'
              }`}>
                {currentCard.category} • {currentCard.marks} MARKS
              </span>

              <span className="text-xs text-slate-400 font-mono">
                Card {currentIndex + 1} of {filteredCards.length}
              </span>
            </div>

            {/* Card Content */}
            <div className="py-6 my-auto text-center space-y-4">
              {!isFlipped ? (
                <div className="space-y-3">
                  <div className="text-xs text-blue-600 font-semibold tracking-wider uppercase">
                    Question:
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 max-w-xl mx-auto leading-snug">
                    {currentCard.question}
                  </h3>
                  <div className="text-xs text-slate-400 flex items-center justify-center space-x-1 pt-2">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Click anywhere to reveal answer</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 animate-fade-in">
                  <div className="text-xs text-emerald-400 font-semibold tracking-wider uppercase">
                    Answer:
                  </div>
                  <p className="text-base sm:text-lg font-medium text-slate-100 max-w-xl mx-auto leading-relaxed">
                    {currentCard.answer}
                  </p>

                  {currentCard.mnemonic && (
                    <div className="inline-block mt-3 bg-amber-500/20 border border-amber-500/40 px-3.5 py-1.5 rounded-xl text-amber-200 text-xs font-mono">
                      ⭐ Memory Mnemonic: {currentCard.mnemonic}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200/20 text-xs text-slate-400">
              <span>{isFlipped ? 'Click to show question' : 'Flip card for answer & mnemonics'}</span>
              <span className="font-semibold">{knownCards.has(currentCard.id) ? '✓ Marked as Mastered' : ''}</span>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => toggleKnown(currentCard.id)}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                knownCards.has(currentCard.id)
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Check className="w-4 h-4 text-emerald-600" />
              <span>{knownCards.has(currentCard.id) ? 'Mastered!' : 'Mark as Mastered'}</span>
            </button>

            <button
              onClick={handleNext}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
