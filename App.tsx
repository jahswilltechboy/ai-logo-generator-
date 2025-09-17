import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import CoolLogos from './components/CoolLogos';
import DesignBundle from './components/DesignBundle';
import BrandShowcase from './components/BrandShowcase';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Dashboard from './components/Dashboard';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

const getRoute = () => {
  const raw = (typeof window !== 'undefined' ? window.location.hash : '') || '#/';
  const path = raw.replace(/^#/, '');
  return path;
};

const App: React.FC = () => {
  const [route, setRoute] = useState<string>(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const normalizedRoute = (route.replace(/\/$/, '') || '/');

  const page = useMemo(() => {
    const normalized = normalizedRoute;
    if (normalized === '' || normalized === '/') {
      return (
        <>
          <Hero />
          <Stats />
          <Features />
          <CoolLogos />
          <DesignBundle />
          <BrandShowcase />
          <Blog />
          <Testimonials />
          <FAQ />
          <CTA />
        </>
      );
    }
    if (normalized === '/login') return <Login />;
    if (normalized === '/signup') return <Signup />;
    if (normalized === '/dashboard') return <Dashboard />;
    return (
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Page not found</h1>
        <a href="#/" className="text-blue-600 hover:underline">Go back home</a>
      </section>
    );
  }, [normalizedRoute]);

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header currentRoute={normalizedRoute} />
      <main className="font-normal">
        {page}
      </main>
      <Footer />
    </div>
  );
};

export default App;
