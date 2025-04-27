import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

// In a real implementation, you would import your project images like this:
// import telecomImage from '../assets/images/telecom-project.jpg';
// import financeImage from '../assets/images/finance-project.jpg';
// import supplyChainImage from '../assets/images/supply-chain-project.jpg';

const projects = [
  {
    title: 'Telecom Security Enhancement',
    description: 'Implemented comprehensive encryption framework resulting in 40% reduction in security breaches.',
    image: '/api/placeholder/600/400', // This would be replaced with your imported image
    tags: ['Encryption', 'Network Security', 'Threat Prevention']
  },
  {
    title: 'Financial Compliance System',
    description: 'Developed robust compliance management system leading to 60% decrease in compliance-related errors.',
    image: '/api/placeholder/600/400', // This would be replaced with your imported image
    tags: ['Blockchain', 'Compliance', 'Fraud Detection']
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Restructured logistics operations achieving 25% reduction in operational costs through AI implementation.',
    image: '/api/placeholder/600/400', // This would be replaced with your imported image
    tags: ['AI', 'Logistics', 'Optimization']
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Featured Projects
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Explore our successful implementations that have transformed security postures and operational efficiencies across industries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:-translate-y-2 bg-gray-900/30 shadow-lg hover:shadow-blue-500/10"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${hoveredIndex === index ? 'scale-110 blur-sm' : 'scale-100'}`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className={`mt-4 flex items-center text-blue-500 group-hover:text-blue-400 transition-all duration-300 ${hoveredIndex === index ? 'translate-x-2' : ''}`}>
                  <span>Learn more</span> <ArrowUpRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call-to-action button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg shadow-lg hover:shadow-blue-500/30 transition">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}