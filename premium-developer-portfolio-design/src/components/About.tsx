import { Award, GraduationCap, Code2, MoveRight, ChevronRight } from 'lucide-react';

export default function About() {
  const problemSolvingFocus = [
    {
      title: 'Business-Driven Development',
      desc: 'I don’t just code; I create custom-tailored digital solutions that solve real-world problems and enhance user engagement for businesses.',
    },
    {
      title: 'High Performance & SEO',
      desc: 'Websites must be fast. I guarantee lightweight, accessible, and fast-loading experiences designed to keep visitor retention high.',
    },
    {
      title: 'Clean Modern UI & UX',
      desc: 'Sleek, intuitive interfaces that visually represent your brand identity and provide clear user journeys to maximize business conversions.',
    }
  ];

  const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Software Engineering Principles',
    'AI / Machine Learning',
    'Programming Fundamentals'
  ];

  return (
    <section id="about" className="relative py-24 bg-zinc-950 px-6 border-t border-zinc-900/60 select-none">
      {/* Visual background details */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* About Intro Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Summary */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 px-3 py-1.5 rounded-xl">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-cyan-300 tracking-wide uppercase">About Me</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Solving Business Problems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Modern Web Technology</span>
            </h2>
            
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              I am a dedicated software developer currently pursuing my <strong className="text-white">Bachelor in Computer Science at Iqra University (2022-2026)</strong>. I combine rigorous academic principles in software architecture with top-tier frontend engineering to deliver high-converting web applications.
            </p>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              My approach revolves around <span className="text-cyan-400 font-medium">performance</span>, <span className="text-cyan-400 font-medium">readability</span>, and <span className="text-cyan-400 font-medium">conversion</span>. I make sure every website operates perfectly at scale, loads fast, and clearly directs users toward your business objectives.
            </p>

            {/* Quick CTAs / Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 p-4 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl hover:border-zinc-700/80 transition-all">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/20 flex-shrink-0 text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">CS Student (Iqra University)</h4>
                  <p className="text-zinc-400 text-xs">Solid computer science foundations & scalable systems knowledge.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl hover:border-zinc-700/80 transition-all">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/20 flex-shrink-0 text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Web Development Freelancer</h4>
                  <p className="text-zinc-400 text-xs">Empowering local and international brands with modern sites.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Details / Timeline Display */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <div className="w-full max-w-md bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative z-10 hover:border-zinc-700 transition-all">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="p-2 bg-blue-500/10 border border-blue-400/20 rounded-xl text-blue-400 flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </span>
                Academic Foundation
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1 select-text">
                    <h4 className="text-base font-bold text-white">Bachelor in Computer Science</h4>
                    <span className="text-xs bg-blue-500/15 text-cyan-300 font-semibold px-2 py-1 rounded-lg border border-blue-400/20">2022-2026</span>
                  </div>
                  <p className="text-blue-400 text-sm font-medium mb-3">Iqra University</p>
                  <p className="text-zinc-400 text-xs sm:text-sm font-normal mb-4">
                    Coursework covers the full breadth of software engineering, system design, and algorithmic problem-solving:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-2 border-t border-zinc-800/80">
                  {coursework.map((course) => (
                    <div key={course} className="flex items-center space-x-2 text-zinc-300">
                      <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Focus & Value Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemSolvingFocus.map((item, index) => (
            <div 
              key={index} 
              className="group p-6 sm:p-8 bg-zinc-900/30 border border-zinc-800/80 hover:border-blue-500/40 hover:bg-zinc-800/30 rounded-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-cyan-400/5 via-blue-500/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-zinc-800/80 group-hover:text-blue-500/30 transition-colors">0{index + 1}</span>
                <MoveRight className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{item.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
