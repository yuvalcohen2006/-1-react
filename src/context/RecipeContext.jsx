import { createContext, useContext, useEffect, useState } from "react";

const RecipeContext = createContext({
  recipeList: [],
  addRecipe: () => {},
  deleteRecipe: () => {},
  editRecipe: () => {},
});

export const useRecipes = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [recipeList, setRecipeList] = useState(() => {
    const stored = localStorage.getItem("recipes");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipeList));
  }, [recipeList]);

  const addRecipe = (newRecipe) => {
    setRecipeList((prevList) => [newRecipe, ...prevList]);
  };

  const deleteRecipe = (recipeToDelete) => {
    setRecipeList((prevList) =>
      prevList.filter((recipe) => recipe !== recipeToDelete),
    );
  };

  const editRecipe = (updatedRecipe, originalRecipe) => {
    setRecipeList((prevList) =>
      prevList.map((recipe) =>
        recipe === originalRecipe ? updatedRecipe : recipe,
      ),
    );
  };

  return (
    <RecipeContext.Provider
      value={{ recipeList, addRecipe, deleteRecipe, editRecipe }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
