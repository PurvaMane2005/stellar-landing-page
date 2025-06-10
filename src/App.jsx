import React from "react";
import Orb from "./components/Orb/Orb";
import SplitText from "./components/SplitText/SplitText"; // or './SplitText' if that's the filename

import ScrollVelocity from './components/ScrollVelocity/ScrollVelocity'; // or './
import CardSwap, { Card } from './components/AIAgent/CardSwap'; // or './CardSwap' if that's the filename
import Feature from "./components/features/Feature";
import ClickSpark from "./components/ClickSpark";
import TrueFocus from "./components/AIAgent/TrueFocus";
import AIAgent from "./components/AIAgent/AIAgent";



const App = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="app-container">
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >

        <Feature/>

        <AIAgent/>
        
      </ClickSpark >
    </div>
  );
};

export default App;
