import { useState } from 'react';
import { ExternalLink, FolderCode, Terminal, Sparkles } from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'freelance' | 'software'>('freelance');

  const freelanceProjects = [
    {
      title: 'Alina Salon Website',
      description: 'An elegant, high-conversion web platform built for a premium salon brand. Optimizes client reservations and displays high-fidelity beauty service offerings.',
      tech: ['React.js', 'Tailwind CSS', 'Performance Optimization'],
      link: 'https://alina-salon-website.vercel.app/',
      badge: 'Client Work'
    },
    {
      title: 'Omigloss Premium Salon',
      description: 'An ultra-premium website design with immersive visuals, smooth layout animations, and clean customer bookings conversion funnels.',
      tech: ['React.js', 'Vite', 'Tailwind CSS', 'Responsive UI'],
      link: 'https://omigloss-premium-salon-website.vercel.app/',
      badge: 'Luxury Freelance'
    },
    {
      title: 'Kapsalon Nour Website',
      description: 'Fully responsive website development for a high-traffic salon. Designed with conversion in mind and customized for fast user mobile viewing.',
      tech: ['React', 'CSS Flexbox/Grid', 'UX Optimization'],
      link: 'https://kapsalon-nour-website-development.vercel.app/',
      badge: 'Client Work'
    },
    {
      title: 'Aquarena Website Design',
      description: 'A custom, conversion-driven brand landing page. Features lightning-fast loading speeds, structured SEO tags, and engaging CTA points.',
      tech: ['HTML5', 'Tailwind CSS', 'JS Animations'],
      link: 'https://aquarena-website-design.vercel.app',
      badge: 'Web Design'
    }
  ];

  const softwareProjects = [
    {
      title: 'Restaurant Management System',
      description: 'A Java OOP platform designed for business operations. Includes table reservations, custom bill generation, and distinct subclass-based logic.',
      tech: ['Java', 'Object-Oriented Design', 'File Handling'],
      link: '#',
      badge: 'Academic Project'
    },
    {
      title: 'Mini Mart Management System',
      description: 'A GUI-based Data Structures and Algorithms project featuring admin controls, item modifications, and custom queue/linked list operations.',
      tech: ['Java Swing', 'DSA (LinkedList/Stack)', 'GUI Dev'],
      link: '#',
      badge: 'Academic Project'
    },
    {
      title: 'TimeTable Scheduling System using CSP',
      description: 'Constructed an automatic timetabling scheduling system that models and solves the Constraint Satisfaction Problem for educational institutes.',
      tech: ['PHP', 'HTML', 'CSS', 'Algorithms'],
      link: '#',
      badge: 'Academic Project'
    }
  ];

  const activeProjects = activeTab === 'freelance' ? freelanceProjects : softwareProjects;

  return (
    <section id="projects" className="relative py-24 bg-zinc-950 px-6 border-t border-zinc-900/60 select-none">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 px-3 py-1.5 rounded-xl select-none backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-cyan-300 tracking-wide uppercase">Portfolio & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Projects</span>
            </h2>
            <p className="text-zinc-400 text-base max-w-xl">
              Take a look at the commercial freelance websites and computer science software applications I've developed.
            </p>
          </div>

          {/* Navigation/Toggle Tabs */}
          <div className="flex bg-zinc-900 border border-zinc-800/80 p-1 rounded-2xl w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('freelance')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
                activeTab === 'freelance'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/15'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              <FolderCode className="w-4 h-4" />
              <span>Freelance Sites</span>
            </button>
            <button
              onClick={() => setActiveTab('software')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
                activeTab === 'software'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/15'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Systems & Apps</span>
            </button>
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeProjects.map((project, index) => (
            <div 
              key={index} 
              className="group p-6 sm:p-7 bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-800/30 rounded-2xl flex flex-col justify-between h-full transition-all duration-300 relative overflow-hidden select-none"
            >
              <div className="space-y-4">
                {/* Badge & Info */}
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-zinc-800/80 text-cyan-300 font-semibold px-2.5 py-1 rounded-xl border border-zinc-700/60">
                    {project.badge}
                  </span>
                  {activeTab === 'freelance' && (
                    <span className="text-xs text-blue-400 font-medium">Active Production</span>
                  )}
                </div>

                {/* Card Title & Content */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Visual tech chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="text-[11px] font-medium tracking-wide text-zinc-300 bg-zinc-800/60 border border-zinc-800 px-2 py-0.5 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA for project viewing */}
              {project.link !== '#' ? (
                <div className="pt-6 border-t border-zinc-800/80 mt-6 select-text">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-4 py-3 rounded-xl text-sm shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 transition-all active:scale-95 border border-blue-400/20"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <div className="pt-6 border-t border-zinc-800/80 mt-6 flex items-center justify-center select-text">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Full Code / Implementation Private
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
