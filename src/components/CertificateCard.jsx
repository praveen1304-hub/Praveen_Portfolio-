import React from 'react';
import { Award, ExternalLink, ShieldCheck, Eye } from 'lucide-react';

export default function CertificateCard({ cert, isActive, onOpenLightbox }) {
  return (
    <div
      className="album-card-inner"
      style={{
        background: isActive
          ? 'linear-gradient(135deg, #0E1B31 0%, #0B1628 100%)'
          : '#0B1628',
        border: isActive
          ? `1.5px solid ${cert.color || '#3B82F6'}`
          : '1.5px solid #1E3A5F',
        boxShadow: isActive
          ? '0 20px 48px -12px rgba(0, 0, 0, 0.95), 0 0 30px rgba(59, 130, 246, 0.3)'
          : '0 8px 24px rgba(0, 0, 0, 0.6)',
        borderRadius: '18px',
        overflow: 'hidden',
        padding: '20px',
        willChange: 'transform, opacity'
      }}
    >
      {/* Certificate Framed Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '190px',
          borderRadius: '10px',
          overflow: 'hidden',
          background: '#07101E',
          border: '1px solid #1E3A5F',
          marginBottom: '16px',
          cursor: 'pointer'
        }}
        onClick={() => onOpenLightbox(cert)}
      >
        <img
          src={cert.image}
          alt={cert.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />

        {/* Hover View Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(5, 11, 20, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.2s ease'
          }}
          className="cert-hover-overlay"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '6px',
              background: 'rgba(37, 99, 235, 0.9)',
              color: '#FFFFFF',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              fontWeight: 'bold'
            }}
          >
            <Eye size={14} />
            <span>Click to Enlarge</span>
          </div>
        </div>
      </div>

      {/* Certificate Details */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '8px'
          }}
        >
          <span className="category-badge" style={{ fontSize: '10px', padding: '2px 8px' }}>{cert.category}</span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10.5px',
              color: '#22C55E',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <ShieldCheck size={13} />
            {cert.badge}
          </span>
        </div>

        <h3
          style={{
            fontSize: '20px',
            fontWeight: 800,
            color: '#F8FAFC',
            marginBottom: '3px'
          }}
        >
          {cert.title}
        </h3>

        <div
          style={{
            fontSize: '13px',
            color: '#93C5FD',
            fontWeight: 600,
            marginBottom: '10px'
          }}
        >
          {cert.issuer}
        </div>

        <p
          style={{
            fontSize: '12.5px',
            color: '#94A3B8',
            lineHeight: '1.5',
            marginBottom: '12px'
          }}
        >
          {cert.description}
        </p>

        {/* Covered Skills Chips */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '5px',
            marginBottom: '16px'
          }}
        >
          {cert.skillsCovered &&
            cert.skillsCovered.map((s, idx) => (
              <span key={idx} className="tech-chip" style={{ fontSize: '10px', padding: '2px 7px' }}>
                {s}
              </span>
            ))}
        </div>

        {/* Action Trigger */}
        <button
          onClick={() => onOpenLightbox(cert)}
          className="btn btn-primary"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '13px'
          }}
        >
          <Award size={15} />
          <span>View Verified Certificate</span>
        </button>
      </div>

      <style>{`
        .album-card-inner:hover .cert-hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
