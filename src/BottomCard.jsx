
const BottomCard = (props) => {
  return (
    <div className="grid-card">
      <div className="circle">100x100</div>
      <h3>{props.title}</h3>
      <p>
        Professionally cultivate one-to-one customer service with robust ideas.
        Completely synergize resource taxing relationships via premier niche markets.
        Dynamically innovate resource-leveling customer service for state of the art customer service.
      </p>
      <button>{props.button}</button>
    </div>
  );
};

export default BottomCard;
