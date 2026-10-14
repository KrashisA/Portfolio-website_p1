import React, { useState, useEffect } from 'react';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import instagramIcon from '../assets/instagram.svg';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    brief: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Brief from ${formData.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nBrief:\n${formData.brief}`
    );
    window.location.href = `mailto:krashisadhikari@gmail.com?subject=${subject}&body=${body}`;
  };

  // Live local clock
  const [localTime, setLocalTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setLocalTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const hours = localTime.getHours() % 12 || 12;
  const minutes = String(localTime.getMinutes()).padStart(2, '0');
  const ampm = localTime.getHours() >= 12 ? 'PM' : 'AM';

  return (
    <div className="w-full max-w-4xl text-left font-mono">
      <p className="text-xs text-neutral-400 tracking-widest mb-3">
        ( CH 03 — Contact, let's build your next mobile app )
      </p>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-white tracking-tight mb-6">
        Tell me about your <span className="text-[#ff3030]">App</span>
      </h1>

      <p className="text-sm text-neutral-400 max-w-xl leading-relaxed mb-10 font-sans">
        Looking for a high-performance Flutter mobile application, cross-platform architecture, or app consultation? Let's discuss your project vision.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form — left column */}
        <form onSubmit={handleSubmit} className="space-y-6 text-xs tracking-wider">

          {/* Reply-time indicator */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500">
            <div className="flex gap-1 items-center">
              <span className="w-1 h-1 rounded-full bg-[#ff3030] [animation:dot-flow_1s_ease-in-out_infinite] [animation-delay:0ms]" />
              <span className="w-1 h-1 rounded-full bg-[#ff3030] [animation:dot-flow_1.2s_ease-in-out_infinite] [animation-delay:200ms]" />
              <span className="w-1 h-1 rounded-full bg-[#ff3030] [animation:dot-flow_1s_ease-in-out_infinite] [animation-delay:400ms]" />
            </div>
            <span>Average reply within 24 hours</span>
          </div>

          <div>
            <label className="block text-[10px] text-neutral-500 uppercase mb-2">FULL NAME</label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-transparent border-b border-neutral-700 focus:border-[#ff3030] focus:ring-0 focus:outline-none py-2 text-xs text-white transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-[10px] text-neutral-500 uppercase mb-2">EMAIL</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-b border-neutral-700 focus:border-[#ff3030] focus:ring-0 focus:outline-none py-2 text-xs text-white transition-colors"
              placeholder="your.email@domain.com"
            />
          </div>

          <div>
            <label className="block text-[10px] text-neutral-500 uppercase mb-2">YOUR BRIEF / REQUIREMENTS</label>
            <textarea
              rows={3}
              value={formData.brief}
              onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
              className="w-full bg-transparent border-b border-neutral-700 focus:border-[#ff3030] focus:ring-0 focus:outline-none py-2 text-xs text-white transition-colors resize-none"
              placeholder="Tell me about app features, target platforms, timeline..."
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="px-3 py-2 md:px-6 md:py-3 bg-[#ff3030] hover:bg-[#e02828] text-white text-xs font-mono tracking-widest rounded transition-colors cursor-pointer"
            >
              Send your brief ➟
            </button>
          </div>
        </form>

        {/* Direct Email + Connect & Socials — right column */}
        <div className="space-y-8">
          <div>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">
              Direct Email
            </span>
            <a
              href="mailto:krashisadhikari@gmail.com"
              className="text-l md:text-l font-semibold text-white hover:text-[#ff3030] transition-colors underline decoration-neutral-700 underline-offset-4"
            >
              [krashisadhikari@gmail.com]
            </a>
          </div>

          {/* Local Time */}
          <div className="pt-6 border-t border-white/10">
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-3">
              Local Time
            </span>
            <div className="flex items-baseline space-x-1">
              <span className="text-l font-bold text-white tabular-nums tracking-tight">
                {hours}
              </span>
              <span className="text-l font-bold text-neutral-500 tabular-nums">&nbsp;:&nbsp;</span>
              <span className="text-l font-bold text-white tabular-nums tracking-tight">
                {minutes}
              </span>
              <span className="text-[11px] font-mono text-neutral-500 ml-2 uppercase">{ampm}</span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-4">
              Connect &amp; Channels
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs tracking-wider">
              {/* GitHub */}
              <a
                href="https://github.com/KrashisA"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2.5 px-3 py-2.5 rounded border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#ff3030]/50 hover:text-white text-neutral-300 transition-all font-mono text-[11px] group cursor-pointer"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="w-4 h-4 brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:[filter:invert(27%)_sepia(91%)_saturate(6062%)_hue-rotate(352deg)_brightness(104%)_contrast(102%)] transition-all"
                />
                <span>GITHUB</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/krashis-adhikari-8b473a19a/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2.5 px-3 py-2.5 rounded border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#ff3030]/50 hover:text-white text-neutral-300 transition-all font-mono text-[11px] group cursor-pointer"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-4 h-4 brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:[filter:invert(27%)_sepia(91%)_saturate(6062%)_hue-rotate(352deg)_brightness(104%)_contrast(102%)] transition-all"
                />
                <span>LINKEDIN</span>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com/AdhikariKrashis"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2.5 px-3 py-2.5 rounded border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#ff3030]/50 hover:text-white text-neutral-300 transition-all font-mono text-[11px] group cursor-pointer"
              >
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-[#ff3030] transition-colors fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>TWITTER / X</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/krashis_adhikari/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2.5 px-3 py-2.5 rounded border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#ff3030]/50 hover:text-white text-neutral-300 transition-all font-mono text-[11px] group cursor-pointer"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-4 h-4 brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:[filter:invert(27%)_sepia(91%)_saturate(6062%)_hue-rotate(352deg)_brightness(104%)_contrast(102%)] transition-all"
                />
                <span>INSTAGRAM</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
