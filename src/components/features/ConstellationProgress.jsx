import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stars = [
  { x: 50, y: 100 },
  { x: 150, y: 80 },
  { x: 250, y: 130 },
  { x: 350, y: 90 },
  { x: 450, y: 150 },
  { x: 550, y: 120 },
];

export default function ConstellationProgress() {
  const svgRef = useRef(null);
  const isInView = useInView(svgRef, { once: true, margin: '-100px' });

  const fullPath = stars.map((s, i) => `${i === 0 ? 'M' : 'L'} ${s.x},${s.y}`).join(' ');
  const progressPath = stars.slice(0, 5).map((s, i) => `${i === 0 ? 'M' : 'L'} ${s.x},${s.y}`).join(' ');

  return (
    <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
      <svg ref={svgRef} width="600" height="200" viewBox="-150 0 600 200" >
        {/* Faint base line */}
        <path d={fullPath} stroke="white" strokeOpacity="0.2" fill="none" strokeWidth="1" />

        {/* Stars */}
        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r="4" fill="white" />
        ))}

        {/* Progress animated line */}
        {isInView && (
          <motion.path
            d={progressPath}
            stroke="#ffffff"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        )}
      </svg>

      
    </div>
  );
}
