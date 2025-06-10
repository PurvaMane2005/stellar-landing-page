// src/components/Button/Button.jsx
import React from 'react';
import StarBorder from './StarBorder';

const Button = ({ onClick }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <StarBorder
        as="button"
        className="custom-class"
        color="cyan"
        speed="5s"
        style={{ fontSize: '15px', cursor: 'pointer' }}
        onClick={onClick}
      >
        Get early access to AI Agents
      </StarBorder>
    </div>
  );
};

export default Button;
