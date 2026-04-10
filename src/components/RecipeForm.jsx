import { useState } from "react";
import "../styles/Form.css";
import { FaPlus } from "react-icons/fa";
import { useRecipes } from "../context/RecipeContext.jsx";
import ImageDropZone from "./ImageDropZone.jsx";
import useFormList from "../hooks/useFormList.js";

const RecipeForm = () => {
  const { addRecipe } = useRecipes();

  const [formData, setFormData] = useState({
    title: "",
    ingredients: [""],
    instructions: [""],
    image: null,
  });

  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState("");

  const { handleListChange, handleListBlur } = useFormList(formData, setFormData);

  const handleSubmit = () => {
    const { title, ingredients, instructions, image } = formData;

    const hasIngredients = ingredients.some((i) => i !== "");
    const hasInstructions = instructions.some((i) => i !== "");

    if (!title || !hasIngredients || !hasInstructions) {
      setError("Please fill in a title, at least one ingredient, and at least one instruction.");
      return;
    }

    setError("");
    addRecipe({
      title,
      ingredients: ingredients.filter((i) => i !== "").join(", "),
      instructions: instructions.filter((i) => i !== "").join(", "),
      image,
    });

    setFormData({
      title: "",
      ingredients: [""],
      instructions: [""],
      image: null,
    });
    setClicked(false);
  };

  return (
    <div className="recipe-form">
      <div className="button" onClick={() => setClicked(!clicked)}>
        <FaPlus />
      </div>
      {clicked && (
        <div className="input-group">
          <input
            placeholder="Dish name"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          <div className="input-grid">
            {formData.ingredients.map((ingredient, index) => (
              <input
                key={index}
                placeholder={index === 0 ? "Ingredients" : "Add another..."}
                value={ingredient}
                onChange={(e) =>
                  handleListChange("ingredients", e.target.value, index)
                }
                onBlur={(e) =>
                  handleListBlur("ingredients", e.target.value, index)
                }
              />
            ))}
          </div>

          <div className="input-grid">
            {formData.instructions.map((instruction, index) => (
              <input
                key={index}
                placeholder={
                  index === 0 ? "Cooking Instructions" : "Add another step..."
                }
                value={instruction}
                onChange={(e) =>
                  handleListChange("instructions", e.target.value, index)
                }
                onBlur={(e) =>
                  handleListBlur("instructions", e.target.value, index)
                }
              />
            ))}
          </div>

          <ImageDropZone
            image={formData.image}
            onImageChange={(result) =>
              setFormData({ ...formData, image: result })
            }
          />

          {error && <p className="error-message">{error}</p>}

          <div className="submit-button" onClick={handleSubmit}>
            Add Recipe
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeForm;
