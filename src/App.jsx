// import React from "react";

// // Global visual effect
// import ClickSpark from "./components/ClickSpark";

// // Navigation
// import Navbar from "./components/Navbar/Navbar";

// // Hero Section
// import Orb from "./components/Orb/Orb";
// import SplitText from "./components/SplitText/SplitText";

// // Features
// import FeatureOne from "./components/features/FeatureOne";
// import FeatureTwo from "./components/features/FeatureTwo";
// import FeatureThree from "./components/features/FeatureThree";
// import CircularGallery from "./components/features/CircularGallery";
// import Carousel from "./components/features/Carousel";
// import ConstellationProgress from "./components/features/ConstellationProgress";
// import BlurText from "./components/features/BlurText";

// // Scroll Transition
// import ScrollVelocity from './components/ScrollVelocity/ScrollVelocity';

// // AI Agent Section
// import AIAgent from "./components/AIAgent/AIAgent";
// import CardSwap from './components/AIAgent/CardSwap';
// import TrueFocus from './components/AIAgent/TrueFocus';

// //Button
// import Button from "./components/Button/Button";
// import StarBorder from "./components/Button/StarBorder";


// //Moto
// import Moto from "./components/Moto/Moto";
// import DecryptedText from "./components/Moto/DecryptedText";

// //Feedback Form
// import Feedback from "./components/feedbackForm/FeedBack";
// import Stepper from "./components/feedbackForm/Stepper";


// // Footer
// import Footer from "./components/Footer/Footer";

// const App = () => {
//   const handleAnimationComplete = () => {
//     console.log("All letters have animated!");
//   };

//   return (
//     <div className="app-container">
//       <ClickSpark
//         sparkColor='#fff'
//         sparkSize={10}
//         sparkRadius={15}
//         sparkCount={8}
//         duration={400}
//       >

//         {/* Navbar */}
//         <Navbar />

//         {/* Hero Section */}
//         <section id="hero">
//           <Orb 
//           hoverIntensity={0.5}
//           rotateOnHover={true}
//           hue={0}
//           forceHoverState={false}/>

//           <SplitText 
//           text="Hello there!"
//           className="text-2xl font-semibold text-center"
//           delay={100}
//           duration={0.6}
//           ease="power3.out"
//           splitType="chars"
//           from={{ opacity: 0, y: 40 }}
//           to={{ opacity: 1, y: 0 }}
//           threshold={0.1}
//           rootMargin="-100px"
//           textAlign="center"
//           onLetterAnimationComplete={handleAnimationComplete} />
//         </section>

//         {/* Features Section */}
//         <section id="features">
//           {/* Feature One */}
//           <div className="feature-one">
//             <BlurText
//              text="Isn't this so cool?!"
//              delay={150}
//              animateBy="words"
//              direction="top"
//              onAnimationComplete={handleAnimationComplete}
//              className="text-2xl mb-8" />
//             <FeatureOne />
//             <div style={{ height: '600px', position: 'relative' }}>
//             <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
//             </div>
//           </div>

//           {/* Feature Two */}
//           <div className="feature-two">
//             <BlurText 
//              text="Isn't this so cool?!"
//              delay={150}
//              animateBy="words"
//              direction="top"
//              onAnimationComplete={handleAnimationComplete}
//              className="text-2xl mb-8" />
//             <FeatureTwo />
//             <div style={{ height: '600px', position: 'relative' }}>
//             <Carousel
//               baseWidth={300}
//               autoplay={true}
//               autoplayDelay={3000}
//               pauseOnHover={true}
//               loop={true}
//               round={false}
//             />
//             </div>
//            </div>

//           {/* Feature Three */}
//           <div className="feature-three">
//             <BlurText 
//              text="Isn't this so cool?!"
//              delay={150}
//              animateBy="words"
//              direction="top"
//              onAnimationComplete={handleAnimationComplete}
//              className="text-2xl mb-8"/>
//             <FeatureThree />
//             <ConstellationProgress />
//           </div>
//         </section>

//         {/* Scroll Velocity Animation */}
//         <ScrollVelocity
//       texts={['React Bits', 'Scroll Down']} 
//       velocity={velocity} 
//       className="custom-scroll-text"
//       />

//         {/* AI Agent Section */}
//         <section id="ai-agent">
//           <TrueFocus 
//           sentence="True Focus"
//           manualMode={false}
//           blurAmount={5}
//           borderColor="red"
//           animationDuration={2}
//           pauseBetweenAnimations={1}
//           />

//           <AIAgent />

//           <div style={{ height: '600px', position: 'relative' }}>
//           <CardSwap
//             cardDistance={60}
//             verticalDistance={70}
//             delay={5000}
//             pauseOnHover={false}
//            >
//           <Card>
//             <h3>Card 1</h3>
//             <p>Your content here</p>
//           </Card>
//           <Card>
//             <h3>Card 2</h3>
//             <p>Your content here</p>
//           </Card>
//           <Card>
//             <h3>Card 3</h3>
//             <p>Your content here</p>
//           </Card>
//         </CardSwap>
//       </div>
//         </section>

//          {/* Early Access Button */}
//          <section id="cta-button">
//           <Button />
//           <StarBorder
//           as="button"
//           className="custom-class"
//           color="cyan"
//           speed="5s"
//         >
//         Get early access to AI Agents
//         </StarBorder>
//         </section>


//         {/* Moto */}
//         <section id="moto" className="py-24 px-4 bg-gray-900 text-white text-center">
//        <div className="max-w-4xl mx-auto">
//       <DecryptedText
//       text="Empowering You Through Intelligence."
//       className="text-3xl font-semibold mb-10"
//       />
//      <Moto />
//       </div>
//       </section>

