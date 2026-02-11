
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Calendar, MapPin, Trophy, ExternalLink } from 'lucide-react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-12 py-24 relative ${className}`}>
      {children}
    </section>
  );
};

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: any; // Relaxed type to accommodate various React component patterns/Lucide icons
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", title, subtitle, icon: Icon, hoverEffect = true, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={hoverEffect ? { 
        scale: 1.02, 
        boxShadow: "0 20px 40px rgba(0,243,255,0.1)" 
      } : {}}
      onClick={onClick}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group ${className} ${onClick ? 'cursor-pointer' : ''}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-neonCyan/50 transition-colors duration-500" />
      
      {/* Inner Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-neonCyan/20 to-neonPurple/20 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col">
        {(title || Icon) && (
          <div className="flex items-center gap-4 mb-4">
            {Icon && (
              <div className="p-3 rounded-xl bg-white/5 text-neonCyan ring-1 ring-white/10 group-hover:bg-neonCyan/20 transition-all duration-300">
                <Icon size={24} />
              </div>
            )}
            <div>
              {title && <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-neonCyan transition-colors">{title}</h3>}
              {subtitle && <p className="text-sm text-gray-400 font-sans">{subtitle}</p>}
            </div>
          </div>
        )}
        <div className="flex-grow">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const CustomButton: React.FC<ButtonProps> = ({ children, variant = 'primary', className = "", ...props }) => {
  const baseClasses = "relative px-6 py-3 rounded-lg font-display font-bold tracking-wider transition-all duration-300 flex items-center gap-2 overflow-hidden group";
  const variants = {
    primary: "bg-white text-black hover:bg-neonCyan hover:text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]",
    secondary: "bg-transparent border border-white/20 text-white hover:border-neonPurple/50 hover:text-neonPurple hover:shadow-[0_0_20px_rgba(188,19,254,0.2)]"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!data) return null;

  // Determine content type based on data properties
  const isProject = data.title !== undefined && data.category !== undefined;
  const isExperience = data.company !== undefined;
  const isHackathon = data.name !== undefined && data.org !== undefined;
  const title = data.title || data.name || data.company;
  const subtitle = data.category || data.org || data.role;
  const description = data.description || data.project || data.focus; // fallback if no details

  // Build certificate URL with base path and encoding for Vercel/production
  const certUrlEncoded = (data.certificate && (isHackathon || isExperience))
    ? (() => {
        const c = data.certificate;
        const base = (typeof import.meta !== 'undefined' && (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL) || '/';
        const path = c.startsWith('http') ? c : `${base}${c.replace(/^\//, '')}`;
        return path.includes('%') ? path : encodeURI(path);
      })()
    : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
          />
          
          {/* Modal Content */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#1a1a1a] border border-neonCyan/30 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-[0_0_50px_rgba(0,243,255,0.15)] pointer-events-auto relative"
            >
              {/* Decorative Header */}
              <div className="h-32 bg-gradient-to-r from-neonCyan/20 to-neonPurple/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-4 right-4 z-10">
                  <button 
                    onClick={onClose}
                    className="p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm border border-white/10"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="p-8 -mt-12 relative">
                {/* Icon/Badge */}
                <div className="w-20 h-20 rounded-2xl bg-[#050505] border border-neonCyan/50 flex items-center justify-center shadow-lg mb-6">
                  {data.icon ? (
                    <data.icon size={40} className="text-neonCyan" />
                  ) : (
                    <Trophy size={40} className="text-neonPink" />
                  )}
                </div>

                {/* Content */}
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{title}</h2>
                <p className="text-neonPurple font-mono text-lg mb-6">{subtitle}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Details</h3>
                    
                    {data.details && data.details.length > 0 ? (
                       <ul className="space-y-3">
                          {data.details.map((item: string, i: number) => (
                             <li key={i} className="flex items-start gap-3 text-gray-300 text-base leading-relaxed">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neonCyan/70 shrink-0"></span>
                                <span>{item}</span>
                             </li>
                          ))}
                       </ul>
                    ) : data.achievements && data.achievements.length > 0 ? (
                       <ul className="space-y-3">
                          {data.achievements.map((item: string, i: number) => (
                             <li key={i} className="flex items-start gap-3 text-gray-300 text-base leading-relaxed">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neonCyan/70 shrink-0"></span>
                                <span>{item}</span>
                             </li>
                          ))}
                       </ul>
                    ) : (
                       <p className="text-gray-300 leading-relaxed text-lg">
                         {description}
                       </p>
                    )}
                    
                    {/* Additional Hackathon Details if available AND no details array used */}
                    {isHackathon && data.result && !data.details && (
                       <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10 flex items-center gap-3">
                          <Trophy className="text-yellow-400" size={24} />
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider">Result</div>
                            <div className="text-white font-bold text-lg">{data.result}</div>
                          </div>
                       </div>
                    )}
                  </div>

                  {(isProject || isExperience) && data.tech && (
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {data.tech.map((t: string, i: number) => (
                          <span key={i} className="px-3 py-1.5 bg-neonCyan/10 text-neonCyan border border-neonCyan/20 rounded font-mono text-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Certificate Section for Hackathons and Experience */}
                  {(isHackathon || isExperience) && certUrlEncoded && (
                    <div className="mt-6">
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Certificate</h3>
                      {data.certificate.endsWith('.pdf') ? (
                        // PDF Certificate
                        <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-neonCyan/50 transition-all duration-300">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-neonPurple/20 rounded-lg">
                              <svg className="w-8 h-8 text-neonPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-white font-bold">Experience Certificate</p>
                              <p className="text-gray-400 text-sm">Click button to view PDF</p>
                            </div>
                            <a 
                              href={certUrlEncoded} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-neonCyan/20 hover:bg-neonCyan/30 text-neonCyan border border-neonCyan/30 rounded-lg font-bold text-sm transition-all duration-300"
                            >
                              View PDF
                            </a>
                          </div>
                        </div>
                      ) : (
                        // Image Certificate
                        <div className="relative group">
                          <img 
                            src={certUrlEncoded} 
                            alt={`${data.name || data.company} Certificate`}
                            className="w-full rounded-lg border border-white/10 cursor-pointer hover:border-neonCyan/50 transition-all duration-300"
                            onClick={() => window.open(certUrlEncoded, '_blank')}
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">Click to View Full Size</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                   {(isHackathon || isExperience) && certUrlEncoded && (
                     <a 
                       href={certUrlEncoded} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="px-4 py-2 bg-neonPurple/20 hover:bg-neonPurple/30 text-neonPurple border border-neonPurple/30 rounded-lg font-bold text-sm transition-all duration-300 flex items-center gap-2"
                     >
                       <ExternalLink size={16} />
                       Open Certificate
                     </a>
                   )}
                   <CustomButton onClick={onClose} variant="secondary" className="text-sm ml-auto">
                      Close Details
                   </CustomButton>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
