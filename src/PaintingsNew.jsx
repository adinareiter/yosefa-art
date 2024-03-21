import React, { useState } from "react";
import axios from "axios";

export function PaintingsNew() {
  const [errors, setErrors] = useState([]);
  const [imageUrls, setImageUrls] = useState([""]); // State to hold image URLs
  const [uploads, setUploads] = useState(null);
  const handleSetFile = (event) => {
    if (event.target.files.length > 0) {
      setUploads(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("uploads", uploads);
      formData.append("description", event.target.description.value);

      // Append non-empty image URLs to FormData
      imageUrls.forEach((url, index) => {
        if (url.trim() !== "") {
          // Check if the URL is not empty or contains only whitespace
          formData.append(`url${index + 1}`, url); // Adjust index to start from 1
        }
      });

      const response = await axios.post("http://localhost:3000/paintings.json", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      event.target.reset();
      window.location.href = "/admin-page";
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.errors || ["An error occurred."];
      setErrors(errorMessage);
    }
  };

  const handleAddImageUrl = () => {
    if (imageUrls.length < 20) {
      setImageUrls([...imageUrls, ""]); // Add an empty string to imageUrls array
    } else {
      alert("You can only add up to 20 image URLs.");
    }
  };

  const handleImageUrlChange = (index, url) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = url;
    setImageUrls(newImageUrls);
  };

  const handleCancel = () => {
    window.location.href = "/admin-page";
  };

  return (
    <section>
      <div>
        <div>
          <h2>New Painting</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <input className="form-control" type="text" placeholder="Description of Item *" name="description" />
              <div className="invalid-feedback">A description is required.</div>
              <h3 className="newitem section-subheading">Enter image URLs:</h3>
              <div className="form-group">
                {imageUrls.map((url, index) => (
                  <input
                    key={index}
                    className="form-control"
                    type="text"
                    placeholder={`Image Url ${index + 1} *`}
                    value={url}
                    onChange={(event) => handleImageUrlChange(index, event.target.value)}
                  />
                ))}
              </div>
              {imageUrls.length < 20 && (
                <button type="button" onClick={handleAddImageUrl}>
                  Add Image URL
                </button>
              )}
              <div>
                Upload Image
                <input type="file" onChange={handleSetFile} />
              </div>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>{" "}
              {/* Button to cancel */}
            </div>
          </div>

          <div className="text-center text-danger mb-3">
            {errors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
          <div className="text-center">
            <button type="submit">Add New Painting</button>
          </div>
        </form>
      </div>
    </section>
  );
}
