import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';

export default function CertificateLightbox({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '850px',
          background: '#0B1628',
          border: '1.5px solid #3B82F6',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 45px rgba(37, 99, 235, 0.4)'
        }}
      >
        {/* Close Button */}
        <button onClick={onClose} className="lightbox-close" aria-label="Close certificate lightbox">
          <X size={20} />
        </button>

        {/* Certificate Large Preview Image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '420px',
            borderRadius: '12px',
            overflow: 'hidden',
            background: '#050B14',
            border: '1px solid #1E3A5F',
            marginBottom: '20px'
          }}
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
        </div>

        {/* Certificate Metadata */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            borderTop: '1px solid #1E3A5F',
            paddingTop: '16px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="category-badge">{cert.category}</span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: '#22C55E',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <ShieldCheck size={14} />
                {cert.badge}
              </span>
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '2px' }}>
              {cert.title}
            </h3>
            <div style={{ fontSize: '13.5px', color: '#93C5FD' }}>
              Issued by: <strong>{cert.issuer}</strong>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#64748B' }}>
              CREDENTIAL ID
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12.5px',
                fontWeight: 700,
                color: '#38BDF8'
              }}
            >
              {cert.credentialId}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
