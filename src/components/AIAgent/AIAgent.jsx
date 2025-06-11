import React from 'react';
import TrueFocus from './TrueFocus';
import CardSwap,{ Card } from './CardSwap';
import Button from '../Button/Button';
import './AIAgent.css';

const AIAgent = () => {
  return (
    <div className="page-wrapper">
      <div className="content-container">
        {/* Left side */}
        <div className="left-section">
          <TrueFocus
            sentence="AI Agent"
            manualMode={false}
            blurAmount={5}
            borderColor="blue"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <section id="cta-button" className="py-16 px-4 text-center space-y-6">
            <Button />
          </section>
        </div>

        {/* Right side */}
        <div className="right-section">
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
            <Card>
              <h3 className="heading">Slide 1</h3>
              <img
                src="https://integralwebsolution.com/wp-content/uploads/2020/03/custom-template-banner3.jpg"
                alt="Slide 1"
                className="image"
              />
            </Card>

            <Card>
              <h3 className="heading">Slide 2</h3>
              <img
                src="https://assets.website-files.com/5c75b94c8dd1ae50d3b9294b/5d12756a077913dd4f464c83_n.png"
                alt="Slide 2"
                className="image"
              />
            </Card>


            <Card>
              <h3 className="heading">Slide 3</h3>
              <img
                src="https://freedesignresources.net/wp-content/uploads/2019/03/Web-Showcase-Mockup-Creator_Graphic-Gata_211017_prev01.jpg"
                alt="Slide 3"
                className="image"
              />
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
    
  );
};


const styles = {
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4rem 1rem',
    overflowX: 'hidden',
    background: '#000',
    color: '#fff',
  },
  cardSection: {
    marginTop: '3rem',
    width: '100%',
    maxWidth: '1000px',
    overflow: 'auto',
    paddingBottom: '5rem',
    display: 'flex',
  justifyContent: 'flex-end',
  },
  heading: {
    margin: "10px",
    color: "white",
    textAlign: "left",
    paddingLeft: "10px",
  },
  image: {
    width: "100%",
    padding: "10px",
    borderRadius: "12px",
  },
};


export default AIAgent;
