interface MatchPair {
  left: string;
  right: string;
}

interface Props {
  pairs: MatchPair[];
  options: { id: string; text: string }[];
  answer: Record<string, string>;
  onChange: (a: Record<string, string>) => void;
  disabled: boolean;
  correctAnswer?: Record<string, string>;
}

export function MatchingQuestion({ pairs, answer, onChange, disabled, correctAnswer }: Props) {
  const rightOptions = pairs.map(p => p.right);

  const handleSelect = (leftItem: string, rightValue: string) => {
    if (disabled) return;
    const newAnswer = { ...answer };
    // Remove if already assigned elsewhere
    Object.keys(newAnswer).forEach(k => {
      if (newAnswer[k] === rightValue) delete newAnswer[k];
    });
    if (newAnswer[leftItem] === rightValue) {
      delete newAnswer[leftItem];
    } else {
      newAnswer[leftItem] = rightValue;
    }
    onChange(newAnswer);
  };

  return (
    <div className="matching-container">
      <p className="matching-hint">🔗 เลือกคำตอบด้านขวาให้ตรงกับด้านซ้าย</p>
      {pairs.map(pair => {
        const selected = answer[pair.left];
        const isCorrect = disabled && correctAnswer && correctAnswer[pair.left] === selected;
        const isWrong = disabled && selected && correctAnswer && correctAnswer[pair.left] !== selected;
        return (
          <div key={pair.left} className={`matching-row ${isCorrect ? 'match-correct' : ''} ${isWrong ? 'match-incorrect' : ''}`}>
            <div className="match-left">{pair.left}</div>
            <div className="match-arrow">→</div>
            <div className="match-right-options">
              {rightOptions.map(opt => {
                const isThis = selected === opt;
                let btnClass = 'match-option-btn';
                if (disabled && correctAnswer) {
                  if (correctAnswer[pair.left] === opt) btnClass += ' match-opt-correct';
                  else if (isThis) btnClass += ' match-opt-wrong';
                } else if (isThis) {
                  btnClass += ' match-opt-selected';
                }
                // Check if this option is used by another pair
                const usedByOther = Object.entries(answer).some(([k, v]) => v === opt && k !== pair.left);
                if (!disabled && usedByOther) btnClass += ' match-opt-used';
                return (
                  <button
                    key={opt}
                    className={btnClass}
                    onClick={() => handleSelect(pair.left, opt)}
                    disabled={disabled}
                  >
                    {opt}
                    {disabled && correctAnswer?.[pair.left] === opt && ' ✅'}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
