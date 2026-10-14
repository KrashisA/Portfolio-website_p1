import React from 'react';

export const OverviewSection: React.FC<{ onNavigate: (channelId: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-4xl text-left font-mono">
      <p className="text-xs text-neutral-400 tracking-widest mb-3">
        ( CH 00 — Overview, Cross-Platform Mobile Engineer )
      </p>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-white tracking-wider mb-6">
        THEE Mobile App Developer
      </h1>
      <h2 >

      </h2>

      <p className="text-base text-neutral-300 max-w-2xl leading-relaxed mb-8 font-sans">
        Specializing in crafting pixel-perfect, high-performance, cross-platform, clean structure applications and a CMS your team can update on their own.      </p>

      <div className="flex space-x-6">
        <button
          onClick={() => onNavigate('projects')}
          className="px-3 py-2 md:px-6 md:py-3 bg-[#ff3030] hover:bg-[#e02828] text-white text-xs font-mono tracking-widest rounded transition-colors"
        >
          VIEW MY WORK ➟
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className="px-3 py-2 md:px-6 md:py-3 border border-white/20 hover:border-white text-neutral-300 hover:text-white text-xs font-mono tracking-widest rounded transition-colors"
        >
          CONTACT ME
        </button>
      </div>
    </div>
  );
};
