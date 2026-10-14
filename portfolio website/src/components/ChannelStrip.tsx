import React, { useState } from 'react';
import type { ChannelMeta } from '../types';
import { VUMeter } from './VUMeter';

interface ChannelStripProps {
  channel: ChannelMeta;
  onClick: () => void;
}

export const ChannelStrip: React.FC<ChannelStripProps> = ({
  channel,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="strip-view flex flex-row md:flex-col justify-between py-3 md:py-8 px-5 md:px-0 items-center h-full w-full cursor-none hover:bg-white/[0.04] transition-colors relative select-none"
      title={`Switch to ${channel.code} — ${channel.title}`}
    >
      {/* Channel Code — left on mobile, top on desktop */}
      <span className="text-[10px] lg:text-[11px] font-mono tracking-widest text-neutral-400 hover:text-white transition-colors">
        {channel.code}
      </span>

      {/* Vertical Equalizer Bargraph — hidden on mobile */}
      <div className="hidden md:flex">
        <VUMeter baseline={channel.baselineMeter} isHovered={isHovered} />
      </div>

      {/* Label — plain on mobile, rotated on desktop */}
      <span className="text-[11px] font-mono tracking-[0.28em] text-neutral-400 hover:text-white uppercase transition-colors md:[writing-mode:vertical-lr]">
        {channel.label}
      </span>
    </div>
  );
};
