import { useState } from "react";
import "../styles/Form.css";
import { FaPlus } from "react-icons/fa";
 
const RecipeForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: [""],
    instructions: [""],
    image: null,
  });
 
  const [clicked, setClicked] = useState(false);
  const [dragging, setDragging] = useState(false);
 
  const handleIngredientChange = (value, index) => {
    const updated = [...formData.ingredients];
    updated[index] = value;
    if (index === formData.ingredients.length - 1 && value !== "") {
      updated.push("");
    }
    setFormData({ ...formData, ingredients: updated });
  };
 
  const handleInstructionChange = (value, index) => {
    const updated = [...formData.instructions];
    updated[index] = value;
    if (index === formData.instructions.length - 1 && value !== "") {
      updated.push("");
    }
    setFormData({ ...formData, instructions: updated });
  };
 
  const handleImage = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onloadend = () => setFormData({ ...formData, image: reader.result });
    reader.readAsDataURL(file);
  };
 
  const handleSubmit = () => {
    const { title, ingredients, instructions, image } = formData;
 
    if (!title || ingredients[0] === "" || instructions[0] === "") return;
 
    onAdd({
      title,
      ingredients: ingredients.filter((i) => i !== "").join(", "),
      recipe: instructions.filter((i) => i !== "").join(", "),
      image,
    });
 
    setFormData({ title: "", ingredients: [""], instructions: [""], image: null });
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
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
 
          <div className="input-grid">
            {formData.ingredients.map((ingredient, index) => (
              <input
                key={index}
                placeholder={index === 0 ? "Ingredients" : "Add another..."}
                value={ingredient}
                onChange={(e) => handleIngredientChange(e.target.value, index)}
              />
            ))}
          </div>
 
          <div className="input-grid">
            {formData.instructions.map((instruction, index) => (
              <input
                key={index}
                placeholder={index === 0 ? "Cooking Instructions" : "Add another step..."}
                value={instruction}
                onChange={(e) => handleInstructionChange(e.target.value, index)}
              />
            ))}
          </div>
 
          <div
            className={`image-drop-zone ${dragging ? "dragging" : ""} ${formData.image ? "has-image" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              handleImage(e.dataTransfer.files[0]);
            }}
            onClick={() => document.getElementById("image-input").click()}
          >
            {formData.image ? (
              <img src={formData.image} alt="preview" className="image-preview" />
            ) : (
              <span>Drop an image here or click to upload</span>
            )}
            <input
              id="image-input"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => handleImage(e.target.files[0])}
            />
          </div>
 
          <div className="submit-button" onClick={handleSubmit}>
            Add Recipe
          </div>
        </div>
      )}
    </div>
  );
};
 
export default RecipeForm;
 