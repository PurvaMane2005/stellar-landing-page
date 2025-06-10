// src/App.jsx
import React, { useState } from "react";
import Orb from "./components/Orb/Orb";
import SplitText from "./components/SplitText/SplitText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import Feature from "./components/features/Feature";
import ClickSpark from "./components/ClickSpark";
import Moto from "./components/Moto/Moto";
import AIAgent from "./components/AIAgent/AIAgent";
import Button from "./components/Button/Button";
import FeedBack from "./components/feedbackForm/FeedBack";
import EarlyAccess from "./components/EarlyAccess/EarlyAccess";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="app-container">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Optional features */}
        {/* <Feature /> */}
        <Button onClick={() => setShowForm(true)} />
        {/* <Moto />
        <FeedBack />
        <Orb />
        <SplitText />
        <ScrollVelocity /> */}
      </ClickSpark>

      {/* Modal form for early access */}
      <EarlyAccess isOpen={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
};

export default App;
