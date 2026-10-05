import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Layers, Cpu, Code2 } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projects } from '../data/projects';

export default function ProjectDetails({ projectId, onBack }) {
  const project = projects.find((p) => p.id === projectId) || projects[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  if (!project) return null;

  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: '100px',
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 20
      }}
    >
      <div className="container" style={{ maxWidth: '1040px' }}>
        {/* Back Button */}
        <button
          onClick={onBack}
          className="btn btn-secondary"
          style={{
            marginBottom: '32px',
            padding: '10px 20px',
            fontSize: '14px',
            borderRadius: '10px'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </button>

        {/* Project Hero Header */}
        <div
          className="glass-panel-elevated"
          style={{
            padding: '36px',
            border: `1.5px solid ${project.color || '#3B82F6'}`,
            boxShadow: `0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 35px ${project.accentGlow || 'rgba(59, 130, 246, 0.3)'}`,
            borderRadius: '24px',
            marginBottom: '40px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}
          >
            <span
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(5, 11, 20, 0.8)',
                border: '1px solid #1E3A5F',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                fontWeight: 800,
                color: '#38BDF8'
              }}
            >
              PROJECT #{project.number}
            </span>

            <span className="category-badge">{project.category}</span>

            {project.date && (
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  color: '#94A3B8'
                }}
              >
                {project.date}
              </span>
            )}
          </div>

          <h1
            style={{
              fontSize: 'clamp(28px, 4.5vw, 44px)',
              fontWeight: 900,
              color: '#FFFFFF',
              marginBottom: '10px'
            }}
          >
            {project.title}
          </h1>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '16px',
              color: project.color || '#38BDF8',
              fontWeight: 600,
              marginBottom: '20px'
            }}
          >
            {project.tagline}
          </div>

          <p
            style={{
              fontSize: '16.5px',
              lineHeight: '1.8',
              color: '#CBD5E1',
              marginBottom: '28px'
            }}
          >
            {project.fullDescription || project.description}
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '14px' }}
            >
              <GithubIcon size={18} />
              <span>View Source Code</span>
            </a>

            {project.liveDemo && project.liveDemo !== '#' && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cyan"
                style={{ padding: '12px 24px', fontSize: '14px' }}
              >
                <ExternalLink size={18} />
                <span>Launch Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Visual Image Showcase */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '40px',
            border: '1.5px solid #1E3A5F',
            background: '#07101E',
            maxHeight: '480px'
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              maxHeight: '480px',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Deep Dive Grid: Problem & Solution */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            marginBottom: '40px'
          }}
          className="details-two-col"
        >
          {/* Problem Card */}
          <div
            className="glass-panel"
            style={{
              padding: '28px',
              background: 'rgba(11, 22, 40, 0.85)',
              border: '1.5px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '18px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(239, 68, 68, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EF4444'
                }}
              >
                <AlertTriangle size={20} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF' }}>The Problem</h3>
            </div>
            <p style={{ fontSize: '14.5px', color: '#CBD5E1', lineHeight: '1.7' }}>
              {project.problem}
            </p>
          </div>

          {/* Solution Card */}
          <div
            className="glass-panel"
            style={{
              padding: '28px',
              background: 'rgba(11, 22, 40, 0.85)',
              border: '1.5px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '18px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(34, 197, 94, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#22C55E'
                }}
              >
                <Lightbulb size={20} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF' }}>The Solution</h3>
            </div>
            <p style={{ fontSize: '14.5px', color: '#CBD5E1', lineHeight: '1.7' }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features & Architecture */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '24px',
            marginBottom: '40px'
          }}
          className="details-two-col"
        >
          {/* Features List */}
          <div
            className="glass-panel"
            style={{
              padding: '28px',
              background: 'rgba(11, 22, 40, 0.85)',
              border: '1.5px solid #1E3A5F',
              borderRadius: '18px'
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '18px' }}>
              Core Features &amp; Functionalities
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.features &&
                project.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} color="#38BDF8" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#CBD5E1' }}>{feat}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Technology Stack & Flow */}
          <div
            className="glass-panel"
            style={{
              padding: '28px',
              background: 'rgba(11, 22, 40, 0.85)',
              border: '1.5px solid #1E3A5F',
              borderRadius: '18px'
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
              Technology Stack
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {project.technologies &&
                project.technologies.map((t, idx) => (
                  <span key={idx} className="tech-chip">
                    {t}
                  </span>
                ))}
            </div>

            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#93C5FD', marginBottom: '10px' }}>
              Data &amp; Architecture Flow
            </h4>
            <div className="flow-diagram">
              {project.flow &&
                project.flow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="flow-step">{step}</span>
                    {idx < project.flow.length - 1 && <span className="flow-arrow">→</span>}
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>

        {/* Challenges & Outcome */}
        <div
          className="glass-panel"
          style={{
            padding: '32px',
            background: 'rgba(11, 22, 40, 0.85)',
            border: '1.5px solid #1E3A5F',
            borderRadius: '20px'
          }}
        >
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
            Engineering Challenges &amp; Measurable Outcome
          </h3>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#FACC15', fontWeight: 'bold', marginBottom: '8px' }}>
              TECHNICAL CHALLENGES OVERCOME:
            </div>
            <ul style={{ paddingLeft: '20px', color: '#CBD5E1', fontSize: '14px', lineHeight: '1.8' }}>
              {project.challenges &&
                project.challenges.map((ch, idx) => (
                  <li key={idx} style={{ marginBottom: '6px' }}>
                    {ch}
                  </li>
                ))}
            </ul>
          </div>

          <div
            style={{
              padding: '16px 20px',
              background: 'rgba(34, 197, 94, 0.12)',
              border: '1px solid rgba(34, 197, 94, 0.35)',
              borderRadius: '12px'
            }}
          >
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#22C55E', fontWeight: 'bold', marginBottom: '4px' }}>
              FINAL OUTCOME
            </div>
            <p style={{ fontSize: '14.5px', color: '#86EFAC', lineHeight: '1.6' }}>
              {project.outcome}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .details-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
