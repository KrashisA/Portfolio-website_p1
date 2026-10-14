import { useState, useRef, useCallback, lazy, Suspense } from 'react';
import { BackgroundWaves } from './components/BackgroundWaves';
import { ChannelStrip } from './components/ChannelStrip';
import { CursorDot } from './components/CursorDot';
import { Header } from './components/Header';
import { OverviewSection } from './components/OverviewSection';
import { CHANNELS } from './data/channels';
import type { ChannelId } from './types';

import tigerLogo from './assets/tiger_logo.svg';
import swipeSound from './assets/swipe-sound.mp3';

// Lazy load non-initial heavy sections for faster initial bundle parsing
const AboutSection = lazy(() => import('./components/AboutSection').then((m) => ({ default: m.AboutSection })));
const ProjectsSection = lazy(() => import('./components/ProjectsSection').then((m) => ({ default: m.ProjectsSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then((m) => ({ default: m.ContactSection })));

export function App() {
  const [activeChannel, setActiveChannel] = useState<ChannelId>('overview');
  const scrollTimeoutRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeIndex = CHANNELS.findIndex((c) => c.id === activeChannel);

  /** Play the swipe sound (lazy-instantiated) and switch channel */
  const navigateTo = useCallback((id: ChannelId) => {
    if (id === activeChannel) return;
    if (!audioRef.current) {
      audioRef.current = new Audio(swipeSound);
      audioRef.current.volume = 0.5;
    }
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play().catch(() => { }); // ignore browser autoplay policy errors
    setActiveChannel(id);
  }, [activeChannel]);

  // Handle horizontal mouse wheel & touchpad swipe navigation
  const handleWheel = (e: React.WheelEvent) => {
    if (scrollTimeoutRef.current) return;

    // Detect horizontal or vertical scroll intent
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

    if (Math.abs(delta) > 30) {
      if (delta > 0 && activeIndex < CHANNELS.length - 1) {
        navigateTo(CHANNELS[activeIndex + 1].id);
      } else if (delta < 0 && activeIndex > 0) {
        navigateTo(CHANNELS[activeIndex - 1].id);
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 500);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#0c0d0e] text-white flex flex-col overflow-hidden select-none relative selection:bg-[#ff3030] selection:text-white cursor-none">
      {/* Global cursor-following rec indicator dot */}
      <CursorDot />

      {/* Dynamic 3D Wave Landscape Background */}
      <BackgroundWaves />

      {/* Top Navigation Header Bar */}
      <Header activeChannel={activeChannel} onSelectChannel={setActiveChannel} />

      {/* Main Console Horizontal Accordion Layout */}
      <main
        onWheel={handleWheel}
        className="flex-1 flex flex-col md:flex-row w-full h-full overflow-hidden relative z-10"
      >
        {CHANNELS.map((channel) => {
          const isActive = activeChannel === channel.id;

          return (
            <section
              key={channel.id}
              className={`flex flex-col border-white/10 transition-all duration-300 ease-out relative border-b md:border-b-0 md:border-r ${isActive
                  ? 'flex-1 overflow-hidden bg-transparent md:h-full'
                  : 'h-14 w-full md:h-full md:w-14 lg:w-20 md:hover:w-[5rem] lg:hover:w-[6.25rem] shrink-0 bg-transparent'
                }`}
            >
              {isActive ? (
                /* Active Channel Expanded Content View */
                <div className="w-full h-full overflow-y-auto p-8 md:p-14 lg:p-20 flex flex-col justify-between">
                  <Suspense fallback={<div className="text-neutral-500 font-mono text-xs animate-pulse">Loading channel content...</div>}>
                    {channel.id === 'overview' && (
                      <OverviewSection onNavigate={setActiveChannel} />
                    )}
                    {channel.id === 'about' && <AboutSection />}
                    {channel.id === 'projects' && <ProjectsSection />}
                    {channel.id === 'contact' && <ContactSection />}
                  </Suspense>
                </div>
              ) : (
                /* Collapsed Vertical Channel Strip View (Positioned on Left or Right) */
                <ChannelStrip
                  channel={channel}
                  onClick={() => navigateTo(channel.id)}
                />
              )}
            </section>
          );
        })}
      </main>

      {/* Bottom Console Footer */}
      <footer className="w-full border-t border-white/5 py-3 px-8 text-[11px] font-mono text-neutral-600 flex items-center z-10 shrink-0 bg-[#0c0d0e] md:justify-between">
        {/* Logo — left on mobile, center on desktop */}
        <img
          src={tigerLogo}
          alt="Krashis Adhikari logo"
          className="h-10 w-auto order-1 md:order-2"
          style={{ filter: 'brightness(0) invert(1)', opacity: 0.35 }}
        />

        {/* Mobile: both texts stacked to the right of the logo */}
        <div className="flex flex-col ml-4 md:hidden order-2">
          <span>FLUTTER DEVELOPER — CH 0{activeIndex}</span>
          <span>KRASHIS ADHIKARI 2000</span>
        </div>

        {/* Desktop: original separate text elements */}
        <div className="hidden md:block order-1">
          <span>FLUTTER DEVELOPER — CH 0{activeIndex}</span>
        </div>
        <div className="hidden md:block order-3">
          <span>KRASHIS ADHIKARI 2000</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
