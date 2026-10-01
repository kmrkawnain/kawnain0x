import { GoogleGenAI } from '@google/genai';

// Initialize the GoogleGenAI instance safely
let aiClient: GoogleGenAI | null = null;
try {
  const apiKey = (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) ||
                 (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) ||
                 '';
  if (apiKey) {
    aiClient = new GoogleGenAI({ apiKey });
  } else {
    aiClient = new GoogleGenAI();
  }
} catch {
  aiClient = null;
}

export interface BotChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const FALLBACK_ANSWERS: Record<string, string> = {
  'haversian': `**The Microscopic Structure of Compact Bone (Osteon / Haversian System):**
1. **Central (Haversian) Canal**: Runs longitudinally through the osteon; contains capillary blood vessels, venules, lymphatics, and nerve fibers.
2. **Concentric Lamellae**: 4 to 20 rings of calcified extracellular matrix arranged concentrically around the central canal. Alternating collagen fiber orientations resist torsion and twisting stresses.
3. **Lacunae**: Small oval cavities between lamellae housing osteocytes (mature bone cells).
4. **Canaliculi**: Minute radiating fluid-filled canals containing osteocyte dendritic processes. Connected by gap junctions for nutrient/waste transfer.
5. **Volkmann's (Perforating) Canals**: Transverse channels connecting periosteal blood vessels with central canals and medullary cavity.

*Exam Tip:* Draw concentric circles around a central circle, mark spider-like osteocytes inside lacunae with radiating hair-like canaliculi!`,

  'skin': `**The 5 Layers of Epidermis (Superficial to Deep):**
*Mnemonic:* **C**ome, **L**et's **G**et **S**un **B**urned
1. **Stratum Corneum**: 25-30 layers of dead, anucleate, flattened corneocytes filled with keratin and intercellular lipids (waterproof barrier).
2. **Stratum Lucidum**: 4-6 layers of flat, clear dead cells with eleidin (present *only* in thick skin of palms and soles).
3. **Stratum Granulosum**: 3-5 layers of apoptotic keratinocytes with keratohyalin granules and lamellar granules (lipid sealant).
4. **Stratum Spinosum**: 8-10 layers of prickle cells connected by desmosomes; houses immune *Langerhans cells*.
5. **Stratum Basale (Germinativum)**: Single row of actively dividing stem cells, *Melanocytes* (melanin pigment), and *Merkel cells* (touch).`,

  'hcl': `**Mechanism of HCl Secretion by Gastric Parietal Cells:**
1. **CO2 Hydration:** Metabolic CO2 combines with H2O in parietal cell cytoplasm, catalyzed by *Carbonic Anhydrase (CA)*:
   CO2 + H2O <-> H2CO3 <-> H+ + HCO3-
2. **Proton Pumping:** H+ is actively extruded into gastric lumen across apical membrane by the **H+/K+ ATPase (Proton Pump)**, exchanging 1 H+ for 1 K+ with ATP consumption.
3. **Chloride Secretion:** The intracellular HCO3- is exchanged for blood Cl- via basolateral HCO3-/Cl- antiporter (creating the post-meal *alkaline tide*). Cl- diffuses into lumen via apical chloride channels.
4. **Formation:** H+ and Cl- combine in the gastric lumen to form hydrochloric acid (pH 1.5 - 2.0).

*Pharmacology Link:* Proton Pump Inhibitors (Omeprazole, Pantoprazole) irreversibly block H+/K+ ATPase, curing peptic ulcers and GERD.`,

  'joints': `**Classification of Synovial Joints (6 Types with Examples):**
1. **Planar (Gliding):** Intercarpal and intertarsal joints.
2. **Hinge:** Elbow joint (trochlea of humerus + trochlear notch of ulna) and knee.
3. **Pivot:** Atlanto-axial joint (dens of C2 in ring of C1, head rotation "no").
4. **Condyloid (Ellipsoidal):** Radiocarpal joint (wrist) and metacarpophalangeal joints.
5. **Saddle:** 1st Carpometacarpal joint of the thumb (trapezium + 1st metacarpal).
6. **Ball and Socket:** Glenohumeral (shoulder) and hip joints.`
};

