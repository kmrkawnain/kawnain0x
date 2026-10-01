import JSZip from 'jszip';
import { UnitChapter, Flashcard } from '../types/syllabus';
import {
  generateChapterPDF,
  generateAllUnit2MasterPDF,
  generateQuestionBankPDF,
  generateFlashcardsPDF,
} from './pdfGenerator';

export interface ZipProgressCallback {
  (currentStep: number, totalSteps: number, message: string): void;
}

export const generateUnit2ZipPackage = async (
  chapters: UnitChapter[],
  flashcards: Flashcard[],
  onProgress?: ZipProgressCallback
): Promise<void> => {
  const zip = new JSZip();
  const folder = zip.folder('B_Pharm_HAP_Unit_2_All_Notes_PCI');

  let current = 0;
  const total = chapters.length + 4; // Chapters + Master + QuestionBank + Flashcards + Readme

  // 1. Generate individual chapter PDFs
  for (const chapter of chapters) {
    current++;
    onProgress?.(current, total, `Generating PDF for ${chapter.title}...`);
    const blob = generateChapterPDF(chapter, { saveFile: false });
    const cleanName = `${chapter.subjectCode}_Unit2_${chapter.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
    folder?.file(cleanName, blob);
  }

  // 2. Master All Unit 2 PDF
  current++;
  onProgress?.(current, total, 'Compiling Master Consolidated Unit 2 Handbook...');
  const masterBlob = generateAllUnit2MasterPDF(chapters, { saveFile: false });
  folder?.file('00_MASTER_HAP_UNIT_2_ALL_NOTES_PCI.pdf', masterBlob);

  // 3. Question Bank PDF
  current++;
  onProgress?.(current, total, 'Creating 2, 5 & 10 Marks Solved Question Bank PDF...');
  const qBankBlob = generateQuestionBankPDF(chapters, { saveFile: false });
  folder?.file('01_HAP_UNIT_2_SOLVED_QUESTION_BANK.pdf', qBankBlob);

  // 4. Flashcards PDF
  current++;
  onProgress?.(current, total, 'Rendering Revision Flashcards & Mnemonics PDF...');
  const flashBlob = generateFlashcardsPDF(flashcards, { saveFile: false });
  folder?.file('02_HAP_UNIT_2_FLASHCARDS_MNEMONICS.pdf', flashBlob);

  // 5. Readme / Syllabi Manifest TXT
  current++;
  onProgress?.(current, total, 'Packaging PCI Syllabus Syllabus Compliance Manifest...');
  const readmeText = `=============================================================
B. PHARMACY PCI NEW SYLLABUS - HUMAN ANATOMY & PHYSIOLOGY (HAPP)
UNIT II COMPLETE STUDY PACKAGE & NOTES DOWNLOAD
=============================================================

Generated via: PharmBot HAPP Unit 2 Automated Downloader
Curriculum: Pharmacy Council of India (PCI) B.Pharm Regulations
Applicable Subjects:
- BP101T: Human Anatomy and Physiology I (Semester I - Unit II)
- BP201T: Human Anatomy and Physiology II (Semester II - Unit II)

CONTENTS IN THIS BUNDLE:
1. 00_MASTER_HAP_UNIT_2_ALL_NOTES_PCI.pdf - Complete consolidated all-in-one book
2. 01_HAP_UNIT_2_SOLVED_QUESTION_BANK.pdf - 2, 5, and 10 mark solved previous questions
3. 02_HAP_UNIT_2_FLASHCARDS_MNEMONICS.pdf - Quick recall cards and memory mnemonics
4. BP101T_Unit2_Integumentary_System.pdf - Deep histology, skin strata, thermoregulation, Rule of 9
5. BP101T_Unit2_Skeletal_System.pdf - 206 bones, Haversian system, osteoblasts/clasts, calcium
6. BP101T_Unit2_Joints.pdf - Synovial joint architecture, 6 classifications, arthritis
7. BP201T_Unit2_Digestive_System.pdf - GI wall histology, parietal cell HCl proton pump, liver & bile

HOW TO USE:
- Print or read on any tablet, phone, or laptop.
- Use 10-mark answers directly for university exams (RGUHS, AKTU, PTU, KUHS, GTU, RUHS).
- Best of luck in your B. Pharmacy examinations!
`;
  folder?.file('README_HAP_UNIT_2_INSTRUCTIONS.txt', readmeText);

  // 6. Zip packaging
  onProgress?.(total, total, 'Compressing ZIP archive for download...');
  const content = await zip.generateAsync({ type: 'blob' });

  // Download trigger
  const link = document.createElement('a');
  link.href = URL.createObjectURL(content);
  link.download = 'B_Pharm_HAP_Unit_2_All_Notes_PCI_Complete_Package.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};
