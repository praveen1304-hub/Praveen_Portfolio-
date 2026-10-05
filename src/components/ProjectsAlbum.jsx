import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, FolderGit2, ArrowRight, LayoutGrid, X } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsAlbum({ onViewDetails }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllModal, setShowAllModal] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const section = document.getElementById('projects');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView && !showAllModal) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, showAllModal]);

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
    <section id="projects" className="section-wrapper">
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
            <FolderGit2 size={15} color="#38BDF8" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#93C5FD'
              }}
            >
            </span>
          </div>

          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real solutions. Practical development. Built with modern technologies.
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
            {projects.map((project, index) => {
              const total = projects.length;
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
                  key={project.id}
                  className={`album-card-wrapper ${positionClass}`}
                  onClick={() => {
                    if (positionClass === 'prev') handlePrev();
                    if (positionClass === 'next') handleNext();
                  }}
                >
                  <ProjectCard
                    project={project}
                    isActive={positionClass === 'active'}
                    onViewDetails={onViewDetails}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* 3D Album Controls & View All Button */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            marginTop: '36px'
          }}
        >
          <div className="album-controls" style={{ marginTop: 0 }}>
            <button
              onClick={handlePrev}
              className="album-arrow-btn"
              aria-label="Previous Project"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="album-dots">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`album-dot ${idx === activeIndex ? 'active' : ''}`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="album-arrow-btn"
              aria-label="Next Project"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* View All Projects Button */}
          <button
            onClick={() => setShowAllModal(true)}
            className="btn btn-secondary"
            style={{
              padding: '11px 24px',
              fontSize: '14px',
              borderRadius: '12px'
            }}
          >
            <LayoutGrid size={16} color="#38BDF8" />
            <span>View All Projects ({projects.length}) →</span>
          </button>
        </div>
      </div>

      {/* View All Projects Modal */}
      {showAllModal && (
        <div
          className="lightbox-backdrop"
          onClick={() => setShowAllModal(false)}
        >
          <div
            className="lightbox-content"
            style={{ maxWidth: '1080px', maxHeight: '85vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAllModal(false)}
              className="lightbox-close"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div style={{ marginBottom: '24px' }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  color: '#38BDF8',
                  marginBottom: '4px'
                }}
              >
                COMPLETE CATALOG
              </div>
              <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#FFFFFF' }}>
                All Engineered Projects ({projects.length})
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}
            >
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  style={{
                    background: '#0B1628',
                    border: '1px solid #1E3A5F',
                    borderRadius: '14px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '10px'
                      }}
                    >
                      <span className="category-badge">{proj.category}</span>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '11px',
                          color: '#64748B'
                        }}
                      >
                        #{proj.number}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#F8FAFC', marginBottom: '8px' }}>
                      {proj.title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: '#94A3B8', marginBottom: '14px', lineHeight: '1.5' }}>
                      {proj.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => {
                        setShowAllModal(false);
                        onViewDetails(proj.id);
                      }}
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '8px 14px', fontSize: '12px' }}
                    >
                      <span>Explore</span>
                      <ArrowRight size={13} />
                    </button>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: '8px 12px', fontSize: '12px' }}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
