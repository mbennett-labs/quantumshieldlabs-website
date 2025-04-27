import React from 'react';
import { Shield, Code, ChartBar, Clock } from 'lucide-react';

// In a real implementation, you would import team member images:
// import teamMember1 from '../assets/images/team/member1.jpg';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with unwavering ethical standards and transparency in all our engagements.'
  },
  {
    icon: Code,
    title: 'Innovation',
    description: 'We continuously pioneer new solutions to stay ahead of evolving security challenges.'
  },
  {
    icon: ChartBar,
    title: 'Excellence',
    description: 'We are committed to delivering superior quality in every service and solution.'
  },
  {
    icon: Clock,
    title: 'Responsiveness',
    description: 'We understand security concerns need immediate attention and swift resolution.'
  }
];

const teamMembers = [
  {
    name: 'Dr. Alexandra Chen',
    role: 'Chief Security Officer',
    image: '/api/placeholder/300/300', // This would be replaced with imported image
    bio: 'Ph.D. in Cryptography with 15+ years of experience in cybersecurity research and implementation.'
  },
  {
    name: 'Marcus Johnson',
    role: 'Blockchain Lead',
    image: '/api/placeholder/300/300', // This would be replaced with imported image
    bio: 'Former fintech security architect who led the development of blockchain solutions for major financial institutions.'
  },
  {
    name: 'Sarah Williams',
    role: 'AI & Machine Learning Director',
    image: '/api/placeholder/300/300', // This would be replaced with imported image
    bio: 'Specializes in AI-driven security systems and predictive threat modeling algorithms.'
  },
  {
    name: 'David Rodriguez',
    role: 'Quantum Security Specialist',
    image: '/api/placeholder/300/300', // This would be replaced with imported image
    bio: 'Research scientist focusing on post-quantum cryptography and quantum-resistant security protocols.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Company Vision */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Us
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Quantum Shield Labs was established with a vision to redefine the landscape of cybersecurity in the age of quantum computing and advanced threats.
          </p>
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 shadow-lg">
            <p className="text-gray-300 leading-relaxed">
              Founded by a team of seasoned security professionals, we combine expertise in cryptography, blockchain technology, and artificial intelligence to create comprehensive security solutions that protect organizations from both current and emerging threats in our increasingly digital world.
            </p>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/20 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4">
                  <value.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Team Section */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12">Our Expert Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-900/30 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-6">Ready to Work with Us?</h3>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-blue-500/30 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}