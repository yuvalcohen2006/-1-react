import { useState } from "react";
import RecipeList from "./components/RecipeList.jsx";
import "./styles/App.css";
import RecipeDetails from "./components/RecipeDetails.jsx";
import RecipeForm from "./components/RecipeForm.jsx";
import { RecipeProvider } from "./context/RecipeContext.jsx";

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <RecipeProvider>
      <div className="app">
        <div className="header">Click any recipe to expand</div>
        <div className="content-container">
          <RecipeList onSelect={setSelectedRecipe} />
          {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
          <RecipeForm />
        </div>
      </div>
    </RecipeProvider>
  );
}

export default App;
