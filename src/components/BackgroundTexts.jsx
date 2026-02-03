import React from 'react';

const textsLeft = [
  'BrainStack Studios',
  'Crafting scalable software',
  'Innovate. Build. Scale.',
  'Future-ready solutions',
  'Digital transformation experts',
];

const textsRight = [
  'Quality code, exceptional UX',
  'Efficiency meets creativity',
  'Modern solutions for modern problems',
  'Your software partner',
  'Pushing boundaries daily',
];

const BackgroundTexts = () => {
  return (
    <>
      {/* LEFT SIDE TEXTS - Animated scrolling */}
      <div className='fixed left-0 top-0 h-full w-1/4 pointer-events-none z-0 overflow-hidden opacity-10 hidden md:block'>
        {textsLeft.map((text, idx) => (
          <div
            key={`left-${idx}`}
            className='absolute left-8 text-4xl xl:text-5xl font-bold text-gray-400 select-none'
            style={{
              top: `${-200 - idx * 200}px`,
              animation: `scroll-left ${30 + idx * 3}s linear infinite`,
              animationDelay: `${idx * 2}s`,
              transform: 'rotate(-5deg)',
              textShadow: '0 0 10px rgba(255,152,0,0.3)',
            }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE TEXTS - Animated scrolling */}
      <div className='fixed right-0 top-0 h-full w-1/4 pointer-events-none z-0 overflow-hidden opacity-10 hidden md:block'>
        {textsRight.map((text, idx) => (
          <div
            key={`right-${idx}`}
            className='absolute right-8 text-4xl xl:text-5xl font-bold text-gray-400 select-none text-right'
            style={{
              top: `${-200 - idx * 200}px`,
              animation: `scroll-right ${35 + idx * 3}s linear infinite`,
              animationDelay: `${idx * 2.5}s`,
              transform: 'rotate(5deg)',
              textShadow: '0 0 10px rgba(255,152,0,0.3)',
            }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className='fixed inset-0 pointer-events-none z-0'>
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className='absolute w-1 h-1 bg-gradient-to-r from-orange-500/30 to-orange-600/30 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className='fixed left-1/4 top-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-full blur-3xl pointer-events-none z-0 animate-glow' />
      <div
        className='fixed right-1/4 bottom-1/4 w-96 h-96 bg-gradient-to-r from-orange-600/10 to-orange-500/10 rounded-full blur-3xl pointer-events-none z-0 animate-glow'
        style={{ animationDelay: '4s' }}
      />
    </>
  );
};

export default BackgroundTexts;
