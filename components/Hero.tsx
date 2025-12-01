import React from 'react';
import { motion as motionOriginal } from 'framer-motion';
import { NeonButton, StatusChip, TypewriterText } from './UIComponents';
import { Terminal, ChevronDown, ScanLine } from 'lucide-react';

const motion = motionOriginal as any;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Orbital Ring Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] pointer-events-none opacity-20">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-cyber-cyan/30 rounded-full border-dashed" 
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[50px] border border-cyber-purple/30 rounded-full border-dotted" 
        />
        <div className="absolute inset-0 bg-radial-fade"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="md:col-span-7 flex flex-col gap-6 order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <StatusChip label="System Online" status="active" />
            <StatusChip label="Neural_Net: Active" status="active" />
            <StatusChip label="Robotics: Online" status="active" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter"
          >
            Shyamji <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-purple animate-pulse">Pandey</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-lg md:text-xl text-gray-400 border-l-4 border-cyber-cyan pl-6 max-w-2xl bg-gradient-to-r from-cyber-cyan/10 to-transparent py-2"
          >
            <span className="text-cyber-cyan font-bold">&gt;</span> <TypewriterText text="AI Engineer | Deep Learning Researcher | Robotics Innovator" delay={1000} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <NeonButton variant="cyan" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Initialize Contact
            </NeonButton>
            <NeonButton variant="purple" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Protocols
            </NeonButton>
          </motion.div>
        </div>

        {/* Right Content - Dynamic Holographic Photo */}
        <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2 relative">
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.4, type: "spring" }}
             className="relative w-72 h-72 md:w-96 md:h-96"
           >
              {/* Outer Rotating Elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-cyber-cyan/20 rounded-full border-t-transparent border-l-transparent" 
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-cyber-purple/20 rounded-full border-dashed" 
              />

              {/* Main Photo Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyber-cyan/50 bg-black group">
                {/* Photo Placeholder - Replace src with your actual photo URL */}
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3087&auto=format&fit=crop" 
                  alt="Shyamji Pandey" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100 group-hover:scale-110"
                />
                
                {/* Holographic Overlays */}
                <div className="absolute inset-0 bg-cyber-cyan/10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,#000_3px)] bg-[size:100%_4px] opacity-20 pointer-events-none" /> {/* Scanlines */}
                
                {/* Active Scanner Beam */}
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-cyber-cyan shadow-[0_0_20px_rgba(0,243,255,1)] z-20"
                />
                
                {/* HUD Elements Overlay */}
                <div className="absolute inset-0 p-4 pointer-events-none">
                  <div className="absolute top-8 right-8 text-[10px] font-mono text-cyber-cyan animate-pulse">
                    TARGET: IDENTIFIED
                  </div>
                  <div className="absolute bottom-8 left-8 text-[10px] font-mono text-cyber-cyan">
                     BIOMETRICS: MATCH
                  </div>
                  {/* Crosshairs */}
                  <div className="absolute top-1/2 left-4 w-2 h-px bg-cyber-cyan/50"></div>
                  <div className="absolute top-1/2 right-4 w-2 h-px bg-cyber-cyan/50"></div>
                  <div className="absolute top-4 left-1/2 w-px h-2 bg-cyber-cyan/50"></div>
                  <div className="absolute bottom-4 left-1/2 w-px h-2 bg-cyber-cyan/50"></div>
                </div>
              </div>

              {/* Floating Label */}
              <motion.div 
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/80 border border-cyber-cyan/50 px-4 py-1 rounded-full backdrop-blur-md"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-cyber-cyan">LIVE FEED</span>
                </div>
              </motion.div>
           </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyber-cyan cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase opacity-70">Scroll to Initialize</span>
          <ChevronDown size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;