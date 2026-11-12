/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ServicesDirectoryView } from './views/ServicesDirectoryView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { OurTeamView } from './views/OurTeamView';
import { servicesData, getServiceById } from './data/servicesData';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'service-detail' | 'team'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('general-dentistry');

  // Parse location hash on load and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');

      if (!hash || hash === 'home') {
        setCurrentView('home');
      } else if (hash === 'services' || hash === 'directory') {
        setCurrentView('services');
      } else if (hash === 'team' || hash === 'our-team' || hash === 'specialists') {
        setCurrentView('team');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('service/') || hash.startsWith('services/')) {
        const parts = hash.split('/');
        const serviceId = parts[1];
        if (serviceId && getServiceById(serviceId)) {
          setSelectedServiceId(serviceId);
          setCurrentView('service-detail');
        } else {
          setCurrentView('services');
        }
      } else if (hash === 'why-us' || hash === 'hmo-insurance') {
        // These sections are located on the dedicated Our Team page
        setCurrentView('team');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (hash === 'book' || hash === 'branches-logistics') {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation handlers
  const navigateToHome = () => {
    setCurrentView('home');
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToServices = () => {
    setCurrentView('services');
    window.location.hash = 'services';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTeam = () => {
    setCurrentView('team');
    window.location.hash = 'team';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentView('service-detail');
    window.location.hash = `services/${serviceId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookClick = () => {
    if (currentView === 'home' || currentView === 'team') {
      const el = document.getElementById('book');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigateToHome();
      setTimeout(() => {
        const el = document.getElementById('book');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  const activeService = getServiceById(selectedServiceId) || servicesData[0];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-100 bg-[#0b1f31]">
      {/* Top Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigateHome={navigateToHome}
        onNavigateServices={navigateToServices}
        onNavigateTeam={navigateToTeam}
        onBookClick={handleBookClick}
        onSelectService={handleSelectService}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <HomeView
            onSelectService={handleSelectService}
            onNavigateServices={navigateToServices}
            onNavigateTeam={navigateToTeam}
            onBookClick={handleBookClick}
          />
        )}

        {currentView === 'services' && (
          <ServicesDirectoryView
            onBackToHome={navigateToHome}
            onSelectService={handleSelectService}
            onBookClick={handleBookClick}
          />
        )}

        {currentView === 'service-detail' && (
          <ServiceDetailView
            service={activeService}
            onBackToHome={navigateToHome}
            onNavigateServices={navigateToServices}
            onSelectService={handleSelectService}
          />
        )}

        {currentView === 'team' && (
          <OurTeamView
            onBackToHome={navigateToHome}
            onNavigateServices={navigateToServices}
            onSelectService={handleSelectService}
            onBookClick={handleBookClick}
          />
        )}
      </main>

      {/* Clinic Footer */}
      <Footer
        onNavigateHome={navigateToHome}
        onNavigateServices={navigateToServices}
        onNavigateTeam={navigateToTeam}
        onSelectService={handleSelectService}
        onBookClick={handleBookClick}
      />
    </div>
  );
}
