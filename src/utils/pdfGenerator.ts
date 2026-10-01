import { jsPDF } from 'jspdf';
import { UnitChapter, Flashcard } from '../types/syllabus';

interface PDFOptions {
  saveFile?: boolean;
}

export const generateChapterPDF = (chapter: UnitChapter, options: PDFOptions = { saveFile: true }): Blob => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageOverflow = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 18) {
      doc.addPage();
      y = margin;
      drawHeader();
    }
  };

  const drawHeader = () => {
    doc.setFillColor(15, 23, 42); // slate-900
    doc.rect(0, 0, pageWidth, 12, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text('PHARMACY COUNCIL OF INDIA (PCI) - B. PHARM NEW SYLLABUS NOTES', margin, 8);
    doc.setFont('helvetica', 'normal');
    doc.text(`${chapter.subjectCode} - UNIT II`, pageWidth - margin, 8, { align: 'right' });
    y = Math.max(y, 20);
  };

  // First page banner
  drawHeader();

  // Badge / Semester Tag
  doc.setFillColor(30, 64, 175); // blue-800
  doc.roundedRect(margin, y, 50, 6, 1.5, 1.5, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text(`PCI B.PHARM ${chapter.semester.toUpperCase()}`, margin + 3, y + 4.2);

  doc.setFillColor(243, 244, 246);
  doc.roundedRect(margin + 54, y, 45, 6, 1.5, 1.5, 'F');
  doc.setTextColor(55, 65, 81);
  doc.text(`Exam Weight: ${chapter.pciWeightage}`, margin + 57, y + 4.2);
  y += 11;

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42);
  const titleLines = doc.splitTextToSize(chapter.title, contentWidth);
  doc.text(titleLines, margin, y);
  y += titleLines.length * 7 + 2;

  // Subtitle / Subject Info
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`${chapter.subjectName} (${chapter.subjectCode}) | Unit II Complete Notes`, margin, y);
  y += 7;

  // Divider
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 7;

  // Summary Box
  doc.setFillColor(240, 249, 255); // sky-50
  doc.setDrawColor(186, 230, 253); // sky-200
  const summaryLines = doc.splitTextToSize(`CHAPTER OVERVIEW: ${chapter.summary}`, contentWidth - 8);
  const summaryBoxHeight = summaryLines.length * 4.5 + 8;
  doc.roundedRect(margin, y, contentWidth, summaryBoxHeight, 2, 2, 'FD');
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(12, 74, 110); // sky-900
  doc.text(summaryLines, margin + 4, y + 6);
  y += summaryBoxHeight + 8;

  // Sections
  chapter.sections.forEach((section) => {
    checkPageOverflow(25);

    // Section title
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(margin, y - 2, contentWidth, 8, 1, 1, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(section.title, margin + 3, y + 3.5);
    y += 12;

    // Content paragraphs
    section.content.forEach((paragraph) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(30, 41, 59);
      const textLines = doc.splitTextToSize(paragraph, contentWidth);
      checkPageOverflow(textLines.length * 4.5 + 4);
      doc.text(textLines, margin, y);
      y += textLines.length * 4.5 + 4;
    });

    // Key points callout if present
    if (section.keyPoints && section.keyPoints.length > 0) {
      checkPageOverflow(section.keyPoints.length * 5 + 10);
      doc.setFillColor(254, 243, 199); // amber-100
      doc.setDrawColor(251, 191, 36); // amber-400
      let keyPointsText = 'KEY EXAM REVISION POINTS:\n';
      section.keyPoints.forEach((kp) => {
        keyPointsText += `• ${kp}\n`;
      });
      const kpLines = doc.splitTextToSize(keyPointsText.trim(), contentWidth - 8);
      const boxH = kpLines.length * 4.5 + 6;
      doc.roundedRect(margin, y, contentWidth, boxH, 1.5, 1.5, 'FD');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(120, 53, 15);
      doc.text(kpLines, margin + 4, y + 5);
      y += boxH + 6;
    }

    // Clinical / Pharmacy Relevance Box
    if (section.clinicalCorrelations && section.clinicalCorrelations.length > 0) {
      checkPageOverflow(section.clinicalCorrelations.length * 5 + 10);
      doc.setFillColor(240, 253, 244); // emerald-50
      doc.setDrawColor(187, 247, 208); // emerald-200
      let clinicText = 'CLINICAL & PHARMACEUTICAL RELEVANCE:\n';
      section.clinicalCorrelations.forEach((cc) => {
        clinicText += `• ${cc}\n`;
      });
      const cLines = doc.splitTextToSize(clinicText.trim(), contentWidth - 8);
      const boxH = cLines.length * 4.5 + 6;
      doc.roundedRect(margin, y, contentWidth, boxH, 1.5, 1.5, 'FD');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(6, 78, 59);
      doc.text(cLines, margin + 4, y + 5);
      y += boxH + 6;
    }

    // Table Data
    if (section.tableData) {
      checkPageOverflow(section.tableData.rows.length * 8 + 15);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setFillColor(226, 232, 240);
      doc.rect(margin, y, contentWidth, 7, 'F');
      
      const colWidth = contentWidth / section.tableData.headers.length;
      section.tableData.headers.forEach((h, idx) => {
        doc.setTextColor(15, 23, 42);
        doc.text(h, margin + idx * colWidth + 2, y + 4.8);
      });
      y += 7;

      section.tableData.rows.forEach((row, rIdx) => {
        checkPageOverflow(8);
        doc.setFillColor(rIdx % 2 === 0 ? 255 : 248, rIdx % 2 === 0 ? 255 : 250, rIdx % 2 === 0 ? 255 : 252);
        doc.rect(margin, y, contentWidth, 7, 'F');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(51, 65, 85);
        row.forEach((cell, cIdx) => {
          const truncated = doc.splitTextToSize(cell, colWidth - 4)[0] || '';
          doc.text(truncated, margin + cIdx * colWidth + 2, y + 4.8);
        });
        y += 7;
      });
      y += 5;
    }

    y += 4;
  });

  // Solved Questions Section
  checkPageOverflow(30);
  doc.setFillColor(79, 70, 229); // indigo-600
  doc.rect(margin, y, contentWidth, 7, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text(`SOLVED PCI EXAM QUESTIONS - ${chapter.unit}`, margin + 3, y + 4.8);
  y += 12;

  chapter.frequentlyAskedQuestions.forEach((faq, index) => {
    checkPageOverflow(30);
    // Question header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(17, 24, 39);
    const qText = `Q${index + 1} [${faq.marks} Marks] (${faq.frequentlyRepeatedIn}): ${faq.question}`;
    const qLines = doc.splitTextToSize(qText, contentWidth);
    doc.text(qLines, margin, y);
    y += qLines.length * 4.5 + 2;

    // Answer
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(55, 65, 81);
    const ansText = `Answer: ${faq.answer}`;
    const ansLines = doc.splitTextToSize(ansText, contentWidth - 4);
    checkPageOverflow(ansLines.length * 4.2 + 6);
    doc.text(ansLines, margin + 4, y);
    y += ansLines.length * 4.2 + 6;
  });

  // Footer for all pages
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text('PharmBot - B. Pharmacy HAP Unit 2 Automated Notes | Aligned with PCI Syllabus', margin, pageHeight - 7);
    doc.text(`Page ${p} of ${totalPages}`, pageWidth - margin, pageHeight - 7, { align: 'right' });
  }

  const filename = `${chapter.subjectCode}_Unit2_${chapter.title.replace(/[^a-zA-Z0-9]/g, '_')}_Notes.pdf`;
  if (options.saveFile) {
    doc.save(filename);
  }
  return doc.output('blob');
};

