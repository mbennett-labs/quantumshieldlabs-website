import React, { useState, useEffect } from 'react';
import { Shield, Brain, Database, Phone, Mail, Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Resources from './components/Resources';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#resources', label: 'Resources' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <nav className={`fixed top-0 w-full ${scrolled ? 'bg-black/80' : 'bg-black/50'} backdrop-blur-lg z-50 transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">Quantum Shield Labs</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="hover:text-blue-500 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? 
              <X className="w-6 h-6" /> : 
              <Menu className="w-6 h-6" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="block py-2 hover:text-blue-500 transition"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Services />
        <Projects />
        <Resources />
        <About />
        <Contact />
      </main>

      <footer className="bg-black/50 backdrop-blur-lg py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-semibold">Quantum Shield Labs</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-500 transition" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Quantum Shield Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;