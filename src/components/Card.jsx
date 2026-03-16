import "../styles/Card.css";
import CardButton from "./CardButton";

const Card = ({ recipes, onSelect }) => {
  return (
    <div className="card-container">
      {recipes.map((recipe, index) => (
        <CardButton key={index} recipe={recipe} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default Card;