export const generateAllUnit2MasterPDF = (chapters: UnitChapter[], options: PDFOptions = { saveFile: true }): Blob => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageOverflow = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 18) {
      doc.addPage();
      y = margin;
      drawHeader();
    }
  };

  const drawHeader = () => {
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, pageWidth, 12, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text('B. PHARMACY PCI NEW SYLLABUS - HUMAN ANATOMY & PHYSIOLOGY (HAPP)', margin, 8);
    doc.setFont('helvetica', 'normal');
    doc.text('UNIT II COMPLETE COMPILATION', pageWidth - margin, 8, { align: 'right' });
    y = Math.max(y, 20);
  };

  // FRONT COVER PAGE
  doc.setFillColor(15, 23, 42); // Dark Navy
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative Accent Bar
  doc.setFillColor(37, 99, 235); // Blue
  doc.rect(margin, 35, 12, 4, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(147, 197, 253);
  doc.text('PHARMACY COUNCIL OF INDIA (PCI) NEW CURRICULUM', margin, 50);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(255, 255, 255);
  doc.text('HUMAN ANATOMY\n& PHYSIOLOGY (HAPP)', margin, 65);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(96, 165, 250);
  doc.text('COMPLETE UNIT II ALL NOTES & MODEL ANSWERS', margin, 92);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(203, 213, 225);
  const coverPoints = [
    '• Part A: Integumentary System (Skin layers, appendages, wound healing, burns)',
    '• Part B: Skeletal System (206 bones, Haversian system, bone cells, ossification, Ca2+ balance)',
    '• Part C: Joints & Articulations (Classification, Synovial joints, arthritis, movements)',
    '• Part D: Digestive System (GI wall histology, Parietal cell HCl pump, Liver & Bile)',
    '• Complete 10-Marks Essays, 5-Marks Short Notes, and 2-Marks Compulsory Definitions'
  ];
  let coverY = 115;
  coverPoints.forEach((pt) => {
    doc.text(pt, margin, coverY);
    coverY += 9;
  });

  // Box at bottom of cover
  doc.setFillColor(30, 41, 59);
  doc.roundedRect(margin, pageHeight - 50, contentWidth, 30, 3, 3, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(248, 250, 252);
  doc.text('Verified Academic Standard for Semester Examinations & GPAT Preparation', margin + 6, pageHeight - 38);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text(`Auto-Generated via PharmBot • Date of Generation: ${new Date().toLocaleDateString()}`, margin + 6, pageHeight - 27);

  // START NOTES BODY ON PAGE 2
  doc.addPage();
  y = margin;
  drawHeader();

  chapters.forEach((chapter) => {
    checkPageOverflow(30);

    // Chapter Header
    doc.setFillColor(30, 58, 138); // blue-900
    doc.rect(margin, y, contentWidth, 9, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(255, 255, 255);
    doc.text(`${chapter.unit}: ${chapter.title.toUpperCase()}`, margin + 3, y + 6);
    y += 14;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    const sumLines = doc.splitTextToSize(chapter.summary, contentWidth);
    doc.text(sumLines, margin, y);
    y += sumLines.length * 4.5 + 6;

    // Sections
    chapter.sections.forEach((sec) => {
      checkPageOverflow(20);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(15, 23, 42);
      doc.text(sec.title, margin, y);
      y += 6;

      sec.content.forEach((para) => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(30, 41, 59);
        const pLines = doc.splitTextToSize(para, contentWidth);
        checkPageOverflow(pLines.length * 4.2 + 3);
        doc.text(pLines, margin, y);
        y += pLines.length * 4.2 + 3;
      });

      if (sec.keyPoints && sec.keyPoints.length > 0) {
        checkPageOverflow(sec.keyPoints.length * 4.5 + 8);
        doc.setFillColor(254, 243, 199);
        doc.setDrawColor(251, 191, 36);
        let kpStr = 'Key Highlights:\n';
        sec.keyPoints.forEach((k) => (kpStr += `• ${k}\n`));
        const kpLines = doc.splitTextToSize(kpStr.trim(), contentWidth - 6);
        const bH = kpLines.length * 4 + 4;
        doc.roundedRect(margin, y, contentWidth, bH, 1, 1, 'FD');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(146, 64, 14);
        doc.text(kpLines, margin + 3, y + 4);
        y += bH + 5;
      }
      y += 3;
    });

    // FAQs
    checkPageOverflow(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(67, 56, 202);
    doc.text(`Important PCI Questions for ${chapter.title}:`, margin, y);
    y += 6;

    chapter.frequentlyAskedQuestions.forEach((faq, fIdx) => {
      checkPageOverflow(20);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(17, 24, 39);
      const qText = `${fIdx + 1}. [${faq.marks} Marks] ${faq.question}`;
      const qLines = doc.splitTextToSize(qText, contentWidth);
      doc.text(qLines, margin, y);
      y += qLines.length * 4.2 + 1.5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(75, 85, 99);
      const ansLines = doc.splitTextToSize(`Ans: ${faq.answer}`, contentWidth - 4);
      checkPageOverflow(ansLines.length * 4 + 4);
      doc.text(ansLines, margin + 4, y);
      y += ansLines.length * 4 + 4;
    });

    y += 8;
  });

  // Footer for all pages
  const totalPages = doc.getNumberOfPages();
  for (let p = 2; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text('B. Pharm HAP Unit 2 Automated Notes Master Handbook', margin, pageHeight - 7);
    doc.text(`Page ${p} of ${totalPages}`, pageWidth - margin, pageHeight - 7, { align: 'right' });
  }

  const filename = `B_Pharm_HAP_UNIT_2_MASTER_NOTES_PCI_ALL.pdf`;
  if (options.saveFile) {
    doc.save(filename);
  }
  return doc.output('blob');
};

export const generateQuestionBankPDF = (chapters: UnitChapter[], options: PDFOptions = { saveFile: true }): Blob => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageOverflow = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 18) {
      doc.addPage();
      y = margin;
      drawHeader();
    }
  };

  const drawHeader = () => {
    doc.setFillColor(17, 24, 39);
    doc.rect(0, 0, pageWidth, 12, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text('HAP UNIT II QUESTION BANK & MODEL ANSWERS (PCI SYLLABUS)', margin, 8);
    y = Math.max(y, 20);
  };

  drawHeader();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(17, 24, 39);
  doc.text('HAP Unit II Solved Question Bank', margin, y);
  y += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(75, 85, 99);
  doc.text('Curated 10-Marks Long Essays, 5-Marks Short Notes, and 2-Marks Definitions', margin, y);
  y += 9;

  chapters.forEach((chapter) => {
    checkPageOverflow(20);
    doc.setFillColor(243, 244, 246);
    doc.rect(margin, y, contentWidth, 7, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(31, 41, 55);
    doc.text(`${chapter.title} (${chapter.subjectCode})`, margin + 3, y + 4.8);
    y += 11;

    chapter.frequentlyAskedQuestions.forEach((faq, idx) => {
      checkPageOverflow(25);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(30, 58, 138);
      const qText = `Q${idx + 1} [${faq.marks} MARKS] (${faq.frequentlyRepeatedIn}): ${faq.question}`;
      const qLines = doc.splitTextToSize(qText, contentWidth);
      doc.text(qLines, margin, y);
      y += qLines.length * 4.5 + 2;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(31, 41, 55);
      const ansLines = doc.splitTextToSize(`Model Answer: ${faq.answer}`, contentWidth - 4);
      checkPageOverflow(ansLines.length * 4.2 + 5);
      doc.text(ansLines, margin + 4, y);
      y += ansLines.length * 4.2 + 6;
    });
    y += 4;
  });

  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(156, 163, 175);
    doc.text(`Page ${p} of ${totalPages}`, pageWidth - margin, pageHeight - 7, { align: 'right' });
  }

  const filename = `HAP_Unit2_Solved_Question_Bank_PCI.pdf`;
  if (options.saveFile) {
    doc.save(filename);
  }
  return doc.output('blob');
};

