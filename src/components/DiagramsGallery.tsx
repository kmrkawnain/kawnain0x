import React, { useState } from 'react';
import { Eye, Info, Check, Sparkles, Layers } from 'lucide-react';

interface DiagramItem {
  id: string;
  title: string;
  topic: string;
  subjectCode: string;
  examMarks: string;
  description: string;
  examTips: string[];
}

export const DiagramsGallery: React.FC = () => {
  const [activeDiagram, setActiveDiagram] = useState<string>('skin-layers');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 uppercase tracking-wider">
          Must-Practice Diagram Handbooks
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          HAP Unit II High-Yield Examination Diagrams
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          In B. Pharmacy examinations, accurate labeled schematics carry 40-50% of the total question marks. Practice these standard schematic diagrams.
        </p>
      </div>

      {/* Diagram Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setActiveDiagram('skin-layers')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeDiagram === 'skin-layers'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          1. Skin & Epidermal Strata
        </button>

        <button
          onClick={() => setActiveDiagram('osteon-haversian')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeDiagram === 'osteon-haversian'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          2. Compact Bone Osteon / Haversian System
        </button>

        <button
          onClick={() => setActiveDiagram('synovial-joint')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeDiagram === 'synovial-joint'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          3. Architecture of a Synovial Joint
        </button>

        <button
          onClick={() => setActiveDiagram('parietal-hcl')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeDiagram === 'parietal-hcl'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          4. Parietal Cell HCl Secretion (Proton Pump)
        </button>
      </div>

      {/* Main Diagram Viewer */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* SVG Diagram Canvas */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 flex flex-col items-center justify-center text-white border border-slate-800 shadow-inner min-h-[380px]">
          
          {activeDiagram === 'skin-layers' && (
            <div className="w-full flex flex-col items-center">
              <div className="text-xs text-blue-400 font-mono mb-4 text-center">
                FIG: STRATIFIED EPIDERMAL LAYERS (SUPERFICIAL TO DEEP)
              </div>
              <svg className="w-full max-w-md h-72" viewBox="0 0 400 240">
                {/* Stratum Corneum */}
                <rect x="50" y="20" width="300" height="32" rx="4" fill="#f59e0b" opacity="0.8" />
                <text x="200" y="40" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
                  1. Stratum Corneum (Dead Corneocytes & Keratin)
                </text>

                {/* Stratum Lucidum */}
                <rect x="50" y="58" width="300" height="24" rx="3" fill="#fbbf24" opacity="0.6" />
                <text x="200" y="74" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">
                  2. Stratum Lucidum (Eleidin - Thick Skin Palms/Soles)
                </text>

                {/* Stratum Granulosum */}
                <rect x="50" y="88" width="300" height="28" rx="3" fill="#10b981" opacity="0.7" />
                <text x="200" y="106" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                  3. Stratum Granulosum (Keratohyalin Granules)
                </text>

                {/* Stratum Spinosum */}
                <rect x="50" y="122" width="300" height="42" rx="3" fill="#3b82f6" opacity="0.7" />
                <text x="200" y="146" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                  4. Stratum Spinosum (Desmosomes & Langerhans Cells)
                </text>

                {/* Stratum Basale */}
                <rect x="50" y="170" width="300" height="26" rx="3" fill="#6366f1" opacity="0.85" />
                <text x="200" y="187" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                  5. Stratum Basale (Mitotic Stem Cells & Melanocytes)
                </text>

                {/* Basement membrane line */}
                <line x1="40" y1="202" x2="360" y2="202" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
                <text x="200" y="218" textAnchor="middle" fill="#f87171" fontSize="9">
                  Basement Membrane / Dermal-Epidermal Junction
                </text>
              </svg>
            </div>
          )}

          {activeDiagram === 'osteon-haversian' && (
            <div className="w-full flex flex-col items-center">
              <div className="text-xs text-blue-400 font-mono mb-4 text-center">
                FIG: CROSS-SECTION OF AN OSTEON (HAVERSIAN SYSTEM)
              </div>
              <svg className="w-full max-w-md h-72" viewBox="0 0 300 240">
                {/* Concentric Lamellae Rings */}
                <circle cx="150" cy="120" r="100" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="150" cy="120" r="80" fill="none" stroke="#64748b" strokeWidth="2" />
                <circle cx="150" cy="120" r="58" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
                <circle cx="150" cy="120" r="36" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                
                {/* Central Haversian Canal */}
                <circle cx="150" cy="120" r="20" fill="#dc2626" opacity="0.8" />
                <circle cx="145" cy="116" r="6" fill="#3b82f6" />
                <circle cx="155" cy="124" r="5" fill="#eab308" />
                <text x="150" y="123" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="bold">
                  Haversian Canal
                </text>

                {/* Osteocytes in Lacunae with Canaliculi */}
                <circle cx="110" cy="80" r="4" fill="#10b981" />
                <circle cx="190" cy="80" r="4" fill="#10b981" />
                <circle cx="150" cy="62" r="4" fill="#10b981" />
                <circle cx="150" cy="178" r="4" fill="#10b981" />
                <circle cx="95" cy="135" r="4" fill="#10b981" />
                <circle cx="205" cy="135" r="4" fill="#10b981" />

                {/* Labels */}
                <text x="50" y="30" fill="#38bdf8" fontSize="9">← Concentric Lamellae</text>
                <text x="210" y="75" fill="#34d399" fontSize="9">← Lacuna with Osteocyte</text>
                <text x="150" y="230" textAnchor="middle" fill="#94a3b8" fontSize="8.5">
                  Radiating hair-like lines = Canaliculi (Gap Junctions)
                </text>
              </svg>
            </div>
          )}

          {activeDiagram === 'synovial-joint' && (
            <div className="w-full flex flex-col items-center">
              <div className="text-xs text-blue-400 font-mono mb-4 text-center">
                FIG: ANATOMICAL STRUCTURE OF A SYNOVIAL JOINT
              </div>
              <svg className="w-full max-w-md h-72" viewBox="0 0 320 240">
                {/* Upper Bone Epiphysis */}
                <path d="M 120 10 L 200 10 L 200 50 Q 200 75 160 75 Q 120 75 120 50 Z" fill="#64748b" />
                {/* Upper Articular Cartilage */}
                <path d="M 120 50 Q 120 75 160 75 Q 200 75 200 50 Q 200 80 160 80 Q 120 80 120 50 Z" fill="#38bdf8" />

                {/* Joint Cavity / Synovial Fluid */}
                <ellipse cx="160" cy="95" rx="55" ry="12" fill="#0284c7" opacity="0.3" stroke="#38bdf8" strokeDasharray="3 2" />
                <text x="160" y="99" textAnchor="middle" fill="#bae6fd" fontSize="9" fontWeight="bold">
                  Synovial Fluid in Joint Cavity
                </text>

                {/* Lower Articular Cartilage */}
                <path d="M 120 140 Q 120 115 160 115 Q 200 115 200 140 Q 200 110 160 110 Q 120 110 120 140 Z" fill="#38bdf8" />
                {/* Lower Bone Epiphysis */}
                <path d="M 120 140 Q 120 115 160 115 Q 200 115 200 140 L 200 210 L 120 210 Z" fill="#64748b" />

                {/* Fibrous Capsule and Synovial Membrane */}
                <path d="M 115 50 Q 80 95 115 140" fill="none" stroke="#f59e0b" strokeWidth="4" />
                <path d="M 120 60 Q 95 95 120 130" fill="none" stroke="#ef4444" strokeWidth="2.5" />

                <path d="M 205 50 Q 240 95 205 140" fill="none" stroke="#f59e0b" strokeWidth="4" />
                <path d="M 200 60 Q 225 95 200 130" fill="none" stroke="#ef4444" strokeWidth="2.5" />

                {/* Callout markers */}
                <text x="30" y="95" fill="#f59e0b" fontSize="9">Fibrous Capsule</text>
                <text x="235" y="95" fill="#ef4444" fontSize="9">Synovial Membrane</text>
                <text x="210" y="45" fill="#38bdf8" fontSize="8.5">Articular Cartilage</text>
              </svg>
            </div>
          )}

          {activeDiagram === 'parietal-hcl' && (
            <div className="w-full flex flex-col items-center">
              <div className="text-xs text-blue-400 font-mono mb-4 text-center">
                FIG: PARIETAL CELL HCL SECRETION & PROTON PUMP
              </div>
              <svg className="w-full max-w-md h-72" viewBox="0 0 340 240">
                {/* Parietal Cell Membrane Box */}
                <rect x="70" y="20" width="200" height="200" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                <text x="170" y="38" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">
                  Parietal Cell Cytoplasm
                </text>

                {/* CO2 + H2O Reaction */}
                <text x="170" y="65" textAnchor="middle" fill="#f8fafc" fontSize="9">
                  CO₂ + H₂O ↔ H₂CO₃ (via Carbonic Anhydrase)
                </text>
                <text x="170" y="85" textAnchor="middle" fill="#fbbf24" fontSize="9">
                  H₂CO₃ ↔ H⁺ + HCO₃⁻
                </text>

                {/* Apical Membrane (Gastric Lumen Side - Left) */}
                <rect x="62" y="105" width="16" height="34" rx="2" fill="#ef4444" />
                <text x="70" y="126" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="bold">H+/K+</text>
                
                {/* H+ out, K+ in */}
                <text x="20" y="115" fill="#ef4444" fontSize="9" fontWeight="bold">H⁺ ➔</text>
                <text x="20" y="135" fill="#22c55e" fontSize="9" fontWeight="bold">⬅ K⁺</text>

                {/* Basolateral Membrane (Capillary Blood Side - Right) */}
                <rect x="262" y="105" width="16" height="34" rx="2" fill="#8b5cf6" />
                <text x="270" y="126" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="bold">Cl/HCO3</text>
                
                <text x="290" y="115" fill="#38bdf8" fontSize="9" fontWeight="bold">➔ HCO₃⁻</text>
                <text x="290" y="135" fill="#f59e0b" fontSize="9" fontWeight="bold">⬅ Cl⁻</text>

                {/* Cl- channel apical */}
                <rect x="62" y="160" width="16" height="24" rx="2" fill="#f59e0b" />
                <text x="20" y="175" fill="#f59e0b" fontSize="9" fontWeight="bold">Cl⁻ ➔</text>

                {/* Gastric Lumen result */}
                <rect x="10" y="195" width="60" height="25" rx="3" fill="#dc2626" opacity="0.2" />
                <text x="40" y="212" textAnchor="middle" fill="#f87171" fontSize="9" fontWeight="bold">
                  HCl in Lumen
                </text>
              </svg>
            </div>
          )}

        </div>

        {/* Diagram Details & Exam Tips */}
        <div className="lg:col-span-5 space-y-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
              EXAM MARKING CRITERIA
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              {activeDiagram === 'skin-layers' && 'Layers of Epidermis (5 Strata)'}
              {activeDiagram === 'osteon-haversian' && 'Haversian System (Osteon) of Compact Bone'}
              {activeDiagram === 'synovial-joint' && 'Typical Synovial Joint Articulation'}
              {activeDiagram === 'parietal-hcl' && 'Parietal Cell HCl Secretion Mechanism'}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {activeDiagram === 'skin-layers' &&
              'Frequently asked as a 5-mark diagram or compulsory section of 10-mark essay on skin structure. Must show all 5 strata with cellular morphology from columnar basal cells to flattened corneocytes.'}
            {activeDiagram === 'osteon-haversian' &&
              'Repeated in almost every university examination. Evaluators look for concentric circles (lamellae), center canal (Haversian canal with vessels), spider-like osteocytes inside lacunae, and micro-canals (canaliculi).'}
            {activeDiagram === 'synovial-joint' &&
              'Essential diagram for joints. The double-layered capsule (outer fibrous, inner synovial membrane), synovial fluid cavity, and articular cartilage must be distinctively labeled.'}
            {activeDiagram === 'parietal-hcl' &&
              'High-yield 5-mark and 10-mark physiology question in HAP-II. Evaluators award full marks for drawing the H+/K+ ATPase proton pump, Carbonic Anhydrase equation, and the basolateral chloride-bicarbonate exchanger.'}
          </p>

          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs space-y-2">
            <div className="font-bold text-amber-900 flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Exam Drawing Tips:</span>
            </div>
            <ul className="space-y-1.5 text-amber-800 pl-4 list-disc">
              <li>Always use a sharp pencil and draw a clear boundary frame.</li>
              <li>Keep all label lines parallel and on one side (preferably right side).</li>
              <li>Underline histological terms (e.g., *Stratum Corneum*, *Osteon*, *Proton Pump*).</li>
              <li>Write a neat figure title below the sketch with figure number.</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};
