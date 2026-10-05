import React from 'react';
import { GraduationCap, MapPin, Code2, Sparkles, Compass, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '50px',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative */}
          <div>
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
                ABOUT ME
              </span>
            </div>

            <h2 className="section-title">
              Engineering Practical Software with Modern Web Architectures
            </h2>

            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#CBD5E1',
                marginBottom: '16px'
              }}
            >
              I am a final-year <strong style={{ color: '#F8FAFC' }}>B.Tech Artificial Intelligence &amp; Data Science</strong> student driven by a passion for building robust full-stack web applications. My development journey revolves around taking ambiguous or messy problems and crafting clean, reliable, and user-centric software solutions.
            </p>

            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.8',
                color: '#94A3B8',
                marginBottom: '28px'
              }}
            >
              Comfortable working across the frontend and backend stack, I specialize in <strong style={{ color: '#38BDF8' }}>React.js</strong> for reactive user interfaces, <strong style={{ color: '#FACC15' }}>Python &amp; Flask</strong> for agile microservices, and <strong style={{ color: '#60A5FA' }}>SQL (MySQL)</strong> for structured relational data modeling. I prioritize clean code principles, fast adaptability to new developer ecosystems, and building real-world software tailored for immediate impact.
            </p>

            {/* Core Highlights List */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                marginBottom: '32px'
              }}
              className="about-highlights-grid"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '12px 14px',
                  background: 'rgba(11, 22, 40, 0.6)',
                  border: '1px solid #1E3A5F',
                  borderRadius: '10px'
                }}
              >
                <CheckCircle2 size={18} color="#22C55E" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#F8FAFC' }}>Academic Foundation</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8' }}>B.Tech in AI &amp; Data Science</div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '12px 14px',
                  background: 'rgba(11, 22, 40, 0.6)',
                  border: '1px solid #1E3A5F',
                  borderRadius: '10px'
                }}
              >
                <CheckCircle2 size={18} color="#38BDF8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#F8FAFC' }}>Full Stack Mindset</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8' }}>React + Python/Flask + SQL</div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '12px 14px',
                  background: 'rgba(11, 22, 40, 0.6)',
                  border: '1px solid #1E3A5F',
                  borderRadius: '10px'
                }}
              >
                <CheckCircle2 size={18} color="#A855F7" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#F8FAFC' }}>Fast Adaptability</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8' }}>Rapid learner &amp; problem solver</div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '12px 14px',
                  background: 'rgba(11, 22, 40, 0.6)',
                  border: '1px solid #1E3A5F',
                  borderRadius: '10px'
                }}
              >
                <CheckCircle2 size={18} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#F8FAFC' }}>Career Objective</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8' }}>Entry-level Full Stack Dev</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Glass Profile Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div
              className="glass-panel-elevated"
              style={{
                width: '100%',
                maxWidth: '420px',
                padding: '24px',
                textAlign: 'center',
                position: 'relative',
                border: '1.5px solid rgba(59, 130, 246, 0.35)',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.9), 0 0 30px rgba(37, 99, 235, 0.25)'
              }}
            >
              {/* Profile Image Frame with Subtle Glow */}
              <div
                style={{
                  position: 'relative',
                  width: '260px',
                  height: '260px',
                  margin: '0 auto 20px auto',
                  borderRadius: '20px',
                  padding: '4px',
                  background: 'linear-gradient(135deg, #2563EB, #7C3AED, #06B6D4)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 0 15px rgba(124, 58, 237, 0.3)'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: '#0B1628',
                    position: 'relative'
                  }}
                >
                  <img
                    src="/assets/images/profile.jpg"
                    alt="Praveen R - Full Stack Developer"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/images/profile.svg';
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  {/* Subtle Corner Tech Accent */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '16px',
                      pointerEvents: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Developer Credentials */}
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#F8FAFC',
                  marginBottom: '4px'
                }}
              >
                Praveen R
              </h3>

              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#38BDF8',
                  marginBottom: '16px'
                }}
              >
                Full Stack Developer
              </div>

              {/* Badges Container */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  flexWrap: 'wrap',
                  paddingTop: '12px',
                  borderTop: '1px solid #1E3A5F'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    color: '#94A3B8'
                  }}
                >
                  <GraduationCap size={14} color="#60A5FA" />
                  <span>B.Tech AI &amp; DS</span>
                </div>

                <span style={{ color: '#1E3A5F' }}>•</span>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    color: '#94A3B8'
                  }}
                >
                  <MapPin size={14} color="#F43F5E" />
                  <span>Namakkal, TN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 580px) {
          .about-highlights-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
