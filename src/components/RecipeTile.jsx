import "../styles/RecipeCard.css";

const RecipeTile = ({ recipe, onSelect }) => {
  return (
    <div className="card-content-square" onClick={() => onSelect(recipe)}>
      {recipe.title}
    </div>
  );
};

export default RecipeTile;
