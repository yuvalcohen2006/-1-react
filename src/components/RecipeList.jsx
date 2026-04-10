import "../styles/RecipeCard.css";
import RecipeTile from "./RecipeTile";
import { useRecipes } from "../context/RecipeContext.jsx";

const RecipeList = ({ onSelect }) => {
  const { recipeList } = useRecipes();

  return (
    <div className="card-container">
      {recipeList.map((recipe, index) => (
        <RecipeTile key={index} recipe={recipe} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default RecipeList;
