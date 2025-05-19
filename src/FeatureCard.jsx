const FeatureCard = (props) => {
  return (
    <div className="feature-card">
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      
    </div>
  );
};

export default FeatureCard;
