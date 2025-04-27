import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset the success message after a delay
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Ready to transform your security posture? Get in touch with our team of experts today.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Phone className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">contact@quantumshieldlabs.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300">123 Tech Avenue<br />Silicon Valley, CA 94025</p>
              </div>
            </div>
            
            {/* Add a map placeholder or business hours */}
            <div className="mt-8 bg-gray-800/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900/20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-300 text-center">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 ${
                      errors.name ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                    }`}
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 ${
                      errors.email ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                    }`}
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 ${
                      errors.message ? 'border border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                    } h-32`}
                    placeholder="How can we help you?"
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition relative overflow-hidden ${
                    isSubmitting ? 'cursor-not-allowed opacity-90' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );