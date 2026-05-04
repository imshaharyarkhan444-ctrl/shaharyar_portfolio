import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60 shadow-lg' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-20">
        {/* Logo/Brand */}
        <a href="#hero" className="flex items-center space-x-2 select-none group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-all">
            <span className="text-white font-bold text-lg">SK</span>
          </div>
          <div>
            <span className="text-white font-semibold text-lg tracking-wide group-hover:text-blue-400 transition-colors block leading-tight">
              Shaharyar
            </span>
            <span className="text-zinc-400 text-xs tracking-wider uppercase block leading-tight">
              Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-300 hover:text-white hover:bg-zinc-800/40 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-5 bg-zinc-800 mx-2" />
          <a
            href="#contact"
            className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold px-5 py-2.5 rounded-xl text-sm shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 transition-all active:scale-95 ml-2 border border-blue-400/20"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-xl transition-all"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800/80 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="px-6 py-6 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-zinc-300 hover:text-white hover:bg-zinc-800/50 px-4 py-3 rounded-xl text-base font-medium transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-800/80 mt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-5 py-3.5 rounded-xl text-base shadow-md shadow-blue-500/10 border border-blue-400/20 transition-all"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
