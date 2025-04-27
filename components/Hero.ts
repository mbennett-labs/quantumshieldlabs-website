import React, { useEffect, useState } from 'react';
import { Shield, ArrowRight } from 'lucide-react';

// In a real implementation, you would import your hero image like this:
// import heroBackground from '../assets/images/hero-background.jpg';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* For the actual implementation, replace with a local image import */}
      <div className="absolute inset-0 bg-cover bg-center">
        {/* Use a placeholder for this example */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black/60 to-purple-900/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Shield className="w-16 h-16 text-blue-500 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Advanced Security Solutions for the Quantum Age
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Cybersecurity, blockchain, and AI expertise to protect your digital assets in an evolving technological landscape.
          </p>
          
          <a href="#services" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold mx-auto space-x-2 transition transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
            <span className="flex items-center justify-center">
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </a>
        </div>
      </div>
      
      {/* Add a scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}