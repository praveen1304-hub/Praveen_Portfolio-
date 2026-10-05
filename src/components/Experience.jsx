import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Code2, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      period: 'CURRENT',
      role: 'Final-Year Student & Full Stack Developer',
      company: 'B.Tech AI & Data Science',
      badge: 'Academic & Development',
      badgeColor: '#38BDF8',
      responsibilities: [
        'Developing full-stack web applications using React.js, Python Flask, and SQL databases.',
        'Implementing cross-platform mobile solutions (React Native) and IoT edge computer vision pipelines.',
        'Active problem solving, participating in national hackathons (Smart India, MSME, Startup TN).'
      ],
      technologies: ['React.js', 'Flask', 'MySQL', 'React Native', 'OpenCV', 'Git']
    },
    {
      period: 'FEB 2026 — MAY 2026',
      role: 'Python Intern',
      company: 'Cybernaut Ed Tech Private Limited',
      badge: 'Internship Experience',
      badgeColor: '#FACC15',
      responsibilities: [
        'Hands-on development of structured Python automation scripts and practical software modules.',
        'Practicing algorithmic problem solving, data structures, and object-oriented programming paradigms.',
        'Engaged in rigorous project-based learning and software engineering workflows.'
      ],
      technologies: ['Python', 'Data Structures', 'Automation Scripts', 'Problem Solving']
    }
  ];

  return (
    <section id="experience" className="section-wrapper">
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
            <Briefcase size={15} color="#38BDF8" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#93C5FD'
              }}
            >
              CAREER &amp; INTERNSHIP
            </span>
          </div>

          <h2 className="section-title">My Experience</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From learning fundamentals to building practical software.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '32px'
          }}
        >
          {/* Vertical Glowing Timeline Line */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: '7px',
              width: '2px',
              background: 'linear-gradient(180deg, #3B82F6 0%, #7C3AED 50%, #1E3A5F 100%)',
              boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)'
            }}
          />

          {/* Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {experiences.map((exp, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                {/* Glowing Node on Timeline */}
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: '-32px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#0B1628',
                    border: `2.5px solid ${exp.badgeColor}`,
                    boxShadow: `0 0 15px ${exp.badgeColor}`,
                    transform: 'translateX(-50%)',
                    zIndex: 10
                  }}
                />

                {/* Experience Glass Card */}
                <div
                  className="glass-panel"
                  style={{
                    padding: '28px 32px',
                    background: 'rgba(11, 22, 40, 0.85)',
                    border: '1.5px solid #1E3A5F',
                    borderRadius: '16px',
                    boxShadow: '0 12px 35px -10px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  {/* Top Bar: Period + Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px',
                      marginBottom: '12px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '12px',
                        fontWeight: 700,
                        color: exp.badgeColor
                      }}
                    >
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>

                    <span
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: `1px solid ${exp.badgeColor}40`,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px',
                        fontWeight: 600,
                        color: exp.badgeColor
                      }}
                    >
                      {exp.badge}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#F8FAFC',
                      marginBottom: '4px'
                    }}
                  >
                    {exp.role}
                  </h3>

                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#93C5FD',
                      marginBottom: '18px'
                    }}
                  >
                    {exp.company}
                  </div>

                  {/* Responsibilities Bullets */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '14.5px',
                          color: '#CBD5E1',
                          lineHeight: '1.6'
                        }}
                      >
                        <CheckCircle size={16} color="#22C55E" style={{ flexShrink: 0, marginTop: '4px' }} />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      paddingTop: '16px',
                      borderTop: '1px solid #1E3A5F'
                    }}
                  >
                    {exp.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="tech-chip" style={{ fontSize: '11px', padding: '3px 8px' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
