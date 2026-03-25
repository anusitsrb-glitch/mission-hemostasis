export type GameMode = 'normal' | 'challenge';
export type GameScreen = 
  | 'splash' 
  | 'intro' 
  | 'nickname' 
  | 'howtoplay' 
  | 'modeselect' 
  | 'game' 
  | 'glossary' 
  | 'result';

export type QuestionType = 
  | 'mcq' 
  | 'multi-select' 
  | 'ordering' 
  | 'matching' 
  | 'scenario' 
  | 'boss';

export interface Option {
  id: string;
  text: string;
}

export interface MatchPair {
  left: string;
  right: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: Option[];
  correctAnswer: string | string[];
  hint1: string;
  hint2Removes?: string[]; // option ids to remove
  explanation: string;
  wrongExplanations?: Record<string, string>;
  reviewTags: string[];
  pairs?: MatchPair[]; // for matching
  orderItems?: string[]; // for ordering
}

export interface Level {
  id: number;
  title: string;
  titleEn: string;
  caseIntro: string;
  questions: Question[];
  topic: string;
}

export interface GameState {
  screen: GameScreen;
  playerName: string;
  mode: GameMode;
  currentLevel: number;
  currentQuestionIndex: number;
  hp: number;
  maxHp: number;
  score: number;
  correctCount: number;
  incorrectCount: number;
  hintsUsed: number;
  startTime: number;
  elapsedTime: number;
  levelResults: LevelResult[];
  selectedOptions: string[];
  showFeedback: boolean;
  lastAnswerCorrect: boolean;
  hintLevel: number; // 0=no hint, 1=hint1 shown, 2=hint2 shown
  removedOptions: string[];
  weakTopics: string[];
  perfectLevels: number;
  timerActive: boolean;
  challengeTimeLeft: number;
  bossStep: number;
}

export interface LevelResult {
  levelId: number;
  correct: number;
  incorrect: number;
  hintsUsed: number;
  perfect: boolean;
  topicTags: string[];
}

export const INITIAL_HP = 5;
export const CHALLENGE_TIME_PER_QUESTION = 30;
