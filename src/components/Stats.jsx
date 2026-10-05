import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import { certificates } from '../data/certificates';

export default function Stats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    certificates: 0,
    internships: 0,
    degrees: 0
  });

  const sectionRef = useRef(null);

  const targetProjects = projects.length;
  const targetCertificates = certificates.length;
  const targetInternships = 1;
  const targetDegrees = 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1200; // ms
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // easeOutQuad
            const ease = 1 - (1 - progress) * (1 - progress);

            setCounts({
              projects: Math.min(targetProjects, Math.round(ease * targetProjects)),
              certificates: Math.min(targetCertificates, Math.round(ease * targetCertificates)),
              internships: Math.min(targetInternships, Math.round(ease * targetInternships)),
              degrees: Math.min(targetDegrees, Math.round(ease * targetDegrees))
            });

            if (frame >= totalFrames) {
              clearInterval(timer);
              setCounts({
                projects: targetProjects,
                certificates: targetCertificates,
                internships: targetInternships,
                degrees: targetDegrees
              });
            }
          }, frameDuration);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, targetProjects, targetCertificates]);

  const statItems = [
    {
      value: String(counts.projects).padStart(2, '0'),
      label: 'Projects',
      tag: 'Full Stack & AI'
    },
    {
      value: String(counts.certificates).padStart(2, '0'),
      label: 'Certifications',
      tag: 'Verified Credentials'
    },
    {
      value: String(counts.internships).padStart(2, '0'),
      label: 'Internship',
      tag: 'Python Dev'
    },
    {
      value: String(counts.degrees).padStart(2, '0'),
      label: 'Degree',
      tag: 'B.Tech AI & DS'
    }
  ];

  return (
    <section ref={sectionRef} className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          {statItems.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: '#64748B',
                  marginTop: '4px'
                }}
              >
                {stat.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
