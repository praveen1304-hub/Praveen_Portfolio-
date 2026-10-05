import React from 'react';
import { Milestone, Compass, Code, Database, Layout, Server, Sparkles, Cpu } from 'lucide-react';

export default function Journey() {
  const steps = [
    {
      number: '01',
      title: 'Programming Foundations',
      subtitle: 'Algorithmic Thinking & Core Logic',
      description: 'Built solid computer science fundamentals, focusing on control structures, procedural paradigms, and efficient problem decomposition.',
      icon: Code,
      color: '#3B82F6'
    },
    {
      number: '02',
      title: 'Python + SQL',
      subtitle: 'Data Manipulation & Scripting',
      description: 'Advanced into Python for automation and scripting, coupled with MySQL for structured relational schema design, joins, and complex queries.',
      icon: Database,
      color: '#60A5FA'
    },
    {
      number: '03',
      title: 'Frontend Development',
      subtitle: 'React.js & Reactive Interfaces',
      description: 'Mastered modern frontend development with React.js, component lifecycle, custom hooks, dynamic state flows, and modular CSS architecture.',
      icon: Layout,
      color: '#06B6D4'
    },
    {
      number: '04',
      title: 'Backend Development',
      subtitle: 'Flask & Node.js REST APIs',
      description: 'Engineered robust server-side APIs, request/response lifecycle handling, authentication middleware, and database connectivity with Flask & Express.',
      icon: Server,
      color: '#7C3AED'
    },
    {
      number: '05',
      title: 'Full Stack Projects',
      subtitle: 'End-to-End Practical Solutions',
      description: 'Integrated complete full-stack ecosystems (Geo-Attend, College Blood Donor Network, CampusPulse, Baby Guard) solving real campus & domestic problems.',
      icon: Cpu,
      color: '#22C55E'
    },
    {
      number: '06',
      title: 'Current Learning & Evolution',
      subtitle: 'Full-Stack Software Engineering',
      description: 'Continuously refining system architecture, automated workflows, and modern web frameworks to deliver high-performance production software.',
      icon: Sparkles,
      color: '#F59E0B'
    }
  ];

  return (
    <section id="journey" className="section-wrapper">
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
            <Compass size={15} color="#38BDF8" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#93C5FD'
              }}
            >
              TECHNICAL EVOLUTION
            </span>
          </div>

          <h2 className="section-title">Developer Journey</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A structured roadmap of progressive skill acquisition and engineering growth.
          </p>
        </div>

        {/* Timeline Grid */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Central Connecting Laser Line on Desktop */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '50%',
              width: '2px',
              background: 'linear-gradient(180deg, #3B82F6 0%, #7C3AED 50%, #06B6D4 100%)',
              boxShadow: '0 0 12px rgba(59, 130, 246, 0.4)',
              transform: 'translateX(-50%)'
            }}
            className="journey-central-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const IconComponent = step.icon;

              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isEven ? 'flex-start' : 'flex-end',
                    position: 'relative'
                  }}
                  className="journey-item-row"
                >
                  {/* Central Node Indicator */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#0B1628',
                      border: `2px solid ${step.color}`,
                      boxShadow: `0 0 20px ${step.color}60`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 10,
                      color: step.color
                    }}
                    className="journey-center-node"
                  >
                    <IconComponent size={16} />
                  </div>

                  {/* Journey Glass Card */}
                  <div
                    className="glass-panel"
                    style={{
                      width: '44%',
                      padding: '24px',
                      background: 'rgba(11, 22, 40, 0.85)',
                      border: '1.5px solid #1E3A5F',
                      borderRadius: '16px',
                      position: 'relative'
                    }}
                    className="journey-card"
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '8px'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '11px',
                          fontWeight: 800,
                          color: step.color,
                          padding: '2px 8px',
                          background: 'rgba(15, 23, 42, 0.8)',
                          borderRadius: '4px',
                          border: `1px solid ${step.color}40`
                        }}
                      >
                        STEP {step.number}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#F8FAFC', marginBottom: '2px' }}>
                      {step.title}
                    </h3>

                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '12px',
                        color: '#93C5FD',
                        marginBottom: '10px'
                      }}
                    >
                      {step.subtitle}
                    </div>

                    <p style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: '1.6' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .journey-central-line {
            left: 20px !important;
          }
          .journey-center-node {
            left: 20px !important;
            top: 28px !important;
            transform: none !important;
          }
          .journey-item-row {
            justify-content: flex-start !important;
            padding-left: 56px !important;
          }
          .journey-card {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
