import React from 'react';
import featureSections from '../app/data/featuretext'; // Adjust the import path as necessary

const FeatureSection = ({ title, subtitle, Component }) => {
  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="text-6xl font-bold mb-6 text-center">{title}</h1>
      <h2 className="text-4xl font-semibold mb-6 text-center">{subtitle}</h2>

      <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
        {/* Render the passed component here */}
        {Component && <Component />}
      </div>
    </div>
  );
};

const FeaturePage = () => {
  return (
    <div>
      {featureSections.map((section, index) => (
        <FeatureSection 
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          Component={section.Component} // Pass the component dynamically
        />
      ))}
    </div>
  );
};

export default FeaturePage;

