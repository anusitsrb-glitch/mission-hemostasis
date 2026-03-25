import { GameState, Level, Question, LevelResult, INITIAL_HP, CHALLENGE_TIME_PER_QUESTION } from '../types';

export function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomQuestion(level: Level, usedIds: string[]): Question {
  const available = level.questions.filter(q => !usedIds.includes(q.id));
  if (available.length === 0) return level.questions[Math.floor(Math.random() * level.questions.length)];
  return available[Math.floor(Math.random() * available.length)];
}

export function checkAnswer(question: Question, selected: string[]): boolean {
  if (question.type === 'mcq' || question.type === 'scenario') {
    return selected.length === 1 && selected[0] === question.correctAnswer;
  }
  if (question.type === 'multi-select') {
    const correct = JSON.parse(question.correctAnswer as string) as string[];
    return (
      selected.length === correct.length &&
      correct.every(c => selected.includes(c)) &&
      selected.every(s => correct.includes(s))
    );
  }
  if (question.type === 'ordering') {
    const correct = JSON.parse(question.correctAnswer as string) as string[];
    return JSON.stringify(selected) === JSON.stringify(correct);
  }
  if (question.type === 'matching') {
    try {
      const correctObj = JSON.parse(question.correctAnswer as string);
      const selectedObj = JSON.parse(selected[0] || '{}');
      return JSON.stringify(correctObj) === JSON.stringify(selectedObj);
    } catch { return false; }
  }
  if (question.type === 'boss') {
    return selected.length === 1 && selected[0] === question.correctAnswer;
  }
  return false;
}

export function calculateScore(
  isCorrect: boolean,
  hintLevel: number,
  isPerfectBonus: boolean
): number {
  if (!isCorrect) return -5;
  let score = 10;
  if (hintLevel === 0) score += 5; // no hint bonus
  if (hintLevel === 1) score -= 0;
  if (hintLevel === 2) score -= 3;
  if (isPerfectBonus) score += 5;
  return score;
}

export function getRanking(score: number, totalQuestions: number): { title: string; titleTh: string; emoji: string; color: string } {
  const percentage = totalQuestions > 0 ? score / (totalQuestions * 15) : 0;
  if (percentage >= 0.9) return { title: 'Hemostasis Master', titleTh: 'ผู้เชี่ยวชาญ Hemostasis', emoji: '👑', color: '#FFD700' };
  if (percentage >= 0.7) return { title: 'Platelet Specialist', titleTh: 'ผู้เชี่ยวชาญเกล็ดเลือด', emoji: '🩸', color: '#FF6B6B' };
  if (percentage >= 0.5) return { title: 'Lab Explorer', titleTh: 'นักสำรวจห้องแล็บ', emoji: '🔬', color: '#4ECDC4' };
  return { title: 'Need More Review', titleTh: 'ต้องทบทวนเพิ่มเติม', emoji: '📚', color: '#A8E6CF' };
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function getWeakTopics(levelResults: LevelResult[]): string[] {
  const topicErrors: Record<string, number> = {};
  levelResults.forEach(lr => {
    if (lr.incorrect > 0) {
      lr.topicTags.forEach(tag => {
        topicErrors[tag] = (topicErrors[tag] || 0) + lr.incorrect;
      });
    }
  });
  return Object.entries(topicErrors)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([tag]) => tag);
}

export const initialGameState: GameState = {
  screen: 'splash',
  playerName: '',
  mode: 'normal',
  currentLevel: 0,
  currentQuestionIndex: 0,
  hp: INITIAL_HP,
  maxHp: INITIAL_HP,
  score: 0,
  correctCount: 0,
  incorrectCount: 0,
  hintsUsed: 0,
  startTime: 0,
  elapsedTime: 0,
  levelResults: [],
  selectedOptions: [],
  showFeedback: false,
  lastAnswerCorrect: false,
  hintLevel: 0,
  removedOptions: [],
  weakTopics: [],
  perfectLevels: 0,
  timerActive: false,
  challengeTimeLeft: CHALLENGE_TIME_PER_QUESTION,
  bossStep: 0,
};
