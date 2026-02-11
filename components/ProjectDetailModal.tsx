import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Github, ExternalLink, Code, BookOpen, Lightbulb, Image as ImageIcon, ChevronRight } from 'lucide-react';

export interface ProjectDetail {
  id?: string;
  title: string;
  tagline?: string;
  description: string;
  longDescription?: string;
  category?: string;
  features: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  insights?: string[];
  learnings?: string[];
  images?: string[];
  video?: string;
  github: string;
  demo?: string;
  accentColor?: string;
  icon?: any;
  details?: string[]; // For backward compatibility
  tech?: string[]; // For backward compatibility
  color?: string; // For backward compatibility
}

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetail | null;
}

type TabType = 'overview' | 'technical' | 'insights' | 'media';

const tabs: { id: TabType; label: string; icon: any }[] = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'technical', label: 'Technical Deep Dive', icon: Code },
  { id: 'insights', label: 'Insights & Learnings', icon: Lightbulb },
  { id: 'media', label: 'Media & Links', icon: ImageIcon },
];

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ isOpen, onClose, project }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset to overview tab when opening
      setActiveTab('overview');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!project || !mounted) return null;

  // Normalize project data for backward compatibility
  const normalizedProject: ProjectDetail = {
    ...project,
    features: project.features || project.details || [],
    technologies: project.technologies || project.tech || [],
    tagline: project.tagline || project.category || '',
    longDescription: project.longDescription || project.description,
    accentColor: project.accentColor || project.color || '#00f3ff',
  };

  const { title, tagline, longDescription, features, technologies, metrics, insights, learnings, images, video, github, demo, accentColor, icon: Icon } = normalizedProject;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60]"
          />

          {/* Modal Content - full viewport on mobile, centered on desktop */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-4 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#1a1a1a] border border-white/10 w-full max-w-[calc(100%-0.5rem)] sm:max-w-6xl h-[95dvh] sm:h-[90vh] sm:max-h-[90vh] rounded-xl shadow-2xl pointer-events-auto relative flex flex-col overflow-hidden min-w-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Hero Header - compact */}
              <div className="relative h-36 sm:h-40 md:h-44 flex-shrink-0 overflow-hidden">
                {/* Gradient Background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-neonCyan/20 via-neonPurple/20 to-transparent"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}20 0%, rgba(188, 19, 254, 0.2) 50%, transparent 100%)`
                  }}
                />
                
                {/* Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

                {/* Hero Content - responsive, text wraps */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10 min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-3 sm:gap-6 min-w-0"
                  >
                    {Icon && (
                      <div 
                        className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 flex-shrink-0"
                        style={{ borderColor: `${accentColor}50` }}
                      >
                        <Icon className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" style={{ color: accentColor }} />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-1 sm:mb-2 break-words">{title}</h2>
                      {tagline && (
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-sans break-words">{tagline}</p>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Key Stats Row - compact, wraps on mobile */}
              {metrics && metrics.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="px-4 sm:px-6 md:px-8 pt-3 pb-2 flex-shrink-0"
                >
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    {metrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + idx * 0.05 }}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
                      >
                        <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">{metric.label}</div>
                        <div className="text-sm sm:text-lg font-bold text-white break-words">{metric.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tabs Navigation - scrollable on mobile, no truncation */}
              <div className="px-4 sm:px-6 md:px-8 pt-2 pb-3 border-b border-white/10 flex-shrink-0">
                <div className="flex gap-2 overflow-x-auto overflow-y-hidden pb-1 -mb-1 md:flex-wrap md:overflow-visible">
                  {tabs.map((tab) => {
                    const TabIcon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 relative flex-shrink-0 ${
                          isActive
                            ? 'text-white bg-white/10'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <TabIcon size={16} className="sm:w-[18px] sm:h-[18px]" />
                        <span className="whitespace-nowrap">{tab.label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-neonCyan/20 to-neonPurple/20 rounded-lg -z-10"
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab Content - takes remaining space, scrollable; center-aligned on mobile */}
              <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-center md:text-left">
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="min-w-0"
                    >
                      <div className="space-y-6 min-w-0">
                        <div className="min-w-0 flex flex-col items-center md:items-stretch">
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">About This Project</h3>
                          <p className="text-gray-300 leading-relaxed text-base sm:text-lg break-words max-w-xl md:max-w-none">{longDescription}</p>
                        </div>

                        {features.length > 0 && (
                          <div className="min-w-0 flex flex-col items-center md:items-stretch">
                            <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-3 sm:mb-4">Key Features</h3>
                            <motion.ul className="space-y-3 w-full max-w-xl md:max-w-none">
                              {features.map((feature, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="flex items-start gap-3 text-gray-300 min-w-0"
                                >
                                  <ChevronRight size={20} className="text-neonCyan mt-0.5 shrink-0 flex-shrink-0" />
                                  <span className="leading-relaxed break-words">{feature}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </div>
                        )}

                        {technologies.length > 0 && (
                          <div className="min-w-0 flex flex-col items-center md:items-stretch">
                            <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-3 sm:mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                              {technologies.map((tech, idx) => (
                                <motion.span
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.03 }}
                                  className="px-3 py-1.5 bg-neonCyan/10 text-neonCyan border border-neonCyan/20 rounded font-mono text-xs sm:text-sm hover:bg-neonCyan/20 hover:scale-105 transition-all cursor-default break-words"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'technical' && (
                    <motion.div
                      key="technical"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="min-w-0"
                    >
                      <div className="space-y-6 min-w-0 flex flex-col items-center md:items-stretch">
                        <div className="min-w-0 w-full max-w-xl md:max-w-none">
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">Architecture Overview</h3>
                          <p className="text-gray-300 leading-relaxed text-base sm:text-lg break-words">
                            This project leverages modern architectural patterns to deliver scalable, maintainable solutions.
                            The system is designed with modularity and performance in mind.
                          </p>
                        </div>

                        <div className="min-w-0 w-full max-w-xl md:max-w-none">
                          <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-3 sm:mb-4">Core Technologies</h3>
                          <div className="space-y-4">
                            {technologies.map((tech, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="p-4 bg-white/5 border border-white/10 rounded-lg min-w-0"
                              >
                                <div className="font-semibold text-white mb-1 break-words">{tech}</div>
                                <div className="text-sm text-gray-400 break-words">
                                  Used for core functionality and system integration
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {features.length > 0 && (
                          <div className="min-w-0 w-full max-w-xl md:max-w-none">
                            <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-3 sm:mb-4">Technical Challenges & Solutions</h3>
                            <ul className="space-y-3">
                              {features.slice(0, 5).map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300 min-w-0">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neonCyan shrink-0 flex-shrink-0" />
                                  <span className="leading-relaxed break-words">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'insights' && (
                    <motion.div
                      key="insights"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="min-w-0"
                    >
                      <div className="space-y-6 min-w-0 flex flex-col items-center md:items-stretch">
                        {insights && insights.length > 0 && (
                          <div className="min-w-0 w-full max-w-xl md:max-w-none">
                            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">Key Insights</h3>
                            <ul className="space-y-4">
                              {insights.map((insight, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="p-4 bg-white/5 border-l-4 border-neonPurple rounded-lg min-w-0"
                                >
                                  <p className="text-gray-300 leading-relaxed break-words">{insight}</p>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {learnings && learnings.length > 0 && (
                          <div className="min-w-0 w-full max-w-xl md:max-w-none">
                            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">What I Learned</h3>
                            <ul className="space-y-3">
                              {learnings.map((learning, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="flex items-start gap-3 text-gray-300 min-w-0"
                                >
                                  <Lightbulb size={20} className="text-neonCyan mt-0.5 shrink-0 flex-shrink-0" />
                                  <span className="leading-relaxed break-words">{learning}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {(!insights || insights.length === 0) && (!learnings || learnings.length === 0) && (
                          <div className="text-center py-12 min-w-0">
                            <Lightbulb size={48} className="text-gray-600 mx-auto mb-4" />
                            <p className="text-gray-400 break-words px-2">
                              Insights and learnings will be added here. This project provided valuable experience in building scalable AI systems.
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'media' && (
                    <motion.div
                      key="media"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="min-w-0"
                    >
                      <div className="space-y-6 min-w-0">
                        {video && (
                          <div>
                            <h3 className="text-xl font-display font-bold text-white mb-4">Demo Video</h3>
                            <div className="aspect-video bg-black/50 rounded-lg border border-white/10 overflow-hidden">
                              <iframe
                                src={video}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        )}

                        {images && images.length > 0 && (
                          <div>
                            <h3 className="text-xl font-display font-bold text-white mb-4">Screenshots</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {images.map((image, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="relative group cursor-pointer rounded-lg overflow-hidden border border-white/10 hover:border-neonCyan/50 transition-all"
                                  onClick={() => window.open(image, '_blank')}
                                >
                                  <img
                                    src={image}
                                    alt={`${title} screenshot ${idx + 1}`}
                                    className="w-full h-auto object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <ExternalLink size={24} className="text-white" />
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex flex-col items-center md:items-stretch">
                          <h3 className="text-xl font-display font-bold text-white mb-4">Project Links</h3>
                          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {github && (
                              <motion.a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neonCyan/50 rounded-lg transition-all group"
                              >
                                <Github size={20} className="text-gray-400 group-hover:text-neonCyan transition-colors" />
                                <span className="text-white font-medium">View Source Code</span>
                                <ExternalLink size={16} className="text-gray-400 group-hover:text-neonCyan transition-colors" />
                              </motion.a>
                            )}
                            {demo && demo !== '#' && (
                              <motion.a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-6 py-3 bg-neonCyan/10 hover:bg-neonCyan/20 border border-neonCyan/30 hover:border-neonCyan/50 rounded-lg transition-all group"
                              >
                                <ExternalLink size={20} className="text-neonCyan" />
                                <span className="text-white font-medium">Live Demo</span>
                                <ChevronRight size={16} className="text-neonCyan" />
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-t border-white/10 flex justify-center md:justify-end flex-shrink-0">
                <button
                  onClick={onClose}
                  className="px-4 sm:px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neonPurple/50 text-white rounded-lg font-medium transition-all text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};
