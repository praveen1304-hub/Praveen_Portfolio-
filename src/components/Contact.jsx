import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ onShowToast }) {
  const email = 'praveen1304r@gmail.com';
  const location = 'Namakkal, Tamil Nadu';
  const githubUrl = 'https://github.com/praveen1304r';
  const linkedinUrl = 'https://www.linkedin.com/in/praveen-r-727a03293';

  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    senderEmail: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    if (onShowToast) onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Frontend-only: trigger formatted mailto
    const mailtoSubject = encodeURIComponent(
      formState.subject || `Portfolio Contact from ${formState.name || 'Visitor'}`
    );
    const mailtoBody = encodeURIComponent(
      `Hi Praveen,\n\nName: ${formState.name}\nEmail: ${formState.senderEmail}\n\nMessage:\n${formState.message}\n`
    );
    window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    if (onShowToast) onShowToast('Opening your default email client...');
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            <MessageSquare size={15} color="#38BDF8" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#93C5FD'
              }}
            >
              GET IN TOUCH
            </span>
          </div>

          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have an entry-level opportunity, project in mind, or just want to connect? Let's talk.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: '40px',
            maxWidth: '1080px',
            margin: '0 auto',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Coordinates & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email Card */}
            <div
              className="glass-panel"
              style={{
                padding: '24px',
                background: 'rgba(11, 22, 40, 0.85)',
                border: '1.5px solid #1E3A5F',
                borderRadius: '16px'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(37, 99, 235, 0.15)',
                  border: '1px solid #3B82F6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38BDF8',
                  marginBottom: '14px'
                }}
              >
                <Mail size={22} />
              </div>

              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#64748B', marginBottom: '4px' }}>
                DIRECT EMAIL
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px', wordBreak: 'break-all' }}>
                {email}
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href={`mailto:${email}`}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '8px 14px', fontSize: '13px' }}
                >
                  <Send size={14} />
                  <span>Send Email</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  style={{ padding: '8px 14px', fontSize: '13px' }}
                  title="Copy Email"
                >
                  {copied ? <Check size={14} color="#22C55E" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div
              className="glass-panel"
              style={{
                padding: '24px',
                background: 'rgba(11, 22, 40, 0.85)',
                border: '1.5px solid #1E3A5F',
                borderRadius: '16px'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(244, 63, 94, 0.15)',
                  border: '1px solid #F43F5E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FB7185',
                  marginBottom: '14px'
                }}
              >
                <MapPin size={22} />
              </div>

              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#64748B', marginBottom: '4px' }}>
                LOCATION
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
                {location}
              </div>
              <div style={{ fontSize: '13px', color: '#94A3B8', marginTop: '4px' }}>
                Tamil Nadu, India • Open for Onsite &amp; Remote Roles
              </div>
            </div>

            {/* Social Connect Channels */}
            <div
              className="glass-panel"
              style={{
                padding: '24px',
                background: 'rgba(11, 22, 40, 0.85)',
                border: '1.5px solid #1E3A5F',
                borderRadius: '16px'
              }}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#64748B', marginBottom: '12px' }}>
                DEVELOPER PROFILES
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href= "https://github.com/praveen1304-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '10px', fontSize: '13px' }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/praveen-r-727a03293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '10px', fontSize: '13px' }}
                >
                  <LinkedinIcon size={16} color="#38BDF8" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Frontend Email Composer Form */}
          <div
            className="glass-panel-elevated"
            style={{
              padding: '32px',
              background: 'rgba(14, 27, 49, 0.9)',
              border: '1.5px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '20px'
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>
              Quick Message Composer
            </h3>
            <p style={{ fontSize: '13.5px', color: '#94A3B8', marginBottom: '24px' }}>
              Compose your note below to automatically prepare and launch an email to <span style={{ color: '#38BDF8' }}>praveen1304r@gmail.com</span>.
            </p>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11.5px',
                      color: '#94A3B8',
                      marginBottom: '6px'
                    }}
                  >
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#08111F',
                      border: '1px solid #1E3A5F',
                      borderRadius: '10px',
                      color: '#FFFFFF',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border 0.2s'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#3B82F6')}
                    onBlur={(e) => (e.target.style.borderColor = '#1E3A5F')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11.5px',
                      color: '#94A3B8',
                      marginBottom: '6px'
                    }}
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.senderEmail}
                    onChange={(e) => setFormState({ ...formState, senderEmail: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#08111F',
                      border: '1px solid #1E3A5F',
                      borderRadius: '10px',
                      color: '#FFFFFF',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border 0.2s'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#3B82F6')}
                    onBlur={(e) => (e.target.style.borderColor = '#1E3A5F')}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11.5px',
                    color: '#94A3B8',
                    marginBottom: '6px'
                  }}
                >
                  SUBJECT
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: '#08111F',
                    border: '1px solid #1E3A5F',
                    borderRadius: '10px',
                    color: '#FFFFFF',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border 0.2s'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#3B82F6')}
                  onBlur={(e) => (e.target.style.borderColor = '#1E3A5F')}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11.5px',
                    color: '#94A3B8',
                    marginBottom: '6px'
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your note or project requirements here..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: '#08111F',
                    border: '1px solid #1E3A5F',
                    borderRadius: '10px',
                    color: '#FFFFFF',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border 0.2s'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#3B82F6')}
                  onBlur={(e) => (e.target.style.borderColor = '#1E3A5F')}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  padding: '14px',
                  fontSize: '15px',
                  borderRadius: '12px',
                  marginTop: '8px',
                  boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)'
                }}
              >
                <Send size={16} />
                <span>Launch Message in Mail Client</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
