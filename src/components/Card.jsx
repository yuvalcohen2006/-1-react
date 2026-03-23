import "../styles/Card.css";
import CardButton from "./CardButton"
import { useRecipes } from "../context/RecipeContext.jsx";

const Card = ({ onSelect }) => {
  const { recipeList } = useRecipes();

  return (
    <div className="card-container">
      {recipeList.map((recipe, index) => (
        <CardButton key={index} recipe={recipe} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default Card;