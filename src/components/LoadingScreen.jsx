import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Stepped progression: 0% -> 30% -> 60% -> 100% within ~1 second
    const t1 = setTimeout(() => setProgress(30), 200);
    const t2 = setTimeout(() => setProgress(60), 500);
    const t3 = setTimeout(() => setProgress(100), 850);
    const t4 = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 400);
    }, 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinish]);

  return (
    <div className={`loader-overlay ${isFading ? 'hidden' : ''}`}>
      <div className="loader-logo-box">
        <span>P</span>
      </div>

      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '18px',
        fontWeight: 800,
        letterSpacing: '0.15em',
        color: '#F8FAFC',
        marginBottom: '6px'
      }}>
        Praveen....
      </div>

      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '13px',
        color: '#94A3B8',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}>
        <span>Initializing portfolio...</span>
        <span style={{ color: '#38BDF8', fontWeight: 'bold' }}>{progress}%</span>
      </div>

      <div className="loader-progress-track">
        <div
          className="loader-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
