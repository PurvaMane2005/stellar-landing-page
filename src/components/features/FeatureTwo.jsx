import React, { useState, useEffect } from 'react';
import BlurText from "./BlurText";
import Carousel from './Carousel'

export default function FeatureTwo() {
  const [showGallery, setShowGallery] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
    // Wait for 500ms after text animation completes
    setTimeout(() => {
      setShowGallery(true);
    }, 500);
  };

  return (
    <div>
      <h1>
        <BlurText
          text="   Blogs & Articles"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-5xl font-bold mb-"
        />
      </h1>
      
      {showGallery && (
        <div style={{
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Carousel
            baseWidth={300}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      )}
      
    </div>
  );
}