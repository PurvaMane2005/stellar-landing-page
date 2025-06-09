import React from "react";
import Orb from "./components/Orb";
import SplitText from "./components/SplitText"; // or './SplitText' if that's the filename

const App = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="app-container">
      <div className="orb-wrapper">
        <Orb 
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}/>
      </div>
      <div>
          <SplitText
            text="Hello, world!"
            className="text-2xl font-semibold"
            delay={10}
            duration={2}
            ease="bounce.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
    </div>
  );
};

export default App;
