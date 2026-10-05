import React, { useState, useEffect } from 'react';
import AmbientBackground from './components/AmbientBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentRoute, setCurrentRoute] = useState('home'); // 'home' or projectId string
  const [toastMessage, setToastMessage] = useState(null);

  // Synchronize with URL hash routing for direct sharing and back-forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/projects/')) {
        const pId = hash.replace('#/projects/', '');
        setCurrentRoute(pId);
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleViewDetails = (projectId) => {
    window.location.hash = `#/projects/${projectId}`;
    setCurrentRoute(projectId);
  };

  const handleBackToHome = () => {
    window.location.hash = '#projects';
    setCurrentRoute('home');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* 1. Loading Screen (lasts ~1s) */}
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      {/* Cyber Ambient Particles & Spotlight */}
      <AmbientBackground />

      {/* 2. Fixed Glass Navbar */}
      <Navbar />

      {/* Page Routing */}
      {currentRoute === 'home' ? (
        <Home onViewDetails={handleViewDetails} onShowToast={showToast} />
      ) : (
        <ProjectDetails projectId={currentRoute} onBack={handleBackToHome} />
      )}

      {/* 15. Professional Footer */}
      <Footer />

      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div className="toast-container">
          <div className="toast">
            <CheckCircle2 size={18} color="#22C55E" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
