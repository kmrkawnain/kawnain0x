import { UnitChapter, Flashcard } from '../types/syllabus';

export const HAP_UNIT_2_CHAPTERS: UnitChapter[] = [
  {
    id: 'hap1-integumentary',
    unit: 'Unit II (Part A)',
    semester: 'sem1',
    subjectCode: 'BP101T',
    subjectName: 'Human Anatomy and Physiology I',
    title: 'Integumentary System (Skin & Appendages)',
    estimatedPages: 8,
    readTime: '15 mins',
    pciWeightage: '8-10 Marks',
    summary: 'Detailed study of the cutaneous membrane, epidermal stratification, melanogenesis, dermal microvasculature, thermoregulatory mechanics, wound repair pathways, and pharmacy implications of transdermal drug delivery.',
    sections: [
      {
        id: 'skin-structure',
        title: '1. Microscopic Structure of Skin (Cutaneous Membrane)',
        content: [
          'The integumentary system comprises the skin (cutis) and accessory appendages (hair, nails, sebaceous, and sudoriferous glands). Covering approximately 1.5 - 2.0 m² with a mass of roughly 4-5 kg (16% of total body weight), it represents the largest organ.',
          'Structurally divided into two primary biological layers: the superficial Epidermis (keratinized stratified squamous epithelium, avascular) and the deeper Dermis (dense irregular and loose areolar connective tissue, highly vascular and innervated), supported inferiorly by the subcutaneous Hypodermis (adipose tissue).'
        ],
        keyPoints: [
          'Thickness varies from 0.5 mm on eyelids to 4.0 mm on palms and soles.',
          'Avascular epidermis derives nutrients via diffusion from dermal capillary loops in dermal papillae.',
          'Skin pH is slightly acidic (pH 4.5 - 5.5), termed the "acid mantle", inhibiting bacterial proliferation.'
        ],
        clinicalCorrelations: [
          'Transdermal Drug Delivery Systems (TDDS): Lipophilic drugs with molecular weight < 500 Da (e.g., Nitroglycerin, Nicotine, Fentanyl patches) penetrate stratum corneum via intercellular lipid pathways.',
          'Cyanosis: Blueness of skin indicates deoxyhemoglobin > 5 g/dL in arterial/capillary blood.',
          'Jaundice: Yellowing of sclera and skin due to bilirubin accumulation (> 2-3 mg/dL).'
        ]
      },
      {
        id: 'epidermal-layers',
        title: '2. The Five Layers of Epidermis (Deep to Superficial)',
        content: [
          'Thick skin (palms and soles) exhibits five distinct strata; thin skin lacks Stratum Lucidum and possesses a thinner corneum layer.',
          '1. Stratum Basale (Stratum Germinativum): Single layer of cuboidal/columnar stem cells attached to basement membrane by hemidesmosomes. High mitotic index. Contains Melanocytes (8%) synthesizing melanin and tactile Merkel cells for light touch.',
          '2. Stratum Spinosum (Prickle Cell Layer): 8-10 layers of polyhedral keratinocytes joined by prominent desmosomes (spine-like under microscope). Contains intraepidermal macrophages known as Langerhans cells (antigen-presenting immune cells).',
          '3. Stratum Granulosum: 3-5 layers of flattened keratinocytes undergoing programmed cell death (apoptosis). Contains dark keratohyalin granules (convert tonofilaments into keratin) and lamellar granules (extrude lipid-rich sealant creating the water-impermeable barrier).',
          '4. Stratum Lucidum: 4-6 layers of clear, flat, dead keratinocytes filled with eleidin (intermediate keratin precursor). Present ONLY in thick skin of palms, palmar surfaces, and soles.',
          '5. Stratum Corneum: 25-30 layers of dead, flattened, anucleated corneocytes completely packed with keratin protein embedded in lipid matrix (brick-and-mortar architecture). Continually shed via desquamation (~28-40 days turnover time).'
        ],
        keyPoints: [
          'Mnemonic for epidermal layers (Superficial to Deep): Come, Let\'s Get Sun Burned (Corneum, Lucidum, Granulosum, Spinosum, Basale).',
          'Keratinization process takes approximately 4 weeks from basal mitosis to surface shedding.',
          'Psoriasis is a hyperproliferative disorder where keratinocyte transit time is reduced to 3-5 days, causing silvery scaly plaques.'
        ],
        tableData: {
          headers: ['Epidermal Layer', 'Cell Layers', 'Key Cell Types & Features', 'Diagnostic Function'],
          rows: [
            ['Stratum Corneum', '25-30', 'Anucleate dead corneocytes + keratin + lipids', 'Waterproof barrier & physical defense'],
            ['Stratum Lucidum', '4-6', 'Dead flattened cells containing eleidin', 'Extra friction resistance (palms/soles only)'],
            ['Stratum Granulosum', '3-5', 'Degenerating cells with keratohyalin granules', 'Initiates keratinization & lipid secretion'],
            ['Stratum Spinosum', '8-10', 'Polyhedral keratinocytes + Langerhans cells', 'Mechanical strength (desmosomes) & immunity'],
            ['Stratum Basale', 'Single layer', 'Stem cells, Melanocytes, Merkel discs', 'Continuous mitosis & melanin synthesis']
          ]
        }
      },
      {
        id: 'dermis-and-appendages',
        title: '3. Dermis & Cutaneous Appendages',
        content: [
          'The Dermis consists of two anatomical zones: Papillary Region (superficial 20%, loose areolar connective tissue with collagen and fine elastic fibers, Meissner corpuscles for touch, free nerve endings for pain/temperature) and Reticular Region (deep 80%, dense irregular connective tissue with coarse collagen bundles providing tensile strength, Pacinian corpuscles for vibration/pressure).',
          'Glands of the Skin: (a) Sebaceous Glands: Holocrine glands opening into hair follicles, secrete Sebum (triglycerides, cholesterol, squalene) preventing hair brittleness and microbial invasion; (b) Sudoriferous (Sweat) Glands: Eccrine glands (merocrine secretion, water + NaCl + urea, distributed everywhere, primary thermoregulatory organ) vs Apocrine glands (axillary and anogenital regions, viscous milky secretion, broken down by skin bacteria producing body odor, active post-puberty); (c) Ceruminous glands (modified sweat glands in external acoustic meatus secreting cerumen/earwax).'
        ],
        keyPoints: [
          'Cleavage (Langer\'s) Lines: Parallel bundles of collagen in reticular dermis. Surgical incisions parallel to these lines heal with minimal scar formation.',
          'Arrector pili muscle: Smooth muscle bundle innervated by sympathetic nervous system; contraction pulls hair perpendicular creating "goosebumps" (piloerection) and compressing sebaceous glands.'
        ]
      },
      {
        id: 'thermoregulation-and-wounds',
        title: '4. Thermoregulation & Wound Healing Physiology',
        content: [
          'Thermoregulation by Skin: Under hyperthermic conditions, hypothalamus stimulates cutaneous vasodilation (blood vessels dilate, shunting up to 3 L/min blood to dermal plexus) allowing heat dissipation via radiation/convection, while eccrine sweat glands produce up to 1-2 L/hr of sweat for evaporative cooling. Under hypothermic conditions, sympathetic vasoconstriction restricts cutaneous perfusion, retaining central core heat.',
          'Wound Healing Mechanisms: (1) Epidermal Wound Healing (abrasions): Basal cells detach from basement membrane, enlarge and migrate across wound until contact inhibition stops migration; EGF (Epidermal Growth Factor) stimulates mitosis to restore multilayer thickness; (2) Deep Wound Healing: Four synchronized phases:',
          '  - Phase 1 (Inflammatory, 0-3 days): Hemostasis, platelet plug, fibrin clot formation, neutrophils and macrophages phagocytose bacteria and cellular debris.',
          '  - Phase 2 (Migratory, 3-7 days): Clot becomes a scab, fibroblasts migrate along fibrin threads synthesizing collagen fibers and hyaluronic acid; endothelial buds sprout creating Granulation tissue.',
          '  - Phase 3 (Proliferative, 1-3 weeks): Extensive deposition of collagen by fibroblasts, re-epithelialization beneath scab, vascular restoration.',
          '  - Phase 4 (Maturation / Remodeling, weeks to months): Scab sloughs off, collagen fibers reorganize along lines of stress, tensile strength increases (reaches ~80% of original intact skin).'
        ],
        clinicalCorrelations: [
          'Wallace Rule of Nines for Burn Assessment in Adults: Head & Neck = 9%, Each Upper Limb = 9% (x2 = 18%), Anterior Trunk = 18%, Posterior Trunk = 18%, Each Lower Limb = 18% (x2 = 36%), Perineum = 1%. Total = 100%. Critical for calculating intravenous fluid replacement via Parkland Formula (4 mL x kg body weight x % TBSA burned).',
          'Keloid and Hypertrophic Scars: Excessive collagen deposition by overactive fibroblasts extending beyond original wound boundaries.'
        ]
      }
    ],
    frequentlyAskedQuestions: [
      {
        marks: 10,
        question: 'Describe with a neat labeled diagram the structure and functions of skin. Explain in detail the various layers of epidermis.',
        frequentlyRepeatedIn: 'RGUHS 2023, AKTU 2022, PCI Model Paper',
        answer: 'STRUCTURE: Skin consists of Epidermis (stratified keratinized squamous) and Dermis (papillary + reticular). EPIDERMAL LAYERS: 1. Stratum basale (mitotic stem cells + melanocytes). 2. Stratum spinosum (desmosomes + Langerhans cells). 3. Stratum granulosum (keratohyalin + lamellar granules). 4. Stratum lucidum (eleidin, thick skin only). 5. Stratum corneum (25-30 layers keratinized corneocytes). FUNCTIONS: Physical protection against UV/microbes, Thermoregulation (vasodilation/sweating), Cutaneous sensation (Merkel, Meissner, Pacinian), Vitamin D3 synthesis (7-dehydrocholesterol conversion by UV), Excretion of urea/salts, Transdermal absorption.'
      },
      {
        marks: 5,
        question: 'Explain the Wallace Rule of Nines used in burn evaluation and write the stages of wound healing.',
        frequentlyRepeatedIn: 'PCI 2024, KUHS 2021',
        answer: 'RULE OF NINES: Divides total body surface area (TBSA) into multiples of 9%: Head & Neck (9%), Right Arm (9%), Left Arm (9%), Anterior Torso (18%), Posterior Torso (18%), Right Leg (18%), Left Leg (18%), Perineum/Genitalia (1%). Used for Parkland IV fluid resuscitation. WOUND HEALING STAGES: 1. Inflammatory phase (hemostasis, neutrophil/macrophage phagocytosis). 2. Migratory phase (fibroblast migration, granulation tissue). 3. Proliferative phase (collagen synthesis, epithelialization). 4. Maturation/Remodeling phase (collagen cross-linking, scar maturation).'
      },
      {
        marks: 2,
        question: 'Differentiate between Eccrine and Apocrine sweat glands.',
        frequentlyRepeatedIn: 'PCI 2023 2-Mark Compulsory',
        answer: 'Eccrine glands: Merocrine secretion of clear watery sweat (99% water + NaCl), active from birth, distributed all over body, functions in thermoregulation. Apocrine glands: Viscous milky secretion containing proteins and lipids, active after puberty, located in axillae, groin, and areolae; bacteria break down secretions producing characteristic odor.'
      },
      {
        marks: 2,
        question: 'What is the role of Langerhans cells in the skin?',
        frequentlyRepeatedIn: 'PCI 2022',
        answer: 'Langerhans cells are intraepidermal dendritic antigen-presenting cells residing in the Stratum Spinosum. They phagocytose microbial antigens, migrate to regional lymph nodes, and present processed antigens to T-lymphocytes to initiate adaptive immune responses.'
      }
    ]
  },
  {
    id: 'hap1-skeletal',
    unit: 'Unit II (Part B)',
    semester: 'sem1',
    subjectCode: 'BP101T',
    subjectName: 'Human Anatomy and Physiology I',
    title: 'Skeletal System & Bone Histology',
    estimatedPages: 10,
    readTime: '18 mins',
    pciWeightage: '10-12 Marks',
    summary: 'Comprehensive analysis of the 206 bones, axial versus appendicular divisions, microarchitecture of compact and spongy bone (Haversian system), osteogenesis pathways (intramembranous vs endochondral), and hormonal calcium homeostasis.',
    sections: [
      {
        id: 'skeletal-divisions',
        title: '1. Divisions of the Skeletal System (206 Adult Bones)',
        content: [
          'The human adult skeleton contains 206 named bones categorized into two major anatomical divisions:',
          'A. Axial Skeleton (80 Bones): Forms the longitudinal axis of the body, protecting the central nervous system and thoracic viscera.',
          '  - Cranium (8 bones): Frontal (1), Parietal (2), Temporal (2), Occipital (1), Sphenoid (1), Ethmoid (1).',
          '  - Facial Bones (14 bones): Nasal (2), Maxillae (2), Zygomatic (2), Mandible (1, only movable skull bone), Lacrimal (2), Palatine (2), Inferior nasal conchae (2), Vomer (1).',
          '  - Auditory Ossicles (6 bones): Malleus (2), Incus (2), Stapes (2 - smallest bone in body).',
          '  - Hyoid Bone (1 bone): U-shaped, unarticulated neck bone supporting tongue.',
          '  - Vertebral Column (26 bones): Cervical (7, C1 Atlas, C2 Axis), Thoracic (12), Lumbar (5, largest/strongest), Sacrum (1, 5 fused), Coccyx (1, 4 fused).',
          '  - Thoracic Cage (25 bones): Sternum (1: Manubrium, Body, Xiphoid process) and Ribs (24: 7 pairs True Ribs 1-7, 3 pairs False Ribs 8-10, 2 pairs Floating Ribs 11-12).',
          'B. Appendicular Skeleton (126 Bones): Facilitates body mobility and object manipulation.',
          '  - Pectoral (Shoulder) Girdle (4 bones): Clavicle (2, collarbone), Scapula (2, shoulder blade).',
          '  - Upper Limbs (60 bones): Humerus (2), Radius (2, lateral), Ulna (2, medial), Carpals (16: Scaphoid, Lunate, Triquetrum, Pisiform, Trapezium, Trapezoid, Capitate, Hamate), Metacarpals (10), Phalanges (28: 2 in thumb, 3 in fingers 2-5).',
          '  - Pelvic Girdle (2 bones): Coxal/Hip bones (Os Coxae), each composed of fused Ilium, Ischium, and Pubis; meet anteriorly at pubic symphysis.',
          '  - Lower Limbs (60 bones): Femur (2, longest & strongest bone), Patella (2, sesamoid bone), Tibia (2, weight-bearing medial shin), Fibula (2, lateral non-weight-bearing), Tarsals (14: Talus, Calcaneus/heel, Navicular, 3 Cuneiforms, Cuboid), Metatarsals (10), Phalanges (28).'
        ],
        keyPoints: [
          'Mnemonic for 8 Carpal Bones (Lateral to Medial, Proximal to Distal): She Looks Too Pretty, Try To Catch Her (Scaphoid, Lunate, Triquetrum, Pisiform, Trapezium, Trapezoid, Capitate, Hamate).',
          'Primary vertebral curvatures (Thoracic & Sacral - present at birth); Secondary curvatures (Cervical develops when baby holds head at 3 months, Lumbar develops upon walking at 1 year).'
        ]
      },
      {
        id: 'bone-histology-osteon',
        title: '2. Histology of Bone Tissue & The Osteon (Haversian System)',
        content: [
          'Bone is a specialized dynamic connective tissue composed of an extracellular matrix (15% water, 30% collagen fibers type I, 55% crystallized mineral salts predominantly Calcium Hydroxyapatite [Ca10(PO4)6(OH)2]).',
          'Four Major Bone Cell Types:',
          '  1. Osteogenic (Osteoprogenitor) Cells: Unspecialized mesenchymal stem cells found in periosteum and endosteum; only bone cells undergoing mitotic division; differentiate into osteoblasts.',
          '  2. Osteoblasts: Bone-building cells synthesizing and secreting collagen fibers and organic components of osteoid matrix; initiate calcification. Become trapped in lacunae to become osteocytes.',
          '  3. Osteocytes: Mature bone cells maintaining daily cellular metabolism and mineral exchange; sit in lacunae with dendritic cytoplasmic extensions running through canaliculi.',
          '  4. Osteoclasts: Huge multinucleated cells derived from fusion of monocytes (macrophage lineage); located at endosteal surfaces; secrete lysosomal enzymes and hydrochloric acid into Howship resorption lacunae to dissolve mineral matrix (bone resorption).',
          'Microscopic Structure of Compact Bone (The Osteon / Haversian System):',
          '  - Central (Haversian) Canal: Longitudinal central channel containing blood vessels (arteriole, venule) and nerve fibers.',
          '  - Perforating (Volkmann\'s) Canals: Transverse channels conveying vessels and nerves from periosteum into central canals and medullary cavity.',
          '  - Concentric Lamellae: Circular rings of calcified extracellular matrix surrounding the central canal in alternating collagen fiber orientations, granting extreme torsion resistance.',
          '  - Lacunae: Small microscopic cavities located between lamellae harboring osteocytes.',
          '  - Canaliculi: Tiny radiating fluid-filled micro-canals connecting lacunae with each other and the central canal, facilitating nutrient, oxygen, and metabolic waste diffusion through gap junctions.',
          '  - Interstitial Lamellae: Fragments of older osteons between intact osteons.',
          '  - Circumferential Lamellae: Encircle the entire outer and inner shaft of long bone.'
        ],
        keyPoints: [
          'Compact bone forms 80% of skeletal mass (protection, support, weight resistance); Spongy (cancellous/trabecular) bone forms 20% (contains red bone marrow for hematopoiesis in epiphyses, reduces skeleton weight).',
          'Trabeculae in spongy bone align precisely along lines of physical stress.'
        ],
        clinicalCorrelations: [
          'Osteoporosis: Imbalance where bone resorption by osteoclasts outpaces bone deposition by osteoblasts, leading to porous, fragile bones prone to pathological fractures (hip, wrist, vertebrae). Treated with Bisphosphonates (alendronate) and SERMs.',
          'Rickets (children) / Osteomalacia (adults): Inadequate mineralization of bone matrix due to Vitamin D deficiency or calcium deficiency, resulting in soft, bowed bones.'
        ]
      },
      {
        id: 'ossification-and-calcium',
        title: '3. Ossification Pathways & Calcium Homeostasis',
        content: [
          'Osteogenesis (Bone Formation) occurs via two distinct embryonic mechanisms:',
          'A. Intramembranous Ossification: Direct bone formation within mesenchymal membrane. Forms flat bones of skull, mandible, and clavicles. Steps: (1) Mesenchymal cells cluster to form ossification center; (2) Secretion of osteoid followed by calcification; (3) Formation of trabeculae and spongy bone; (4) Development of periosteum and outer compact bone plates.',
          'B. Endochondral Ossification: Replacement of a pre-existing hyaline cartilage model by bone. Forms almost all bones below the skull. Steps: (1) Development & growth of hyaline cartilage model; (2) Formation of bony collar around diaphysis; (3) Primary ossification center develops in diaphysis as blood vessels penetrate; (4) Formation of medullary cavity by osteoclastic remodeling; (5) Secondary ossification centers appear in epiphyses around birth; (6) Formation of articular cartilage and Epiphyseal (growth) plate.',
          'Hormonal Regulation of Calcium Homeostasis (Serum Ca2+ normal range: 9-11 mg/dL or 4.5-5.5 mEq/L):',
          '  - Parathyroid Hormone (PTH): Released by chief cells of parathyroid glands in response to low serum Ca2+ (hypocalcemia). Actions: Stimulates osteoclast activity (increases bone resorption), increases renal tubular reabsorption of Ca2+, stimulates 1-alpha-hydroxylase in kidneys to activate Calcitriol (Vitamin D3), which increases intestinal Ca2+ absorption.',
          '  - Calcitonin: Secreted by parafollicular (C-cells) of thyroid gland in response to high serum Ca2+ (hypercalcemia). Actions: Inhibits osteoclasts and stimulates osteoblastic deposition, reducing circulating calcium.'
        ],
        keyPoints: [
          'Epiphyseal plate consists of 4 distinct histological zones: Zone of resting cartilage, Zone of proliferating cartilage (columns of dividing chondrocytes), Zone of hypertrophic cartilage (enlarged mature chondrocytes), Zone of calcified cartilage (matrix calcifies, osteoblasts lay down bone).',
          'Closure of epiphyseal plate (epiphyseal line) occurs at age 18-21 under influence of estrogen and testosterone, halting longitudinal bone growth.'
        ]
      }
    ],
    frequentlyAskedQuestions: [
      {
        marks: 10,
        question: 'Explain with a neat labeled diagram the microscopic structure of compact bone (Haversian System). Add a note on bone cells.',
        frequentlyRepeatedIn: 'PCI 2024, RGUHS 2023, AKTU 2023',
        answer: 'HAVERSIAN SYSTEM (OSTEON): Repeating structural unit of compact bone. Components: 1. Central (Haversian) Canal (carries longitudinal vessels/nerves). 2. Volkmann\'s Canal (transverse perforating channels). 3. Concentric Lamellae (rings of calcified matrix with collagen fibers). 4. Lacunae (spaces holding osteocytes). 5. Canaliculi (intercellular channels with cytoplasmic processes enabling gap-junction nutrient exchange). BONE CELLS: 1. Osteogenic cells (stem cells in periosteum). 2. Osteoblasts (secrete osteoid matrix, build bone). 3. Osteocytes (mature cells in lacunae maintaining matrix). 4. Osteoclasts (multinucleated giant cells from monocytes, resorb bone with acid & enzymes).'
      },
      {
        marks: 10,
        question: 'Classify the human skeletal system. Give the detailed breakdown of the 206 bones in the adult human body.',
        frequentlyRepeatedIn: 'KUHS 2022, PCI Model Paper',
        answer: 'CLASSIFICATION: 1. AXIAL SKELETON (80 bones): Cranium (8), Face (14), Hyoid (1), Auditory ossicles (6: Malleus, Incus, Stapes), Vertebral column (26: C7, T12, L5, Sacrum 1, Coccyx 1), Thoracic cage (25: Sternum 1, Ribs 24). 2. APPENDICULAR SKELETON (126 bones): Pectoral girdle (4: Clavicles 2, Scapulae 2), Upper limbs (60: Humerus 2, Radius 2, Ulna 2, Carpals 16, Metacarpals 10, Phalanges 28), Pelvic girdle (2: Hip bones 2), Lower limbs (60: Femur 2, Patella 2, Tibia 2, Fibula 2, Tarsals 14, Metatarsals 10, Phalanges 28). Total = 80 + 126 = 206 bones.'
      },
      {
        marks: 5,
        question: 'Explain the hormonal regulation of calcium homeostasis involving PTH and Calcitonin.',
        frequentlyRepeatedIn: 'PCI 2023, GTU 2022',
        answer: 'Target serum calcium level: 9-11 mg/dL. 1. Hypocalcemia (<9 mg/dL) triggers Parathyroid glands to secrete PTH (Parathyroid Hormone). PTH increases osteoclast bone resorption, increases renal tubular reabsorption of calcium, stimulates renal synthesis of active Vitamin D (Calcitriol) to boost GI calcium absorption. 2. Hypercalcemia (>11 mg/dL) triggers Thyroid C-cells to secrete Calcitonin. Calcitonin inhibits osteoclasts and enhances osteoblast deposition of calcium into bone matrix, lowering serum calcium.'
      },
      {
        marks: 2,
        question: 'What are Volkmann\'s canals and what is their functional significance?',
        frequentlyRepeatedIn: 'PCI 2024 2-Mark Compulsory',
        answer: 'Volkmann\'s (perforating) canals are microscopic transverse or perpendicular channels in compact bone that connect the periosteal neurovascular bundles with the longitudinal Haversian canals and medullary cavity, allowing collateral blood flow and nerve supply across osteons.'
      }
    ]
  },
  {
    id: 'hap1-joints',
    unit: 'Unit II (Part C)',
    semester: 'sem1',
    subjectCode: 'BP101T',
    subjectName: 'Human Anatomy and Physiology I',
    title: 'Joints (Articulations) & Clinical Disorders',
    estimatedPages: 8,
    readTime: '14 mins',
    pciWeightage: '8-10 Marks',
    summary: 'Structural and functional categorization of joints, architecture of synovial diarthroses, 6 synovial joint sub-types with anatomical exemplars, joint kinematics, and pathological arthropathies.',
    sections: [
      {
        id: 'joints-classification',
        title: '1. Classification of Joints (Structural & Functional)',
        content: [
          'An articulation (joint) is any point of junction between two or more bones, between bone and cartilage, or between bone and teeth.',
          'A. Functional Classification (Degree of Movement Permitted):',
          '  1. Synarthrosis: Immovable joint (e.g., cranial sutures, gomphoses).',
          '  2. Amphiarthrosis: Slightly movable joint (e.g., pubic symphysis, intervertebral discs).',
          '  3. Diarthrosis: Freely movable joint; all diarthroses are synovial joints possessing a joint cavity (e.g., shoulder, hip, knee).',
          'B. Structural Classification (Anatomical Characteristics & Binding Material):',
          '  1. Fibrous Joints: Bones joined by dense fibrous connective tissue with NO joint cavity. Three types: (a) Sutures (coronal, sagittal, lambdoid sutures of skull, synostosis in adults); (b) Syndesmoses (greater distance between bones; joined by ligament/interosseous membrane, e.g., distal tibiofibular joint); (c) Gomphoses (peg-in-socket joint, e.g., dentoalveolar joint anchored by periodontal ligament).',
          '  2. Cartilaginous Joints: Bones united by cartilage with NO joint cavity. Two types: (a) Synchondroses (hyaline cartilage connection, e.g., epiphyseal plate, joint between 1st rib and manubrium); (b) Symphyses (broad, flat disc of fibrocartilage, amphiarthrotic, e.g., pubic symphysis, intervertebral disc).',
          '  3. Synovial Joints: Distinguished by the presence of a fluid-filled Synovial (joint) Cavity separating the articulating bone surfaces, surrounded by an articular capsule. Freely movable (diarthroses).'
        ],
        tableData: {
          headers: ['Structural Class', 'Sub-type', 'Functional Class', 'Representative Anatomical Example'],
          rows: [
            ['Fibrous', 'Suture', 'Synarthrosis (immovable)', 'Coronal and Sagittal sutures of skull'],
            ['Fibrous', 'Syndesmosis', 'Amphiarthrosis (slight movement)', 'Distal Tibiofibular joint / Interosseous membrane'],
            ['Fibrous', 'Gomphosis', 'Synarthrosis (immovable)', 'Tooth root in alveolar socket (Periodontal lig.)'],
            ['Cartilaginous', 'Synchondrosis', 'Synarthrosis (immovable)', 'Epiphyseal growth plate, 1st costosternal joint'],
            ['Cartilaginous', 'Symphysis', 'Amphiarthrosis (slight movement)', 'Pubic symphysis, Intervertebral disc'],
            ['Synovial', 'Diarthrosis (6 sub-types)', 'Diarthrosis (freely movable)', 'Knee, Shoulder, Hip, Elbow, Wrist']
          ]
        }
      },
      {
        id: 'synovial-joint-anatomy',
        title: '2. Typical Anatomy of a Synovial Joint',
        content: [
          'A typical synovial joint consists of the following vital anatomical components:',
          '  1. Articular Cartilage: Hyaline cartilage (1-7 mm thick) capping articulating ends of bones; smooth, glassy, avascular; reduces friction and absorbs mechanical shocks.',
          '  2. Articular Capsule (Joint Capsule): Encloses the synovial cavity like a sleeve. Composed of two distinct layers:',
          '     - Outer Fibrous Membrane: Dense irregular connective tissue (mostly collagen) continuous with periosteum; provides tensile strength preventing bone dislocation.',
          '     - Inner Synovial Membrane: Areolar connective tissue rich in elastic fibers and specialized synoviocytes. Type A synoviocytes (macrophage-like phagocytes) and Type B synoviocytes (fibroblast-like cells producing hyaluronic acid and lubricin).',
          '  3. Synovial Fluid: Viscous, clear-to-pale-yellow dialysate of blood plasma containing hyaluronic acid, lubricin, and interstitial fluid. Functions: Lubrication (reduces friction to near zero), nutrient/gas delivery to avascular chondrocytes, shock absorption, phagocytic waste removal.',
          '  4. Accessory Structures: Extracapsular & Intracapsular Ligaments (e.g., ACL and PCL in knee), Articular Discs / Menisci (fibrocartilage pads improving fit and stability), Bursae (sac-like fluid cushions reducing friction between tendon/bone), Tendon Sheaths (tubular bursae wrapping long tendons).'
        ],
        keyPoints: [
          'Cracking knuckles: Caused by cavitation; synovial cavity expands, reducing pressure and causing dissolved nitrogen/CO2 bubbles to rapidly form and collapse.'
        ]
      },
      {
        id: 'synovial-joint-types',
        title: '3. The Six Types of Synovial Joints & Movements',
        content: [
          'Synovial joints are sub-classified according to the shape of articulating surfaces and axes of motion:',
          '  1. Planar / Gliding Joint: Flat or slightly curved articular surfaces; non-axial or biaxial gliding motion without angular/rotary change. Examples: Intercarpal joints of wrist, intertarsal joints, sternoclavicular joint.',
          '  2. Hinge (Ginglymus) Joint: Convex surface of one bone fits into concave surface of another; uniaxial movement (single plane: flexion and extension). Examples: Elbow joint (trochlea of humerus into trochlear notch of ulna), Knee joint (modified hinge), Ankle joint, Interphalangeal joints.',
          '  3. Pivot (Trochoid) Joint: Rounded or pointed surface of one bone articulates within a ring formed by another bone and ligament; uniaxial rotation around longitudinal axis. Examples: Atlanto-axial joint ("no" head shaking, dens of C2 inside anterior arch of C1), Radioulnar joint (pronation/supination).',
          '  4. Condyloid (Ellipsoidal) Joint: Oval convex condyle of one bone fits into elliptical depression of another; biaxial movement (flexion, extension, abduction, adduction, circumduction). Examples: Radiocarpal (wrist) joint, Metacarpophalangeal joints (knuckles 2-5).',
          '  5. Saddle (Sellaris) Joint: Articular surface of one bone is saddle-shaped, and the other bone sits astride it like a rider; biaxial with greater freedom. Example: Carpometacarpal joint of thumb (trapezium and 1st metacarpal), granting humans opposable thumbs.',
          '  6. Ball and Socket (Spheroid) Joint: Ball-like spherical head fits into cup-like depression; triaxial/multiaxial (flexion, extension, abduction, adduction, circumduction, medial/lateral rotation). Examples: Glenohumeral (shoulder) joint, Iliofemoral (hip) joint.'
        ],
        clinicalCorrelations: [
          'Osteoarthritis (OA): Degenerative non-inflammatory joint disease characterized by progressive deterioration of articular cartilage, formation of subchondral bone spurs (osteophytes), narrowing of joint space; worsens with joint use.',
          'Rheumatoid Arthritis (RA): Autoimmune systemic inflammatory disorder where autoantibodies (Rheumatoid Factor RF and anti-CCP) target synovial membrane. Leads to synovial hypertrophy (Pannus formation), cartilage erosion, and severe fibrous/bony ankylosis.',
          'Gouty Arthritis: Deposition of monosodium urate monohydrate crystals in synovial fluid and periarticular tissues due to hyperuricemia (>6.8 mg/dL). Most frequently affects 1st metatarsophalangeal joint of great toe (podagra). Treated acutely with NSAIDs/Colchicine and chronically with Allopurinol/Febuxostat.'
        ]
      }
    ],
    frequentlyAskedQuestions: [
      {
        marks: 10,
        question: 'Define and classify joints with suitable examples. Describe in detail the structure of a synovial joint with a neat labeled diagram.',
        frequentlyRepeatedIn: 'PCI 2024, RGUHS 2023, RUHS 2022',
        answer: 'DEFINITION: Point of contact between bones, bone-cartilage, or bone-teeth. CLASSIFICATION: 1. Fibrous (Sutures, Syndesmoses, Gomphoses). 2. Cartilaginous (Synchondroses, Symphyses). 3. Synovial (Planar, Hinge, Pivot, Condyloid, Saddle, Ball-and-Socket). SYNOVIAL JOINT STRUCTURE: Joint cavity, Articular hyaline cartilage, Articular capsule (outer fibrous layer + inner synovial membrane), Synovial fluid (hyaluronic acid lubricant), Accessory ligaments (extracapsular/intracapsular), Menisci/articular discs, Bursae. MOVEMENTS: Flexion/extension, Abduction/adduction, Rotation, Circumduction.'
      },
      {
        marks: 5,
        question: 'Differentiate between Osteoarthritis and Rheumatoid Arthritis.',
        frequentlyRepeatedIn: 'PCI 2023, AKTU 2022',
        answer: 'OSTEOARTHRITIS: Non-inflammatory degenerative disease; wear-and-tear destruction of articular cartilage; asymmetrical; common in elderly weight-bearing joints (knees, hips); pain worsens with activity; morning stiffness < 30 mins; osteophytes present. RHEUMATOID ARTHRITIS: Autoimmune inflammatory disease; autoantibodies (RF, anti-CCP) attack synovial membrane; symmetrical; affects small joints of hands/wrists; morning stiffness > 1 hour; pannus formation leading to joint deformity; systemic features (fatigue, fever, nodules).'
      },
      {
        marks: 5,
        question: 'List the six types of synovial joints and give one anatomical example of each.',
        frequentlyRepeatedIn: 'PCI 2022, KUHS 2021',
        answer: '1. Planar (Gliding): Intercarpal joints of wrist. 2. Hinge: Elbow joint (trochlea of humerus + trochlear notch of ulna). 3. Pivot: Atlanto-axial joint (dens of axis in atlas ring). 4. Condyloid: Radiocarpal (wrist) joint. 5. Saddle: First Carpometacarpal joint of the thumb. 6. Ball and Socket: Glenohumeral (shoulder) joint and Hip joint.'
      },
      {
        marks: 2,
        question: 'What is Gouty Arthritis? Which joint is most commonly affected?',
        frequentlyRepeatedIn: 'PCI 2024 2-Mark Compulsory',
        answer: 'Gouty arthritis is a metabolic joint disorder caused by hyperuricemia leading to deposition of needle-shaped monosodium urate crystals inside the synovial cavity, triggering acute severe inflammation. The 1st metatarsophalangeal joint of the big toe (podagra) is most commonly affected.'
      }
    ]
  },
  {
    id: 'hap2-digestive',
    unit: 'Unit II (Part D - HAP II)',
    semester: 'sem2',
    subjectCode: 'BP201T',
    subjectName: 'Human Anatomy and Physiology II',
    title: 'Digestive System & Acid Secretion Physiology',
    estimatedPages: 12,
    readTime: '20 mins',
    pciWeightage: '12-15 Marks',
    summary: 'Comprehensive gastrointestinal tract histology (4 concentric tunics), gastric gland cytology, cellular mechanism of HCl secretion by parietal cells (H+/K+ ATPase), biliary and pancreatic physiology, and nutrient absorption pathways.',
    sections: [
      {
        id: 'gi-wall-histology',
        title: '1. Histology of the Gastrointestinal (GI) Tract Wall',
        content: [
          'From the lower esophagus to the anal canal, the wall of the GI tract exhibits a universal four-layered concentric structural architecture:',
          '  1. Mucosa (Inner Lining): Composed of (a) Epithelium (non-keratinized stratified squamous in esophagus/anus for protection; simple columnar with microvilli and goblet cells throughout stomach and intestines for secretion/absorption); (b) Lamina Propria (areolar connective tissue rich in blood/lymph capillaries and Gut-Associated Lymphoid Tissue [GALT / MALT]); (c) Muscularis Mucosae (thin smooth muscle layer throwing mucosa into folds, increasing surface area).',
          '  2. Submucosa: Dense irregular connective tissue containing major blood vessels, lymphatics, collagen/elastic fibers, and the Submucosal (Meissner\'s) Plexus of the enteric nervous system, regulating mucosal blood flow and glandular secretions.',
          '  3. Muscularis Externa: Responsible for motility (peristalsis and segmentation). Arranged into an inner circular layer and outer longitudinal layer of smooth muscle (stomach uniquely has a 3rd innermost oblique layer). Between circular and longitudinal layers lies the Myenteric (Auerbach\'s) Plexus, governing GI motility speed and contractile strength.',
          '  4. Serosa (Adventitia): Outermost coat. Serosa consists of areolar connective tissue capped with simple squamous mesothelium (visceral peritoneum) in intraperitoneal organs. Adventitia is fibrous connective tissue lacking mesothelium (esophagus and retroperitoneal organs).'
        ],
        keyPoints: [
          'Enteric Nervous System (ENS) contains over 100 million neurons ("brain of the gut"); functions autonomously but modulated by sympathetic (inhibitory) and parasympathetic/vagal (stimulatory) inputs.'
        ]
      },
      {
        id: 'stomach-hcl-mechanism',
        title: '2. Gastric Gland Cytology & Mechanism of HCl Secretion',
        content: [
          'Gastric mucosa contains millions of deep tubular Gastric Glands opening into Gastric Pits, containing 4 principal cell types:',
          '  - Mucous Neck Cells: Secrete alkaline mucus containing bicarbonate ions (HCO3-), establishing the protective gastric mucosal barrier against pepsin and acid.',
          '  - Parietal (Oxyntic) Cells: Secrete Hydrochloric Acid (HCl, establishing pH 1.5 - 2.0) and Intrinsic Factor of Castle (glycoprotein essential for Vitamin B12 absorption in the terminal ileum; absence causes Pernicious Anemia).',
          '  - Chief (Peptic / Zymogenic) Cells: Secrete Pepsinogen (inactive zymogen converted by HCl to active endopeptidase Pepsin at pH 1.8-2.0) and Gastric Lipase.',
          '  - Enteroendocrine (G) Cells: Located predominantly in pyloric antrum, secrete the peptide hormone Gastrin into bloodstream stimulating parietal cells.',
          'Cellular Mechanism of HCl Secretion by Parietal Cells:',
          '  1. Inside the parietal cell, Cytoplasmic Carbonic Anhydrase (CA) catalyzes the hydration of metabolic CO2: CO2 + H2O <-> H2CO3 <-> H+ + HCO3-.',
          '  2. The generated H+ ions are actively pumped into the gastric lumen across the apical canalicular membrane by the H+/K+ ATPase (Proton Pump), exchanging 1 H+ for 1 K+ with ATP consumption.',
          '  3. K+ recycled back into lumen through apical K+ leak channels.',
          '  4. The intracellular HCO3- is transported across the basolateral membrane into the bloodstream via the HCO3-/Cl- anion exchanger (producing the postprandial "alkaline tide" in blood and urine), while Cl- enters the cell.',
          '  5. Cl- diffuses passively down its electrochemical gradient through apical chloride channels into the lumen, joining H+ to form Hydrochloric Acid (HCl).',
          'Receptors Regulating HCl Secretion on Basolateral Membrane of Parietal Cells:',
          '  - Histamine (H2 receptors) - increases intracellular cAMP.',
          '  - Acetylcholine (M3 muscarinic receptors via vagus nerve) - increases intracellular Ca2+.',
          '  - Gastrin (CCK2 / Gastrin receptors) - increases intracellular Ca2+.',
          '  - Somatostatin and Prostaglandin E2 (PGE2) act as physiological inhibitors of adenylate cyclase, reducing HCl secretion and increasing mucus/bicarbonate production.'
        ],
        clinicalCorrelations: [
          'Proton Pump Inhibitors (PPIs - Omeprazole, Pantoprazole, Rabeprazole): Irreversibly bind and inhibit the H+/K+ ATPase enzyme on the secretory surface of parietal cells, suppressing acid secretion by >90% regardless of stimulus. First-line therapy for Peptic Ulcer Disease (PUD), GERD, and Zollinger-Ellison syndrome.',
          'NSAIDs (Aspirin, Ibuprofen) induce gastric ulcers by inhibiting Cyclooxygenase-1 (COX-1), blocking protective Prostaglandin E2 synthesis, depleting mucus and bicarbonate barrier.'
        ]
      },
      {
        id: 'liver-pancreas-absorption',
        title: '3. Liver, Gallbladder, Pancreas & Nutrient Digestion',
        content: [
          'Pancreas: Dual organ (99% exocrine, 1% endocrine Islets of Langerhans). Pancreatic Acini secrete 1.2-1.5 L/day of clear alkaline pancreatic juice (pH 7.1-8.2 rich in HCO3- to neutralize acidic chyme). Enzymes include Pancreatic Amylase (carbohydrates), Trypsinogen/Chymotrypsinogen/Procarboxypeptidase (activated by enterokinase into trypsin to digest proteins), Pancreatic Lipase (fats), and Ribonuclease/Deoxyribonuclease.',
          'Liver & Biliary System: Largest internal gland (~1.4 kg). Functional units are Hepatic Lobules composed of radiating plates of hepatocytes surrounding a Central Vein, separated by Hepatic Sinusoids lined with Kupffer cells (resident hepatic macrophages). Hepatic Triad at lobule corners contains branch of Hepatic Artery, branch of Hepatic Portal Vein, and Bile Duct.',
          'Bile Physiology: Hepatocytes produce 800-1000 mL/day of yellow-olive bile. Composed of Bile Salts (Sodium glycocholate and sodium taurocholate), Bile Pigments (bilirubin from hemoglobin catabolism), cholesterol, and lecithin. Functions: Bile salts emulsify large lipid globules into microscopic droplets (micelles), vastly multiplying surface area for pancreatic lipase.',
          'Digestion & Absorption Summary:',
          '  - Carbohydrates: Polysaccharides -> salivary/pancreatic amylase -> disaccharides -> brush border enzymes (maltase, sucrase, lactase) -> monosaccharides (glucose/galactose absorbed via SGLT-1 secondary active transport with Na+; fructose via GLUT-5 facilitated diffusion).',
          '  - Proteins: Pepsin, trypsin, chymotrypsin, carboxypeptidase -> dipeptides/tripeptides (PepT1 transport) and free amino acids (Na+-dependent cotransporters).',
          '  - Lipids: Emulsified by bile salts -> digested by pancreatic lipase into free fatty acids and 2-monoglycerides -> absorbed into enterocytes as micelles -> re-esterified into triglycerides in smooth ER -> packaged with apolipoproteins into Chylomicrons -> exocytosed into Central Lacteals of lymphatic system.'
        ]
      }
    ],
    frequentlyAskedQuestions: [
      {
        marks: 10,
        question: 'Explain with a neat schematic diagram the cellular mechanism of hydrochloric acid (HCl) secretion by parietal cells in the stomach. Discuss its pharmacological significance.',
        frequentlyRepeatedIn: 'PCI 2024, RGUHS 2023, AKTU 2023, KUHS 2022',
        answer: 'PARIETAL CELL MECHANISM: 1. CO2 + H2O catalyzed by Carbonic Anhydrase forms H2CO3, dissociating into H+ and HCO3-. 2. H+/K+ ATPase (Proton Pump) on apical membrane pumps H+ into lumen in exchange for K+ using ATP. 3. Apical K+ channels recycle K+. 4. Basolateral HCO3-/Cl- antiporter extrudes HCO3- into blood (alkaline tide) and brings Cl- into cell. 5. Cl- diffuses into lumen via Cl- channel, combining with H+ to yield HCl (pH 1.5-2.0). PHARMACOLOGICAL RELEVANCE: 1. Proton Pump Inhibitors (Omeprazole, Pantoprazole) irreversibly block H+/K+ ATPase, treating PUD and GERD. 2. H2 Receptor Antagonists (Ranitidine, Famotidine) block histamine-stimulated cAMP pathway. 3. Prostaglandin analogs (Misoprostol) stimulate mucus/bicarbonate and inhibit cAMP.'
      },
      {
        marks: 10,
        question: 'Describe the histology of the gastrointestinal tract wall with a neat labeled diagram. Discuss the functions of each layer.',
        frequentlyRepeatedIn: 'PCI 2023, PTU 2022',
        answer: 'FOUR LAYERS: 1. Mucosa: Epithelium (secretion/absorption/protection), Lamina propria (connective tissue with MALT/GALT immunity), Muscularis mucosae (smooth muscle creating folds). 2. Submucosa: Areolar connective tissue, major vessels, Meissner\'s plexus (regulates gland secretion and blood flow). 3. Muscularis Externa: Inner circular and outer longitudinal smooth muscle (stomach has 3rd oblique layer); Myenteric (Auerbach\'s) plexus controlling peristalsis and segmentation. 4. Serosa / Adventitia: Visceral peritoneum (simple squamous + areolar) providing frictionless movement and structural anchoring.'
      },
      {
        marks: 5,
        question: 'Describe the composition and physiological functions of bile. Add a note on enterohepatic circulation.',
        frequentlyRepeatedIn: 'PCI 2023, GTU 2022',
        answer: 'COMPOSITION: Water (97%), Bile salts (sodium glycocholate, sodium taurocholate), Bile pigments (bilirubin), cholesterol, lecithin, electrolytes. FUNCTIONS: 1. Emulsification of dietary fats, increasing surface area for pancreatic lipase. 2. Micelle formation for fat-soluble vitamins (A, D, E, K) absorption. 3. Excretion of bilirubin, cholesterol, and drugs. ENTEROHEPATIC CIRCULATION: ~95% of secreted bile salts are actively reabsorbed in the terminal ileum, returned to liver via hepatic portal vein, and recycled into new bile.'
      },
      {
        marks: 2,
        question: 'What is Intrinsic Factor? Which cells secrete it and what is the consequence of its deficiency?',
        frequentlyRepeatedIn: 'PCI 2024 2-Mark Compulsory',
        answer: 'Intrinsic Factor of Castle is a glycoprotein secreted by Parietal (Oxyntic) cells of the gastric mucosa. It binds dietary Vitamin B12, protecting it from digestion and enabling absorption in the terminal ileum. Deficiency results in Pernicious Anemia due to impaired erythropoiesis.'
      }
    ]
  }
];

