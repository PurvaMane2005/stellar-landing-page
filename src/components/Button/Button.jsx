// src/features/Feature.jsx
import React from 'react';
import StarBorder from './StarBorder';

const Button = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      
    }}>
      <StarBorder
        as="button"
        className="custom-class"
        color="cyan"
        speed="5s"
        style={{ 
          fontSize: '15px',    // Increases text size
          cursor: 'pointer'    // Changes cursor on hover
        }}
      >
        Get early access to AI Agents
      </StarBorder>
    </div>
  );
};

export default Button;