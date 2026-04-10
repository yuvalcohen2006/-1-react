import { useState } from "react";

const ImageDropZone = ({ image, onImageChange }) => {
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");

  const handleImage = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("File must be an image.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setError("");
      onImageChange(reader.result);
    };
    reader.onerror = () => {
      setError("Failed to load image. Please try again.");
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div
        className={`image-drop-zone ${dragging ? "dragging" : ""} ${image ? "has-image" : ""}`}
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
        {image ? (
          <img src={image} alt="preview" className="image-preview" />
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
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ImageDropZone;