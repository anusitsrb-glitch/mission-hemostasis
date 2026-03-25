interface Props {
  game: {
    state: { playerName: string; mode: string };
    setMode: (m: any) => void;
    startGame: () => void;
    setScreen: (s: any) => void;
  };
}

export function ModeSelectScreen({ game }: Props) {
  const { state, setMode, startGame, setScreen } = game;

  return (
    <div className="screen modeselect-screen">
      <div className="modeselect-content">
        <div className="modeselect-header">
          <h1>ยินดีต้อนรับ</h1>
          <p className="player-greeting">👨‍🔬 <strong>{state.playerName}</strong></p>
          <p>เลือกโหมดการเล่น</p>
        </div>

        <div className="modes-container">
          <div
            className={`mode-card ${state.mode === 'normal' ? 'selected' : ''}`}
            onClick={() => setMode('normal')}
          >
            <div className="mode-icon">🌟</div>
            <h2>Normal Mode</h2>
            <p className="mode-th">โหมดปกติ</p>
            <ul className="mode-features">
              <li>✅ ไม่มีจับเวลา</li>
              <li>✅ เหมาะสำหรับเรียนรู้</li>
              <li>✅ มีเวลาคิดมากขึ้น</li>
              <li>✅ แนะนำสำหรับมือใหม่</li>
            </ul>
            {state.mode === 'normal' && <div className="mode-selected-badge">✓ เลือกแล้ว</div>}
          </div>

          <div
            className={`mode-card challenge-card ${state.mode === 'challenge' ? 'selected' : ''}`}
            onClick={() => setMode('challenge')}
          >
            <div className="mode-icon">⚡</div>
            <h2>Challenge Mode</h2>
            <p className="mode-th">โหมดท้าทาย</p>
            <ul className="mode-features">
              <li>⏱️ Timer 30 วินาที/ข้อ</li>
              <li>🔥 หมดเวลา = ตอบผิด</li>
              <li>💪 สำหรับผู้มีความรู้แล้ว</li>
              <li>🏆 คะแนนพิเศษ</li>
            </ul>
            {state.mode === 'challenge' && <div className="mode-selected-badge">✓ เลือกแล้ว</div>}
          </div>
        </div>

        <div className="modeselect-actions">
          <button className="btn btn-primary btn-large" onClick={startGame}>
            🚀 เริ่มเกม!
          </button>
          <button className="btn btn-text" onClick={() => setScreen('howtoplay')}>
            ← วิธีเล่น
          </button>
        </div>
      </div>
    </div>
  );
}
