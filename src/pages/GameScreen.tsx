import { useState, useEffect } from 'react';
import { allLevels } from '../data';
import { GameState } from '../types';
import { shuffleArray, formatTime } from '../lib/gameLogic';
import { OrderingQuestion } from '../components/OrderingQuestion';
import { MatchingQuestion } from '../components/MatchingQuestion';

interface Props {
  game: {
    state: GameState;
    selectOption: (id: string) => void;
    submitAnswer: () => void;
    nextQuestion: () => void;
    useHint: () => void;
    setScreen: (s: any) => void;
    resetGame: () => void;
  };
}

export function GameScreen({ game }: Props) {
  const { state, selectOption, submitAnswer, nextQuestion, useHint, setScreen, resetGame } = game;
  const [shuffledOptions, setShuffledOptions] = useState<any[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const [orderingAnswer, setOrderingAnswer] = useState<string[]>([]);
  const [matchingAnswer, setMatchingAnswer] = useState<Record<string, string>>({});

  const level = allLevels[state.currentLevel];
  const question = level?.questions[state.currentQuestionIndex];

  useEffect(() => {
    if (question?.options) {
      setShuffledOptions(shuffleArray(question.options));
    }
    if (question?.type === 'ordering' && question.orderItems) {
      setOrderingAnswer(shuffleArray(question.orderItems));
    }
    if (question?.type === 'matching') {
      setMatchingAnswer({});
    }
  }, [state.currentLevel, state.currentQuestionIndex]);

  useEffect(() => {
    if (state.screen !== 'game') return;
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - state.startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [state.startTime, state.screen]);

  if (!level || !question) return <div className="screen"><p>Loading...</p></div>;

  const canSubmit = () => {
    if (state.showFeedback) return false;
    if (question.type === 'ordering') return orderingAnswer.length > 0;
    if (question.type === 'matching') {
      if (!question.pairs) return false;
      return question.pairs.every(p => matchingAnswer[p.left]);
    }
    return state.selectedOptions.length > 0;
  };

  const handleSubmit = () => {
    if (question.type === 'ordering') {
      game.selectOption('__ordering__');
      // We handle ordering via a special flow
      const correctArr = JSON.parse(question.correctAnswer as string) as string[];
      const isCorrect = JSON.stringify(orderingAnswer) === JSON.stringify(correctArr);
      // Inject ordering answer into state
      game.state.selectedOptions = isCorrect ? [question.correctAnswer as string] : ['__wrong__'];
      submitAnswer();
    } else if (question.type === 'matching') {
      const correctObj = JSON.parse(question.correctAnswer as string);
      const isCorrect = JSON.stringify(correctObj) === JSON.stringify(matchingAnswer);
      game.state.selectedOptions = isCorrect ? [question.correctAnswer as string] : ['__wrong__'];
      submitAnswer();
    } else {
      submitAnswer();
    }
  };

  const hpArray = Array.from({ length: state.maxHp }, (_, i) => i < state.hp);

  return (
    <div className="screen game-screen">
      {/* Header */}
      <div className="game-header">
        <div className="game-header-left">
          <div className="hp-display">
            {hpArray.map((alive, i) => (
              <span key={i} className={`hp-heart ${alive ? 'alive' : 'dead'}`}>
                {alive ? '❤️' : '🖤'}
              </span>
            ))}
          </div>
          <div className="score-display">⭐ {state.score}</div>
        </div>
        <div className="game-header-center">
          <div className="level-indicator">
            Level {state.currentLevel + 1}/{allLevels.length}
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((state.currentLevel * 10 + state.currentQuestionIndex) / (allLevels.length * 10)) * 100}%` }}
            />
          </div>
        </div>
        <div className="game-header-right">
          {state.mode === 'challenge' && (
            <div className={`timer-display ${state.challengeTimeLeft <= 10 ? 'urgent' : ''}`}>
              ⏱️ {state.challengeTimeLeft}s
            </div>
          )}
          <div className="time-display">🕐 {formatTime(elapsed)}</div>
        </div>
      </div>

      {/* Level title */}
      <div className="level-title-bar">
        <span className="level-badge">{level.id === 10 ? '🔥 BOSS' : `D${level.id}`}</span>
        <span className="level-title-text">{level.title}</span>
      </div>

      {/* Case intro (first question only) */}
      {state.currentQuestionIndex === 0 && (
        <div className="case-intro">
          <p>{level.caseIntro}</p>
        </div>
      )}

      <div className="game-body">
        {/* Question */}
        <div className="question-card">
          <div className="question-type-badge">
            {question.type === 'mcq' && '📝 MCQ'}
            {question.type === 'multi-select' && '☑️ เลือกหลายข้อ'}
            {question.type === 'ordering' && '🔢 เรียงลำดับ'}
            {question.type === 'matching' && '🔗 จับคู่'}
            {question.type === 'scenario' && '🏥 กรณีศึกษา'}
            {question.type === 'boss' && '🔥 Boss'}
          </div>
          <p className="question-text">{question.question}</p>
        </div>

        {/* Hint display */}
        {state.hintLevel > 0 && (
          <div className="hint-display">
            <p>💡 <strong>Hint {state.hintLevel}:</strong> {question.hint1}</p>
            {state.hintLevel === 2 && state.removedOptions.length > 0 && (
              <p className="hint2-note">✂️ ตัดตัวเลือกที่ผิดออก {state.removedOptions.length} ข้อ</p>
            )}
          </div>
        )}

        {/* Answer area */}
        {(question.type === 'mcq' || question.type === 'scenario' || question.type === 'boss') && (
          <div className="options-list">
            {shuffledOptions
              .filter(opt => !state.removedOptions.includes(opt.id))
              .map(opt => {
                const isSelected = state.selectedOptions.includes(opt.id);
                const correctAns = question.correctAnswer as string;
                let optClass = 'option-btn';
                if (state.showFeedback) {
                  if (opt.id === correctAns) optClass += ' correct';
                  else if (isSelected && opt.id !== correctAns) optClass += ' incorrect';
                  else optClass += ' dimmed';
                } else if (isSelected) {
                  optClass += ' selected';
                }
                return (
                  <button
                    key={opt.id}
                    className={optClass}
                    onClick={() => !state.showFeedback && selectOption(opt.id)}
                    disabled={state.showFeedback}
                  >
                    <span className="option-letter">{opt.id.toUpperCase()}</span>
                    <span className="option-text">{opt.text}</span>
                    {state.showFeedback && opt.id === correctAns && <span className="option-check">✅</span>}
                    {state.showFeedback && isSelected && opt.id !== correctAns && <span className="option-x">❌</span>}
                  </button>
                );
              })}
          </div>
        )}

        {question.type === 'multi-select' && (
          <div className="options-list multi-select">
            <p className="multi-hint">⚠️ เลือกได้หลายข้อ</p>
            {shuffledOptions.map(opt => {
              const isSelected = state.selectedOptions.includes(opt.id);
              const correctArr = JSON.parse(question.correctAnswer as string) as string[];
              let optClass = 'option-btn checkbox-option';
              if (state.showFeedback) {
                if (correctArr.includes(opt.id)) optClass += ' correct';
                else if (isSelected) optClass += ' incorrect';
                else optClass += ' dimmed';
              } else if (isSelected) {
                optClass += ' selected';
              }
              return (
                <button
                  key={opt.id}
                  className={optClass}
                  onClick={() => !state.showFeedback && selectOption(opt.id)}
                  disabled={state.showFeedback}
                >
                  <span className="checkbox-icon">{isSelected ? '☑️' : '⬜'}</span>
                  <span className="option-text">{opt.text}</span>
                  {state.showFeedback && correctArr.includes(opt.id) && <span className="option-check">✅</span>}
                </button>
              );
            })}
          </div>
        )}

        {question.type === 'ordering' && (
          <OrderingQuestion
            items={orderingAnswer}
            onChange={setOrderingAnswer}
            disabled={state.showFeedback}
            correctOrder={state.showFeedback ? JSON.parse(question.correctAnswer as string) : undefined}
          />
        )}

        {question.type === 'matching' && question.pairs && (
          <MatchingQuestion
            pairs={question.pairs}
            options={shuffledOptions}
            answer={matchingAnswer}
            onChange={setMatchingAnswer}
            disabled={state.showFeedback}
            correctAnswer={state.showFeedback ? JSON.parse(question.correctAnswer as string) : undefined}
          />
        )}

        {/* Feedback */}
        {state.showFeedback && (
          <div className={`feedback-card ${state.lastAnswerCorrect ? 'correct-feedback' : 'incorrect-feedback'}`}>
            <div className="feedback-header">
              {state.lastAnswerCorrect ? '🎉 ถูกต้อง!' : '❌ ยังไม่ถูกต้อง'}
            </div>
            <p className="feedback-explanation">{question.explanation}</p>
            <div className="feedback-tags">
              {question.reviewTags.map(tag => (
                <span key={tag} className="review-tag">#{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom actions */}
      <div className="game-footer">
        {!state.showFeedback ? (
          <div className="footer-actions">
            {state.hintLevel < 2 && (
              <button className="btn btn-hint" onClick={useHint}>
                💡 Hint {state.hintLevel === 0 ? '1' : '2'}
                {state.hintLevel === 1 && ' (-3)'}
              </button>
            )}
            <button
              className="btn btn-primary btn-submit"
              onClick={handleSubmit}
              disabled={!canSubmit()}
            >
              ✅ ยืนยันคำตอบ
            </button>
          </div>
        ) : (
          <div className="footer-actions">
            {state.hp === 0 ? (
              <div className="gameover-actions">
                <p className="gameover-text">💔 Game Over!</p>
                <button className="btn btn-primary" onClick={() => setScreen('result')}>
                  📊 ดูผลคะแนน
                </button>
              </div>
            ) : (
              <button className="btn btn-primary btn-next" onClick={nextQuestion}>
                {state.currentQuestionIndex + 1 >= level.questions.length
                  ? state.currentLevel + 1 >= allLevels.length
                    ? '🏁 ดูผลคะแนน'
                    : '➡️ ด่านถัดไป'
                  : '➡️ คำถามต่อไป'}
              </button>
            )}
            <button className="btn btn-outline btn-sm" onClick={() => setScreen('result')}>
              🏁 จบเกม
            </button>
          </div>
        )}
      </div>

      {/* Question progress dots */}
      <div className="question-dots">
        {level.questions.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === state.currentQuestionIndex ? 'active' : i < state.currentQuestionIndex ? 'done' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
