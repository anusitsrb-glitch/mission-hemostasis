import { useReducer, useCallback } from 'react';
import { GameState, GameScreen, GameMode, CHALLENGE_TIME_PER_QUESTION, INITIAL_HP } from '../types';
import { initialGameState, checkAnswer, calculateScore, getWeakTopics, shuffleArray } from '../lib/gameLogic';
import { allLevels } from '../data';

type Action =
  | { type: 'SET_SCREEN'; screen: GameScreen }
  | { type: 'SET_NAME'; name: string }
  | { type: 'SET_MODE'; mode: GameMode }
  | { type: 'START_GAME' }
  | { type: 'SELECT_OPTION'; id: string }
  | { type: 'SUBMIT_ANSWER' }
  | { type: 'NEXT_QUESTION' }
  | { type: 'USE_HINT' }
  | { type: 'TICK_TIMER' }
  | { type: 'RESET_GAME' }
  | { type: 'GO_TO_LEVEL'; level: number };

function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, screen: action.screen };

    case 'SET_NAME':
      return { ...state, playerName: action.name };

    case 'SET_MODE':
      return { ...state, mode: action.mode };

    case 'START_GAME':
      return {
        ...state,
        screen: 'game',
        currentLevel: 0,
        currentQuestionIndex: 0,
        hp: INITIAL_HP,
        maxHp: INITIAL_HP,
        score: 0,
        correctCount: 0,
        incorrectCount: 0,
        hintsUsed: 0,
        startTime: Date.now(),
        elapsedTime: 0,
        levelResults: [],
        selectedOptions: [],
        showFeedback: false,
        hintLevel: 0,
        removedOptions: [],
        weakTopics: [],
        perfectLevels: 0,
        timerActive: action.type === 'START_GAME' && state.mode === 'challenge',
        challengeTimeLeft: CHALLENGE_TIME_PER_QUESTION,
        bossStep: 0,
      };

    case 'SELECT_OPTION': {
      if (state.showFeedback) return state;
      const currentQ = allLevels[state.currentLevel]?.questions[state.currentQuestionIndex];
      if (!currentQ) return state;

      if (currentQ.type === 'multi-select') {
        const already = state.selectedOptions.includes(action.id);
        const newSelected = already
          ? state.selectedOptions.filter(x => x !== action.id)
          : [...state.selectedOptions, action.id];
        return { ...state, selectedOptions: newSelected };
      }
      return { ...state, selectedOptions: [action.id] };
    }

    case 'SUBMIT_ANSWER': {
      const level = allLevels[state.currentLevel];
      if (!level) return state;
      const question = level.questions[state.currentQuestionIndex];
      if (!question) return state;

      const isCorrect = checkAnswer(question, state.selectedOptions);
      const scoreChange = calculateScore(isCorrect, state.hintLevel, false);
      const newHp = isCorrect ? state.hp : Math.max(0, state.hp - 1);
      const newScore = Math.max(0, state.score + scoreChange);

      return {
        ...state,
        showFeedback: true,
        lastAnswerCorrect: isCorrect,
        score: newScore,
        hp: newHp,
        correctCount: isCorrect ? state.correctCount + 1 : state.correctCount,
        incorrectCount: isCorrect ? state.incorrectCount : state.incorrectCount + 1,
        timerActive: false,
      };
    }

    case 'NEXT_QUESTION': {
      if (!state.showFeedback) return state;
      const level = allLevels[state.currentLevel];
      if (!level) return state;

      if (state.hp === 0) {
        return {
          ...state,
          screen: 'result',
          elapsedTime: Math.floor((Date.now() - state.startTime) / 1000),
          weakTopics: getWeakTopics(state.levelResults),
          showFeedback: false,
        };
      }

      const nextQIndex = state.currentQuestionIndex + 1;
      if (nextQIndex >= level.questions.length) {
        // Level complete
        const isPerfect = state.incorrectCount === 0;
        const levelResult = {
          levelId: level.id,
          correct: state.correctCount,
          incorrect: state.incorrectCount,
          hintsUsed: state.hintsUsed,
          perfect: isPerfect,
          topicTags: level.questions.flatMap(q => q.reviewTags),
        };
        const newLevelResults = [...state.levelResults, levelResult];
        const nextLevelIndex = state.currentLevel + 1;
        if (nextLevelIndex >= allLevels.length) {
          return {
            ...state,
            screen: 'result',
            elapsedTime: Math.floor((Date.now() - state.startTime) / 1000),
            levelResults: newLevelResults,
            weakTopics: getWeakTopics(newLevelResults),
            perfectLevels: isPerfect ? state.perfectLevels + 1 : state.perfectLevels,
            showFeedback: false,
          };
        }
        return {
          ...state,
          currentLevel: nextLevelIndex,
          currentQuestionIndex: 0,
          levelResults: newLevelResults,
          perfectLevels: isPerfect ? state.perfectLevels + 1 : state.perfectLevels,
          selectedOptions: [],
          showFeedback: false,
          hintLevel: 0,
          removedOptions: [],
          timerActive: state.mode === 'challenge',
          challengeTimeLeft: CHALLENGE_TIME_PER_QUESTION,
        };
      }

      return {
        ...state,
        currentQuestionIndex: nextQIndex,
        selectedOptions: [],
        showFeedback: false,
        hintLevel: 0,
        removedOptions: [],
        timerActive: state.mode === 'challenge',
        challengeTimeLeft: CHALLENGE_TIME_PER_QUESTION,
      };
    }

    case 'USE_HINT': {
      if (state.hintLevel >= 2 || state.showFeedback) return state;
      const newHintLevel = state.hintLevel + 1;
      const question = allLevels[state.currentLevel]?.questions[state.currentQuestionIndex];
      let newRemoved = [...state.removedOptions];
      if (newHintLevel === 2 && question?.hint2Removes) {
        newRemoved = [...new Set([...newRemoved, ...question.hint2Removes])];
      }
      return {
        ...state,
        hintLevel: newHintLevel,
        hintsUsed: state.hintsUsed + 1,
        removedOptions: newRemoved,
        score: Math.max(0, newHintLevel === 2 ? state.score - 3 : state.score),
      };
    }

    case 'TICK_TIMER': {
      if (!state.timerActive || state.showFeedback) return state;
      const newTime = state.challengeTimeLeft - 1;
      if (newTime <= 0) {
        // Time's up - auto submit wrong
        return {
          ...state,
          challengeTimeLeft: 0,
          timerActive: false,
          showFeedback: true,
          lastAnswerCorrect: false,
          hp: Math.max(0, state.hp - 1),
          incorrectCount: state.incorrectCount + 1,
          score: Math.max(0, state.score - 5),
        };
      }
      return { ...state, challengeTimeLeft: newTime };
    }

    case 'RESET_GAME':
      return { ...initialGameState };

    case 'GO_TO_LEVEL':
      return {
        ...state,
        screen: 'game',
        currentLevel: action.level,
        currentQuestionIndex: 0,
        selectedOptions: [],
        showFeedback: false,
        hintLevel: 0,
        removedOptions: [],
      };

    default:
      return state;
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  const setScreen = useCallback((screen: GameScreen) => dispatch({ type: 'SET_SCREEN', screen }), []);
  const setName = useCallback((name: string) => dispatch({ type: 'SET_NAME', name }), []);
  const setMode = useCallback((mode: GameMode) => dispatch({ type: 'SET_MODE', mode }), []);
  const startGame = useCallback(() => dispatch({ type: 'START_GAME' }), []);
  const selectOption = useCallback((id: string) => dispatch({ type: 'SELECT_OPTION', id }), []);
  const submitAnswer = useCallback(() => dispatch({ type: 'SUBMIT_ANSWER' }), []);
  const nextQuestion = useCallback(() => dispatch({ type: 'NEXT_QUESTION' }), []);
  const useHint = useCallback(() => dispatch({ type: 'USE_HINT' }), []);
  const tickTimer = useCallback(() => dispatch({ type: 'TICK_TIMER' }), []);
  const resetGame = useCallback(() => dispatch({ type: 'RESET_GAME' }), []);

  return {
    state,
    setScreen,
    setName,
    setMode,
    startGame,
    selectOption,
    submitAnswer,
    nextQuestion,
    useHint,
    tickTimer,
    resetGame,
  };
}
