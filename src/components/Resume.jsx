import React from 'react';
import { FileText, Download, CheckCircle2, GraduationCap, Briefcase, Award, Code2, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="section-wrapper">
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
            <FileText size={15} color="#38BDF8" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#93C5FD'
              }}
            >
              CURRICULUM VITAE
            </span>
          </div>

          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Comprehensive overview of academic background, technical proficiencies, and verified credentials.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '40px',
            alignItems: 'center'
          }}
          className="resume-grid"
        >
          {/* Left Column: High-Tech PDF Preview Card */}
          <div
            className="glass-panel-elevated"
            style={{
              padding: '24px',
              position: 'relative',
              border: '1.5px solid #1E3A5F',
              borderRadius: '20px'
            }}
          >
            {/* Top Toolbar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '14px',
                borderBottom: '1px solid #1E3A5F',
                marginBottom: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E' }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#94A3B8', marginLeft: '6px' }}>
                  Praveen_R_Resume.pdf
                </span>
              </div>

              <a
                href="/resume.pdf"
                download="Praveen_R_Resume_With_Photo.pdf"
                className="btn btn-primary"
                style={{ padding: '6px 14px', fontSize: '12px', borderRadius: '8px' }}
              >
                <Download size={13} />
                <span>Download</span>
              </a>
            </div>

            {/* Document Mockup View */}
            <div
              style={{
                background: '#060D18',
                borderRadius: '12px',
                border: '1px solid #1E293B',
                padding: '24px',
                minHeight: '380px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ borderBottom: '1.5px solid #2563EB', paddingBottom: '12px', marginBottom: '16px' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF' }}>PRAVEEN R</h4>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#38BDF8' }}>
                    Full Stack Developer • Namakkal, TN
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#94A3B8' }}>
                    praveen1304r@gmail.com
                  </div>
                </div>

                {/* Section Snippets */}
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#38BDF8', fontWeight: 'bold' }}>
                    EDUCATION
                  </div>
                  <div style={{ fontSize: '12px', color: '#E2E8F0', fontWeight: 600 }}>
                    B.Tech — Artificial Intelligence &amp; Data Science
                  </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#38BDF8', fontWeight: 'bold' }}>
                    EXPERIENCE
                  </div>
                  <div style={{ fontSize: '12px', color: '#E2E8F0', fontWeight: 600 }}>
                    Python Intern — Cybernaut Ed Tech Pvt Ltd
                  </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#38BDF8', fontWeight: 'bold' }}>
                    KEY PROJECTS
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#94A3B8' }}>
                    Geo-Attend • Baby Guard System • Blood Donor Network • CampusPulse
                  </div>
                </div>
              </div>

              {/* Bottom Quick Download Trigger */}
              <div
                style={{
                  padding: '12px',
                  background: 'rgba(37, 99, 235, 0.12)',
                  borderRadius: '8px',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  textAlign: 'center'
                }}
              >
                <a
                  href="/resume.pdf"
                  download="Praveen_R_Resume.pdf"
                  style={{
                    color: '#38BDF8',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '12px',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Download size={14} />
                  <span>Click here to get the full formatted PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Quick Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Education Box */}
            <div
              className="glass-panel"
              style={{
                padding: '20px 24px',
                background: 'rgba(11, 22, 40, 0.75)',
                border: '1.5px solid #1E3A5F'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <GraduationCap size={18} color="#38BDF8" />
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>Education</h4>
              </div>
              <p style={{ fontSize: '14px', color: '#CBD5E1', marginBottom: '2px' }}>
                <strong>B.Tech in Artificial Intelligence &amp; Data Science</strong> (Final-Year)
              </p>
              <p style={{ fontSize: '12.5px', color: '#94A3B8' }}>
                Solid foundation in software architecture, computer science principles, and applied ML.
              </p>
            </div>

            {/* Technical Skills Box */}
            <div
              className="glass-panel"
              style={{
                padding: '20px 24px',
                background: 'rgba(11, 22, 40, 0.75)',
                border: '1.5px solid #1E3A5F'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Code2 size={18} color="#22C55E" />
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>Technical Stack</h4>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['React.js', 'Python', 'Flask', 'MySQL', 'Node.js', 'Express', 'Firebase', 'OpenCV', 'Git'].map((s) => (
                  <span key={s} className="tech-chip" style={{ fontSize: '11px', padding: '3px 8px' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Practical Internship & Credentials Box */}
            <div
              className="glass-panel"
              style={{
                padding: '20px 24px',
                background: 'rgba(11, 22, 40, 0.75)',
                border: '1.5px solid #1E3A5F'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Award size={18} color="#FACC15" />
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>Credentials &amp; Internship</h4>
              </div>
              <p style={{ fontSize: '13.5px', color: '#CBD5E1' }}>
                • Python Intern @ Cybernaut Ed Tech Pvt Ltd (FEB 2026 — MAY 2026)<br />
                • HackerRank SQL Certified &amp; Cybernaut Python Certified
              </p>
            </div>

            {/* Big Action Download Resume Button */}
            <a
              href="/resume.pdf"
              download="Praveen_R_Resume.pdf"
              className="btn btn-primary"
              style={{
                padding: '16px 28px',
                fontSize: '16px',
                borderRadius: '14px',
                justifyContent: 'center',
                boxShadow: '0 8px 30px rgba(37, 99, 235, 0.5)'
              }}
            >
              <Download size={20} />
              <span>Download Full Official Resume (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .resume-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
