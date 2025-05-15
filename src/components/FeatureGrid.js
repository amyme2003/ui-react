import React from 'react';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';

const FeatureGrid = () => {
  return (
    <section className="grid">
      <h2>Superior Collaboration <span>Visualize Quality</span></h2>
      <p className="subtext">
        Proactively envisioned multimedia based expertise and cross-media growth strategies.<br />
        Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.
      </p>
      <div className="first-grid">
        {[
          {
            img: pic2, 
            title: 'Efficiently Unleash',
            text: `Collaboratively administrate empowered markets via plug-and-play networks.
Dynamically procrastinate B2C users after installed base benefits.
Dramatically visualize customer directed convergence without revolutionary ROI.`,
          },
          {
            img: pic3,
            title: 'Completely Synergize',
            text: `Dramatically maintain clicks-and-mortar solutions without functional solutions.
Efficiently unleash cross-media information without cross-media value.
Quickly maximize timely deliverables for real-time schemas.`,
          },
          {
            img: pic4,
            title: 'Dynamically Procrastinate',
            text: `Professionally cultivate one-to-one customer service with robust ideas.
Completely synergize resource taxing relationships via premier niche markets.
Dynamically innovate resource-leveling customer service for state of the art customer service.`,
          },
        ].map((item, i) => (
          <div className="feature-card" key={i}>
            <img src={item.img} alt={item.title} />  
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
