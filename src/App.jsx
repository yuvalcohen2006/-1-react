import { useState } from "react";
import Card from "./components/Card.jsx";
import "./styles/App.css";
import RecipeDetail from "./components/RecipeDetail.jsx";
import RecipeForm from "./components/RecipeForm.jsx";
import { RecipeProvider } from "./context/RecipeContext.jsx";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <RecipeProvider>
      <div className="App">
        <div className="header">Click any recipe to expand</div>
        <div className="content-container">
          <Card onSelect={setSelectedRecipe} />
          {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
          <RecipeForm />
        </div>
      </div>
    </RecipeProvider>
  );
}

export default App;