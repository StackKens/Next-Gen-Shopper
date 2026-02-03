import React, { useState, useEffect, useMemo } from 'react';

// --- CONFIGURATION ---

const DESKTOP_PHRASES = [
  'BrainStack Studios - Crafting scalable software',
  'Innovate. Build. Scale.',
  'Quality code, exceptional UX',
  'We deliver software that matters',
  'Efficiency meets creativity',
  'Modern solutions for modern problems',
  'BrainStack Studios - Your software partner',
];

const MOBILE_PHRASES = [
  'Innovate',
  'Scale',
  'Build',
  'Craft',
  'Logic',
  'Future',
  'Design',
];

const COLORS = [
  '#60A5FA', // Blue 400
  '#34D399', // Emerald 400
  '#F472B6', // Pink 400
  '#A78BFA', // Violet 400
  '#FBBF24', // Amber 400
  '#2DD4BF', // Teal 400
  '#FB7185', // Rose 400
];

// Professional background gradients corresponding to text colors (faded)
const BG_COLORS = [
  'from-blue-900/20 to-slate-900/0',
  'from-emerald-900/20 to-slate-900/0',
  'from-pink-900/20 to-slate-900/0',
  'from-violet-900/20 to-slate-900/0',
  'from-amber-900/20 to-slate-900/0',
  'from-teal-900/20 to-slate-900/0',
  'from-rose-900/20 to-slate-900/0',
];

// --- COMPONENTS ---

// 1. Mobile Background Component
// Wrapped in React.memo to prevent random re-generation on parent re-renders
const MobileBackground = React.memo(() => {
  // Generate random positions once on mount to ensure stability
  const particles = useMemo(() => {
    return MOBILE_PHRASES.map((word, i) => ({
      text: word,
      color: COLORS[i % COLORS.length],
      top: Math.floor(Math.random() * 90) + 5,
      left: Math.floor(Math.random() * 80) + 10,
      rotation: Math.random() * 30 - 15,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className='md:hidden fixed inset-0 pointer-events-none overflow-hidden z-0'>
      {particles.map((p, i) => (
        <span
          key={i}
          className='absolute text-xs font-mono uppercase tracking-widest opacity-10'
          style={{
            color: p.color,
            top: `${p.top}%`,
            left: `${p.left}%`,
            transform: `rotate(${p.rotation}deg)`,
            animation: `pulse 4s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.text}
        </span>
      ))}
    </div>
  );
});

// 2. Typing Text Component (Desktop)
const TypingText = ({ text, color, isTyping, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!isTyping) {
      setDisplayedText('');
      return;
    }

    let index = 0;
    setDisplayedText(''); // Reset on start

    // Initial delay before typing starts to allow slide-in
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return text.slice(0, prev.length + 1);
        });
        index++;
      }, speed);

      // Cleanup interval on unmount
      return () => clearInterval(interval);
    }, 500); // 500ms delay after slide-in starts

    return () => clearTimeout(startTimeout);
  }, [text, isTyping, speed]);

  return (
    <span
      className='font-mono text-3xl xl:text-4xl font-bold tracking-wider drop-shadow-md transition-colors duration-500'
      style={{ color: color }}
    >
      {displayedText}
      <span className='animate-pulse text-white inline-block w-2 ml-1'>|</span>
    </span>
  );
};

// 3. Desktop Background Component
const DesktopBackground = React.memo(() => {
  // State for current active pair index
  const [currentIndex, setCurrentIndex] = useState(0);
  // Separate color indices for left and right to be dynamic
  const [colorIndex, setColorIndex] = useState(0);

  // Cycle through phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DESKTOP_PHRASES.length);
      setColorIndex((prev) => (prev + 1) % COLORS.length);
    }, 8000); // Increased to 8s to allow slower typing reading time
    return () => clearInterval(interval);
  }, []);

  const leftPhrase = DESKTOP_PHRASES[currentIndex];
  const rightPhrase =
    DESKTOP_PHRASES[(currentIndex + 2) % DESKTOP_PHRASES.length];

  const activeColorLeft = COLORS[colorIndex];
  const activeColorRight = COLORS[(colorIndex + 3) % COLORS.length];

  const bgGradientLeft = BG_COLORS[colorIndex];
  const bgGradientRight = BG_COLORS[(colorIndex + 3) % BG_COLORS.length];

  return (
    <div className='hidden md:block fixed inset-0 pointer-events-none z-0 overflow-hidden'>
      {/* Dynamic Colored Background Blobs */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br ${bgGradientLeft} opacity-30 transition-all duration-1000 ease-in-out`}
      />
      <div
        className={`absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl ${bgGradientRight} opacity-30 transition-all duration-1000 ease-in-out`}
      />

      {/* LEFT SIDE: From Bottom-Left to Vertical Center */}
      <div
        className='absolute left-16 top-1/2 -translate-y-1/2 w-1/4 max-w-sm flex items-center transition-all duration-[2000ms] ease-out z-0'
        key={`left-${currentIndex}`}
      >
        <div className='animate-slide-in-bottom-left'>
          <TypingText
            text={leftPhrase}
            color={activeColorLeft}
            isTyping={true}
            speed={100}
          />
        </div>
      </div>

      {/* RIGHT SIDE: From Top-Right to Lower Section */}
      <div
        className='absolute right-16 top-[65%] -translate-y-1/2 w-1/4 max-w-sm flex items-center justify-end text-right transition-all duration-[2000ms] ease-out z-0'
        key={`right-${currentIndex}`}
      >
        <div className='animate-slide-in-top-right'>
          <TypingText
            text={rightPhrase}
            color={activeColorRight}
            isTyping={true}
            speed={120}
          />
        </div>
      </div>

      {/* Decorative Grid Lines */}
      <div
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage: `linear-gradient(${activeColorLeft} 1px, transparent 1px), linear-gradient(90deg, ${activeColorRight} 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          backgroundPosition: 'center center',
        }}
      />
    </div>
  );
});

const BackgroundTexts = () => {
  return (
    <>
      <MobileBackground />
      <DesktopBackground />
    </>
  );
};

export default BackgroundTexts;
