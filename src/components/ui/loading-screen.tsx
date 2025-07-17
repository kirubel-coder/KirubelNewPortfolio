import { useEffect, useState } from 'react';
import kLogo from '@/assets/k-logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 matrix-bg opacity-20" />
      
      {/* Loading Content */}
      <div className="relative flex flex-col items-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <img 
            src={kLogo} 
            alt="K Logo" 
            className="w-24 h-24 animate-glow-pulse loading-pulse"
          />
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-float" />
        </div>

        {/* Progress Bar */}
        <div className="w-64 space-y-4">
          <div className="relative h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute top-0 left-0 h-full bg-gradient-primary opacity-50 blur-sm" 
                 style={{ width: `${progress}%` }} />
          </div>
          
          {/* Loading Text */}
          <div className="text-center space-y-2">
            <p className="text-lg font-space gradient-text">
              Initializing Portfolio
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              {progress}% Complete
            </p>
          </div>
        </div>

        {/* Animated Dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;