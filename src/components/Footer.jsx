import React from 'react';
import { ArrowUp, Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Experience', href: '#experience' },
    { name: 'Journey', href: '#journey' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer
      style={{
        background: '#040810',
        borderTop: '1px solid #1E3A5F',
        paddingTop: '60px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 20
      }}
    >
      <div className="container">
        {/* Top Tier */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '30px',
            paddingBottom: '40px',
            borderBottom: '1px solid #1E293B'
          }}
        >
          {/* Left: Brand info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0B1628, #1E3A5F)',
                border: '1.5px solid #3B82F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 800,
                fontSize: '20px',
                color: '#38BDF8'
              }}
            >
              P
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '18px', fontWeight: 800, color: '#F8FAFC' }}>
                Praveen<span style={{ color: '#3B82F6' }}> R</span>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#94A3B8' }}>
                Full Stack Developer • Namakkal, TN
              </div>
            </div>
          </div>

          {/* Center/Right: Quick Nav Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center'
            }}
          >
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  fontSize: '13.5px',
                  color: '#94A3B8',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Scroll Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="https://github.com/praveen1304-hub"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#0B1628',
                border: '1px solid #1E3A5F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#CBD5E1',
                transition: 'all 0.2s'
              }}
              title="GitHub"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3B82F6';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1E3A5F';
                e.currentTarget.style.color = '#CBD5E1';
              }}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/praveen-r-727a03293"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#0B1628',
                border: '1px solid #1E3A5F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#CBD5E1',
                transition: 'all 0.2s'
              }}
              title="LinkedIn"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#38BDF8';
                e.currentTarget.style.color = '#38BDF8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1E3A5F';
                e.currentTarget.style.color = '#CBD5E1';
              }}
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href="mailto:praveen1304r@gmail.com"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#0B1628',
                border: '1px solid #1E3A5F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#CBD5E1',
                transition: 'all 0.2s'
              }}
              title="Email"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#EF4444';
                e.currentTarget.style.color = '#EF4444';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1E3A5F';
                e.currentTarget.style.color = '#CBD5E1';
              }}
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                cursor: 'pointer',
                boxShadow: '0 0 15px rgba(37, 99, 235, 0.4)',
                transition: 'transform 0.2s'
              }}
              title="Scroll to Top"
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            paddingTop: '28px',
            fontSize: '13px',
            color: '#64748B',
            fontFamily: "'JetBrains Mono', monospace"
          }}
        >
          <div>
            © 2026 Praveen R • All Rights Reserved
          </div>
          <div>
            Crafted with React.js &amp; Pure CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
