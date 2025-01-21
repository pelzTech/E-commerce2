const SlideCard = ({ title, cover, desc }) => {
  return (
    <div className="slideCard">
      <img src={cover} alt={title} className="slideImage" />
      <div className="slideContent">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SlideCard;
