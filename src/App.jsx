import React from "react";
import Orb from "./components/Orb/Orb";
import SplitText from "./components/SplitText/SplitText"; // or './SplitText' if that's the filename
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity"; // or './
import CardSwap, { Card } from "./components/AIAgent/CardSwap"; // or './CardSwap' if that's the filename
const App = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="app-container">
      {/* <div className="orb-wrapper">
        <Orb 
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}/>
      </div> */}

      {/* <div style={{ marginTop: '40rem' }}>
            <ScrollVelocity
            texts={['React Bits', 'Scroll Down']} 
            velocity = {60} 
            className="custom-scroll-text"
          />
          </div> */}

      {/* <div>
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
          
        </div> */}

      <div style={{ height: "600px", position: "relative" }}>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
          skewAmount={6}
          width={900}
          height={700}
          easing="elastic"
        >
          <Card className="card">
            <h3
              style={{
                margin: "10px 0px 0px 10px",
                color: "white",
                textAlign: "left",
                paddingLeft: "20px",
                border: "2px solid white",
                height: "3rem",
                borderRadius: "10px",
                alignContent: "center",
                fontSize: "22px",
                fontFamily: "Figtree",
                fontWeight: "normal",
              }}
            >
              The all new and powerful
            </h3>
            <img
              src="https://integralwebsolution.com/wp-content/uploads/2020/03/custom-template-banner3.jpg"
              alt="Slide 1"
              style={{ width: "100%", margin: "20px", borderRadius: "10px" }}
            />
          </Card>

          <Card>
            <h3
              style={{
                margin: "10px 0px 0px 10px",
                color: "white",
                textAlign: "left",
                paddingLeft: "20px",
                border: "2px solid white",
                height: "3rem",
                borderRadius: "10px",
                alignContent: "center",
                fontSize: "22px",
                fontFamily: "Figtree",
                fontWeight: "normal",
              }}
            >
              Ultimate game changer
            </h3>
            <img
              src="https://assets.website-files.com/5c75b94c8dd1ae50d3b9294b/5d12756a077913dd4f464c83_n.png"
              alt="Slide 2"
              style={{ width: "100%", margin: "20px", borderRadius: "10px" }}
            />
          </Card>

          <Card>
            <h3
              style={{
                margin: "10px 0px 0px 10px",
                color: "white",
                textAlign: "left",
                paddingLeft: "20px",
                border: "2px solid white",
                height: "3rem",
                borderRadius: "10px",
                alignContent: "center",
                fontSize: "22px",
                fontFamily: "Figtree",
                fontWeight: "normal",
              }}
            >
              A tool that changes how you work
            </h3>
            <img
              src="https://freedesignresources.net/wp-content/uploads/2019/03/Web-Showcase-Mockup-Creator_Graphic-Gata_211017_prev01.jpg"
              alt="Kitten 3"
              style={{ width: "100%", margin: "20px", borderRadius: "10px" }}
            />
          </Card>
        </CardSwap>
      </div>
    </div>
  );
};

export default App;