//            {/* Feedback Form */}
//            <section id="feedback">
//           <FeedBack />
//           <Stepper
//           initialStep={1}
//           onStepChange={(step) => {
//             console.log(step);
//           }}
//           onFinalStepCompleted={() => console.log("All steps completed!")}
//           backButtonText="Previous"
//           nextButtonText="Next"
//         >
//           <Step>
//             <h2>Welcome to the React Bits stepper!</h2>
//             <p>Check out the next step!</p>
//           </Step>
//           <Step>
//             <h2>Step 2</h2>
//             <img style={{ height: '100px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" />
//             <p>Custom step content!</p>
//           </Step>
//           <Step>
//             <h2>How about an input?</h2>
//             <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?" />
//           </Step>
//           <Step>
//             <h2>Final Step</h2>
//             <p>You made it!</p>
//           </Step>
//         </Stepper>
//         </section>


//         {/* Footer */}
//         <Footer />
//       </ClickSpark>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

// Global visual effect
import ClickSpark from "./components/ClickSpark";

// Navigation
import Navbar from "./components/Navbar/Navbar";

// Hero Section
import Orb from "./components/Orb/Orb";
import SplitText from "./components/SplitText/SplitText";

// Features
import FeatureOne from "./components/features/FeatureOne";
import FeatureTwo from "./components/features/FeatureTwo";
import FeatureThree from "./components/features/FeatureThree";
import CircularGallery from "./components/features/CircularGallery";
import Carousel from "./components/features/Carousel";
import ConstellationProgress from "./components/features/ConstellationProgress";
import BlurText from "./components/features/BlurText";

// Scroll Transition
import ScrollVelocity from './components/ScrollVelocity/ScrollVelocity';

// AI Agent Section
import AIAgent from "./components/AIAgent/AIAgent";
import CardSwap, { Card } from './components/AIAgent/CardSwap';
import TrueFocus from './components/AIAgent/TrueFocus';

// Button
import Button from "./components/Button/Button";
import StarBorder from "./components/Button/StarBorder";

// Moto
import Moto from "./components/Moto/Moto";
import DecryptedText from "./components/Moto/DecryptedText";

// Feedback Form
import FeedBack from "./components/feedbackForm/FeedBack";
import Stepper, { Step } from "./components/feedbackForm/Stepper";

// Footer
import Footer from "./components/Footer/Footer";

const App = () => {
  const [name, setName] = useState("");

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="app-container font-sans text-white bg-black overflow-x-hidden">
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Navbar />

        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex flex-col items-center justify-center px-4 text-center">
          <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
          <div className="z-10 relative">
            <SplitText
              text="Hello there!"
              className="text-4xl font-bold"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="space-y-32 px-4 py-20">
          {/* Feature One */}
          <div className="feature-one space-y-8">
            <BlurText text="Circular Gallery" delay={150} animateBy="words" direction="top" className="text-3xl mb-6" />
            <FeatureOne />
            <div className="relative h-[600px]">
              <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
            </div>
          </div>

          {/* Feature Two */}
          <div className="feature-two space-y-8">
            <BlurText text="Interactive Carousel" delay={150} animateBy="words" direction="top" className="text-3xl mb-6" />
            <FeatureTwo />
            <div className="relative h-[600px]">
              <Carousel baseWidth={300} autoplay={true} autoplayDelay={3000} pauseOnHover={true} loop={true} round={false} />
            </div>
          </div>

          {/* Feature Three */}
          <div className="feature-three space-y-8">
            <BlurText text="Live Progress" delay={150} animateBy="words" direction="top" className="text-3xl mb-6" />
            <FeatureThree />
            <ConstellationProgress />
          </div>
        </section>

        {/* Scroll Velocity */}
        <div className="py-20">
          <ScrollVelocity texts={['React Bits', 'Scroll Down']} velocity={0.5} className="text-3xl font-bold" />
        </div>

        {/* AI Agent Section */}
        <section id="ai-agent" className="space-y-12 py-20 px-4">
          <TrueFocus sentence="True Focus" manualMode={false} blurAmount={5} borderColor="red" animationDuration={2} pauseBetweenAnimations={1} />
          <AIAgent />
          <div className="relative h-[600px]">
            <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
              <Card><h3>Card 1</h3><p>Your content here</p></Card>
              <Card><h3>Card 2</h3><p>Your content here</p></Card>
              <Card><h3>Card 3</h3><p>Your content here</p></Card>
            </CardSwap>
          </div>
        </section>

        {/* CTA Button Section */}
        <section id="cta-button" className="py-16 px-4 text-center space-y-6">
          <Button />
          <StarBorder as="button" className="custom-class" color="cyan" speed="5s">
            Get early access to AI Agents
          </StarBorder>
        </section>

        {/* Moto Section */}
        <section id="moto" className="py-24 px-4 bg-gray-900 text-white text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <DecryptedText text="Empowering You Through Intelligence." className="text-3xl font-semibold" />
            <Moto />
          </div>
        </section>

        {/* Feedback Form */}
        <section id="feedback" className="py-20 px-4 space-y-8">
          <FeedBack />
          <Stepper
            initialStep={1}
            onStepChange={(step) => console.log(step)}
            onFinalStepCompleted={() => console.log("All steps completed!")}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step><h2>Welcome to the React Bits stepper!</h2><p>Check out the next step!</p></Step>
            <Step><h2>Step 2</h2><img className="h-[100px] w-full object-cover object-[center_-70px] rounded-[15px] mt-4" src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" alt="cat" /><p>Custom step content!</p></Step>
            <Step><h2>How about an input?</h2><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?" className="p-2 rounded text-black" /></Step>
            <Step><h2>Final Step</h2><p>You made it!</p></Step>
          </Stepper>
        </section>

        <Footer />
      </ClickSpark>
    </div>
  );
};

export default App;
