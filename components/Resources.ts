import React, { useState } from 'react';
import { FileText, Video, BookOpen, Newspaper, Calendar, Download, ArrowRight } from 'lucide-react';

type ResourceCategory = 'whitepapers' | 'webinars' | 'ebooks' | 'blog';

interface ResourceItem {
  title: string;
  description: string;
  date?: string;
  link: string;
  isNew?: boolean;
}

const resourceData: Record<ResourceCategory, ResourceItem[]> = {
  whitepapers: [
    {
      title: "Post-Quantum Cryptography: Preparing for the Quantum Future",
      description: "An in-depth analysis of quantum-resistant algorithms and implementation strategies.",
      date: "April 2025",
      link: "#",
      isNew: true
    },
    {
      title: "Zero Trust Architecture: Implementation Guide",
      description: "Comprehensive framework for implementing zero trust security across enterprise environments.",
      date: "February 2025",
      link: "#"
    },
    {
      title: "Blockchain Security: Vulnerabilities and Protections",
      description: "Analysis of common blockchain security issues and recommended safeguards.",
      date: "December 2024",
      link: "#"
    }
  ],
  webinars: [
    {
      title: "AI Security: Threats and Countermeasures",
      description: "Live session covering AI model vulnerabilities and protection strategies.",
      date: "May 28, 2025 (Upcoming)",
      link: "#",
      isNew: true
    },
    {
      title: "Quantum Computing: Security Implications",
      description: "Panel discussion with leading quantum computing security experts.",
      date: "April 15, 2025",
      link: "#"
    },
    {
      title: "Securing Remote Workforces",
      description: "Best practices for maintaining security with distributed teams.",
      date: "March 10, 2025",
      link: "#"
    }
  ],
  ebooks: [
    {
      title: "The Complete Guide to Blockchain Security",
      description: "Everything you need to know about securing blockchain implementations.",
      date: "2025 Edition",
      link: "#",
      isNew: true
    },
    {
      title: "AI for Cybersecurity Professionals",
      description: "How to leverage AI and machine learning for enhanced security operations.",
      date: "2025 Edition",
      link: "#"
    },
    {
      title: "Quantum Security Fundamentals",
      description: "Introduction to quantum computing threats and security preparations.",
      date: "2024 Edition",
      link: "#"
    }
  ],
  blog: [
    {
      title: "5 Ways Quantum Computing Will Change Cybersecurity",
      description: "Exploring the transformative impact of quantum computing on security practices.",
      date: "April 12, 2025",
      link: "#",
      isNew: true
    },
    {
      title: "The Rise of AI-Powered Threats",
      description: "How artificial intelligence is being weaponized and how to defend against it.",
      date: "March 28, 2025",
      link: "#"
    },
    {
      title: "Blockchain Beyond Cryptocurrency",
      description: "Security applications of blockchain technology in various industries.",
      date: "March 15, 2025",
      link: "#"
    }
  ]
};

const resourceIcons = {
  whitepapers: <FileText className="w-12 h-12 text-blue-500" />,
  webinars: <Video className="w-12 h-12 text-blue-500" />,
  ebooks: <BookOpen className="w-12 h-12 text-blue-500" />,
  blog: <Newspaper className="w-12 h-12 text-blue-500" />
};

const resourceTitles = {
  whitepapers: "Whitepapers",
  webinars: "Webinars",
  ebooks: "E-Books",
  blog: "Blog"
};

export default function Resources() {
  const [activeTab, setActiveTab] = useState<ResourceCategory>('whitepapers');

  return (
    <section id="resources" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Resources
          </h2>
          <p className="text-lg text-gray-300">
            Explore our library of cybersecurity resources designed to keep you informed about
            the latest trends, threats, and security strategies.
          </p>
        </div>
        
        {/* Resource Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {(Object.keys(resourceData) as ResourceCategory[]).map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeTab === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {resourceTitles[category]}
            </button>
          ))}
        </div>
        
        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-3 flex items-center justify-center mb-6">
            <div className="p-4 bg-blue-500/10 rounded-full mr-4">
              {resourceIcons[activeTab]}
            </div>
            <h3 className="text-2xl font-bold">{resourceTitles[activeTab]}</h3>
          </div>
          
          {resourceData[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/30 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  {item.isNew && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                  )}
                </div>
                <p className="text-gray-400 mb-4">{item.description}</p>
                {item.date && (
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{item.date}</span>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-800 p-4 bg-gray-900/50">
                <a
                  href={item.link}
                  className="flex items-center justify-between text-blue-500 hover:text-blue-400 transition"
                >
                  {activeTab === 'webinars' ? (
                    <>
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : activeTab === 'blog' ? (
                    <>
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Download</span>
                      <Download className="w-4 h-4" />
                    </>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-300">Subscribe to our newsletter to receive the latest resources and security updates.</p>
          </div>
          
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 bg-black/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}