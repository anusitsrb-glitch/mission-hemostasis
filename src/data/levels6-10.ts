import { Level } from '../types';

export const levels6to10: Level[] = [
  // ==================== LEVEL 6 ====================
  {
    id: 6,
    title: "Platelet Activation: ปลุกนักรบ",
    titleEn: "Platelet Activation: Awakening the Warriors",
    topic: "platelet-activation",
    caseIntro: "⚡ Platelet ยึดติดแล้ว! ตอนนี้มันต้องถูกกระตุ้น (Activate) เพื่อปล่อยสารสำคัญออกมาดึงดูดเกล็ดเลือดตัวอื่นๆ ให้มาช่วย เหมือนการส่งสัญญาณ SOS",
    questions: [
      {
        id: "6-1",
        type: "mcq",
        question: "ขณะ Platelet Activation สาร ADP ที่หลั่งออกมาจาก dense granule จับกับ receptor ใดบน platelet อื่น?",
        options: [
          { id: "a", text: "GPIb/IX/V receptor" },
          { id: "b", text: "P2Y1 และ P2Y12 receptor" },
          { id: "c", text: "TP receptor (TxA2 receptor)" },
          { id: "d", text: "PAR-1 receptor" }
        ],
        correctAnswer: "b",
        hint1: "ADP = adenosine diphosphate จับกับ P2Y receptors (purinergic receptors)",
        hint2Removes: ["a", "c"],
        explanation: "✅ ADP จาก dense granules จับกับ P2Y1 (→ shape change) และ P2Y12 receptor (→ sustained aggregation, amplification) | P2Y12 สำคัญมากสำหรับ sustained aggregation | Clopidogrel ยับยั้ง P2Y12",
        reviewTags: ["platelet-activation", "ADP", "P2Y12"]
      },
      {
        id: "6-2",
        type: "mcq",
        question: "Ca2+ มีบทบาทอย่างไรใน platelet activation?",
        options: [
          { id: "a", text: "เป็น first messenger กระตุ้น receptor บน platelet surface" },
          { id: "b", text: "เป็น second messenger กระตุ้น actin-myosin, degranulation และ GPIIb/IIIa activation" },
          { id: "c", text: "ยับยั้ง platelet aggregation เมื่อ Ca2+ สูงขึ้น" },
          { id: "d", text: "ไม่มีบทบาทใน platelet activation" }
        ],
        correctAnswer: "b",
        hint1: "Ca2+ ถูกปล่อยจาก Dense Tubular System (DTS) เป็น 'สัญญาณภายใน'",
        hint2Removes: ["c", "d"],
        explanation: "✅ Ca2+ เป็น second messenger สำคัญมากใน platelet: 1) กระตุ้น actin-myosin → shape change 2) กระตุ้น degranulation (ปล่อย ADP, serotonin) 3) Activate GPIIb/IIIa 4) ช่วย platelet aggregation 5) Phospholipid exposure (PS)",
        reviewTags: ["calcium", "platelet-activation", "second-messenger"]
      },
      {
        id: "6-3",
        type: "multi-select",
        question: "เลือกสาร ALL ที่หลั่งออกมาระหว่าง Platelet Activation และช่วยกระตุ้น platelet เพิ่มเติม",
        options: [
          { id: "a", text: "ADP (จาก dense granules)" },
          { id: "b", text: "TxA2 (Thromboxane A2)" },
          { id: "c", text: "PGI2 (Prostacyclin)" },
          { id: "d", text: "Serotonin (5-HT)" },
          { id: "e", text: "Ca2+ (จาก dense granules)" },
          { id: "f", text: "EDRF/NO (Nitric Oxide)" }
        ],
        correctAnswer: JSON.stringify(["a", "b", "d", "e"]),
        hint1: "PGI2 และ NO ยับยั้ง platelet ส่วนสาร activate คือ ADP, TxA2, Serotonin, Ca2+",
        hint2Removes: [],
        explanation: "✅ สารที่กระตุ้น platelet: ADP (dense granule), TxA2 (จาก arachidonic acid), Serotonin (dense granule), Ca2+ (dense granule) | PGI2 และ NO เป็นตัว INHIBIT platelet จาก endothelial cells",
        reviewTags: ["platelet-activation", "dense-granule", "TxA2"]
      }
    ]
  },

  // ==================== LEVEL 7 ====================
  {
    id: 7,
    title: "Platelet Aggregation: รวมพลังสร้าง Plug",
    titleEn: "Platelet Aggregation: United We Clot",
    topic: "platelet-aggregation",
    caseIntro: "🔗 เกล็ดเลือดหลายตัวมารวมกัน ต้องการ 'กาว' คือ Fibrinogen ที่เชื่อม GPIIb/IIIa ระหว่างเซลล์ เหมือนสร้างเขื่อนกั้นน้ำจากก้อนหิน!",
    questions: [
      {
        id: "7-1",
        type: "mcq",
        question: "GPIIb/IIIa (αIIbβ3) มีหน้าที่หลักอะไรใน platelet aggregation?",
        options: [
          { id: "a", text: "จับกับ vWF เพื่อทำ platelet adhesion" },
          { id: "b", text: "จับกับ fibrinogen เพื่อเชื่อม platelet แต่ละตัวเข้าด้วยกัน" },
          { id: "c", text: "จับกับ collagen เพื่อ signal transduction" },
          { id: "d", text: "จับกับ ADP เพื่อ sustained aggregation" }
        ],
        correctAnswer: "b",
        hint1: "GPIIb/IIIa = receptor สำหรับ aggregation (ขั้นตอนสุดท้าย)",
        hint2Removes: ["a", "c"],
        explanation: "✅ GPIIb/IIIa (Integrin αIIbβ3) จับกับ Fibrinogen ซึ่งเป็น 'สะพาน' เชื่อมระหว่าง platelet แต่ละตัว ทำให้เกิด platelet plug | ถ้า GPIIb/IIIa ขาด/ผิดปกติ → Glanzmann Thrombasthenia ไม่สามารถ aggregate ได้",
        reviewTags: ["GPIIb-IIIa", "platelet-aggregation", "fibrinogen"]
      },
      {
        id: "7-2",
        type: "mcq",
        question: "ผู้ป่วยเป็น Glanzmann Thrombasthenia (GT) มีผลการตรวจ LTA อย่างไร?",
        options: [
          { id: "a", text: "ไม่มี aggregation กับ ristocetin เท่านั้น" },
          { id: "b", text: "ไม่มี aggregation กับ ADP, collagen, epinephrine แต่ยังมีกับ ristocetin" },
          { id: "c", text: "ไม่มี aggregation กับสาร agonist ทุกชนิด รวมถึง ristocetin" },
          { id: "d", text: "Aggregation ปกติกับทุก agonist" }
        ],
        correctAnswer: "b",
        hint1: "GT = ขาด GPIIb/IIIa = ขาด receptor สำหรับ fibrinogen ส่งผลต่อ final aggregation",
        hint2Removes: ["c", "d"],
        explanation: "✅ Glanzmann Thrombasthenia (GT) ขาด GPIIb/IIIa → ไม่สามารถจับ fibrinogen ได้ → LTA: ไม่มี aggregation กับ ADP, collagen, arachidonic acid, epinephrine แต่ RISTOCEIN ยังทำได้ เพราะ Ristocetin ทดสอบผ่าน GPIb/IX/V ไม่ใช่ GPIIb/IIIa",
        reviewTags: ["Glanzmann", "GPIIb-IIIa", "LTA"]
      },
      {
        id: "7-3",
        type: "mcq",
        question: "Bernard-Soulier Syndrome (BSS) เกิดจากความผิดปกติของอะไร และมีผล LTA อย่างไร?",
        options: [
          { id: "a", text: "ขาด GPIIb/IIIa → ไม่มี aggregation กับ ADP, collagen" },
          { id: "b", text: "ขาด GPIb/IX/V → ไม่มี aggregation เฉพาะกับ ristocetin" },
          { id: "c", text: "ขาด GPVI → ไม่มี aggregation เฉพาะกับ collagen" },
          { id: "d", text: "ขาด vWF → ไม่มี aggregation กับทุก agonist" }
        ],
        correctAnswer: "b",
        hint1: "BSS = Bernard-Soulier = ปัญหา adhesion (ขั้นแรก) ≠ GT ที่เป็นปัญหา aggregation",
        hint2Removes: ["a", "c"],
        explanation: "✅ BSS ขาด GPIb/IX/V → platelet ไม่สามารถจับ vWF ได้ → ปัญหาที่ adhesion | LTA: ไม่มี aggregation เฉพาะกับ ristocetin (ซึ่งทดสอบ GPIb/IX/V - vWF interaction) แต่ aggregate ได้กับ ADP, collagen, epinephrine ปกติ",
        reviewTags: ["BSS", "GPIb-IX-V", "LTA", "platelet-adhesion"]
      }
    ]
  },

  // ==================== LEVEL 8 ====================
  {
    id: 8,
    title: "ความผิดปกติ: เมื่อระบบล้มเหลว",
    titleEn: "Disorders: When the System Fails",
    topic: "platelet-disorders",
    caseIntro: "🏥 ผู้ป่วยหลายรายถูกส่งเข้ามาพร้อมอาการเลือดออกผิดปกติ คุณต้องวินิจฉัยว่าปัญหาอยู่ที่หลอดเลือดหรือเกล็ดเลือด และเชื่อมโยงกับ lab test ที่เหมาะสม",
    questions: [
      {
        id: "8-1",
        type: "mcq",
        question: "Petechiae (จุดเลือดออกขนาด 1-2 mm) มักบ่งบอกถึงความผิดปกติของอะไร?",
        options: [
          { id: "a", text: "Coagulation factors (hemophilia)" },
          { id: "b", text: "Platelet หรือ vascular abnormality" },
          { id: "c", text: "Fibrinolysis มากเกินไป" },
          { id: "d", text: "Complement system ผิดปกติ" }
        ],
        correctAnswer: "b",
        hint1: "Petechiae = จุดเลือดเล็กมาก กดไม่จาง = ปัญหาเส้นเลือดฝอยหรือเกล็ดเลือด",
        hint2Removes: ["c", "d"],
        explanation: "✅ Petechiae (จุด 1-2 mm) มักเกิดจาก platelet disorder หรือ vascular abnormality เช่น thrombocytopenia, platelet dysfunction, vasculitis | Hemophilia (coagulation factor defect) มักทำให้เกิด deep tissue bleeding, hemarthrosis ไม่ใช่ petechiae",
        reviewTags: ["petechiae", "platelet-disorder", "clinical-signs"]
      },
      {
        id: "8-2",
        type: "scenario",
        question: "ผู้ป่วยหญิงอายุ 25 ปี มีจุดเลือดออกที่ผิวหนัง (petechiae) platelet count 15 x10⁹/L (ต่ำมาก) bone marrow ปกติ/เพิ่มขึ้น ไม่มี pancytopenia อาจเป็นโรคอะไร?",
        options: [
          { id: "a", text: "Aplastic anemia (decreased production)" },
          { id: "b", text: "Immune Thrombocytopenic Purpura (ITP) - increased destruction" },
          { id: "c", text: "Leukemia (infiltration ของ bone marrow)" },
          { id: "d", text: "Sequestration จาก splenomegaly" }
        ],
        correctAnswer: "b",
        hint1: "Bone marrow ปกติ/เพิ่ม + platelet ต่ำ = ถูกทำลาย ไม่ใช่ผลิตน้อย",
        hint2Removes: ["a", "c"],
        explanation: "✅ ITP (Immune Thrombocytopenic Purpura) = platelet ถูกทำลายโดย immune system (increased destruction) | Bone marrow มี megakaryocyte ปกติหรือเพิ่มขึ้น (compensate) | Aplastic anemia = pancytopenia + bone marrow hypoplasia",
        reviewTags: ["ITP", "thrombocytopenia", "platelet-disorder"]
      },
      {
        id: "8-3",
        type: "mcq",
        question: "Pseudothrombocytopenia เกิดจากอะไรมากที่สุด และแก้ไขอย่างไร?",
        options: [
          { id: "a", text: "เกล็ดเลือดแตกสลาย → ให้ platelet transfusion" },
          { id: "b", text: "EDTA-dependent antibody ทำให้ platelet clumping → เปลี่ยนหลอดเป็น sodium citrate/heparin" },
          { id: "c", text: "ไขกระดูกสร้างเกล็ดเลือดน้อย → ให้ TPO agonist" },
          { id: "d", text: "ม้ามกักเก็บเกล็ดเลือด → ทำ splenectomy" }
        ],
        correctAnswer: "b",
        hint1: "Pseudo = ปลอม → เกล็ดเลือดจริงๆ ปกติ แต่เครื่องนับผิด",
        hint2Removes: ["a", "c"],
        explanation: "✅ Pseudothrombocytopenia มักเกิดจาก EDTA-dependent antibody ทำให้ platelet clumping (จับกลุ่ม) → เครื่อง CBC นับเป็นก้อน → platelet count ต่ำปลอม | แก้: ดู peripheral smear → เห็น platelet clumping / เปลี่ยนหลอดเป็น sodium citrate หรือ heparin",
        reviewTags: ["pseudothrombocytopenia", "EDTA", "platelet-count"]
      },
      {
        id: "8-4",
        type: "mcq",
        question: "Aspirin มีกลไกยับยั้ง platelet aggregation อย่างไร?",
        options: [
          { id: "a", text: "ยับยั้ง P2Y12 receptor → ลด ADP-mediated activation" },
          { id: "b", text: "ยับยั้ง COX-1 enzyme → ลดการสร้าง TxA2 → ลด platelet aggregation" },
          { id: "c", text: "ยับยั้ง GPIIb/IIIa → ลด fibrinogen binding" },
          { id: "d", text: "เพิ่ม PGI2 → ยับยั้ง platelet aggregation" }
        ],
        correctAnswer: "b",
        hint1: "Aspirin → COX inhibitor → ลด arachidonic acid pathway",
        hint2Removes: ["a", "c"],
        explanation: "✅ Aspirin ยับยั้ง COX-1 (cyclooxygenase-1) แบบ irreversible → หยุดการสร้าง TxA2 จาก arachidonic acid → ลด platelet aggregation | Clopidogrel ยับยั้ง P2Y12 | Abciximab ยับยั้ง GPIIb/IIIa",
        reviewTags: ["aspirin", "COX-1", "TxA2", "antiplatelet"]
      }
    ]
  },

  // ==================== LEVEL 9 ====================
  {
    id: 9,
    title: "Lab Tests: เครื่องมือนักสืบ",
    titleEn: "Lab Tests: The Detective's Toolkit",
    topic: "lab-tests",
    caseIntro: "🔭 คุณกลับมาสู่ห้องปฏิบัติการ! ถึงเวลาใช้ความรู้ทั้งหมดในการเลือกและแปลผลการตรวจ laboratory เพื่อวินิจฉัยความผิดปกติของ primary hemostasis",
    questions: [
      {
        id: "9-1",
        type: "mcq",
        question: "Light Transmission Aggregometry (LTA) เป็น gold standard สำหรับอะไร และใช้ตัวอย่างชนิดใด?",
        options: [
          { id: "a", text: "ตรวจ coagulation factors โดยใช้ whole blood" },
          { id: "b", text: "ตรวจ platelet function โดยใช้ citrated platelet rich plasma (PRP)" },
          { id: "c", text: "ตรวจ fibrinolysis โดยใช้ serum" },
          { id: "d", text: "ตรวจ vascular integrity โดยใช้ urine" }
        ],
        correctAnswer: "b",
        hint1: "LTA = Light Transmission ↑ = Platelet clump together = ↑ Aggregation",
        hint2Removes: ["a", "c"],
        explanation: "✅ LTA (Light Transmission Aggregometry) = gold standard สำหรับ platelet function | ตัวอย่าง: citrated platelet rich plasma (PRP) | หลักการ: PRP ขุ่น (0% transmission), เมื่อ platelet aggregate → ใสขึ้น (↑ light transmission = ↑ aggregation)",
        reviewTags: ["LTA", "platelet-function-test"]
      },
      {
        id: "9-2",
        type: "matching",
        question: "จับคู่ Agonist กับ Receptor/Pathway ที่ทดสอบ",
        pairs: [
          { left: "Ristocetin", right: "vWF - GPIb/IX/V pathway" },
          { left: "ADP", right: "P2Y receptor pathway" },
          { left: "Arachidonic acid", right: "COX-1 → TxA2 pathway" }
        ],
        options: [
          { id: "risc-vwf", text: "vWF - GPIb/IX/V pathway" },
          { id: "adp-p2y", text: "P2Y receptor pathway" },
          { id: "aa-cox", text: "COX-1 → TxA2 pathway" },
          { id: "wrong", text: "GPIIb/IIIa - fibrinogen pathway" }
        ],
        correctAnswer: JSON.stringify({
          "Ristocetin": "vWF - GPIb/IX/V pathway",
          "ADP": "P2Y receptor pathway",
          "Arachidonic acid": "COX-1 → TxA2 pathway"
        }),
        hint1: "Ristocetin ใช้วินิจฉัย vWD และ BSS | Arachidonic acid ตรวจ aspirin effect",
        hint2Removes: [],
        explanation: "✅ Ristocetin → ทดสอบ GPIb/IX/V-vWF (ผิดใน BSS และ vWD) | ADP → P2Y receptor (storage pool defect) | Arachidonic acid → COX-1 pathway (ผิดถ้ากิน aspirin) | Collagen → GPVI pathway",
        reviewTags: ["LTA", "agonists", "platelet-disorders"]
      },
      {
        id: "9-3",
        type: "mcq",
        question: "Flow cytometry ใช้วินิจฉัยโรคใดจากการตรวจ platelet glycoprotein?",
        options: [
          { id: "a", text: "GPIIb/IIIa ↓ → Glanzmann Thrombasthenia | GPIb/IX/V ↓ → Bernard-Soulier Syndrome" },
          { id: "b", text: "GPVI ↓ → Glanzmann Thrombasthenia | GPIa/IIa ↓ → Bernard-Soulier Syndrome" },
          { id: "c", text: "P2Y12 ↓ → ITP | PAR-1 ↓ → von Willebrand disease" },
          { id: "d", text: "GPIb/IX/V ↓ → Glanzmann | GPIIb/IIIa ↓ → Bernard-Soulier" }
        ],
        correctAnswer: "a",
        hint1: "GT = aggregation defect → GPIIb/IIIa | BSS = adhesion defect → GPIb/IX/V",
        hint2Removes: ["b", "c"],
        explanation: "✅ Flow cytometry: GPIIb/IIIa ↓ → Glanzmann Thrombasthenia (GT) - aggregation defect | GPIb/IX/V ↓ → Bernard-Soulier Syndrome (BSS) - adhesion defect | ยังใช้ตรวจ platelet-associated IgG เพื่อวินิจฉัย ITP",
        reviewTags: ["flow-cytometry", "GT", "BSS", "lab-diagnosis"]
      }
    ]
  },

  // ==================== LEVEL 10 - BOSS ====================
  {
    id: 10,
    title: "🔥 Boss Level: คดีปริศนาเลือดไหลไม่หยุด",
    titleEn: "BOSS: The Mystery Bleeding Case",
    topic: "comprehensive-case",
    caseIntro: "🚨 BOSS LEVEL! ผู้ป่วยชายอายุ 8 ปี ถูกส่งมาด้วยเลือดออกไม่หยุดหลังถอนฟัน มีประวัติเลือดออกง่ายมาตั้งแต่เด็ก มีจุดเลือดออกที่ผิวหนัง (petechiae) platelet count ต่ำ คุณต้องวินิจฉัยและตัดสินใจหลายขั้นตอน!",
    questions: [
      {
        id: "10-1",
        type: "scenario",
        question: "🔴 STEP 1: ผู้ป่วยมี petechiae + เลือดออกง่าย + platelet count 18 x10⁹/L อาการนี้บ่งชี้ถึงความผิดปกติของระบบใด?",
        options: [
          { id: "a", text: "Primary hemostasis (platelet/vascular) - เพราะมี petechiae และ platelet ต่ำ" },
          { id: "b", text: "Secondary hemostasis (coagulation) - เพราะมี deep tissue bleeding" },
          { id: "c", text: "Fibrinolysis เกินปกติ" },
          { id: "d", text: "ระบบภูมิคุ้มกันบกพร่อง" }
        ],
        correctAnswer: "a",
        hint1: "Petechiae = อาการของ primary hemostasis abnormality ไม่ใช่ coagulation factor defect",
        hint2Removes: ["b", "c"],
        explanation: "✅ STEP 1: Petechiae + platelet ต่ำ = Primary hemostasis disorder | Coagulation factor defect (เช่น hemophilia) มักทำให้เกิด deep bleeding, hemarthrosis ไม่ใช่ petechiae ขนาดเล็กๆ",
        reviewTags: ["clinical-diagnosis", "primary-hemostasis", "petechiae"]
      },
      {
        id: "10-2",
        type: "scenario",
        question: "🔴 STEP 2: Peripheral blood smear พบ Giant platelets จำนวนมาก Bone marrow มี megakaryocytes ปกติ/เพิ่มขึ้น LTA: ไม่มี aggregation เฉพาะกับ ristocetin แต่ aggregation ปกติกับ ADP, collagen | คุณสงสัยโรคอะไร?",
        options: [
          { id: "a", text: "Immune Thrombocytopenic Purpura (ITP)" },
          { id: "b", text: "Glanzmann Thrombasthenia (GT)" },
          { id: "c", text: "Bernard-Soulier Syndrome (BSS)" },
          { id: "d", text: "von Willebrand Disease (vWD)" }
        ],
        correctAnswer: "c",
        hint1: "Giant platelets + ไม่ aggregate กับ ristocetin = ปัญหาที่ GPIb/IX/V",
        hint2Removes: ["a", "b"],
        explanation: "✅ Bernard-Soulier Syndrome (BSS): Giant platelets + thrombocytopenia + ขาด GPIb/IX/V → ไม่สามารถจับ vWF → LTA ไม่มี aggregation กับ ristocetin (ซึ่งทดสอบ GPIb/IX/V - vWF) แต่ aggregation ปกติกับ ADP, collagen เพราะ GPIIb/IIIa ยังทำงานได้",
        reviewTags: ["BSS", "GPIb-IX-V", "clinical-case", "LTA"]
      },
      {
        id: "10-3",
        type: "scenario",
        question: "🔴 STEP 3: Flow cytometry ยืนยัน GPIb/IX/V ลดลงมาก ยืนยัน BSS แพทย์จะรักษาอย่างไร? (เลือกแนวทางที่ถูกต้องที่สุด)",
        options: [
          { id: "a", text: "ให้ Aspirin เพื่อป้องกัน thrombosis" },
          { id: "b", text: "Platelet transfusion เมื่อเลือดออกรุนแรง + หลีกเลี่ยง antiplatelet drugs" },
          { id: "c", text: "ให้ Warfarin เพื่อป้องกันการแข็งตัว" },
          { id: "d", text: "ไม่ต้องรักษา เพราะโรคหายเองได้" }
        ],
        correctAnswer: "b",
        hint1: "BSS = platelet dysfunction → platelet transfusion เพื่อเสริม function | ห้ามใช้ antiplatelet",
        hint2Removes: ["a", "c"],
        explanation: "✅ การรักษา BSS: Platelet transfusion เมื่อเลือดออกรุนแรง | หลีกเลี่ยง aspirin, NSAIDs, clopidogrel (antiplatelet drugs) | อาจพิจารณา recombinant FVIIa | Gene therapy ยังอยู่ในการศึกษา | การให้ aspirin จะทำให้อาการแย่ลงมาก",
        reviewTags: ["BSS", "treatment", "antiplatelet", "comprehensive"]
      },
      {
        id: "10-4",
        type: "multi-select",
        question: "🔴 STEP 4 - FINAL: เลือก ALL ข้อที่อธิบาย pathophysiology ของ BSS ได้ถูกต้อง",
        options: [
          { id: "a", text: "ขาด GPIb/IX/V complex บน platelet surface" },
          { id: "b", text: "ไม่สามารถจับ vWF ได้ในภาวะ high shear stress" },
          { id: "c", text: "ขาด GPIIb/IIIa → ไม่สามารถ aggregate ได้" },
          { id: "d", text: "Platelet adhesion บกพร่อง เป็นขั้นตอนแรกของ primary hemostasis" },
          { id: "e", text: "Platelet มีขนาดใหญ่ผิดปกติ (Giant platelets)" },
          { id: "f", text: "LTA ผิดปกติเฉพาะกับ ristocetin" }
        ],
        correctAnswer: JSON.stringify(["a", "b", "d", "e", "f"]),
        hint1: "BSS = adhesion defect ไม่ใช่ aggregation defect (ข้อ c ผิด - นั่นคือ GT)",
        hint2Removes: [],
        explanation: "✅ BSS pathophysiology: ขาด GPIb/IX/V (a✓) → ไม่จับ vWF ใน high shear (b✓) → platelet adhesion บกพร่อง (d✓) → มี giant platelets (e✓) → LTA ผิดกับ ristocetin (f✓) | ข้อ c ผิด เพราะ GPIIb/IIIa ปกติใน BSS (นั่นคือ GT ไม่ใช่ BSS)",
        reviewTags: ["BSS", "comprehensive-review", "primary-hemostasis"]
      }
    ]
  }
];
