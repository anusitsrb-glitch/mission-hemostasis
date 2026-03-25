interface Props {
  onNext: () => void;
}

export function HowToPlayScreen({ onNext }: Props) {
  return (
    <div className="screen howtoplay-screen">
      <div className="howtoplay-content">
        <h1 className="howtoplay-title">📋 วิธีเล่น</h1>

        <div className="rules-grid">
          <div className="rule-card">
            <div className="rule-icon">❤️</div>
            <h3>ระบบ HP</h3>
            <p>เริ่มต้น 5 HP ตอบผิด HP -1 HP หมด = Game Over</p>
          </div>
          <div className="rule-card">
            <div className="rule-icon">⭐</div>
            <h3>คะแนน</h3>
            <ul>
              <li>✅ ตอบถูก +10</li>
              <li>🎯 ไม่ใช้ hint +5</li>
              <li>💡 ใช้ hint ระดับ 2 -3</li>
              <li>❌ ตอบผิด -5</li>
            </ul>
          </div>
          <div className="rule-card">
            <div className="rule-icon">💡</div>
            <h3>ระบบ Hint</h3>
            <p><strong>Hint 1:</strong> ให้คำใบ้แนวคิด</p>
            <p><strong>Hint 2:</strong> ตัดตัวเลือกผิด (-3 คะแนน)</p>
          </div>
          <div className="rule-card">
            <div className="rule-icon">🎮</div>
            <h3>ประเภทคำถาม</h3>
            <ul>
              <li>MCQ เลือกคำตอบ</li>
              <li>Multi-select เลือกหลายข้อ</li>
              <li>Ordering เรียงลำดับ</li>
              <li>Matching จับคู่</li>
              <li>Scenario กรณีศึกษา</li>
            </ul>
          </div>
        </div>

        <div className="modes-info">
          <div className="mode-info-card normal">
            <h3>🌟 Normal Mode</h3>
            <p>ไม่มีจับเวลา เหมาะสำหรับการเรียนรู้</p>
          </div>
          <div className="mode-info-card challenge">
            <h3>⚡ Challenge Mode</h3>
            <p>มี Timer 30 วิ/คำถาม หมดเวลา = ตอบผิด!</p>
          </div>
        </div>

        <button className="btn btn-primary btn-large" onClick={onNext}>
          🎮 เลือกโหมด →
        </button>
      </div>
    </div>
  );
}
