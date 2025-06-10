import React from "react";
import Orb from "./components/Orb/Orb";
import SplitText from "./components/SplitText/SplitText"; // or './SplitText' if that's the filename

import ScrollVelocity from './components/ScrollVelocity/ScrollVelocity'; // or './

import Feature from "./components/features/Feature";
import ClickSpark from "./components/ClickSpark";
import Moto from "./components/Moto/Moto";
import AIAgent from "./components/AIAgent/AIAgent";
import Button from "./components/Button/Button";
import FeedBack from "./components/feedbackForm/FeedBack";



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

     

        <Button/>

        <Moto/>
        <FeedBack/>
        
      </ClickSpark >
    </div>
  );
};

export default App;
