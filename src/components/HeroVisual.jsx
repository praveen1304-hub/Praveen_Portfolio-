import React from 'react';
import { Terminal, Check, Sparkles, Cpu, Layers } from 'lucide-react';

export default function HeroVisual() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Ambient Lighting Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, transparent 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0%',
          left: '-5%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Main Glass Visual Frame */}
      <div
        className="glass-panel-elevated"
        style={{
          width: '100%',
          position: 'relative',
          zIndex: 10,
          padding: '24px',
          border: '1px solid #1E3A5F',
          boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(37, 99, 235, 0.2)'
        }}
      >
        {/* Workstation Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '16px',
            borderBottom: '1px solid #1E3A5F',
            marginBottom: '18px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EF4444' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#F59E0B' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#22C55E' }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                color: '#64748B',
                marginLeft: '8px'
              }}
            >
              praveen@dev-station: ~/workspace
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: '#38BDF8'
            }}
          >
            <Cpu size={14} />
            <span>ONLINE</span>
          </div>
        </div>

        {/* Workstation Setup Illustration (Monitors + IDE + Atmosphere) */}
        <div
          style={{
            position: 'relative',
            background: 'linear-gradient(180deg, #07111F 0%, #050B14 100%)',
            borderRadius: '12px',
            border: '1px solid #1E3A5F',
            padding: '20px',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Laser Scan Line */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #38BDF8, #A855F7, transparent)',
              boxShadow: '0 0 10px #38BDF8',
              animation: 'scanLaser 4s infinite linear',
              pointerEvents: 'none',
              zIndex: 15
            }}
          />

          {/* Monitors Mockup Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr',
              gap: '12px',
              marginBottom: '16px'
            }}
          >
            {/* Primary Center-Left Monitor: Code Editor */}
            <div
              style={{
                background: '#0B1628',
                borderRadius: '8px',
                border: '1px solid #2563EB',
                padding: '12px',
                boxShadow: '0 0 20px rgba(37, 99, 235, 0.25)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '8px',
                  borderBottom: '1px solid #1E293B',
                  marginBottom: '8px'
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#93C5FD' }}>
                  App.jsx — React 19
                </span>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E' }} />
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10.5px',
                  lineHeight: '1.5',
                  color: '#CBD5E1'
                }}
              >
                <p><span style={{ color: '#F43F5E' }}>const</span> <span style={{ color: '#60A5FA' }}>developer</span> = &#123;</p>
                <p style={{ paddingLeft: '12px' }}><span style={{ color: '#A855F7' }}>name</span>: <span style={{ color: '#86EFAC' }}>"Praveen R"</span>,</p>
                <p style={{ paddingLeft: '12px' }}><span style={{ color: '#A855F7' }}>role</span>: <span style={{ color: '#86EFAC' }}>"Full Stack"</span>,</p>
                <p style={{ paddingLeft: '12px' }}><span style={{ color: '#A855F7' }}>status</span>: <span style={{ color: '#38BDF8' }}>"Ready to Build"</span></p>
                <p>&#125;;</p>
              </div>
            </div>

            {/* Secondary Right Monitor: Live Telemetry */}
            <div
              style={{
                background: '#091322',
                borderRadius: '8px',
                border: '1px solid #1E3A5F',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#A855F7', marginBottom: '6px' }}>
                  // LIVE METRICS
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#22C55E', fontWeight: 'bold' }}>
                  LATENCY: 12ms
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#94A3B8' }}>
                  MEM: 64% OK
                </div>
              </div>
              <div
                style={{
                  padding: '6px 8px',
                  background: 'rgba(37, 99, 235, 0.15)',
                  borderRadius: '6px',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '9px',
                  color: '#93C5FD',
                  textAlign: 'center'
                }}
              >
                REST API: CONNECTED
              </div>
            </div>
          </div>

          {/* Desk / Laptop Keyboard Glow Strip */}
          <div
            style={{
              height: '4px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, #2563EB, #06B6D4, #7C3AED)',
              boxShadow: '0 0 15px #3B82F6',
              marginBottom: '16px'
            }}
          />

          {/* Floating Cyber Command Terminal Box */}
          <div
            style={{
              background: '#060D18',
              borderRadius: '10px',
              border: '1px solid #1E3A5F',
              padding: '16px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px'
            }}
          >
            {/* Command 1: whoami */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#F43F5E' }}>$</span> whoami
              </div>
              <div style={{ color: '#F8FAFC', paddingLeft: '14px', fontWeight: '600', marginTop: '2px' }}>
                Praveen R
              </div>
              <div style={{ color: '#94A3B8', paddingLeft: '14px', fontSize: '11px' }}>
                Full Stack Developer
              </div>
            </div>

            {/* Command 2: stack */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#F43F5E' }}>$</span> stack
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '4px 16px',
                  paddingLeft: '14px',
                  marginTop: '4px',
                  fontSize: '11px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#E2E8F0' }}>
                  <span>React</span>
                  <span style={{ color: '#22C55E' }}>✓</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#E2E8F0' }}>
                  <span>Python</span>
                  <span style={{ color: '#22C55E' }}>✓</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#E2E8F0' }}>
                  <span>Flask</span>
                  <span style={{ color: '#22C55E' }}>✓</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#E2E8F0' }}>
                  <span>MySQL</span>
                  <span style={{ color: '#22C55E' }}>✓</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#E2E8F0', gridColumn: 'span 2' }}>
                  <span>REST APIs</span>
                  <span style={{ color: '#22C55E' }}>✓</span>
                </div>
              </div>
            </div>

            {/* Command 3: status */}
            <div>
              <div style={{ color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#F43F5E' }}>$</span> status
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.4)',
                  borderRadius: '6px',
                  color: '#86EFAC',
                  fontWeight: 'bold',
                  fontSize: '11px',
                  marginLeft: '14px',
                  marginTop: '4px'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E' }} />
                READY TO BUILD
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
