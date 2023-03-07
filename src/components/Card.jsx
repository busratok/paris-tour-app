const Card = ({ place }) => {
  const { image, name, description } = place;
  return (
    <div className="card">
      <h3>{name}</h3>
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="card-over">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
