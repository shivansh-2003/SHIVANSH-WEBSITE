
import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Scene } from './components/Scene';
import { Section, GlassCard, CustomButton, Modal } from './components/UI';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { PROJECTS, EXPERIENCE, EDUCATION, SKILLS, SOCIALS, HACKATHONS } from './constants';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Calendar,
  ChevronDown, 
  ExternalLink, 
  Code, 
  Terminal, 
  Trophy,
  MapPin,
  Phone,
  GraduationCap,
  Medal,
  Target,
  Rocket,
  Cpu
} from 'lucide-react';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleOpenModal = (item: any) => {
    // Check if it's a project (has title and category/tech)
    const isProject = item.title !== undefined && (item.category !== undefined || item.tech !== undefined);
    
    if (isProject) {
      setSelectedProject(item);
      setIsProjectModalOpen(true);
    } else {
      setSelectedItem(item);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
  };

  // Smooth Scroll to section
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-[#050505] text-white font-sans selection:bg-neonCyan selection:text-black">
      <CustomCursor />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} data={selectedItem} />
      <ProjectDetailModal isOpen={isProjectModalOpen} onClose={handleCloseProjectModal} project={selectedProject} />
      
      {/* 3D Background Scene */}
      <Scene scrollProgress={0} />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neonCyan to-neonPurple origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-6 z-40 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display font-bold text-2xl tracking-tighter cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          SM<span className="text-neonCyan">.</span>
        </motion.div>
        
        <div className="hidden md:flex gap-8 glass-panel px-8 py-3 rounded-full">
          {['Experience', 'Projects', 'Skills'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="font-sans text-sm uppercase tracking-widest hover:text-neonCyan transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neonCyan transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button onClick={() => scrollTo('contact')} className="font-sans text-sm uppercase tracking-widest text-neonPurple hover:text-white transition-colors">
            Contact
          </button>
        </div>

        <div className="flex gap-4">
             <a href={`mailto:${SOCIALS.email}`} className="hover:text-neonCyan transition-colors"><Mail size={20}/></a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-neonCyan transition-colors"><Linkedin size={20}/></a>
             <a href="https://github.com/shivansh-2003" target="_blank" rel="noreferrer" className="hover:text-neonCyan transition-colors"><Github size={20}/></a>
        </div>
      </nav>

      {/* HERO SECTION - New Parallax Hero */}
      <Hero scrollTo={scrollTo} />

      {/* EXPERIENCE SECTION */}
      <Section id="experience">
        <div className="max-w-6xl w-full z-10">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-16"
           >
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
             <div className="h-1 w-24 bg-gradient-to-r from-neonCyan to-neonPurple"></div>
           </motion.div>

           <div className="grid grid-cols-1 gap-8">
             {EXPERIENCE.map((job, idx) => (
               <GlassCard key={idx} className="flex flex-col md:flex-row gap-6 p-8 border-l-4 border-l-neonCyan">
                  <div className="md:w-1/4">
                    <h3 className="text-2xl font-display font-bold text-white">{job.company}</h3>
                    <div className="text-neonPurple font-mono text-sm mt-1 mb-4">{job.period}</div>
                    <div className="text-gray-400 text-sm">{job.role}</div>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-300 mb-4 italic border-l border-white/10 pl-4">{job.focus}</p>
                    <ul className="space-y-2 mb-6">
                      {job.achievements.slice(0, 3).map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                           <span className="mt-1.5 w-1 h-1 rounded-full bg-neonCyan shrink-0"></span>
                           {ach}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                       {job.tech.map((t, i) => (
                         <span key={i} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-neonCyan font-mono">
                           {t}
                         </span>
                       ))}
                    </div>
                    <div className="mt-6">
                       <button onClick={() => handleOpenModal(job)} className="text-sm text-neonPurple hover:text-white transition-colors flex items-center gap-1">
                          View Full Details <ArrowRight size={14} />
                       </button>
                    </div>
                  </div>
               </GlassCard>
             ))}
           </div>
        </div>
      </Section>

      {/* SKILLS SECTION (TECHNICAL ARSENAL) */}
      <Section id="skills">
         <div className="max-w-7xl w-full z-10">
            <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-16 text-center md:text-left"
           >
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
             <div className="h-1 w-24 bg-gradient-to-r from-neonCyan to-neonPurple mx-auto md:mx-0"></div>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS.map((skill, idx) => (
                <GlassCard 
                  key={idx} 
                  icon={skill.icon} 
                  title={skill.category}
                  className="h-full"
                >
                   <div className="flex flex-wrap gap-2 mt-2">
                     {skill.items.map((item, i) => (
                       <span key={i} className="text-sm px-3 py-1.5 bg-white/5 hover:bg-neonCyan/20 hover:text-neonCyan border border-white/10 rounded transition-colors cursor-default">
                         {item}
                       </span>
                     ))}
                   </div>
                </GlassCard>
              ))}
           </div>
         </div>
      </Section>

      {/* PROJECTS SECTION */}
      <Section id="projects">
        <div className="max-w-7xl w-full z-10">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-16"
           >
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
             <div className="h-1 w-24 bg-gradient-to-r from-neonCyan to-neonPurple"></div>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {PROJECTS.map((project, idx) => (
               <GlassCard 
                  key={idx} 
                  title={project.title}
                  subtitle={project.category}
                  icon={project.icon}
                  className="flex flex-col justify-between h-full group"
                  onClick={() => handleOpenModal(project)}
               >
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-white/5 text-gray-300 rounded font-mono">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-white/5 text-gray-500 rounded font-mono">+{project.tech.length - 3}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 border-t border-white/10 pt-4" onClick={(e) => e.stopPropagation()}>
                       <a 
                         href={project.github} 
                         target="_blank" 
                         rel="noreferrer" 
                         className="p-2 rounded-full bg-white/5 hover:bg-white/20 hover:text-neonCyan transition-colors"
                         title="View Source Code"
                       >
                         <Github size={18} />
                       </a>
                       <a 
                         href={project.demo} 
                         target="_blank" 
                         rel="noreferrer" 
                         className="p-2 rounded-full bg-white/5 hover:bg-white/20 hover:text-neonCyan transition-colors"
                         title="View Live Demo"
                       >
                         <ExternalLink size={18} />
                       </a>
                       <button 
                          onClick={() => handleOpenModal(project)}
                          className="ml-auto text-xs font-bold uppercase tracking-widest text-neonPurple hover:text-white transition-colors"
                       >
                          Details
                       </button>
                    </div>
                  </div>
               </GlassCard>
             ))}
           </div>
        </div>
      </Section>

      {/* HACKATHONS SECTION */}
      <Section id="hackathons">
         <div className="max-w-6xl w-full z-10">
            <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-16 text-center"
           >
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Hackathon <span className="text-gradient">Participation</span></h2>
             <p className="text-gray-400 max-w-2xl mx-auto">Building under pressure, delivering innovation.</p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {HACKATHONS.map((hack, idx) => (
                <GlassCard key={idx} className="relative overflow-hidden" onClick={() => handleOpenModal(hack)}>
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Trophy size={100} />
                   </div>
                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-2">
                         <h3 className="text-xl font-bold font-display text-white">{hack.name}</h3>
                         <span className="px-2 py-1 bg-neonPurple/20 text-neonPurple text-xs font-bold rounded border border-neonPurple/30 uppercase">
                           {hack.result}
                         </span>
                      </div>
                      <div className="text-neonCyan text-sm mb-4">{hack.org}</div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                         <Rocket size={14} />
                         <span>Project: {hack.project}</span>
                      </div>
                   </div>
                </GlassCard>
              ))}
           </div>
         </div>
      </Section>

      {/* CONTACT SECTION */}
      <Section id="contact">
        <div className="max-w-4xl w-full z-10 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="glass-panel p-6 sm:p-8 md:p-12 rounded-3xl border-neonCyan/30 shadow-[0_0_100px_rgba(0,243,255,0.1)]"
           >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 leading-tight">
                READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">COLLABORATE?</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                I'm always looking for new challenges in Generative AI and Agents. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 w-full px-2 flex-wrap">
                 <a 
                   href={`mailto:${SOCIALS.email}`}
                   className="flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-black font-bold text-base sm:text-lg hover:bg-neonCyan hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all duration-300 w-full sm:w-auto justify-center"
                 >
                   <Mail size={18} className="sm:w-5 sm:h-5" />
                   Say Hello
                 </a>
                <a 
                  href="https://calendly.com/shivansh-m2003"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-neonPurple/20 border border-neonPurple/50 text-white font-bold text-base sm:text-lg hover:bg-neonPurple/30 hover:border-neonPurple hover:shadow-[0_0_30px_rgba(188,19,254,0.3)] transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <Calendar size={18} className="sm:w-5 sm:h-5" />
                  Schedule a meet
                </a>
                <a 
                  href="https://drive.google.com/file/d/1rq7_MpBlIICDnq17Gkhbb6rRDfG8DM-y/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-black border border-white/20 text-white font-bold text-base sm:text-lg hover:border-neonPurple hover:text-neonPurple hover:shadow-[0_0_30px_rgba(188,19,254,0.3)] transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <Download size={18} className="sm:w-5 sm:h-5" />
                  Download CV
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500 border-t border-white/10 pt-8">
                 <div className="flex items-center justify-center gap-2">
                    <MapPin size={16} /> {SOCIALS.location}
                 </div>
                 <div className="flex items-center justify-center gap-2">
                    <Phone size={16} /> {SOCIALS.phone}
                 </div>
                <div className="flex items-center justify-center gap-2">
                   <Github size={16} /> @shivansh-2003
                </div>
              </div>
           </motion.div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-600 text-sm relative z-10 bg-[#050505]">
         <p>© {new Date().getFullYear()} Shivansh Mahajan. All rights reserved.</p>
         <p className="mt-2 opacity-50">Built with React, Three.js, Tailwind & Framer Motion</p>
      </footer>

      {/* Helper Components for internal layout use */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
         <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center text-xs font-mono text-neonCyan animate-spin-slow">
            AI
         </div>
      </div>
    </div>
  );
};

// Define generic ArrowRight component if not imported, though we imported it from lucide-react
const ArrowRight = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

export default App;
