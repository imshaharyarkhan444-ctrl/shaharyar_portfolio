import { ArrowRight, Briefcase, FileCode, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-zinc-950 select-none select-none"
    >
      {/* Dynamic high-quality background elements / subtle glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Freelancer Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 px-3 py-1.5 rounded-full select-none shadow-sm backdrop-blur-sm animate-pulse-slow">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>
            <span className="text-cyan-300 font-semibold text-xs tracking-wide uppercase">
              Freelancer • Available for Projects
            </span>
          </div>

          {/* Core Name & Headline */}
          <div className="space-y-4">
            <h1 className="text-zinc-400 font-medium tracking-wide text-sm md:text-base uppercase flex items-center gap-2">
              <span className="w-8 h-px bg-blue-500 inline-block"></span>
              Hi there, I'm
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Shaharyar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Khan</span>
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-zinc-100 max-w-xl">
              Web Developer & Software Engineer
            </p>
            <p className="text-zinc-400 text-base sm:text-lg max-w-lg leading-relaxed font-normal">
              I build modern, high-converting websites and scalable business solutions with clean UI, fast performance, and superior user experience.
            </p>
          </div>

          {/* High-Contrast CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-7 py-4 rounded-xl text-base shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto border border-blue-400/20"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center space-x-2 bg-zinc-900/80 hover:bg-zinc-800 text-white font-semibold px-7 py-4 rounded-xl text-base border border-zinc-700/80 hover:border-cyan-400/60 transition-all hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto shadow-sm backdrop-blur-sm"
            >
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Quick Real Real-world Info Badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-zinc-800/60 w-full mt-2">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-zinc-400 text-xs md:text-sm font-medium">Business Focus</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-zinc-400 text-xs md:text-sm font-medium">Performance Optimization</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-zinc-400 text-xs md:text-sm font-medium">Fully Responsive</span>
            </div>
          </div>
        </div>

        {/* Right Aesthetic Developer Card/Display */}
        <div className="lg:col-span-5 relative w-full flex justify-center items-center select-none group h-[340px] md:h-[440px]">
          {/* Subtle spinning glow under code box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-blue-500/30 to-cyan-400/30 rounded-full blur-[110px] group-hover:scale-110 transition-all duration-700 duration-500 ease-in-out pointer-events-none" />

          {/* Tech Stack Glowing Code Viewport */}
          <div className="relative w-full max-w-md bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl select-none overflow-hidden hover:border-zinc-700/80 transition-all duration-300">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4 select-none">
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500/80"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="flex items-center space-x-1.5 text-zinc-500 font-mono text-xs tracking-wider">
                <FileCode className="w-4 h-4 text-blue-400" />
                <span>portfolio.ts</span>
              </div>
            </div>

            {/* Simulated Code Body */}
            <div className="font-mono text-xs sm:text-sm text-zinc-300 space-y-3 leading-relaxed tracking-normal select-text">
              <p><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-zinc-400">{`{`}</span></p>
              <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-emerald-400">"Shaharyar Khan"</span>,</p>
              <p className="pl-4"><span className="text-cyan-400">location</span>: <span className="text-emerald-400">"Pakistan"</span>,</p>
              <p className="pl-4"><span className="text-cyan-400">focus</span>: <span className="text-emerald-400">"Conversion-Ready Web Apps"</span>,</p>
              <p className="pl-4"><span className="text-cyan-400">education</span>: <span className="text-emerald-400">"BS CS at Iqra University"</span>,</p>
              <p className="pl-4"><span className="text-cyan-400">skills</span>: [</p>
              <p className="pl-8"><span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"TailwindCSS"</span>, <span className="text-emerald-400">"Node"</span>,</p>
              <p className="pl-8"><span className="text-emerald-400">"JavaScript"</span>, <span className="text-emerald-400">"Java"</span>, <span className="text-emerald-400">"MongoDB"</span></p>
              <p className="pl-4">],</p>
              <p className="pl-4"><span className="text-cyan-400">availability</span>: <span className="text-amber-400">true</span></p>
              <p><span className="text-zinc-400">{`}`}</span>;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
