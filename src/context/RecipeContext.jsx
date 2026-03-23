import { createContext, useContext, useState } from "react";
import recipes from "./data/recipes.js";

export const RecipeContext = createContext();

export const useRecipes = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [recipeList, setRecipeList] = useState(recipes);
  
  const addRecipe = (newRecipe) => {
    setRecipeList([newRecipe, ...recipeList]);
  };
  
  return (
    <RecipeContext.Provider value={{ recipeList, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};