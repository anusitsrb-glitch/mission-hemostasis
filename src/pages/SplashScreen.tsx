import { useEffect, useState } from 'react';
import { playClick } from '../lib/sound';

interface Props {
  onNext: () => void;
}

export function SplashScreen({ onNext }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
    const timer = setTimeout(() => onNext(), 3000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="screen splash-screen" onClick={() => {playClick();onNext();}}>
      <div className={`splash-content ${show ? 'visible' : ''}`}>
        <div className="splash-icon">🩸</div>
        <div className="splash-cells">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`blood-cell cell-${i}`}>🔴</div>
          ))}
        </div>
        <h1 className="splash-title">Mission Hemostasis</h1>
        <p className="splash-subtitle">ภารกิจหยุดเลือด</p>
        <p className="splash-tap">แตะเพื่อเริ่ม...</p>
      </div>
    </div>
  );
}
