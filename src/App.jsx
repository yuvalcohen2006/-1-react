import { useState } from "react";
import Card from "./components/Card.jsx";
import "./styles/App.css";
import recipes from "./data/recipes.js";
import RecipeDetail from "./components/RecipeDetail.jsx";
import RecipeForm from "./components/RecipeForm.jsx";

function App() {
  const [recipeList, setRecipeList] = useState(recipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const addRecipe = (newRecipe) => {
    setRecipeList([newRecipe, ...recipeList]);
  };

  return (
    <div className="App">
      <div className="header">Click any recipe to expand</div>
      <div className="content-container">
        <Card recipes={recipeList} onSelect={setSelectedRecipe} />
        {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
        <RecipeForm onAdd={addRecipe} />
      </div>
    </div>
  );
}

export default App;
