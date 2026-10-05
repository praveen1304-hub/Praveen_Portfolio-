import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Code2, Sparkles, Terminal, ChevronRight } from 'lucide-react';
import HeroVisual from './HeroVisual';

const TECH_STACK_CHIPS = [
  'React',
  'Python',
  'Flask',
  'MySQL',
  'REST APIs',
  'Git',
  'GitHub'
];

export default function Hero() {
  const [typedName, setTypedName] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullName = 'Praveen R';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setTypedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '40px',
        paddingBottom: '60px',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Hero Content */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            {/* Top Label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(37, 99, 235, 0.12)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '8px',
                marginBottom: '20px'
              }}
            >
              <Code2 size={15} color="#38BDF8" />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: '#93C5FD'
                }}
              >
                FULL STACK DEVELOPER
              </span>
            </div>

            {/* Main Heading with Typewriter */}
            <h1 className="hero-title" style={{ marginBottom: '16px' }}>
              Hi, I'm <br />
              <span className="text-gradient-blue">
                {typedName}
              </span>
              <span className="typewriter-cursor" />
            </h1>

            {/* Sub-heading */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '20px',
                fontWeight: 600,
                color: '#38BDF8',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Full Stack Developer</span>
            </div>

            {/* Bio Paragraphs */}
            <p
              style={{
                fontSize: '17px',
                lineHeight: '1.7',
                color: '#CBD5E1',
                marginBottom: '14px',
                maxWidth: '560px'
              }}
            >
              I build practical web applications and enjoy turning messy problems into working software.
            </p>

            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#94A3B8',
                marginBottom: '32px',
                maxWidth: '560px'
              }}
            >
              Comfortable across the stack, from React and Flask applications to SQL, with a focus on learning quickly and solving real-world problems.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '36px'
              }}
            >
              <button
                onClick={scrollToProjects}
                className="btn btn-primary"
                style={{ fontSize: '15px', padding: '14px 28px' }}
              >
                <span>View Projects</span>
                <ChevronRight size={18} />
              </button>

              <a
                href="/resume.pdf"
                download="Praveen_R_Resume.pdf"
                className="btn btn-secondary"
                style={{ fontSize: '15px', padding: '14px 26px' }}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Technology Chips */}
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#64748B',
                  letterSpacing: '0.05em',
                  marginBottom: '10px',
                  textTransform: 'uppercase'
                }}
              >
                Core Toolset &amp; Technologies
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >
                {TECH_STACK_CHIPS.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Workstation Visual */}
          <div>
            <HeroVisual />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
