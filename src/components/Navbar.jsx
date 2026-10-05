import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sparkles, Terminal } from 'lucide-react';

const NAV_LINKS = [
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [glowMode, setGlowMode] = useState(true);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);

          const scrollPos = window.scrollY + 140;
          for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
            const link = NAV_LINKS[i];
            const section = document.querySelector(link.href);
            if (section && section.offsetTop <= scrollPos) {
              setActiveSection(link.href.substring(1));
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(5, 11, 20, 0.88)' : 'rgba(5, 11, 20, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid #1E3A5F' : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.7)' : 'none',
        height: '72px'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        {/* Left: Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0B1628, #1E3A5F)',
              border: '1.5px solid #3B82F6',
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
              fontSize: '18px',
              color: '#38BDF8'
            }}
          >
            Pr
          </div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: '17px',
              letterSpacing: '-0.02em',
              color: '#F8FAFC'
            }}
          >
            Praveen<span style={{ color: '#3B82F6' }}> R</span>
          </span>
        </a>

        {/* Center: Desktop Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#38BDF8' : '#94A3B8',
                  backgroundColor: isActive ? 'rgba(37, 99, 235, 0.15)' : 'transparent',
                  border: isActive ? '1px solid rgba(59, 130, 246, 0.35)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#F8FAFC';
                    e.currentTarget.style.backgroundColor = 'rgba(30, 58, 95, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#94A3B8';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
          className="desktop-actions"
        >
          <button
            onClick={() => setGlowMode(!glowMode)}
            title="Toggle Cyber Aura"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(11, 22, 40, 0.7)',
              border: '1px solid #1E3A5F',
              color: glowMode ? '#38BDF8' : '#64748B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Sparkles size={18} />
          </button>

          <a
            href="/resume.pdf"
            download="Praveen_R_Resume.pdf"
            className="btn btn-primary"
            style={{
              padding: '9px 18px',
              fontSize: '13px',
              borderRadius: '10px'
            }}
          >
            <Download size={15} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            color: '#F8FAFC',
            padding: '8px',
            borderRadius: '8px',
            background: 'rgba(11, 22, 40, 0.7)',
            border: '1px solid #1E3A5F'
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            background: 'rgba(8, 17, 31, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid #1E3A5F',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#38BDF8' : '#CBD5E1',
                  background: isActive ? 'rgba(37, 99, 235, 0.2)' : 'transparent',
                  border: isActive ? '1px solid #3B82F6' : '1px solid transparent'
                }}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            download="Praveen_R_Resume.pdf"
            className="btn btn-primary"
            style={{
              marginTop: '10px',
              padding: '12px',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </div>
      )}

      {/* Mobile display styles helper */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
