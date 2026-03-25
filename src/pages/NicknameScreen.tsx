import { useState } from 'react';

interface Props {
  game: { state: { playerName: string }; setName: (n: string) => void; setScreen: (s: any) => void };
}

export function NicknameScreen({ game }: Props) {
  const [name, setName] = useState(game.state.playerName);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const trimmed = name.trim();
    if (!trimmed) {
      setError('กรุณาใส่ชื่อของคุณ');
      return;
    }
    if (trimmed.length > 20) {
      setError('ชื่อไม่ควรเกิน 20 ตัวอักษร');
      return;
    }
    game.setName(trimmed);
    game.setScreen('howtoplay');
  };

  return (
    <div className="screen nickname-screen">
      <div className="nickname-content">
        <div className="nickname-header">
          <div className="nickname-icon">👨‍🔬</div>
          <h1>สมัครเป็นนักเทคนิคการแพทย์</h1>
          <p>ใส่ชื่อเรียกของคุณ</p>
        </div>

        <div className="nickname-card">
          <label className="input-label">ชื่อผู้เล่น (Nickname)</label>
          <input
            className={`nickname-input ${error ? 'error' : ''}`}
            type="text"
            placeholder="เช่น นักสืบเลือด, Dr.Platelet"
            value={name}
            onChange={e => { setName(e.target.value); setError(''); }}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            maxLength={20}
            autoFocus
          />
          {error && <p className="input-error">{error}</p>}
          <p className="input-hint">{name.length}/20 ตัวอักษร</p>
        </div>

        <div className="nickname-examples">
          <p>💡 ตัวอย่างชื่อ:</p>
          <div className="example-names">
            {['นักสืบเลือด', 'Dr.Platelet', 'วีรบุรุษเส้นเลือด', 'MT_Hero'].map(n => (
              <button key={n} className="example-btn" onClick={() => { setName(n); setError(''); }}>
                {n}
              </button>
            ))}
          </div>
        </div>

        <button className="btn btn-primary btn-large" onClick={handleSubmit}>
          ✅ ยืนยันชื่อ →
        </button>

        <button className="btn btn-text" onClick={() => game.setScreen('intro')}>
          ← กลับ
        </button>
      </div>
    </div>
  );
}
