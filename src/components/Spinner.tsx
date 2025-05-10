import React, { useState, useEffect } from 'react';
import { Mountain, Compass, Sun, Palmtree, Camera } from 'lucide-react';

const SafariSpinner = () => {
  // Replace with your actual organization name
  const organizationName = "Kenya Safari Adventures";
  const [progress, setProgress] = useState(0);
  
  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  // Icons to animate
  const icons = [
    { Icon: Mountain, delay: "0s" },
    { Icon: Compass, delay: "0.2s" },
    { Icon: Sun, delay: "0.4s" },
    { Icon: Palmtree, delay: "0.6s" },
    { Icon: Camera, delay: "0.8s" }
  ];

  return (
    <div className="fixed inset-0 bg-amber-50 flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center max-w-md text-center px-4">
        {/* Logo and icons */}
        <div className="flex items-center justify-center mb-8">
          {icons.map(({ Icon, delay }, index) => (
            <div 
              key={index}
              className="mx-2 animate-bounce" 
              style={{ 
                animationDuration: "1s", 
                animationDelay: delay,
                animationFillMode: "both" 
              }}
            >
              <Icon size={28} className="text-green-700" />
            </div>
          ))}
        </div>
        
        {/* Organization name */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
          {organizationName}
        </h1>
        
        <p className="text-lg text-green-700 mb-8">Discover the wild beauty of Kenya</p>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-amber-200 rounded-full mb-2 overflow-hidden">
          <div 
            className="h-full bg-green-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-sm text-green-600">
          {progress < 100 ? (
            `Loading your adventure... ${Math.round(progress)}%`
          ) : (
            "Ready for your safari journey!"
          )}
        </p>
      </div>
    </div>
  );
};

export default SafariSpinner;