import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-zinc-950 px-6 border-t border-zinc-900/60 select-none">
      {/* Background visual lighting */}
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column info & direct contact links */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 px-3 py-1.5 rounded-xl backdrop-blur-sm">
            <MessageCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-300 tracking-wide uppercase">Let's Connect</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Incredible?</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed font-normal">
            I'm currently accepting new freelance projects and full-time software engineering roles. Reach out and let's work together to boost your brand.
          </p>

          <div className="space-y-4 pt-4 select-text">
            {/* Direct Phone */}
            <div className="flex items-center space-x-4 p-3.5 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl hover:border-zinc-700/80 transition-all">
              <div className="p-3 bg-blue-500/10 border border-blue-400/20 rounded-xl text-blue-400 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-zinc-500 tracking-wider uppercase mb-0.5">Direct Line</span>
                <a href="tel:+923222970998" className="text-white hover:text-cyan-300 font-bold text-base transition-colors">
                  +92 322 2970998
                </a>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-center space-x-4 p-3.5 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl hover:border-zinc-700/80 transition-all">
              <div className="p-3 bg-blue-500/10 border border-blue-400/20 rounded-xl text-blue-400 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-zinc-500 tracking-wider uppercase mb-0.5">Send an Email</span>
                <a href="mailto:shaharyar.khan444@gmail.com" className="text-white hover:text-cyan-300 font-bold text-base transition-colors break-all">
                  shaharyar.khan444@gmail.com
                </a>
              </div>
            </div>

            {/* Code Repos Link */}
            <div className="flex items-center space-x-4 p-3.5 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl hover:border-zinc-700/80 transition-all">
              <div className="p-3 bg-blue-500/10 border border-blue-400/20 rounded-xl text-blue-400 flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-zinc-500 tracking-wider uppercase mb-0.5">Code Repositories</span>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white hover:text-cyan-300 font-bold text-base transition-colors">
                  github.com/Shaharyar
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 p-3.5 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl hover:border-zinc-700/80 transition-all">
              <div className="p-3 bg-blue-500/10 border border-blue-400/20 rounded-xl text-blue-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-zinc-500 tracking-wider uppercase mb-0.5">Location</span>
                <p className="text-white font-bold text-base">Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column Form Display */}
        <div className="lg:col-span-7 select-text">
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden h-full flex flex-col justify-between">
            <h3 className="text-xl font-bold text-white mb-6">
              Send me a direct message
            </h3>

            {submitted ? (
              <div className="flex-1 flex flex-col items-center justify-center bg-blue-500/5 border border-blue-400/20 rounded-2xl p-6 sm:p-10 space-y-3 text-center my-4 animate-fade-in transition-all">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Send className="w-6 h-6 animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white">Message successfully sent!</h4>
                <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">
                  Thank you, Shaharyar will receive your details and get back to you immediately.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-zinc-300">Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-zinc-300">Email address</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-zinc-300">Tell me about your project</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Describe your goals, requirements, timeline, etc."
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-400/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* High Contrast CTA Form Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-6 py-3.5 rounded-xl text-base shadow-lg shadow-blue-500/15 transition-all hover:shadow-blue-500/25 active:scale-95 border border-blue-400/20"
                >
                  <span>Submit Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
