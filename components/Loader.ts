import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

interface LoaderProps {
  isLoading?: boolean;
  onLoadingComplete?: () => void;
  fullPage?: boolean;
}

export default function Loader({ 
  isLoading = true, 
  onLoadingComplete,
  fullPage = false
}: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true);
      // Reset progress
      setProgress(0);
      
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 - prev) * 0.1;
          return Math.min(newProgress, 99); // Cap at 99% until actually loaded
        });
      }, 100);
      
      return () => clearInterval(interval);
    } else {
      // When loading is complete, jump to 100%
      setProgress(100);
      
      // Then start fade out animation
      const timeout = setTimeout(() => {
        setIsVisible(false);
        if (onLoadingComplete) onLoadingComplete();
      }, 500); // Wait for progress bar to reach 100%
      
      return () => clearTimeout(timeout);
    }
  }, [isLoading, onLoadingComplete]);

  if (!isVisible && !isLoading) return null;

  return (
    <div 
      className={`${fullPage ? 'fixed inset-0' : 'absolute inset-0'} bg-gray-900 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${isLoading || progress < 100 ? 'opacity-100' : 'opacity-0'}`}
      style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
    >
      <div className="flex flex-col items-center">
        <Shield className="w-16 h-16 text-blue-500 animate-pulse mb-6" />
        <h2 className="text-2xl font-bold text-white mb-4">Quantum Shield Labs</h2>
        
        {/* Progress bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-3">
          <div 
            className="h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-gray-400 text-sm">{Math.round(progress)}% loaded</p>
      </div>
    </div>
  );
}

// Component for transitioning between pages or sections
export function PageTransition({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay before starting animation
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div 
      className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}