export const generateFlashcardsPDF = (flashcards: Flashcard[], options: PDFOptions = { saveFile: true }): Blob => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageOverflow = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 18) {
      doc.addPage();
      y = margin;
      drawHeader();
    }
  };

  const drawHeader = () => {
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, pageWidth, 12, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text('HAP UNIT II RAPID REVISION FLASHCARDS & MNEMONICS', margin, 8);
    y = Math.max(y, 20);
  };

  drawHeader();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(17, 24, 39);
  doc.text('HAP Unit II Rapid Revision Cards & Mnemonics', margin, y);
  y += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(75, 85, 99);
  doc.text('Essential 2-Mark questions, definitions, formulas & memory tricks for quick recall', margin, y);
  y += 10;

  flashcards.forEach((card, idx) => {
    checkPageOverflow(30);

    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(203, 213, 225);
    
    let textBlock = `Card #${idx + 1} [${card.category}] (${card.marks} Marks)\nQ: ${card.question}\nA: ${card.answer}`;
    if (card.mnemonic) {
      textBlock += `\nMemory Mnemonic: ${card.mnemonic}`;
    }
    const lines = doc.splitTextToSize(textBlock, contentWidth - 8);
    const boxHeight = lines.length * 4.5 + 8;

    doc.roundedRect(margin, y, contentWidth, boxHeight, 2, 2, 'FD');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(lines, margin + 4, y + 6);
    y += boxHeight + 5;
  });

  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(156, 163, 175);
    doc.text(`Page ${p} of ${totalPages}`, pageWidth - margin, pageHeight - 7, { align: 'right' });
  }

  const filename = `HAP_Unit2_Flashcards_Mnemonics_PCI.pdf`;
  if (options.saveFile) {
    doc.save(filename);
  }
  return doc.output('blob');
};
