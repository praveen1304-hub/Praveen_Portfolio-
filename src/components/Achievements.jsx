import React from 'react';
import { Trophy, Award, Target, Flame, Star, Sparkles, CheckCircle } from 'lucide-react';

export default function Achievements() {
  const achievementsList = [
    {
      title: 'Smart India Hackathon',
      subtitle: 'National Initiative',
      badge: 'National Participation',
      icon: Trophy,
      color: '#F59E0B',
      description: 'Collaborative nationwide engineering hackathon solving real-world government and institutional problem statements.'
    },
    {
      title: 'MSME 4.0 Hackathon',
      subtitle: 'Innovation Challenge',
      badge: 'Round Two Qualifier',
      icon: Award,
      color: '#3B82F6',
      description: 'Advanced to Round Two with innovative technological prototypes targeting MSME industry process enhancements.'
    },
    {
      title: 'MSME 5.0 Hackathon',
      subtitle: 'National Edition',
      badge: 'Round Two Qualifier',
      icon: Award,
      color: '#06B6D4',
      description: 'Qualified for Round Two following technical design submission and automated hardware/software architecture review.'
    },
    {
      title: 'Startup TN',
      subtitle: 'Entrepreneurship Drive',
      badge: 'College-Level Winner',
      icon: Star,
      color: '#22C55E',
      description: 'Awarded College-level Winner for presenting practical, market-viable tech prototype and startup pitch.'
    },
    {
      title: 'Codewars',
      subtitle: 'Algorithmic Problem Solving',
      badge: 'Consistent Practice',
      icon: Target,
      color: '#A855F7',
      description: 'Continuous hands-on problem solving mastering programming paradigms, algorithmic logic, and code optimization.'
    }
  ];

  return (
    <section id="achievements" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(37, 99, 235, 0.12)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '8px',
              marginBottom: '16px'
            }}
          >
            <Trophy size={15} color="#38BDF8" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#93C5FD'
              }}
            >
              MILESTONES &amp; RECOGNITIONS
            </span>
          </div>

          <h2 className="section-title">Hackathons &amp; Achievements</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Proven dedication across national hackathons, coding challenges, and innovation competitions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {achievementsList.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '28px',
                  background: 'rgba(11, 22, 40, 0.75)',
                  border: '1.5px solid #1E3A5F',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Accent Color Glow Corner */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-15px',
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    background: `${item.color}20`,
                    filter: 'blur(20px)',
                    pointerEvents: 'none'
                  }}
                />

                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '18px'
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'rgba(15, 23, 42, 0.9)',
                        border: `1.5px solid ${item.color}`,
                        boxShadow: `0 0 15px ${item.color}35`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: item.color
                      }}
                    >
                      <IconComp size={22} />
                    </div>

                    <span
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: `1px solid ${item.color}50`,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px',
                        fontWeight: 600,
                        color: item.color
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    style={{
                      fontSize: '19px',
                      fontWeight: 800,
                      color: '#F8FAFC',
                      marginBottom: '4px'
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '12px',
                      color: '#93C5FD',
                      marginBottom: '12px'
                    }}
                  >
                    {item.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#94A3B8',
                      lineHeight: '1.6'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
