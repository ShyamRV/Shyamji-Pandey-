import React, { useEffect, useRef, useState } from 'react';
import { motion as motionOriginal, HTMLMotionProps, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Activity, Cpu, Hexagon } from 'lucide-react';

const motion = motionOriginal as any;

// --- Types ---
interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'purple';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

interface HUDCardProps extends HTMLMotionProps<"div"> {
  title?: string;
  subtitle?: string;
  cornerColor?: 'cyan' | 'purple';
  children: React.ReactNode;
}

interface StatusChipProps {
  label: string;
  status: 'active' | 'offline' | 'warning';
}

interface TiltCardProps extends HUDCardProps {
  children: React.ReactNode;
}

// --- Components ---

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      >
        <div className={`w-full h-full border border-cyber-cyan rounded-full transition-all duration-200 ${isPointer ? 'scale-150 bg-cyber-cyan/20' : 'scale-100'}`} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyber-purple rounded-full" />
      </div>
    </>
  );
};

export const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Typing speed
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayedText}<span className="animate-pulse text-cyber-cyan">_</span></span>;
};

export const NeonButton: React.FC<NeonButtonProps> = ({ 
  variant = 'cyan', 
  children, 
  icon, 
  className = '',
  ...props 
}) => {
  const colorClass = variant === 'cyan' ? 'text-cyber-cyan border-cyber-cyan hover:bg-cyber-cyan/10' : 'text-cyber-purple border-cyber-purple hover:bg-cyber-purple/10';
  const shadowClass = variant === 'cyan' ? 'hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]' : 'hover:shadow-[0_0_20px_rgba(188,19,254,0.4)]';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 font-mono font-bold tracking-wider uppercase border border-opacity-50 transition-all duration-300 flex items-center gap-2 group bg-black/40 backdrop-blur-sm ${colorClass} ${shadowClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
      {/* Corner decorations */}
      <span className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${variant === 'cyan' ? 'border-cyber-cyan' : 'border-cyber-purple'}`}></span>
      <span className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${variant === 'cyan' ? 'border-cyber-cyan' : 'border-cyber-purple'}`}></span>
      <span className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${variant === 'cyan' ? 'border-cyber-cyan' : 'border-cyber-purple'} opacity-0 group-hover:opacity-100 transition-opacity`}></span>
      <span className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${variant === 'cyan' ? 'border-cyber-cyan' : 'border-cyber-purple'} opacity-0 group-hover:opacity-100 transition-opacity`}></span>
    </motion.button>
  );
};

export const StatusChip: React.FC<StatusChipProps> = ({ label, status }) => {
  const color = status === 'active' ? 'bg-green-500' : status === 'warning' ? 'bg-yellow-500' : 'bg-red-500';
  const shadow = status === 'active' ? 'shadow-[0_0_8px_rgba(34,197,94,0.8)]' : '';

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-cyber-gray/80 border border-white/10 rounded-full backdrop-blur-md hover:border-white/30 transition-colors">
      <div className={`w-2 h-2 rounded-full ${color} ${shadow} animate-pulse`}></div>
      <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">{label}</span>
    </div>
  );
};

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', cornerColor = 'cyan', ...props }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x);
  const mouseY = useSpring(y);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="perspective-1000"
    >
      <HUDCard cornerColor={cornerColor} className={`h-full ${className}`} {...props}>
        <div style={{ transform: "translateZ(20px)" }}>
          {children}
        </div>
      </HUDCard>
    </motion.div>
  );
};

export const HUDCard: React.FC<HUDCardProps> = ({ 
  title, 
  subtitle, 
  cornerColor = 'cyan', 
  children, 
  className = '',
  ...props 
}) => {
  const borderColor = cornerColor === 'cyan' ? 'border-cyber-cyan' : 'border-cyber-purple';
  const bgGlow = cornerColor === 'cyan' ? 'hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]' : 'hover:shadow-[0_0_30px_rgba(188,19,254,0.15)]';
  const textColor = cornerColor === 'cyan' ? 'text-cyber-cyan' : 'text-cyber-purple';

  return (
    <motion.div
      className={`relative p-6 bg-cyber-dark/80 border border-white/5 backdrop-blur-md transition-all duration-300 ${bgGlow} overflow-hidden group ${className}`}
      {...props}
    >
      {/* Scan line effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover:animate-scan pointer-events-none" />
      
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-500" />

      {/* Header if present */}
      {(title || subtitle) && (
        <div className="mb-4 border-b border-white/10 pb-2 relative z-10">
          {title && <h3 className={`font-display text-xl font-bold uppercase tracking-wide ${textColor}`}>{title}</h3>}
          {subtitle && <p className="font-mono text-xs text-gray-400 mt-1">{subtitle}</p>}
        </div>
      )}

      <div className="relative z-10">
        {children}
      </div>

      {/* Holographic Corners */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${borderColor} opacity-60 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-300`}></div>
      <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${borderColor} opacity-60 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-300`}></div>
      <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${borderColor} opacity-60 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-300`}></div>
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${borderColor} opacity-60 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-300`}></div>
    </motion.div>
  );
};

export const SectionHeader: React.FC<{ title: string, subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-12 relative">
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: '100px' }}
      className="h-1 bg-cyber-cyan mb-2 shadow-[0_0_10px_rgba(0,243,255,0.8)]"
    />
    <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 uppercase tracking-tighter">
      {title}
    </h2>
    {subtitle && <p className="font-mono text-cyber-purple mt-2 tracking-widest text-sm flex items-center gap-2">
      <span className="w-2 h-2 bg-cyber-purple rounded-full animate-pulse"></span>
      // {subtitle}
    </p>}
  </div>
);

export const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {[...Array(25)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-cyber-cyan/30 blur-[2px]"
        initial={{ 
          x: Math.random() * window.innerWidth, 
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
          opacity: 0.1
        }}
        animate={{ 
          y: [null, Math.random() * -200],
          opacity: [0.1, 0.4, 0],
        }}
        transition={{ 
          duration: Math.random() * 15 + 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{
          width: Math.random() * 3 + 1 + 'px',
          height: Math.random() * 3 + 1 + 'px',
        }}
      />
    ))}
  </div>
);