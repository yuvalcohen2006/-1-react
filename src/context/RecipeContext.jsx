import { createContext, useContext, useState } from "react";
import recipes from "../data/recipes.js";

export const RecipeContext = createContext({
  recipeList: [],
  addRecipe: () => {},
});

export const useRecipes = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [recipeList, setRecipeList] = useState(recipes);

  const addRecipe = (newRecipe) => {
    setRecipeList((prevList) => [newRecipe, ...prevList]);
  };

  return (
    <RecipeContext.Provider value={{ recipeList, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
