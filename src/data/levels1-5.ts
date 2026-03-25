import { Level } from '../types';

export const levels: Level[] = [
  // ==================== LEVEL 1 ====================
  {
    id: 1,
    title: "บาดแผลแรก: ความหมายของ Hemostasis",
    titleEn: "First Wound: What is Hemostasis?",
    topic: "hemostasis-definition",
    caseIntro: "🚨 คุณเป็น นักเทคนิคการแพทย์ฝึกหัด ถูกส่งเข้าไปในร่างกายมนุษย์ขนาดจิ๋ว หลอดเลือดเพิ่งได้รับบาดเจ็บ! คุณต้องเข้าใจกลไกพื้นฐานก่อนจะเริ่มภารกิจ",
    questions: [
      {
        id: "1-1",
        type: "mcq",
        question: "Hemostasis (การห้ามเลือด) หมายความว่าอะไร?",
        options: [
          { id: "a", text: "กระบวนการที่ทำให้เลือดหยุดไหลหลังจากหลอดเลือดได้รับบาดเจ็บ โดยจำกัดเฉพาะบริเวณที่บาดเจ็บ" },
          { id: "b", text: "กระบวนการสร้างเม็ดเลือดแดงในไขกระดูก" },
          { id: "c", text: "การทำลายเชื้อโรคในกระแสเลือด" },
          { id: "d", text: "การสร้าง antibody เพื่อต้านทานเชื้อโรค" }
        ],
        correctAnswer: "a",
        hint1: "คิดถึงคำว่า 'Hemo' = เลือด และ 'Stasis' = หยุด/คงที่",
        hint2Removes: ["b", "d"],
        explanation: "✅ Hemostasis คือกระบวนการที่ทำให้เลือดหยุดไหลหลังจากหลอดเลือดได้รับบาดเจ็บ โดยต้องหยุดเลือดได้อย่างมีประสิทธิภาพและจำกัดเฉพาะบริเวณที่บาดเจ็บ ไม่ให้เกิดลิ่มเลือดทั่วร่างกาย",
        reviewTags: ["hemostasis-definition"]
      },
      {
        id: "1-2",
        type: "mcq",
        question: "Hemostasis แบ่งออกเป็นกี่ระยะหลัก?",
        options: [
          { id: "a", text: "2 ระยะ" },
          { id: "b", text: "3 ระยะ" },
          { id: "c", text: "4 ระยะ" },
          { id: "d", text: "5 ระยะ" }
        ],
        correctAnswer: "c",
        hint1: "มี: Vessel constriction → Primary → Secondary → Fibrinolysis",
        hint2Removes: ["a", "d"],
        explanation: "✅ Hemostasis แบ่งเป็น 4 ระยะ: 1) Vessel constriction 2) Primary hemostasis (Platelet plug) 3) Secondary hemostasis (Coagulation cascade) 4) Fibrinolysis",
        reviewTags: ["hemostasis-phases"]
      },
      {
        id: "1-3",
        type: "mcq",
        question: "Primary hemostasis เกี่ยวข้องกับองค์ประกอบใดเป็นหลัก?",
        options: [
          { id: "a", text: "Coagulation factors และ Fibrin" },
          { id: "b", text: "Blood vessels และ Platelets" },
          { id: "c", text: "Plasminogen และ Plasmin" },
          { id: "d", text: "Complement system และ Kinin system" }
        ],
        correctAnswer: "b",
        hint1: "Primary hemostasis = ระยะแรกๆ ที่เกิดขึ้นทันทีหลังบาดเจ็บ",
        hint2Removes: ["c", "d"],
        explanation: "✅ Primary hemostasis เกี่ยวข้องกับ Blood vessels (หลอดเลือด) และ Platelets (เกล็ดเลือด) ส่วน Secondary hemostasis = Coagulation factors, Fibrinolysis = Plasminogen/Plasmin",
        reviewTags: ["primary-hemostasis-components"]
      }
    ]
  },

  // ==================== LEVEL 2 ====================
  {
    id: 2,
    title: "ผนังหลอดเลือด: โครงสร้างที่ต้องรู้",
    titleEn: "Vessel Wall Architecture",
    topic: "vessel-wall",
    caseIntro: "🔬 คุณขยายตัวเองให้เล็กลงจนมองเห็นผนังหลอดเลือด มี 3 ชั้น ซ้อนกันอยู่ แต่ละชั้นมีหน้าที่สำคัญในการหยุดเลือด คุณต้องจำโครงสร้างนี้ให้ขึ้นใจ!",
    questions: [
      {
        id: "2-1",
        type: "mcq",
        question: "ชั้น Tunica intima มีเซลล์ชนิดใดเป็นหลักและมีหน้าที่อะไรใน hemostasis?",
        options: [
          { id: "a", text: "Smooth muscle cells - ทำให้เกิด vasoconstriction" },
          { id: "b", text: "Endothelial cells - ควบคุม platelet ใน primary hemostasis" },
          { id: "c", text: "Fibroblasts - ผลิต tissue factor กระตุ้น extrinsic pathway" },
          { id: "d", text: "Macrophages - ทำลายเชื้อโรคในหลอดเลือด" }
        ],
        correctAnswer: "b",
        hint1: "Intima = ชั้นในสุด ติดกับเลือด",
        hint2Removes: ["c", "d"],
        explanation: "✅ Tunica intima มี Endothelial cells เป็นหลัก ทำหน้าที่ควบคุม platelet ใน primary hemostasis สร้าง vWF, PGI2, TFPI และสารต่างๆ ที่ควบคุมการแข็งตัวของเลือด",
        reviewTags: ["vessel-wall", "tunica-intima"]
      },
      {
        id: "2-2",
        type: "matching",
        question: "จับคู่ชั้นของหลอดเลือดกับหน้าที่ใน hemostasis ให้ถูกต้อง",
        pairs: [
          { left: "Tunica intima", right: "ควบคุม platelet / สร้าง vWF" },
          { left: "Tunica media", right: "Vasoconstriction (smooth muscle)" },
          { left: "Tunica adventitia", right: "กระตุ้น extrinsic pathway / Tissue factor" }
        ],
        options: [
          { id: "intima-b", text: "ควบคุม platelet / สร้าง vWF" },
          { id: "media-a", text: "Vasoconstriction (smooth muscle)" },
          { id: "adv-c", text: "กระตุ้น extrinsic pathway / Tissue factor" },
          { id: "wrong1", text: "สร้าง fibrin clot โดยตรง" }
        ],
        correctAnswer: JSON.stringify({
          "Tunica intima": "ควบคุม platelet / สร้าง vWF",
          "Tunica media": "Vasoconstriction (smooth muscle)",
          "Tunica adventitia": "กระตุ้น extrinsic pathway / Tissue factor"
        }),
        hint1: "Adventitia = ชั้นนอกสุด มี fibroblasts สร้าง tissue factor",
        hint2Removes: [],
        explanation: "✅ Intima → Endothelium ควบคุม platelet | Media → Smooth muscle ทำ vasoconstriction | Adventitia → Connective tissue + Tissue factor กระตุ้น coagulation cascade",
        reviewTags: ["vessel-wall", "vessel-layers"]
      },
      {
        id: "2-3",
        type: "mcq",
        question: "สาร von Willebrand factor (vWF) ถูกผลิตจากที่ใด?",
        options: [
          { id: "a", text: "เฉพาะ smooth muscle cells ใน tunica media เท่านั้น" },
          { id: "b", text: "Endothelial cells และ subendothelial layer" },
          { id: "c", text: "เฉพาะ fibroblasts ใน tunica adventitia เท่านั้น" },
          { id: "d", text: "เฉพาะ platelet alpha granules เท่านั้น" }
        ],
        correctAnswer: "b",
        hint1: "vWF ผลิตจากหลายแหล่ง ทั้ง endothelial และ subendothelial",
        hint2Removes: ["a", "c"],
        explanation: "✅ vWF ผลิตจาก Endothelial cells AND subendothelial layer (รวมถึง megakaryocytes/platelets ด้วย) จึงพบ vWF ใน plasma, subendothelium และ platelet alpha granules",
        reviewTags: ["vWF", "vessel-wall"]
      }
    ]
  },

  // ==================== LEVEL 3 ====================
  {
    id: 3,
    title: "โครงสร้างเกล็ดเลือด: รู้จักนักรบตัวน้อย",
    titleEn: "Platelet Structure: Know Your Tiny Warriors",
    topic: "platelet-structure",
    caseIntro: "🩸 คุณซูมเข้าไปใกล้ๆ เกล็ดเลือด (Platelet) ตัวเล็กๆ ที่กำลังรอการสั่ง มี 4 โซนหลัก แต่ละโซนมีหน้าที่สำคัญ มาเรียนรู้โครงสร้างของนักรบตัวน้อยนี้กัน!",
    questions: [
      {
        id: "3-1",
        type: "mcq",
        question: "Alpha granules (α-granules) ของ platelet บรรจุสารชนิดใดเป็นหลัก?",
        options: [
          { id: "a", text: "ADP, ATP, Serotonin, Ca2+" },
          { id: "b", text: "Fibrinogen, vWF, Factor V, PDGF, PF4" },
          { id: "c", text: "Hydrolytic enzymes, cathepsins" },
          { id: "d", text: "Heparin, prostaglandin E2" }
        ],
        correctAnswer: "b",
        hint1: "Alpha granules = โปรตีน, Dense granules = non-protein substances",
        hint2Removes: ["c", "d"],
        explanation: "✅ Alpha granules บรรจุ โปรตีน เช่น Fibrinogen, vWF, Factor V, Factor XI, PDGF, TGF-β, PF4, Thrombospondin | Dense granules (δ) บรรจุ non-protein: ADP, ATP, Serotonin, Ca2+",
        reviewTags: ["platelet-structure", "alpha-granule"]
      },
      {
        id: "3-2",
        type: "mcq",
        question: "Dense tubular system (DTS) ใน platelet มีหน้าที่หลักคืออะไร?",
        options: [
          { id: "a", text: "เป็นช่องเชื่อมกับผิวเซลล์ช่วยหลั่ง granule" },
          { id: "b", text: "เป็นแหล่งเก็บ Ca2+ ภายในเซลล์" },
          { id: "c", text: "สร้าง microtubules เพื่อรักษารูปร่าง" },
          { id: "d", text: "ผลิต ATP เพื่อให้พลังงานแก่ platelet" }
        ],
        correctAnswer: "b",
        hint1: "DTS ≠ OCS: OCS = Open Canalicular System (เปิดออกสู่ผิว)",
        hint2Removes: ["c", "d"],
        explanation: "✅ Dense tubular system (DTS) เป็นแหล่งเก็บ Ca2+ ภายใน platelet เมื่อ platelet ถูกกระตุ้น Ca2+ จะถูกปล่อยออกมาเพื่อกระตุ้น actin-myosin และ degranulation | OCS (Open Canalicular System) คือช่องเชื่อมกับผิวเซลล์",
        reviewTags: ["platelet-structure", "DTS", "calcium"]
      },
      {
        id: "3-3",
        type: "mcq",
        question: "เมื่อ platelet ถูกกระตุ้น การเปลี่ยนแปลงรูปร่างจาก discoid เป็น spiny sphere เกิดจากอะไร?",
        options: [
          { id: "a", text: "การสลายตัวของ microtubules อย่างเดียว" },
          { id: "b", text: "Actin polymerization (G-actin → F-actin) ร่วมกับ myosin" },
          { id: "c", text: "การพองตัวของ alpha granules" },
          { id: "d", text: "การเพิ่มขึ้นของ phospholipid bilayer" }
        ],
        correctAnswer: "b",
        hint1: "Actin มี 2 รูปแบบ: G = globular (resting), F = filament (active)",
        hint2Removes: ["a", "c"],
        explanation: "✅ เมื่อ platelet ถูกกระตุ้น G-actin (monomer) polymerize เป็น F-actin (filament) และทำงานร่วมกับ Myosin ทำให้เกิด shape change (spiny projections) Ca2+ เป็นตัว trigger ในกระบวนการนี้",
        reviewTags: ["platelet-activation", "actin-myosin"]
      },
      {
        id: "3-4",
        type: "multi-select",
        question: "เลือกสาร ALL ที่อยู่ใน Dense granules (δ-granules) ของ platelet",
        options: [
          { id: "a", text: "ADP (Adenosine diphosphate)" },
          { id: "b", text: "Fibrinogen" },
          { id: "c", text: "Serotonin (5-HT)" },
          { id: "d", text: "Calcium ions (Ca2+)" },
          { id: "e", text: "von Willebrand factor (vWF)" },
          { id: "f", text: "ATP (Adenosine triphosphate)" }
        ],
        correctAnswer: JSON.stringify(["a", "c", "d", "f"]),
        hint1: "Dense granules = non-protein substances ส่วนใหญ่",
        hint2Removes: [],
        explanation: "✅ Dense granules (δ) บรรจุ NON-PROTEIN: ADP, ATP, Serotonin (5-HT), Ca2+ | Alpha granules บรรจุ PROTEIN: Fibrinogen, vWF, Factor V, PF4, PDGF เป็นต้น",
        reviewTags: ["dense-granule", "alpha-granule", "platelet-structure"]
      }
    ]
  },

  // ==================== LEVEL 4 ====================
  {
    id: 4,
    title: "Vasoconstriction: ปิดวาล์วฉุกเฉิน",
    titleEn: "Vasoconstriction: Emergency Valve Closure",
    topic: "vasoconstriction",
    caseIntro: "💥 หลอดเลือดแตก! ทันทีที่บาดเจ็บ ร่างกายตอบสนองด้วยการหดตัวของหลอดเลือดภายในไม่กี่วินาที คุณต้องเข้าใจกลไกนี้เพื่อประเมินภาวะเลือดออกของผู้ป่วย",
    questions: [
      {
        id: "4-1",
        type: "mcq",
        question: "Vasoconstriction ทันทีหลังบาดเจ็บเกิดจากอะไรเป็นหลัก?",
        options: [
          { id: "a", text: "Histamine จาก mast cells" },
          { id: "b", text: "Reflex neurogenic และ Endothelin จาก endothelial cells" },
          { id: "c", text: "Fibrin ที่เพิ่งสร้างขึ้น" },
          { id: "d", text: "TxA2 จาก platelet เป็นอย่างแรก" }
        ],
        correctAnswer: "b",
        hint1: "ระยะแรกสุด (วินาที) = Reflex + Endothelin ก่อน ยังไม่มี platelet activation",
        hint2Removes: ["c", "d"],
        explanation: "✅ Vasoconstriction ระยะแรกเกิดจาก: 1) Reflex neurogenic (reflex ทางระบบประสาท) 2) Endothelin ที่หลั่งจาก endothelial cells เพื่อลด blood flow ชั่วคราว ส่วน TxA2 และ Serotonin จาก platelet จะช่วยขยายผลในภายหลัง",
        reviewTags: ["vasoconstriction", "endothelin"]
      },
      {
        id: "4-2",
        type: "mcq",
        question: "Prostacyclin (PGI2) มีผลต่อหลอดเลือดและเกล็ดเลือดอย่างไร?",
        options: [
          { id: "a", text: "กระตุ้น platelet aggregation และทำให้หลอดเลือดหดตัว" },
          { id: "b", text: "ยับยั้ง platelet aggregation และทำให้หลอดเลือดขยายตัว (vasodilation)" },
          { id: "c", text: "กระตุ้น coagulation cascade เพื่อสร้าง fibrin" },
          { id: "d", text: "ทำให้ platelet เปลี่ยนรูปร่างเป็น spiny sphere" }
        ],
        correctAnswer: "b",
        hint1: "PGI2 = Prostacyclin สร้างจาก endothelial cells = ตัว 'brake' ของระบบ",
        hint2Removes: ["a", "c"],
        explanation: "✅ Prostacyclin (PGI2) สร้างจาก endothelial cells ทำหน้าที่: 1) ยับยั้ง platelet aggregation 2) ทำให้หลอดเลือดขยาย (vasodilation) PGI2 เพิ่ม cAMP → ลด Ca2+ → ลด platelet aggregation เป็น 'ตัวเบรก' สมดุลกับ TxA2",
        reviewTags: ["PGI2", "prostacyclin", "platelet-inhibitor"]
      },
      {
        id: "4-3",
        type: "mcq",
        question: "TxA2 (Thromboxane A2) สร้างจากที่ใด และมีผลอย่างไร?",
        options: [
          { id: "a", text: "สร้างจาก endothelial cells → ยับยั้ง platelet aggregation" },
          { id: "b", text: "สร้างจาก platelets → กระตุ้น platelet aggregation + vasoconstriction" },
          { id: "c", text: "สร้างจาก liver → กระตุ้น coagulation cascade" },
          { id: "d", text: "สร้างจาก kidney → ควบคุม blood pressure" }
        ],
        correctAnswer: "b",
        hint1: "TxA2 = Thromboxane A2 สร้างผ่าน arachidonic acid → cyclooxygenase → thromboxane synthase (dominant ใน platelets)",
        hint2Removes: ["a", "c"],
        explanation: "✅ TxA2 สร้างจาก platelets ผ่าน pathway: phospholipid → arachidonic acid → cyclooxygenase → thromboxane synthase → TxA2 | ผล: กระตุ้น platelet aggregation (amplify) + vasoconstriction | Aspirin ยับยั้ง COX-1 → ลด TxA2",
        reviewTags: ["TxA2", "thromboxane", "platelet-activation"]
      }
    ]
  },

  // ==================== LEVEL 5 ====================
  {
    id: 5,
    title: "Platelet Adhesion: การยึดเกาะขั้นแรก",
    titleEn: "Platelet Adhesion: First Contact",
    topic: "platelet-adhesion",
    caseIntro: "🧲 หลอดเลือดแตก collagen โผล่ออกมา! เกล็ดเลือดในกระแสเลือดต้องรีบไปยึดติดที่บาดแผล ผ่าน receptor สำคัญ GPIb/IX/V ที่จับกับ vWF เหมือน 'กาวชีวะ' ที่แข็งแกร่ง",
    questions: [
      {
        id: "5-1",
        type: "ordering",
        question: "เรียงลำดับขั้นตอน Platelet Adhesion ให้ถูกต้อง",
        orderItems: [
          "Endothelial injury → collagen exposure",
          "vWF จับกับ collagen ที่โผล่ออกมา",
          "GPIb/IX/V บน platelet จับกับ vWF",
          "Platelet ยึดติดกับผนังหลอดเลือดที่บาดเจ็บ"
        ],
        correctAnswer: JSON.stringify([
          "Endothelial injury → collagen exposure",
          "vWF จับกับ collagen ที่โผล่ออกมา",
          "GPIb/IX/V บน platelet จับกับ vWF",
          "Platelet ยึดติดกับผนังหลอดเลือดที่บาดเจ็บ"
        ]),
        hint1: "vWF เป็น 'สะพาน' เชื่อมระหว่าง collagen และ platelet",
        hint2Removes: [],
        explanation: "✅ ลำดับที่ถูกต้อง: 1) บาดเจ็บ → collagen โผล่ 2) vWF จับ collagen 3) GPIb/IX/V (บน platelet) จับ vWF 4) Platelet ยึดติด | GPIb/IX/V สำคัญมากใน high shear stress (เลือดไหลเร็วในหลอดเลือดแดง)",
        reviewTags: ["platelet-adhesion", "GPIb-IX-V", "vWF"]
      },
      {
        id: "5-2",
        type: "mcq",
        question: "Receptor GPIb/IX/V มีหน้าที่หลักคืออะไรใน primary hemostasis?",
        options: [
          { id: "a", text: "จับกับ fibrinogen เพื่อทำ platelet aggregation" },
          { id: "b", text: "จับกับ vWF เพื่อทำ platelet adhesion โดยเฉพาะใน high shear stress" },
          { id: "c", text: "จับกับ collagen โดยตรงเพื่อเริ่ม platelet activation" },
          { id: "d", text: "จับกับ ADP เพื่อกระตุ้น platelet aggregation" }
        ],
        correctAnswer: "b",
        hint1: "GPIb = ส่วนที่จับ vWF ในสภาวะ blood flow สูง (high shear)",
        hint2Removes: ["a", "d"],
        explanation: "✅ GPIb/IX/V complex จับกับ vWF (ที่จับกับ collagen แล้ว) เพื่อทำ platelet adhesion สำคัญมากใน high shear artery | ถ้า GPIb/IX/V ขาด → Bernard-Soulier Syndrome (BSS) มีปัญหา adhesion",
        reviewTags: ["GPIb-IX-V", "platelet-adhesion", "BSS"]
      },
      {
        id: "5-3",
        type: "mcq",
        question: "Receptor ใดที่จับกับ Collagen โดยตรงบน platelet?",
        options: [
          { id: "a", text: "GPIIb/IIIa (αIIbβ3)" },
          { id: "b", text: "GPIb/IX/V" },
          { id: "c", text: "GPVI และ GPIa/IIa (α2β1)" },
          { id: "d", text: "P2Y1 และ P2Y12" }
        ],
        correctAnswer: "c",
        hint1: "Collagen receptors = GPVI (สำคัญใน activation) + GPIa/IIa (adhesion)",
        hint2Removes: ["a", "d"],
        explanation: "✅ GPVI จับ collagen → signal transduction เพื่อ platelet activation | GPIa/IIa (Integrin α2β1) จับ collagen → ช่วย adhesion | GPIb/IX/V จับ vWF ไม่ใช่ collagen โดยตรง | GPIIb/IIIa จับ fibrinogen",
        reviewTags: ["GPVI", "collagen-receptor", "platelet-adhesion"]
      }
    ]
  }
];