export const HAP_UNIT_2_FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-1',
    category: 'Integumentary',
    question: 'Name the 5 layers of the epidermis in thick skin from superficial to deep.',
    answer: 'Stratum Corneum, Stratum Lucidum, Stratum Granulosum, Stratum Spinosum, Stratum Basale.',
    mnemonic: 'Come, Let\'s Get Sun Burned (Corneum, Lucidum, Granulosum, Spinosum, Basale)',
    marks: 2
  },
  {
    id: 'fc-2',
    category: 'Integumentary',
    question: 'What percentage of body surface is assigned to the anterior trunk in Wallace\'s Rule of Nines?',
    answer: '18% (Anterior trunk = 18%, Posterior trunk = 18%, Total trunk = 36%).',
    marks: 2
  },
  {
    id: 'fc-3',
    category: 'Integumentary',
    question: 'Which cells in the epidermis act as antigen-presenting immune cells?',
    answer: 'Langerhans cells (intraepidermal dendritic cells located mainly in the Stratum Spinosum).',
    marks: 2
  },
  {
    id: 'fc-4',
    category: 'Skeletal',
    question: 'How many total bones are present in the adult axial and appendicular skeleton respectively?',
    answer: 'Axial Skeleton = 80 bones; Appendicular Skeleton = 126 bones. Total = 206 bones.',
    marks: 2
  },
  {
    id: 'fc-5',
    category: 'Histology',
    question: 'What is an Osteon (Haversian System)? Mention its primary components.',
    answer: 'The structural and functional unit of compact bone. Components: Central (Haversian) Canal, Concentric Lamellae, Lacunae containing Osteocytes, and Canaliculi.',
    marks: 5
  },
  {
    id: 'fc-6',
    category: 'Histology',
    question: 'Differentiate between Osteoblasts and Osteoclasts.',
    answer: 'Osteoblasts synthesize bone matrix and initiate calcification (bone builders). Osteoclasts are multinucleated giant cells that secrete acid and enzymes to resorb bone (bone breakers).',
    marks: 2
  },
  {
    id: 'fc-7',
    category: 'Skeletal',
    question: 'Name the only movable bone in the adult human skull.',
    answer: 'The Mandible (lower jaw bone), which articulates with the temporal bone at the temporomandibular joint (TMJ).',
    marks: 2
  },
  {
    id: 'fc-8',
    category: 'Skeletal',
    question: 'Which hormone increases blood calcium level, and which hormone decreases it?',
    answer: 'Parathyroid Hormone (PTH) increases blood calcium (stimulates osteoclasts). Calcitonin (from thyroid C-cells) decreases blood calcium (inhibits osteoclasts).',
    marks: 2
  },
  {
    id: 'fc-9',
    category: 'Joints',
    question: 'What are the 3 structural classifications of joints?',
    answer: '1. Fibrous joints (no cavity, dense connective tissue), 2. Cartilaginous joints (no cavity, hyaline or fibrocartilage), 3. Synovial joints (possess a synovial fluid cavity, diarthrotic).',
    marks: 2
  },
  {
    id: 'fc-10',
    category: 'Joints',
    question: 'Give one example for a Pivot joint and one for a Saddle joint in the human body.',
    answer: 'Pivot joint: Atlanto-axial joint (C1-C2) or Proximal radioulnar joint. Saddle joint: 1st Carpometacarpal joint of the thumb (trapezium and metacarpal I).',
    marks: 2
  },
  {
    id: 'fc-11',
    category: 'Digestive',
    question: 'Which cells in the stomach secrete Hydrochloric Acid and Intrinsic Factor?',
    answer: 'Parietal (Oxyntic) cells located in the gastric glands of the fundus and body of stomach.',
    marks: 2
  },
  {
    id: 'fc-12',
    category: 'Digestive',
    question: 'What is the target enzyme of Proton Pump Inhibitors (PPIs) like Omeprazole?',
    answer: 'The H+/K+ ATPase (Proton Pump) located on the apical secretory canaliculus of parietal cells.',
    marks: 2
  },
  {
    id: 'fc-13',
    category: 'Digestive',
    question: 'Name the two nerve plexuses comprising the Enteric Nervous System (ENS).',
    answer: '1. Submucosal (Meissner\'s) Plexus - controls secretions and blood flow. 2. Myenteric (Auerbach\'s) Plexus - controls motility and peristalsis.',
    marks: 2
  },
  {
    id: 'fc-14',
    category: 'Digestive',
    question: 'What is the function of bile salts in digestion?',
    answer: 'Bile salts emulsify large lipid droplets into micro-droplets and form micelles, drastically increasing surface area for pancreatic lipase action.',
    marks: 2
  },
  {
    id: 'fc-15',
    category: 'Joints',
    question: 'Distinguish between a sprain and a strain.',
    answer: 'A sprain is the stretching or tearing of ligaments (bone-to-bone). A strain is the stretching or tearing of muscle or tendon (muscle-to-bone).',
    marks: 2
  }
];
