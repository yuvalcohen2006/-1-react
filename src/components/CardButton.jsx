import "../styles/Card.css";

const CardButton = ({ recipe, onSelect }) => {

  return (
    <div className="card-content-square" onClick={() => onSelect(recipe)}>
      {recipe.title}
    </div>
  );
};

export default CardButton;
