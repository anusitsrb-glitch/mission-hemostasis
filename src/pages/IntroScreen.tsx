interface Props {
  onNext: () => void;
  onGlossary: () => void;
}

export function IntroScreen({ onNext, onGlossary }: Props) {
  return (
    <div className="screen intro-screen">
      <div className="intro-bg">
        <div className="vessel-bg"></div>
      </div>
      <div className="intro-content">
        <div className="intro-header">
          <div className="intro-icon">🩸</div>
          <h1 className="intro-title">Mission Hemostasis</h1>
          <p className="intro-subtitle">ภารกิจหยุดเลือด</p>
        </div>

        <div className="intro-card">
          <h2>🎮 เกี่ยวกับเกมนี้</h2>
          <p>คุณคือ <strong>นักเทคนิคการแพทย์ฝึกหัด</strong> ที่ถูกย่อตัวเข้าไปในหลอดเลือดมนุษย์!</p>
          <p>ภารกิจของคุณคือเรียนรู้กลไก <strong>Primary Hemostasis</strong> ผ่าน 10 ด่านผจญภัย</p>

          <div className="intro-features">
            <div className="feature-item">🏆 <span>10 ภารกิจหลากหลาย</span></div>
            <div className="feature-item">💡 <span>ระบบ hint 2 ระดับ</span></div>
            <div className="feature-item">📊 <span>สรุปผลและวิเคราะห์จุดอ่อน</span></div>
            <div className="feature-item">⏱️ <span>โหมด Challenge มีจับเวลา</span></div>
          </div>
        </div>

        <div className="intro-topics">
          <h3>📚 เนื้อหาที่ครอบคลุม</h3>
          <div className="topics-grid">
            {['Hemostasis', 'Vasoconstriction', 'Platelet Adhesion', 'Platelet Activation', 'Platelet Aggregation', 'Vessel Wall', 'Platelet Structure', 'vWF / Receptors', 'Platelet Disorders', 'Lab Diagnosis'].map(t => (
              <span key={t} className="topic-tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="intro-actions">
          <button className="btn btn-primary btn-large" onClick={onNext}>
            🚀 เริ่มภารกิจ!
          </button>
          <button className="btn btn-outline" onClick={onGlossary}>
            📖 คำศัพท์สำคัญ
          </button>
        </div>
      </div>
    </div>
  );
}
