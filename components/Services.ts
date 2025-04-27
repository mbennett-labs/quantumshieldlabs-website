import React, { useState } from 'react';
import { Shield, Brain, Database, Lock, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Security Consulting',
    description: 'Comprehensive risk assessments and penetration testing to identify and address vulnerabilities in your security infrastructure.',
    details: 'Our expert team conducts thorough security audits, vulnerability assessments, and penetration testing to identify potential weaknesses in your systems. We provide actionable recommendations and implementation support to strengthen your security posture.'
  },
  {
    icon: Database,
    title: 'Blockchain Integration',
    description: 'Expert implementation of secure blockchain solutions to enhance transactional integrity and transparency.',
    details: 'We design and implement custom blockchain solutions tailored to your business needs, ensuring secure and transparent transactions. Our solutions include smart contract development, decentralized application architecture, and secure wallet integration.'
  },
  {
    icon: Brain,
    title: 'AI-Driven Security',
    description: 'Intelligent threat detection and response systems powered by machine learning algorithms.',
    details: 'Our AI-powered security systems continuously monitor your network for suspicious activities, automatically detecting and responding to threats in real-time. We utilize advanced machine learning models that adapt and improve over time to counter evolving threats.'
  },
  {
    icon: Lock,
    title: 'Quantum Resistance',
    description: 'Future-proof security measures designed to withstand the computational power of quantum computers.',
    details: 'We implement post-quantum cryptographic algorithms and protocols to ensure your data remains secure even against quantum computing threats. Our forward-thinking approach helps you prepare for the next generation of cybersecurity challenges.'
  }
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="services" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg">
            Cutting-edge solutions designed to protect your digital assets and infrastructure 
            from emerging cybersecurity threats in the quantum era.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-gray-900/70 to-gray-800/20 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                expandedIndex === index ? 'ring-2 ring-blue-500/50' : 'hover:shadow-blue-500/10'
              }`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-start">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <service.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
                
                <div className={`mt-4 overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-gray-700/30">
                    <p className="text-gray-300 mb-4">{service.details}</p>
                    <button className="flex items-center text-blue-500 hover:text-blue-400 transition">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shadow-lg hover:shadow-blue-500/30"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}