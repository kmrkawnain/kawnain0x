export type SemesterType = 'sem1' | 'sem2' | 'all';

export interface NoteSection {
  id: string;
  title: string;
  content: string[];
  keyPoints?: string[];
  clinicalCorrelations?: string[];
  pharmaRelevance?: string[];
  diagramDescription?: string;
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface UnitChapter {
  id: string;
  unit: string;
  semester: 'sem1' | 'sem2';
  subjectCode: string;
  subjectName: string;
  title: string;
  estimatedPages: number;
  readTime: string;
  pciWeightage: string;
  summary: string;
  sections: NoteSection[];
  frequentlyAskedQuestions: {
    marks: 2 | 5 | 10;
    question: string;
    answer: string;
    frequentlyRepeatedIn: string;
  }[];
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: 'Integumentary' | 'Skeletal' | 'Joints' | 'Digestive' | 'Histology';
  marks: 2 | 5;
  mnemonic?: string;
}

export interface BotDownloadLog {
  timestamp: string;
  type: 'info' | 'success' | 'process' | 'download';
  message: string;
}

export interface DownloadOption {
  id: string;
  title: string;
  description: string;
  format: 'PDF' | 'ZIP' | 'TXT';
  size: string;
  chaptersIncluded: string[];
}