export const askHapBot = async (
  query: string,
  history: BotChatMessage[] = []
): Promise<string> => {
  const lowerQuery = query.toLowerCase();

  // Try real Gemini API if client exists
  if (aiClient) {
    try {
      const systemInstruction = `You are "PharmBot", an expert academic teaching assistant and download bot specialized EXCLUSIVELY in Human Anatomy and Physiology (HAP / HAPP) Unit 2 for B. Pharmacy under the Pharmacy Council of India (PCI) new syllabus.
Unit 2 strictly covers:
1. Integumentary System (Skin anatomy, epidermal layers, dermis, sweat/sebaceous glands, melanogenesis, thermoregulation, wound healing, Rule of Nines).
2. Skeletal System & Bone Histology (206 bones axial/appendicular, long bone structure, Osteon / Haversian system, bone cells, intramembranous & endochondral ossification, calcium regulation PTH/Calcitonin).
3. Joints / Articulations (Fibrous, cartilaginous, synovial joints, 6 types of synovial joints, synovial fluid, arthritis OA vs RA vs Gout).
4. Digestive System (HAP-II Unit 2: GI tract wall 4 layers, gastric glands, cellular mechanism of HCl secretion by parietal cells via H+/K+ ATPase, liver/gallbladder/bile, pancreatic enzymes, digestion/absorption).

Provide structured, high-scoring answers formatted with:
- Clear headings and bullet points
- 2-mark definitions, 5-mark short answers, or 10-mark essay structures
- Highlighted pharmaceutical and clinical relevance (e.g. transdermal drug absorption, PPI mechanism, osteoporosis drugs, arthritis drugs)
- Memory mnemonics wherever helpful
Be concise, authoritative, and encouraging.`;

      const response = await aiClient.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question regarding HAP Unit 2: ${query}` }] }
        ],
      });

      if (response && response.text) {
        return response.text;
      }
    } catch {
      // Fall through to curated responses
    }
  }

  // Curated knowledge match fallback
  for (const [key, answer] of Object.entries(FALLBACK_ANSWERS)) {
    if (lowerQuery.includes(key)) {
      return answer;
    }
  }

  if (lowerQuery.includes('bone') || lowerQuery.includes('skeleton') || lowerQuery.includes('206')) {
    return `**Human Skeleton (206 Bones Breakdown for PCI Exams):**
- **Axial Skeleton (80 Bones):**
  • Skull: Cranium (8), Facial bones (14), Auditory ossicles (6: Malleus, Incus, Stapes), Hyoid bone (1).
  • Vertebral Column (26): Cervical (7), Thoracic (12), Lumbar (5), Sacrum (1 fused), Coccyx (1 fused).
  • Thoracic cage (25): Sternum (1), Ribs (24: 7 true, 3 false, 2 floating pairs).
- **Appendicular Skeleton (126 Bones):**
  • Pectoral Girdle (4): Clavicles (2), Scapulae (2).
  • Upper Limbs (60): Humerus (2), Radius (2), Ulna (2), Carpals (16), Metacarpals (10), Phalanges (28).
  • Pelvic Girdle (2): Coxal/Hip bones (2).
  • Lower Limbs (60): Femur (2), Patella (2), Tibia (2), Fibula (2), Tarsals (14), Metatarsals (10), Phalanges (28).

*Total = 80 + 126 = 206 Bones.*`;
  }

  if (lowerQuery.includes('burn') || lowerQuery.includes('rule of 9') || lowerQuery.includes('nines')) {
    return `**Wallace Rule of Nines for Burn Assessment (Adult):**
- Head and Neck: **9%**
- Right Upper Limb: **9%**
- Left Upper Limb: **9%**
- Anterior Trunk (Chest & Abdomen): **18%**
- Posterior Trunk (Back & Buttocks): **18%**
- Right Lower Limb: **18%**
- Left Lower Limb: **18%**
- Perineum / Genitalia: **1%**
*Total = 100%*

**Clinical Use:** Used to calculate initial IV fluid resuscitation in burns via Parkland Formula:
**Volume = 4 mL x weight (kg) x % TBSA burned** (First half given in first 8 hours).`;
  }

  return `**HAP Unit II Key Concept Summary:**
HAP Unit II covers the **Integumentary System**, **Skeletal System & Bone Histology**, **Joints & Articulations** (BP101T), and the **Digestive System & Acid Secretion** (BP201T).

You can click any topic in the left menu to read detailed PCI notes, click **"Auto-Download All Notes"** to generate the official PDFs automatically, or ask me for:
- "Explain the Haversian system with diagram points"
- "Mechanism of HCl secretion by parietal cells"
- "5 layers of epidermis with mnemonic"
- "Difference between Osteoarthritis and Rheumatoid Arthritis"
- "Wallace Rule of Nines in burns"`;
};
