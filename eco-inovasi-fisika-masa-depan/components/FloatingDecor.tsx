
import React from 'react';

const FloatingDecor: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Circles */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-yellow-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-400 rounded-full opacity-20 animate-spin" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-purple-400 rounded-full opacity-10 animate-pulse"></div>
      
      {/* Rectangles */}
      <div className="absolute top-1/3 right-10 w-24 h-24 border-4 border-blue-400 rounded-lg opacity-10 rotate-45 animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-8 h-8 bg-red-400 rounded-sm opacity-20 rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-16 h-4 bg-orange-400 opacity-20 rounded-full rotate-45"></div>

      {/* Triangles (simulated with borders) */}
      <div className="absolute top-1/4 left-1/3 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-teal-400 border-r-[20px] border-r-transparent opacity-20 animate-bounce"></div>
      
      {/* Floating Squiggles/Stars simulated with emojis */}
      <div className="absolute top-10 right-1/3 text-4xl opacity-10 animate-pulse">✨</div>
      <div className="absolute bottom-1/3 left-20 text-4xl opacity-10 animate-bounce">⚡</div>
      <div className="absolute top-1/2 right-1/4 text-4xl opacity-10 animate-spin" style={{ animationDuration: '10s' }}>🌱</div>
    </div>
  );
};

export default FloatingDecor;
