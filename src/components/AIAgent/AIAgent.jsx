import React from 'react';
import TrueFocus from './TrueFocus';
import CardSwap, { Card } from './CardSwap';

const AIAgent = () => {
  return (
    <div style={styles.pageWrapper}>

      <TrueFocus 
        sentence="AI Agent"
        manualMode={false}
        blurAmount={5}
        borderColor="blue"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />

      <div style={styles.cardSection}>
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
            <h3 style={styles.heading}>Slide 1</h3>
            <img
              src="https://integralwebsolution.com/wp-content/uploads/2020/03/custom-template-banner3.jpg"
              alt="Slide 1"
              style={styles.image}
            />
          </Card>

          <Card>
            <h3 style={styles.heading}>Slide 2</h3>
            <img
              src="https://assets.website-files.com/5c75b94c8dd1ae50d3b9294b/5d12756a077913dd4f464c83_n.png"
              alt="Slide 2"
              style={styles.image}
            />
          </Card>

          <Card>
            <h3 style={styles.heading}>Slide 3</h3>
            <img
              src="https://freedesignresources.net/wp-content/uploads/2019/03/Web-Showcase-Mockup-Creator_Graphic-Gata_211017_prev01.jpg"
              alt="Slide 3"
              style={styles.image}
            />
          </Card>
        </CardSwap>
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
  },
  heading: {
    margin: "10px",
    color: "white",
    textAlign: "left",
    paddingLeft: "10px",
  },
  image: {
    width: "100%",
    padding: "20px",
    borderRadius: "12px",
  },
};

export default AIAgent;
