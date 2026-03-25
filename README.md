# 🩸 Mission Hemostasis: ภารกิจหยุดเลือด

เกมการศึกษาเกี่ยวกับ Primary Hemostasis สำหรับนักศึกษาเทคนิคการแพทย์

## 🎮 เนื้อหาเกม

- **10 ด่าน** ครอบคลุมเนื้อหา Primary Hemostasis ทั้งหมด
- **5 ประเภทคำถาม**: MCQ, Multi-select, Ordering, Matching, Scenario
- **2 โหมด**: Normal (ไม่มีจับเวลา) และ Challenge (30 วิ/ข้อ)
- **Glossary** คำศัพท์สำคัญ 14 คำ
- **ระบบ Hint** 2 ระดับ

## 🚀 การติดตั้งและรัน

```bash
# ติดตั้ง dependencies
npm install

# รันในโหมด development
npm run dev

# Build สำหรับ production
npm run build

# Preview build
npm run preview
```

## 📦 Deploy บน GitHub Pages

1. สร้าง repository บน GitHub ชื่อ `mission-hemostasis`

2. Push code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mission-hemostasis.git
git push -u origin main
```

3. ไปที่ Settings → Pages → Source: GitHub Actions

4. สร้างไฟล์ `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

5. เกมจะอยู่ที่: `https://YOUR_USERNAME.github.io/mission-hemostasis/`

> **Note**: `vite.config.ts` มี `base: '/mission-hemostasis/'` อยู่แล้ว

## 📚 เนื้อหาที่ครอบคลุม

| ด่าน | หัวข้อ |
|------|--------|
| 1 | ความหมายและระยะของ Hemostasis |
| 2 | โครงสร้างผนังหลอดเลือด (Intima/Media/Adventitia) |
| 3 | โครงสร้าง Platelet (Zones & Granules) |
| 4 | Vasoconstriction, TxA2, PGI2 |
| 5 | Platelet Adhesion (GPIb/IX/V, vWF, GPVI) |
| 6 | Platelet Activation (ADP, Ca2+, P2Y12) |
| 7 | Platelet Aggregation (GPIIb/IIIa, GT, BSS) |
| 8 | Platelet Disorders (ITP, Thrombocytopenia, Aspirin) |
| 9 | Lab Tests (LTA, Flow cytometry) |
| 10 | 🔥 Boss: Clinical Case (BSS comprehensive) |

## 🛠 Tech Stack

- React 18 + TypeScript
- Vite 5
- CSS Custom Properties (no external UI library)
- Font: Sarabun + Prompt (Google Fonts)
