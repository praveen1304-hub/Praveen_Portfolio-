import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificates } from '../data/certificates';
import CertificateCard from './CertificateCard';
import CertificateLightbox from './CertificateLightbox';

export default function CertificatesAlbum() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const section = document.getElementById('certificates');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView && !selectedCert) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, selectedCert]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState(null);
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) handleNext();
    if (touchEnd - touchStart > 50) handlePrev();
    setTouchStart(null);
  };

  return (
    <section id="certificates" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
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
            <ShieldCheck size={15} color="#38BDF8" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#93C5FD'
              }}
            >
              CREDENTIALS // {String(certificates.length).padStart(2, '0')} VERIFIED
            </span>
          </div>

          <h2 className="section-title">My Certifications</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Verified credentials that validate my skills and learning journey.
          </p>
        </div>

        {/* 3D Album Stage */}
        <div
          className="album-3d-stage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ minHeight: '560px' }}
        >
          <div className="album-track" style={{ height: '540px' }}>
            {certificates.map((cert, index) => {
              const total = certificates.length;
              const diff = (index - activeIndex + total) % total;

              let positionClass = 'hidden';
              if (diff === 0) {
                positionClass = 'active';
              } else if (diff === 1 || (total === 2 && diff === 1)) {
                positionClass = 'next';
              } else if (diff === total - 1) {
                positionClass = 'prev';
              } else if (diff === 2) {
                positionClass = 'far-next';
              } else if (diff === total - 2) {
                positionClass = 'far-prev';
              }

              return (
                <div
                  key={cert.id}
                  className={`album-card-wrapper ${positionClass}`}
                  onClick={() => {
                    if (positionClass === 'prev') handlePrev();
                    if (positionClass === 'next') handleNext();
                  }}
                >
                  <CertificateCard
                    cert={cert}
                    isActive={positionClass === 'active'}
                    onOpenLightbox={(c) => setSelectedCert(c)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* 3D Album Controls */}
        <div className="album-controls">
          <button
            onClick={handlePrev}
            className="album-arrow-btn"
            aria-label="Previous Certificate"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="album-dots">
            {certificates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`album-dot ${idx === activeIndex ? 'active' : ''}`}
                aria-label={`Go to certificate ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="album-arrow-btn"
            aria-label="Next Certificate"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <CertificateLightbox
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
