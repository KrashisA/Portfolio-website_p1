import React from 'react';
import { FaceSculpture } from './FaceSculpture';

export const AboutSection: React.FC = () => {
  return (
    <div className="w-full max-w-5xl text-left font-mono">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Subtitle, Title, Intro Paragraph, and Details Table */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Top Tag Subtitle */}
          <span className="text-xs md:text-sm font-mono text-neutral-400 tracking-wide block mb-3">
            ( CH 02 — About Me)
          </span>

          {/* Main Bold Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-white tracking-wider mb-6">
            Namaste!
          </h1>

          {/* Paragraph text */}
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-10 font-sans">
            Krashis Adhikari, Mobile Application Engineer specializing in high-performance Flutter and Dart architectures. Dedicated to designing seamless user experiences, custom native integrations, and robust state management for cross-platform iOS and Android applications.
          </p>
          {/* Grid Specs */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6 border-y border-white/10 mb-10 text-xs">
            <div>
              <span className="sm:col-span-4 text-neutral-500 tracking-[0.2em] uppercase font-mono text-[11px] uppercase block mb-1">PRIMARY FRAMEWORK</span>
              <span className="text-white font-semibold">Flutter / Dart</span>
            </div>
            <div>
              <span className="sm:col-span-4 text-neutral-500 tracking-[0.2em] uppercase font-mono text-[11px] uppercase block mb-1">STATE MANAGEMENT</span>
              <span className="text-white font-semibold">Riverpod / BLoC</span>
            </div>
            <div>
              <span className="sm:col-span-4 text-neutral-500 tracking-[0.2em] uppercase font-mono text-[11px] uppercase block mb-1">PLATFORMS</span>
              <span className="text-white font-semibold">iOS & Android</span>
            </div>
            <div>
              <span className="sm:col-span-4 text-neutral-500 tracking-[0.2em] uppercase font-mono text-[11px] uppercase block mb-1">SECONDARY FRAMEWORK</span>
              <span className="text-white font-semibold">Vite / React Native / JS</span>
            </div>
            <div>
              <span className="sm:col-span-4 text-neutral-500 tracking-[0.2em] uppercase font-mono text-[11px] uppercase block mb-1">ARCHITECTURE</span>
              <span className="text-white font-semibold">Clean Architecture</span>
            </div>

          </div>



        </div>

        {/* Right Column: 3D Face Mask at Top Right */}
        <div className="lg:col-span-5 flex justify-right lg:justify-end">
          <FaceSculpture />
        </div>
      </div>
    </div>
  );
};
