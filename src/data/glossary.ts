export interface GlossaryTerm {
  term: string;
  termTh: string;
  definition: string;
  category: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "vWF (von Willebrand Factor)",
    termTh: "แฟคเตอร์ฟอนวิลเลอบรานด์",
    definition: "โปรตีนขนาดใหญ่ที่สร้างจาก endothelial cells และ megakaryocytes ทำหน้าที่เป็น 'สะพาน' เชื่อม GPIb/IX/V บน platelet กับ collagen ที่ผนังหลอดเลือด สำคัญมากใน high shear stress (เลือดไหลเร็ว) นอกจากนี้ยังพา Factor VIII ในกระแสเลือด",
    category: "โปรตีนสำคัญ"
  },
  {
    term: "GPIb/IX/V",
    termTh: "ไกลโคโปรตีน Ib/IX/V",
    definition: "Receptor complex บนผิว platelet ทำหน้าที่จับกับ vWF เพื่อเริ่ม platelet adhesion โดยเฉพาะในสภาวะ high shear artery (เลือดไหลเร็ว) ถ้าขาดจะเกิดโรค Bernard-Soulier Syndrome (BSS) ที่มี giant platelets และเลือดออกง่าย",
    category: "Receptor"
  },
  {
    term: "GPVI",
    termTh: "ไกลโคโปรตีน VI",
    definition: "Receptor บน platelet ที่จับกับ collagen โดยตรง เป็น adhesion receptor สำคัญที่ช่วยเสริมการยึดเกาะและกระตุ้น signal transduction เมื่อสัมผัส collagen ในชั้น subendothelium",
    category: "Receptor"
  },
  {
    term: "GPIIb/IIIa (αIIbβ3)",
    termTh: "ไกลโคโปรตีน IIb/IIIa",
    definition: "Receptor สำคัญที่สุดสำหรับ platelet aggregation จับกับ fibrinogen เพื่อเชื่อม platelet แต่ละตัวเข้าด้วยกันสร้าง platelet plug ถ้าขาดจะเกิดโรค Glanzmann Thrombasthenia (GT) ที่ไม่สามารถ aggregate ได้",
    category: "Receptor"
  },
  {
    term: "ADP (Adenosine Diphosphate)",
    termTh: "อะดีโนซีน ไดฟอสเฟต",
    definition: "สารสำคัญที่เก็บใน dense granules ของ platelet เมื่อหลั่งออกมาจะจับกับ P2Y1 (→ shape change) และ P2Y12 receptor (→ sustained aggregation) บน platelet อื่น ทำให้เกิด positive feedback amplification ของ platelet aggregation",
    category: "Mediator"
  },
  {
    term: "TxA2 (Thromboxane A2)",
    termTh: "ทรอมบอกเซน เอ2",
    definition: "สารที่สังเคราะห์โดย platelet จาก arachidonic acid ผ่าน COX-1 → thromboxane synthase มีฤทธิ์ 2 อย่าง: 1) กระตุ้น platelet aggregation (amplify) 2) ทำให้หลอดเลือดหดตัว (vasoconstriction) | Aspirin ยับยั้ง COX-1 → ลด TxA2",
    category: "Mediator"
  },
  {
    term: "PGI2 (Prostacyclin)",
    termTh: "โพรสทาไซคลิน",
    definition: "สารที่สังเคราะห์โดย endothelial cells จาก arachidonic acid ผ่าน prostacyclin synthase มีฤทธิ์ตรงข้าม TxA2 คือ: 1) ยับยั้ง platelet aggregation 2) ทำให้หลอดเลือดขยาย (vasodilation) กลไก: เพิ่ม cAMP → ลด Ca2+ → ลด platelet activation",
    category: "Mediator"
  },
  {
    term: "Ca2+ (Calcium Ion)",
    termTh: "แคลเซียมไอออน",
    definition: "Second messenger สำคัญมากใน platelet activation เก็บใน Dense Tubular System (DTS) เมื่อ platelet ถูกกระตุ้น Ca2+ ถูกปล่อยออกมาเพื่อ: 1) กระตุ้น actin-myosin → shape change 2) กระตุ้น degranulation 3) Activate GPIIb/IIIa 4) กระตุ้น coagulation",
    category: "Mediator"
  },
  {
    term: "Platelet Plug",
    termTh: "จุกเกล็ดเลือด / Primary Platelet Plug",
    definition: "กลุ่มเกล็ดเลือดที่รวมตัวกันอุดรูรั่วของหลอดเลือด เป็นผลลัพธ์ของ primary hemostasis ประกอบด้วย platelet ที่ยึดติดกันผ่าน fibrinogen-GPIIb/IIIa เป็น loose platelet plug ที่ยังไม่แข็งแรง ต้องได้รับการเสริมแรงจาก fibrin จาก secondary hemostasis",
    category: "กระบวนการ"
  },
  {
    term: "Alpha Granules (α-granules)",
    termTh: "แกรนูลอัลฟา",
    definition: "ออร์แกเนลล์ขนาดใหญ่ที่สุดใน platelet บรรจุโปรตีนสำคัญ: Fibrinogen, vWF, Factor V, Factor XI, PDGF, TGF-β, PF4, Thrombospondin, Fibronectin ช่วยใน adhesion, coagulation และ wound healing",
    category: "โครงสร้าง"
  },
  {
    term: "Dense Granules (δ-granules)",
    termTh: "แกรนูลหนาแน่น",
    definition: "ออร์แกเนลล์ที่บรรจุสาร non-protein: ADP, ATP, Serotonin (5-HT), Ca2+ เมื่อหลั่งออกมาจะ amplify platelet activation และ aggregation (positive feedback) ATP:ADP ใน dense granule = 2:3",
    category: "โครงสร้าง"
  },
  {
    term: "Hemostasis",
    termTh: "การห้ามเลือด",
    definition: "กระบวนการที่ทำให้เลือดหยุดไหลหลังจากหลอดเลือดได้รับบาดเจ็บ ต้องหยุดเลือดได้อย่างมีประสิทธิภาพและจำกัดเฉพาะบริเวณที่บาดเจ็บ ประกอบด้วย 4 ระยะ: Vasoconstriction, Primary hemostasis, Secondary hemostasis, Fibrinolysis",
    category: "นิยาม"
  },
  {
    term: "Thrombocytopenia",
    termTh: "ภาวะเกล็ดเลือดต่ำ",
    definition: "ภาวะที่มี platelet count < 140 x10⁹/L แบ่งความรุนแรง: Severe < 20 x10⁹/L, Moderate 20-70 x10⁹/L, Mild >70 x10⁹/L สาเหตุ: decreased production, increased destruction, dilutional loss, abnormal distribution",
    category: "โรค"
  },
  {
    term: "LTA (Light Transmission Aggregometry)",
    termTh: "การตรวจการรวมกลุ่มของเกล็ดเลือดด้วยแสง",
    definition: "Gold standard สำหรับตรวจ platelet function ใช้ citrated PRP เป็นตัวอย่าง หลักการ: PRP ขุ่น (0% transmission) เมื่อเติม agonist platelet aggregate → ใสขึ้น (↑ light transmission = ↑ aggregation) ใช้ agonists: ADP, collagen, epinephrine, ristocetin, arachidonic acid",
    category: "การตรวจ"
  }
];
