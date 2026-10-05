import React from 'react';
import {
  Atom,
  FileCode2,
  Server,
  Cpu,
  Database,
  Flame,
  Smartphone,
  Network,
  Eye,
  GitBranch,
  CircuitBoard,
  Code2
} from 'lucide-react';

const ICON_MAP = {
  Atom,
  FileCode2,
  Server,
  Cpu,
  Database,
  Flame,
  Smartphone,
  Network,
  Eye,
  GitBranch,
  CircuitBoard,
  Code2
};

export default function SkillCard({ skill, isActive }) {
  const IconComponent = ICON_MAP[skill.iconName] || Code2;

  return (
    <div
      className="album-card-inner"
      style={{
        padding: '24px 28px',
        minHeight: '340px',
        background: isActive
          ? 'linear-gradient(135deg, rgba(14, 27, 49, 0.95) 0%, rgba(11, 22, 40, 0.95) 100%)'
          : 'rgba(11, 22, 40, 0.75)',
        border: isActive ? `1.5px solid ${skill.color || '#3B82F6'}` : '1.5px solid #1E3A5F',
        boxShadow: isActive
          ? `0 16px 40px -10px rgba(0, 0, 0, 0.9), 0 0 30px ${skill.color ? skill.color + '35' : 'rgba(59, 130, 246, 0.25)'}`
          : '0 8px 24px rgba(0, 0, 0, 0.6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        willChange: 'transform, opacity'
      }}
    >
      {/* Header: Icon + Category Badge */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(15, 23, 42, 0.9)',
              border: `1.5px solid ${skill.color || '#3B82F6'}`,
              boxShadow: `0 0 15px ${skill.color ? skill.color + '35' : 'rgba(59, 130, 246, 0.25)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: skill.color || '#38BDF8'
            }}
          >
            <IconComponent size={24} />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '2px'
            }}
          >
            <span className="category-badge" style={{ fontSize: '10px', padding: '3px 10px' }}>{skill.category}</span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10.5px',
                color: '#64748B'
              }}
            >
              {skill.level}
            </span>
          </div>
        </div>

        {/* Skill Name & Tagline */}
        <h3
          style={{
            fontSize: '22px',
            fontWeight: 800,
            color: '#F8FAFC',
            marginBottom: '4px'
          }}
        >
          {skill.name}
        </h3>

        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: 600,
            color: skill.color || '#38BDF8',
            marginBottom: '12px'
          }}
        >
          {skill.tagline}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '13.5px',
            lineHeight: '1.55',
            color: '#CBD5E1',
            marginBottom: '16px'
          }}
        >
          {skill.description}
        </p>
      </div>

      {/* Footer: Associated Projects */}
      <div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10.5px',
            color: '#64748B',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '6px'
          }}
        >
          Featured In:
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '5px'
          }}
        >
          {skill.projects &&
            skill.projects.map((proj, idx) => (
              <span
                key={idx}
                style={{
                  padding: '3px 8px',
                  borderRadius: '5px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid #1E3A5F',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10.5px',
                  color: '#93C5FD'
                }}
              >
                {proj}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
