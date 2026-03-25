import { useEffect } from 'react';
import { useGameState } from './hooks/useGameState';
import { SplashScreen } from './pages/SplashScreen';
import { IntroScreen } from './pages/IntroScreen';
import { NicknameScreen } from './pages/NicknameScreen';
import { HowToPlayScreen } from './pages/HowToPlayScreen';
import { ModeSelectScreen } from './pages/ModeSelectScreen';
import { GameScreen } from './pages/GameScreen';
import { GlossaryScreen } from './pages/GlossaryScreen';
import { ResultScreen } from './pages/ResultScreen';

export default function App() {
  const game = useGameState();
  const { state, tickTimer, setScreen } = game;

  useEffect(() => {
    if (state.mode === 'challenge' && state.timerActive && state.screen === 'game') {
      const interval = setInterval(() => tickTimer(), 1000);
      return () => clearInterval(interval);
    }
  }, [state.mode, state.timerActive, state.screen, tickTimer]);

  const renderScreen = () => {
    switch (state.screen) {
      case 'splash':
        return <SplashScreen onNext={() => setScreen('intro')} />;
      case 'intro':
        return <IntroScreen onNext={() => setScreen('nickname')} onGlossary={() => setScreen('glossary')} />;
      case 'nickname':
        return <NicknameScreen game={game} />;
      case 'howtoplay':
        return <HowToPlayScreen onNext={() => setScreen('modeselect')} />;
      case 'modeselect':
        return <ModeSelectScreen game={game} />;
      case 'game':
        return <GameScreen game={game} />;
      case 'glossary':
        return <GlossaryScreen onBack={() => setScreen(state.playerName ? 'intro' : 'intro')} />;
      case 'result':
        return <ResultScreen game={game} />;
      default:
        return <SplashScreen onNext={() => setScreen('intro')} />;
    }
  };

  return (
    <div className="app-wrapper">
      {renderScreen()}
    </div>
  );
}
