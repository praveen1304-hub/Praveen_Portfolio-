import React from 'react';
import StatusBadge from '../components/StatusBadge';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import SkillsAlbum from '../components/SkillsAlbum';
import ProjectsAlbum from '../components/ProjectsAlbum';
import Experience from '../components/Experience';
import CertificatesAlbum from '../components/CertificatesAlbum';
import Achievements from '../components/Achievements';
import Journey from '../components/Journey';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

export default function Home({ onViewDetails, onShowToast }) {
  return (
    <main>
      {/* 3. Available for Opportunities badge (Directly below navbar) */}
      <StatusBadge />

      {/* 4. Hero Section */}
      <Hero />

      {/* 5. Stats Strip */}
      <Stats />

      {/* 6. About Section */}
      <About />

      {/* 7. Skills Album Section (What I Build) */}
      <SkillsAlbum />

      {/* 8. Featured Projects Section */}
      <ProjectsAlbum onViewDetails={onViewDetails} />

      {/* 9. Experience Section */}
      <Experience />

      {/* 10. Certificates Section */}
      <CertificatesAlbum />

      {/* 11. Achievements Section */}
      <Achievements />

      {/* 12. Developer Journey Section */}
      <Journey />

      {/* 13. Resume Section */}
      <Resume />

      {/* 14. Contact Section */}
      <Contact onShowToast={onShowToast} />
    </main>
  );
}
