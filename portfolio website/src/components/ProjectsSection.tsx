import React from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'wipray',
    title: 'WiPray Mobile',
    category: 'Flutter / Cross-Platform Mobile App',
    description: 'A comprehensive spiritual companion application built with Flutter, featuring localized prayer timings, push notifications, and customizable UI themes.',
    tech: ['Flutter', 'Dart', 'Provider', 'SQLite', 'REST API'],
    link: 'https://play.google.com/store/apps/details?id=com.wipray.mobile&pcampaignid=web_share',
  },
  {
    id: 'wepreach',
    title: 'WePreach',
    category: 'Flutter / Cross-Platform Mobile App',
    description: 'High-performance Flutter application with interactive video carousels, offline caching and many more features.',
    tech: ['Flutter', 'Riverpod', 'Firebase', 'Api Integration'],
    link: '',
  },

];

export const ProjectsSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl text-left font-mono">
      <p className="text-xs text-neutral-400 tracking-widest mb-3">
        ( CH 01 — Featured Mobile Applications)
      </p>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-white tracking-wider mb-6">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            className="p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <span className="text-[10px] text-[#ff3030] font-mono tracking-widest uppercase block mb-1">
                    0{idx + 1} — {project.category}
                  </span>
                  <h3 className="text-l font-sans font-bold text-white group-hover:text-[#ff3030] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-sans text-neutral-300 leading-relaxed my-3">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
