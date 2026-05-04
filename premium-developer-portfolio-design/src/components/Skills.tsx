import { Terminal, Layout, Database, Layers } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Programming Languages',
      icon: <Terminal className="w-5 h-5 text-blue-400" />,
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'C++', level: 80 }
      ]
    },
    {
      title: 'Frontend & Web Development',
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Tailwind CSS', level: 98 },
        { name: 'HTML5', level: 98 },
        { name: 'CSS3', level: 95 }
      ]
    },
    {
      title: 'Databases & Backend',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      skills: [
        { name: 'SQL / Relational DB', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Node.js', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-zinc-950 px-6 border-t border-zinc-900/60 select-none">
      {/* Background soft lighting */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 px-3 py-1.5 rounded-xl select-none backdrop-blur-sm">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-300 tracking-wide uppercase">Engineering Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Technical Skills</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-xl">
            Clean, modern codebases designed for scalability, mobile accessibility, and enterprise business growth.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="p-6 sm:p-8 bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-800/30 rounded-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden h-full"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/20 flex-shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Individual Skill List */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-300 font-medium">{skill.name}</span>
                        <span className="text-xs bg-zinc-800 text-cyan-300 font-bold px-1.5 py-0.5 rounded border border-zinc-700">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Realistic Progress Level Bar */}
                      <div className="w-full h-1.5 bg-zinc-800/80 rounded-full overflow-hidden flex">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
