import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Layers } from 'lucide-react';
import { skills as allSkills, skillCategories } from '../data/skills';
import SkillCard from './SkillCard';

export default function SkillsAlbum() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredSkills =
    selectedCategory === 'All'
      ? allSkills
      : allSkills.filter((s) => s.category === selectedCategory);

  // Reset index when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedCategory]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % filteredSkills.length);
  }, [filteredSkills.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + filteredSkills.length) % filteredSkills.length);
  }, [filteredSkills.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // only trigger if user is viewing or focused around skills section
      const section = document.getElementById('skills');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

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
    <section id="skills" className="section-wrapper">
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
            <Layers size={15} color="#38BDF8" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#93C5FD'
              }}
            >
              TECHNICAL CAPABILITIES
            </span>
          </div>

          <h2 className="section-title">What I Build</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Technologies and skills I use to create practical solutions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '36px'
          }}
        >
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '10px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '13px',
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected ? '#FFFFFF' : '#94A3B8',
                  background: isSelected
                    ? 'linear-gradient(135deg, #2563EB, #7C3AED)'
                    : 'rgba(11, 22, 40, 0.8)',
                  border: isSelected ? '1px solid #38BDF8' : '1px solid #1E3A5F',
                  boxShadow: isSelected ? '0 0 20px rgba(37, 99, 235, 0.4)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3D Album Stage */}
        <div
          className="album-3d-stage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="album-track">
            {filteredSkills.map((skill, index) => {
              const total = filteredSkills.length;
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
                  key={skill.id}
                  className={`album-card-wrapper ${positionClass}`}
                  onClick={() => {
                    if (positionClass === 'prev') handlePrev();
                    if (positionClass === 'next') handleNext();
                  }}
                >
                  <SkillCard skill={skill} isActive={positionClass === 'active'} />
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
            aria-label="Previous Skill"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="album-dots">
            {filteredSkills.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`album-dot ${idx === activeIndex ? 'active' : ''}`}
                aria-label={`Go to skill ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="album-arrow-btn"
            aria-label="Next Skill"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
