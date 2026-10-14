import React, { useEffect, useRef } from 'react';
import faceMaskImg from '../assets/hero_transparent.png';

export const FaceSculpture: React.FC = () => {
  // --- Grain animation refs ---
  const grainTurbRef = useRef<SVGFETurbulenceElement | null>(null);
  const grainAnimRef = useRef<number>(0);

  // --- Displacement (particle shatter) refs ---
  const dispTurbRef = useRef<SVGFETurbulenceElement | null>(null);
  const dispScaleRef = useRef<SVGFEDisplacementMapElement | null>(null);
  const dispAnimRef = useRef<number>(0);
  const currentScale = useRef(0);
  const isHoveredRef = useRef(false);

  // Animate grain seed — keeps big constant grain ticking
  useEffect(() => {
    let seed = 0;
    const tick = () => {
      seed = (seed + 1) % 999;
      grainTurbRef.current?.setAttribute('seed', String(seed));
      grainAnimRef.current = requestAnimationFrame(tick);
    };
    grainAnimRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(grainAnimRef.current);
  }, []);

  // Animate displacement scale — lerps toward target on hover
  useEffect(() => {
    let step = 0;
    let dispSeed = 0;
    const tick = () => {
      step++;
      dispSeed = (dispSeed + 5) % 999;
      const target = isHoveredRef.current ? 10 : 140;
      const diff = target - currentScale.current;
      currentScale.current += diff * 0.09;

      if (dispScaleRef.current) {
        dispScaleRef.current.setAttribute('scale', String(Math.round(currentScale.current * 100) / 100));
      }
      if (dispTurbRef.current) {
        dispTurbRef.current.setAttribute('seed', String(dispSeed));
        const freq = isHoveredRef.current
          ? 0.06 + Math.sin(step * 0.09) * 0.015
          : 0.04;
        dispTurbRef.current.setAttribute('baseFrequency', String(freq));
      }

      dispAnimRef.current = requestAnimationFrame(tick);
    };
    dispAnimRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(dispAnimRef.current);
  }, []);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };
  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  return (
    <div className="flex flex-col items-start relative select-none">
      {/* Hidden SVG Filters */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          {/* Grain filter — big constant grain */}
          <filter id="grainFilter" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="linearRGB">
            <feTurbulence
              ref={grainTurbRef}
              type="fractalNoise"
              baseFrequency="0.15 0.15"
              numOctaves="3"
              seed="0"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>

          {/* Displacement filter — particle shatter on hover */}
          <filter id="dispFilter" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            <feTurbulence
              ref={dispTurbRef}
              type="turbulence"
              baseFrequency="0.04"
              numOctaves="5"
              seed="0"
              stitchTiles="noStitch"
              result="turbulence"
            />
            <feDisplacementMap
              ref={dispScaleRef}
              in="SourceGraphic"
              in2="turbulence"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="relative w-80 sm:w-96 md:w-[420px] lg:w-[480px] h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-right overflow-hidden rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Subtle Ambient Back Glow */}
        <div className="absolute inset-0 rounded-full bg-[#ff3030]/[0.03] blur-3xl pointer-events-none" />

        {/* 3D Face Mask Image — displacement filter applied for particle shatter */}
        <img
          src={faceMaskImg}
          alt="face mask"
          className="relative z-10 w-full h-full object-contain brightness-95 contrast-135"
          style={{ filter: 'url(#dispFilter) drop-shadow(0 8px 16px rgba(0,0,0,0.5))' }}
          loading="eager"
        />

        {/* Crisp CRT Scanline Pattern */}
        {/* <div className="absolute inset-0 z-20 pointer-events-none opacity-45 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.75)_50%)] bg-[size:100%_4px]" /> */}


        <svg
          className="absolute inset-0 w-full h-full z-30 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ mixBlendMode: 'soft-light' }}
        >

        </svg>
      </div>
    </div>
  );
};
