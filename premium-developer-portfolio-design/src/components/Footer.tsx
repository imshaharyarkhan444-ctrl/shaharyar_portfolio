export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900/60 py-12 px-6 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand/Role */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white text-base">
            SK
          </div>
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide leading-tight">
              Shaharyar Khan
            </h4>
            <p className="text-zinc-500 text-xs">Web Developer & Freelancer</p>
          </div>
        </div>

        {/* Quick Links / Status */}
        <div className="flex items-center space-x-6 text-sm">
          <a href="#about" className="text-zinc-400 hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="text-zinc-400 hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#skills" className="text-zinc-400 hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#contact" className="text-zinc-400 hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Copy / Copyright */}
        <div className="text-zinc-500 text-xs md:text-right">
          <p>© {currentYear} All Rights Reserved.</p>
          <p className="mt-0.5">Designed and built with premium expertise.</p>
        </div>
      </div>
    </footer>
  );
}
