import React from 'react';
import Hero from './components/Hero';
import { HUDCard, NeonButton, SectionHeader, FloatingParticles, TiltCard, CustomCursor } from './components/UIComponents';
import { EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA, ACHIEVEMENTS_DATA, SOCIAL_LINKS, EDUCATION_DATA } from './constants';
import { motion as motionOriginal, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Terminal, Cpu } from 'lucide-react';

const motion = motionOriginal as any;

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen font-body text-gray-300 selection:bg-cyber-cyan/30 selection:text-white cursor-none">
      <CustomCursor />
      
      {/* Global Background Grid */}
      <div className="fixed inset-0 z-[-1] bg-cyber-black bg-grid-pattern bg-[size:50px_50px] opacity-20" />
      <div className="fixed inset-0 z-[-1] bg-radial-fade" />
      <FloatingParticles />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple origin-left z-50 shadow-[0_0_10px_rgba(0,243,255,0.7)]"
        style={{ scaleX }}
      />

      {/* Navigation (Simple HUD style) */}
      <nav className="fixed top-0 left-0 w-full z-40 p-4 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm border-b border-white/5">
        <div className="text-xl font-display font-bold text-white tracking-widest border-b-2 border-cyber-cyan pb-1 ml-2">
          SHYAMJI<span className="text-cyber-purple">.DEV</span>
        </div>
        <div className="hidden md:flex gap-6 font-mono text-xs text-cyber-cyan mr-4">
          <a href="#about" className="hover:text-white transition-colors hover:scale-110 duration-200">[ ABOUT ]</a>
          <a href="#experience" className="hover:text-white transition-colors hover:scale-110 duration-200">[ EXP ]</a>
          <a href="#projects" className="hover:text-white transition-colors hover:scale-110 duration-200">[ PROTOCOLS ]</a>
          <a href="#contact" className="hover:text-white transition-colors hover:scale-110 duration-200">[ COMM ]</a>
        </div>
      </nav>

      <main className="container mx-auto px-4 md:px-6 space-y-32 pb-20">
        <Hero />

        {/* About Section */}
        <section id="about" className="relative">
          <SectionHeader title="Mission Profile" subtitle="ABOUT_ME" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <TiltCard className="h-full flex flex-col justify-center" cornerColor="purple">
              <p className="font-mono text-lg leading-relaxed text-gray-300 mb-6">
                <span className="text-cyber-cyan font-bold text-xl mr-2">&gt;</span> I am an AI & ML undergraduate passionate about <span className="text-white font-bold text-shadow-sm">robotics, deep learning</span>, and intelligent systems. 
              </p>
              <p className="font-mono text-lg leading-relaxed text-gray-300">
                <span className="text-cyber-cyan font-bold text-xl mr-2">&gt;</span> I build deployable automation solutions driven by vision, systems, and neural computation. My focus is on bridging the gap between theoretical AI and real-world robotics application.
              </p>
            </TiltCard>
            <div className="relative h-[300px] flex items-center justify-center">
              {/* Timeline / Decorator */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-cyan to-transparent opacity-50 overflow-hidden">
                <motion.div 
                  initial={{ top: '0%' }}
                  animate={{ top: '100%' }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-full h-20 bg-gradient-to-b from-transparent to-cyber-cyan"
                />
              </div>
              <TiltCard className="w-72 z-10 text-center" cornerColor="cyan">
                <div className="text-5xl font-display font-bold text-white mb-2 tracking-tighter">2025</div>
                <div className="text-cyber-cyan font-mono text-sm tracking-widest uppercase border-t border-white/10 pt-2">Target: Graduation</div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <SectionHeader title="Operational History" subtitle="EXPERIENCE_LOG" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIENCE_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard cornerColor={item.color as 'cyan' | 'purple'} className="group h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-lg bg-${item.color === 'cyan' ? 'cyber-cyan' : 'cyber-purple'}/10 text-${item.color === 'cyan' ? 'cyber-cyan' : 'cyber-purple'} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                      <item.icon size={24} />
                    </div>
                    <span className="text-[10px] font-mono border border-white/20 px-2 py-1 rounded text-gray-400">ID: 0{item.id}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-cyber-cyan transition-colors">{item.project}</h3>
                  <p className="text-sm font-mono text-cyber-purple mb-4">{item.role}</p>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                    {item.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-mono px-2 py-1 bg-white/5 text-gray-300 rounded hover:bg-white/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <SectionHeader title="Active Protocols" subtitle="PROJECTS_DATABASE" />
          <div className="space-y-8">
            {PROJECTS_DATA.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                <TiltCard className="hover:bg-white/5 transition-colors" cornerColor={index % 2 === 0 ? "cyan" : "purple"}>
                  <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Terminal size={20} className={index % 2 === 0 ? "text-cyber-cyan" : "text-cyber-purple"} />
                        <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
                      </div>
                      <p className="text-gray-400 font-mono mb-4">{project.description}</p>
                      <div className="flex gap-2 mb-4 md:mb-0">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs text-cyber-cyan font-mono bg-cyber-cyan/5 px-2 py-1 rounded">#{tag}</span>
                        ))}
                      </div>
                    </div>
                    <NeonButton variant={index % 2 === 0 ? "cyan" : "purple"} className="shrink-0 w-full md:w-auto justify-center">
                      <span className="flex items-center gap-2">
                        Access Code <Code size={16} />
                      </span>
                    </NeonButton>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills & Stats Section */}
        <section id="skills">
          <SectionHeader title="System Capabilities" subtitle="SKILLS_MATRIX" />
          <div className="grid md:grid-cols-2 gap-12">
            {/* Neural Chip Grid Visualization */}
            <div className="grid grid-cols-2 gap-4">
              {SKILLS_DATA.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0,243,255,0.5)' }}
                  className="bg-cyber-gray border border-white/10 p-4 rounded relative overflow-hidden group transition-all"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyber-cyan/50 group-hover:bg-cyber-cyan transition-colors" />
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-display font-bold text-white text-sm md:text-base">{skill.name}</span>
                    <span className="font-mono text-cyber-cyan">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeOut" }}
                      className="h-full bg-cyber-cyan shadow-[0_0_10px_rgba(0,243,255,0.5)]"
                    />
                  </div>
                  <div className="text-[10px] text-gray-500 mt-2 font-mono uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">{skill.category} MODULE</div>
                </motion.div>
              ))}
            </div>

            {/* Achievements & Education */}
            <div className="space-y-6">
               <TiltCard title="Education Log" cornerColor="purple">
                  {EDUCATION_DATA.map((edu, i) => (
                    <div key={i} className="flex gap-4 items-start">
                       <div className="bg-cyber-purple/20 p-2 rounded text-cyber-purple">
                          <Cpu size={24} />
                       </div>
                       <div>
                          <h4 className="text-white font-bold font-display text-lg">{edu.degree}</h4>
                          <p className="text-gray-400 font-mono text-sm">{edu.institution}</p>
                          <div className="flex gap-4 mt-2 text-xs font-mono text-cyber-cyan">
                             <span className="bg-cyber-cyan/10 px-2 py-0.5 rounded">{edu.year}</span>
                             <span className="bg-cyber-cyan/10 px-2 py-0.5 rounded">{edu.grade}</span>
                          </div>
                       </div>
                    </div>
                  ))}
               </TiltCard>

               <div className="grid gap-4">
                 <h3 className="font-display text-white uppercase tracking-widest text-sm border-b border-white/10 pb-2">Badges & Honors</h3>
                 {ACHIEVEMENTS_DATA.map((ach, idx) => (
                   <motion.div 
                    key={idx}
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    className="flex items-center justify-between bg-white/5 p-3 rounded border border-white/5 hover:border-cyber-cyan/50 transition-all cursor-crosshair"
                   >
                     <div className="flex items-center gap-3">
                       <ach.icon size={16} className="text-cyber-cyan" />
                       <span className="text-gray-300 font-mono text-sm">{ach.title}</span>
                     </div>
                     <span className="text-xs text-cyber-purple font-bold bg-cyber-purple/10 px-2 py-1 rounded shadow-[0_0_10px_rgba(188,19,254,0.2)]">{ach.rank}</span>
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto">
          <SectionHeader title="Establish Uplink" subtitle="CONTACT_CHANNEL" />
          <TiltCard cornerColor="cyan" className="p-8 md:p-12">
             <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                   <p className="text-gray-400 font-mono leading-relaxed">
                     Ready to collaborate on next-gen AI systems? Transmit your data packet below. Response latency is typically under 24 hours.
                   </p>
                   <div className="flex flex-col gap-4">
                      <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyber-cyan transition-colors group p-2 hover:bg-white/5 rounded">
                        <Github className="group-hover:animate-bounce" /> <span className="font-mono">github.com/shyamjipandey</span>
                      </a>
                      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyber-cyan transition-colors group p-2 hover:bg-white/5 rounded">
                        <Linkedin className="group-hover:animate-bounce" /> <span className="font-mono">linkedin.com/in/shyamjipandey</span>
                      </a>
                      <a href={SOCIAL_LINKS.email} className="flex items-center gap-4 text-gray-300 hover:text-cyber-cyan transition-colors group p-2 hover:bg-white/5 rounded">
                        <Mail className="group-hover:animate-bounce" /> <span className="font-mono">contact@shyamjipandey.dev</span>
                      </a>
                   </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2 group">
                    <label className="text-xs font-mono text-cyber-cyan uppercase group-hover:text-white transition-colors">Identity</label>
                    <input type="text" className="w-full bg-black/50 border border-white/20 p-3 rounded text-white focus:border-cyber-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all" placeholder="Enter Name" />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-xs font-mono text-cyber-cyan uppercase group-hover:text-white transition-colors">Frequency (Email)</label>
                    <input type="email" className="w-full bg-black/50 border border-white/20 p-3 rounded text-white focus:border-cyber-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all" placeholder="Enter Email" />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-xs font-mono text-cyber-cyan uppercase group-hover:text-white transition-colors">Transmission</label>
                    <textarea rows={4} className="w-full bg-black/50 border border-white/20 p-3 rounded text-white focus:border-cyber-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all" placeholder="Enter Message"></textarea>
                  </div>
                  <NeonButton variant="cyan" className="w-full justify-center">
                    Send Transmission
                  </NeonButton>
                </form>
             </div>
          </TiltCard>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"></div>
        <p className="font-mono text-gray-500 text-sm">
          © 2025 Shyamji Pandey. All Systems Nominal. <br />
          <span className="text-[10px] opacity-50">BUILT WITH REACT / TAILWIND / FRAMER MOTION</span>
        </p>
      </footer>
    </div>
  );
};

export default App;