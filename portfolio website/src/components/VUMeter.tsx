import React, { useEffect, useState } from 'react';

interface VUMeterProps {
  baseline: number; // 0 to 10
  isHovered?: boolean;
}

export const VUMeter: React.FC<VUMeterProps> = ({ baseline, isHovered = false }) => {
  const [activeSegments, setActiveSegments] = useState<number>(baseline);

  useEffect(() => {
    const interval = setInterval(() => {
      // Natural jitter around baseline
      const jitter = (Math.random() > 0.45 ? 1 : 0) - (Math.random() > 0.65 ? 1 : 0);
      const boost = isHovered ? 2 : 0;
      const count = Math.max(1, Math.min(10, baseline + jitter + boost));
      setActiveSegments(count);
    }, 360 + Math.random() * 80);

    return () => clearInterval(interval);
  }, [baseline, isHovered]);

  const totalSegments = 10;

  return (
    <div className="channel-meter flex flex-col-reverse items-center my-auto py-4 select-none">
      {Array.from({ length: totalSegments }).map((_, idx) => {
        let segClass = 'meter-segment';
        if (idx < activeSegments - 1) {
          segClass += ' lit';
        } else if (idx === activeSegments - 1) {
          segClass += ' lit-dim';
        } else if (idx === 9 && activeSegments === 10) {
          segClass += ' lit-red';
        }

        return <div key={idx} className={segClass} />;
      })}
    </div>
  );
};
