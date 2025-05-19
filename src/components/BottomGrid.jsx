
import BottomCard from '../BottomCard';

const BottomGrid = () => {
  const cards = [
    { title: 'Dynamically Procrastinate', button: 'Procrastinate' },
    { title: 'Efficiently Unleash', button: 'Unleash' },
    { title: 'Completely Synergize', button: 'Synergize' },
  ];

  return (
    <section className="bottom-grid-section">
      {cards.map((card, index) => (
        <BottomCard key={index} title={card.title} button={card.button} />
      ))}
    </section>
  );
};

export default BottomGrid;
