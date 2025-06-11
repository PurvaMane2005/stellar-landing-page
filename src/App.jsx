

//nikhar orb
import React,{ useState,useEffect } from "react";
import { motion,AnimatePresence } from "framer-motion";

// Global visual effect

// src/App.jsx

import Orb from "./components/Orb/Orb";
import SplitText from "./components/SplitText/SplitText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import Feature from "./components/features/Feature";
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
import CardSwap,{ Card } from './components/AIAgent/CardSwap';
import TrueFocus from './components/AIAgent/TrueFocus';
// Button
import Button from "./components/Button/Button";
import StarBorder from "./components/Button/StarBorder";

// Moto
import Moto from "./components/Moto/Moto";
import DecryptedText from "./components/Moto/DecryptedText";

// Feedback Form
import FeedBack from "./components/feedbackForm/FeedBack";
import Stepper,{ Step } from "./components/feedbackForm/Stepper";

// Footer
import Footer from "./components/Footer/Footer";
import FeedBack from "./components/feedbackForm/FeedBack";
import EarlyAccess from "./components/EarlyAccess/EarlyAccess";
  
const App = () => {
  const [name,setName] = useState("");
  const [showContent,setShowContent] = useState(false);
  const [initialOrbAnimation,setInitialOrbAnimation] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Start showing content after 5 seconds
    const timer = setTimeout(() => {
      setInitialOrbAnimation(false);
      setShowContent(true);
    },5000);

    return () => clearTimeout(timer);
  },[]);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="app-container font-sans text-white bg-black overflow-x-hidden">
      <AnimatePresence mode="wait">
        {initialOrbAnimation ? (<motion.div
          key="initial-orb"
          className="fixed inset-0 z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={true}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1,duration: 1 }}
            >
              <SplitText
                text="Hello there!"
                className="text-4xl font-bold"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0,y: 40 }}
                to={{ opacity: 1,y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </motion.div>
          </div>
        </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
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
                <motion.div
                  initial={{ scale: 1.5,y: -100 }}
                  animate={{ scale: 1,y: 0 }}
                  transition={{ duration: 1,ease: "easeOut" }}
                  className="relative"
                >

                </motion.div>
              </section>

              {/* Features Section */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1,delay: 1 }}
                id="features"
                className="space-y-32 px-4 py-20"
              >
                {/* Feature One */}
                <div className="feature-one space-y-8">
                  
                  <FeatureOne />
                </div>

                {/* Feature Two */}
                <div className="feature-two space-y-8">
                  
                  <FeatureTwo />
                </div>

                {/* Feature Three */}
                <div className="feature-three space-y-8">
                  
                  <FeatureThree />
                </div>
              </motion.section>

              {/* Scroll Velocity */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1,delay: 1.2 }}
                className="py-20"
              >
                <ScrollVelocity texts={['React Bits','Scroll Down']} velocity={0.3} className="text-3xl font-bold" />
              </motion.div>

              {/* AI Agent Section */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1,delay: 1.4 }}
                id="ai-agent"
                className="space-y-12 py-20 px-4"
              >
                
                <AIAgent />
                <div className="relative h-[600px]">
                  <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
                  </CardSwap>
                </div>
              </motion.section>

              {/* Rest of the sections with motion animations */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1,delay: 1.6 }}
              >
                {/* CTA Button Section */}
                <section id="cta-button" className="py-16 px-4 text-center space-y-6">
                  <Button />
                </section>

                {/* Moto Section */}
                <section id="moto" className="py-24 px-4 bg-gray-900 text-white text-center">
                  <div className="max-w-4xl mx-auto space-y-6">
                    <Moto />
                  </div>
                </section>

                {/* Feedback Form */}
                <section id="feedback" className="py-20 px-4 space-y-8">
                  <FeedBack />
                  
                </section>

                <Footer />
              </motion.div>
            </ClickSpark>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
