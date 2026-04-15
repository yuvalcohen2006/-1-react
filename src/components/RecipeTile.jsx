import "../styles/RecipeCard.css";
import { useRecipes } from "../context/RecipeContext.jsx";

const RecipeTile = ({ recipe, onSelect, onEdit }) => {
  const { deleteRecipe } = useRecipes();

  return (
    <div className="card-content-square" onClick={() => onSelect(recipe)}>
      {recipe.title}
      <button className="delete-button" onClick={(e) => { e.stopPropagation(); deleteRecipe(recipe); }}>✕</button>
      <button className="edit-button" onClick={(e) => { e.stopPropagation(); onEdit(recipe); }}>✎</button>
    </div>
  );
};

export default RecipeTile;