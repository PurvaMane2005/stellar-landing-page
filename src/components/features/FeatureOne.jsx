import React, { useState } from 'react';
import CircularGallery from './CircularGallery';
import BlurText from "./BlurText";

export default function FeatureOne() {
  const [showGallery, setShowGallery] = useState(false);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setShowGallery(true);
    }, 50);
  };

  return (
    <div className="w-full flex flex-col items-center bg-[#003C2F] text-white">
      <div className="my-20 text-center">
        <h1>
          <BlurText
            text="   Personal Space"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-5xl font-bold font-[\'Sora\'], sans-serif"
          />
        </h1>
      </div>

      {showGallery && (
        <div className="w-screen h-screen">
          <CircularGallery
            bend={1.5} // reduced from 3 for slower rotation
            textColor="#FFFFFF"
            borderRadius={0.05}
            font="bold 30px Sora"
          />
        </div>
      )}
    </div>
  );
}
