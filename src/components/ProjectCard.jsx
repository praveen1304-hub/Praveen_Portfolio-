import React from 'react';
import { ExternalLink, ArrowRight, Layers, Cpu, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, isActive, onViewDetails }) {
  return (
    <div
      className="album-card-inner"
      style={{
        background: isActive
          ? 'linear-gradient(135deg, #0E1B31 0%, #0B1628 100%)'
          : '#0B1628',
        border: isActive
          ? `1.5px solid ${project.color || '#3B82F6'}`
          : '1.5px solid #1E3A5F',
        boxShadow: isActive
          ? `0 20px 50px -15px rgba(0, 0, 0, 0.95), 0 0 32px ${project.accentGlow || 'rgba(59, 130, 246, 0.3)'}`
          : '0 8px 24px rgba(0, 0, 0, 0.6)',
        borderRadius: '18px',
        overflow: 'hidden',
        position: 'relative',
        willChange: 'transform, opacity'
      }}
    >
      {/* Project Card Header & Visual Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '190px',
          background: '#07101E',
          overflow: 'hidden',
          borderBottom: '1px solid #1E3A5F'
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        {/* Dark Vignette Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(5, 11, 20, 0.15) 0%, rgba(11, 22, 40, 0.85) 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            right: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10
          }}
        >
          <span
            style={{
              padding: '3px 8px',
              borderRadius: '6px',
              background: 'rgba(5, 11, 20, 0.85)',
              border: '1px solid #1E3A5F',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              fontWeight: 800,
              color: '#38BDF8'
            }}
          >
            #{project.number}
          </span>

          <span className="category-badge" style={{ background: 'rgba(5, 11, 20, 0.85)', fontSize: '10px' }}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content Body */}
      <div
        style={{
          padding: '18px 22px 20px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <div>
          {/* Title & Tagline */}
          <h3
            style={{
              fontSize: '21px',
              fontWeight: 800,
              color: '#F8FAFC',
              marginBottom: '3px'
            }}
          >
            {project.title}
          </h3>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11.5px',
              color: project.color || '#38BDF8',
              marginBottom: '10px',
              fontWeight: 600
            }}
          >
            {project.tagline}
          </div>

          <p
            style={{
              fontSize: '13.5px',
              lineHeight: '1.5',
              color: '#CBD5E1',
              marginBottom: '12px'
            }}
          >
            {project.description}
          </p>

          {/* Technology Chips */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px',
              marginBottom: '12px'
            }}
          >
            {project.technologies &&
              project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-chip" style={{ fontSize: '10.5px', padding: '3px 7px' }}>
                  {tech}
                </span>
              ))}
          </div>

          {/* Architecture Flow Diagram */}
          {project.flow && (
            <div className="flow-diagram" style={{ padding: '8px 12px', marginTop: '6px' }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '9.5px',
                  color: '#64748B',
                  fontWeight: 'bold',
                  marginRight: '2px'
                }}
              >
                FLOW:
              </span>
              {project.flow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="flow-step" style={{ fontSize: '10px', padding: '2px 6px' }}>{step}</span>
                  {idx < project.flow.length - 1 && <span className="flow-arrow">→</span>}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '16px',
            paddingTop: '14px',
            borderTop: '1px solid #1E3A5F'
          }}
        >
          <button
            onClick={() => onViewDetails(project.id)}
            className="btn btn-primary"
            style={{
              flex: 1,
              padding: '9px 14px',
              fontSize: '13px'
            }}
          >
            <span>View Details</span>
            <ArrowRight size={14} />
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{
              padding: '9px 14px',
              fontSize: '13px'
            }}
            title="GitHub Repository"
          >
            <GithubIcon size={15} />
            <span>GitHub</span>
          </a>

          {project.liveDemo && project.liveDemo !== '#' && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cyan"
              style={{
                padding: '9px 12px'
              }}
              title="Live Demo"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
