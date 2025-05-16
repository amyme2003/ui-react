

const BottomGrid = () => {
  const cards = [
    { title: 'Dynamically Procrastinate', button: 'Procrastinate' },
    { title: 'Efficiently Unleash', button: 'Unleash' },
    { title: 'Completely Synergize', button: 'Synergize' },
  ];

  return (
    <section className="bottom-grid-section">
      {cards.map((card, index) => (
        <div className="grid-card" key={index}>
          <div className="circle">100x100</div>
          <h3>{card.title}</h3>
          <p>
            Professionally cultivate one-to-one customer service with robust ideas.
            Completely synergize resource taxing relationships via premier niche markets.
            Dynamically innovate resource-leveling customer service for state of the art customer service.
          </p>
          <button>{card.button}</button>
        </div>
      ))}
    </section>
  );
};

export default BottomGrid;
