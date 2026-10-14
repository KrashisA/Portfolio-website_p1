import React from 'react';
import { CHANNELS } from '../data/channels';
import type { ChannelId } from '../types';

interface HeaderProps {
  activeChannel: ChannelId;
  onSelectChannel: (id: ChannelId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeChannel, onSelectChannel }) => {
  return (
    <header className="w-full flex items-center justify-between px-6 lg:px-20 py-4 border-b border-white/10 z-40 bg-[#0e0f12]/40 backdrop-blur-sm sticky top-0">
      {/* Brand / Logo */}
      <div className="flex items-center space-x-3">

        <span className="text-[20px] font-mono px-2 py-0.5 rounded bg-[#ff3030]/10 text-[#ff3030] border border-[#ff3030]/30">
          虎
        </span>

      </div>

      {/* Nav items matching the image style with superscripts */}
      <nav className="hidden md:flex items-center space-x-8">
        {CHANNELS.map((ch) => {
          const isActive = activeChannel === ch.id;
          return (
            <button
              key={ch.id}
              onClick={() => onSelectChannel(ch.id)}
              className={`text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer flex items-start space-x-0.5 ${isActive
                ? 'text-white border-b-2 border-[#ff3030] pb-1 font-semibold'
                : 'text-neutral-400 hover:text-white pb-1'
                }`}
            >
              <span>{ch.title}</span>
              <sup className="text-[9px] text-neutral-500">{ch.index}</sup>
            </button>
          );
        })}
      </nav>

      {/* Action CTA */}
      <div>
        <button
          onClick={() => onSelectChannel('contact')}
          className="text-xs font-mono tracking-widest text-white hover:text-[#ff3030] border-b border-white/40 hover:border-[#ff3030] pb-0.5 transition-colors cursor-pointer"
        >
          Start your project
        </button>
      </div>
    </header>
  );
};
