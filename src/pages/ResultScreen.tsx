import { GameState } from '../types';
import { getRanking, formatTime } from '../lib/gameLogic';
import { allLevels } from '../data';

interface Props {
  game: {
    state: GameState;
    resetGame: () => void;
    setScreen: (s: any) => void;
  };
}

export function ResultScreen({ game }: Props) {
  const { state, resetGame, setScreen } = game;
  const totalQ = state.correctCount + state.incorrectCount;
  const ranking = getRanking(state.score, totalQ);
  const accuracy = totalQ > 0 ? Math.round((state.correctCount / totalQ) * 100) : 0;

  const topicLabels: Record<string, string> = {
    'hemostasis-definition': 'ความหมาย Hemostasis',
    'hemostasis-phases': 'ระยะของ Hemostasis',
    'primary-hemostasis-components': 'องค์ประกอบ Primary Hemostasis',
    'vessel-wall': 'ผนังหลอดเลือด',
    'tunica-intima': 'Tunica Intima',
    'vessel-layers': 'ชั้นหลอดเลือด',
    'vWF': 'von Willebrand Factor',
    'platelet-structure': 'โครงสร้าง Platelet',
    'alpha-granule': 'Alpha Granule',
    'dense-granule': 'Dense Granule',
    'DTS': 'Dense Tubular System',
    'calcium': 'Ca2+',
    'platelet-activation': 'Platelet Activation',
    'actin-myosin': 'Actin-Myosin',
    'vasoconstriction': 'Vasoconstriction',
    'endothelin': 'Endothelin',
    'PGI2': 'Prostacyclin (PGI2)',
    'TxA2': 'Thromboxane A2',
    'platelet-adhesion': 'Platelet Adhesion',
    'GPIb-IX-V': 'GPIb/IX/V',
    'GPVI': 'GPVI',
    'GPIIb-IIIa': 'GPIIb/IIIa',
    'platelet-aggregation': 'Platelet Aggregation',
    'ADP': 'ADP',
    'P2Y12': 'P2Y12',
    'Glanzmann': 'Glanzmann Thrombasthenia',
    'BSS': 'Bernard-Soulier Syndrome',
    'LTA': 'Light Transmission Aggregometry',
    'platelet-disorder': 'ความผิดปกติ Platelet',
    'thrombocytopenia': 'Thrombocytopenia',
    'ITP': 'ITP',
    'aspirin': 'Aspirin',
    'lab-tests': 'Lab Tests',
    'clinical-diagnosis': 'Clinical Diagnosis',
    'collagen-receptor': 'Collagen Receptors',
    'second-messenger': 'Second Messenger',
    'platelet-inhibitor': 'Platelet Inhibitors',
  };

  const weakTopicLabels = state.weakTopics.map(t => topicLabels[t] || t);

  return (
    <div className="screen result-screen">
      <div className="result-content">
        {/* Ranking Header */}
        <div className="result-ranking" style={{ borderColor: ranking.color }}>
          <div className="ranking-emoji">{ranking.emoji}</div>
          <h2 className="ranking-title" style={{ color: ranking.color }}>{ranking.title}</h2>
          <p className="ranking-title-th">{ranking.titleTh}</p>
        </div>

        {/* Player name */}
        <div className="result-player">
          <p>👨‍🔬 <strong>{state.playerName}</strong></p>
          <p className="result-mode">{state.mode === 'challenge' ? '⚡ Challenge Mode' : '🌟 Normal Mode'}</p>
        </div>

        {/* Score big */}
        <div className="result-score-big">
          <span className="score-number">{state.score}</span>
          <span className="score-label">คะแนน</span>
        </div>

        {/* Stats grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-value">{state.correctCount}</div>
            <div className="stat-label">ถูก</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">❌</div>
            <div className="stat-value">{state.incorrectCount}</div>
            <div className="stat-label">ผิด</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-value">{accuracy}%</div>
            <div className="stat-label">ความแม่นยำ</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💡</div>
            <div className="stat-value">{state.hintsUsed}</div>
            <div className="stat-label">Hints ใช้</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🕐</div>
            <div className="stat-value">{formatTime(state.elapsedTime)}</div>
            <div className="stat-label">เวลา</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-value">{state.perfectLevels}</div>
            <div className="stat-label">Perfect</div>
          </div>
        </div>

        {/* Level progress */}
        <div className="level-progress-summary">
          <h3>📊 ความคืบหน้าแต่ละด่าน</h3>
          <div className="level-dots">
            {allLevels.map((level, i) => {
              const result = state.levelResults.find(r => r.levelId === level.id);
              const completed = i < state.currentLevel || (result != null);
              return (
                <div key={level.id} className={`level-dot-summary ${completed ? 'completed' : 'incomplete'} ${result?.perfect ? 'perfect' : ''}`}>
                  <span>{completed ? (result?.perfect ? '⭐' : '✅') : '○'}</span>
                  <span className="level-dot-num">{level.id}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weak topics */}
        {weakTopicLabels.length > 0 && (
          <div className="weak-topics">
            <h3>📌 หัวข้อที่ควรทบทวน</h3>
            <div className="weak-tags">
              {weakTopicLabels.map(t => (
                <span key={t} className="weak-tag">{t}</span>
              ))}
            </div>
          </div>
        )}

        {/* Review summary */}
        <div className="review-summary">
          <h3>📚 สรุปเนื้อหาสำคัญ</h3>
          <div className="summary-items">
            <div className="summary-item">
              <strong>Primary Hemostasis</strong>: Vasoconstriction → Platelet Adhesion (GPIb/vWF) → Activation (ADP/TxA2) → Aggregation (GPIIb/IIIa + fibrinogen)
            </div>
            <div className="summary-item">
              <strong>Granules</strong>: Alpha = โปรตีน (fibrinogen, vWF, PDGF) | Dense = non-protein (ADP, Ca2+, serotonin)
            </div>
            <div className="summary-item">
              <strong>Disorders</strong>: GT = GPIIb/IIIa ↓ | BSS = GPIb/IX/V ↓ | vWD = vWF ↓
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="result-actions">
          <button className="btn btn-primary btn-large" onClick={resetGame}>
            🔄 เล่นใหม่
          </button>
          <button className="btn btn-outline" onClick={() => setScreen('glossary')}>
            📖 ทบทวนคำศัพท์
          </button>
        </div>
      </div>
    </div>
  );
}
