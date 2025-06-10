// src/features/Feature.jsx
import React from 'react';
import DecryptedText from './DecryptedText';

const Moto = () => {
  return (
    <div>
      <p style={{ fontSize: '90px', fontWeight: 'bold' }}>
        <DecryptedText text="A well-planned schedule 
is the backbone of productivity and 
peace of mind. me!" />
      </p>
    </div>
  );
};

export default Moto;
