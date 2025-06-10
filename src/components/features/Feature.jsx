// src/features/Feature.jsx
import React from 'react';
import FeatureOne from './FeatureOne';
import FeatureTwo from './FeatureTwo';
import FeatureThree from './FeatureThree';

const Feature = () => {
  return (
    <section className="feature-section space-x-40"> {/* Add vertical space between children */}
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
    </section>
  );
};

export default Feature;
