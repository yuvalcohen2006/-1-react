import "../styles/RecipeCard.css";

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipe-detail-container">
      <h2>{recipe.title}</h2>
      <h4>Ingredients</h4>
      <p>{recipe.ingredients}</p>
      <h4>Recipe</h4>
      <p>{recipe.instructions}</p>
      {recipe.image && (
        <div className="recipe-image-wrapper">
          <h4>Photo</h4>
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
