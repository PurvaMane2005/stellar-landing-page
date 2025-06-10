import React, { useState, useEffect } from 'react';
import BlurText from "./BlurText";
import ConstellationProgress from './ConstellationProgress';

export default function FeatureThree() {
  const [showGallery, setShowGallery] = useState(false);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setShowGallery(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/3">
          <h1>
            <BlurText
              text="   Progress Tracking"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl md:text-5xl font-bold"
            />
          </h1>
        </div>

        {showGallery && (
          <div className="md:w-2/3 w-full max-w-3xl h-[400px]">
            <ConstellationProgress />
          </div>
        )}
      </div>
    </div>
  );
}
