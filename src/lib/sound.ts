let audioCtx: AudioContext | null = null;

function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx;
}

function beep(freq: number, duration: number) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.frequency.value = freq;
  osc.type = 'sine';

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();

  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

  osc.stop(ctx.currentTime + duration);
}

// 🎯 เสียงต่าง ๆ
export function playClick() {
  beep(600, 0.05);
}

export function playCorrect() {
  beep(900, 0.1);
  setTimeout(() => beep(1200, 0.1), 100);
}

export function playWrong() {
  beep(200, 0.2);
}

export function playHint() {
  beep(700, 0.08);
}

export function playNext() {
  beep(800, 0.08);
}

export function playGameOver() {
  beep(150, 0.3);
}