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

      const response = await axios.post("/paintings.json", formData, {
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

  // const handleAddImageUrl = () => {
  //   if (imageUrls.length < 20) {
  //     setImageUrls([...imageUrls, ""]); // Add an empty string to imageUrls array
  //   } else {
  //     alert("You can only add up to 20 image URLs.");
  //   }
  // };

  // const handleImageUrlChange = (index, url) => {
  //   const newImageUrls = [...imageUrls];
  //   newImageUrls[index] = url;
  //   setImageUrls(newImageUrls);
  // };

  const handleCancel = () => {
    window.location.href = "/admin-page";
  };

  return (
    <section>
      <div id="new">
        <div></div>
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 mt-5">
            Create a new painting
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter description..."
                    data-sb-validations="required"
                    name="description"
                  />
                  <label htmlFor="name">Description</label>
                  <div className="invalid-feedback" data-sb-feedback="name:required">
                    A description is required.
                  </div>
                </div>
                {/* <div className="form-group mb-3">
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
                  <button className="btn btn-outline-dark mt-auto" type="button" onClick={handleAddImageUrl}>
                    Add Image URL
                  </button>
                )} */}
                <div className="mt-4">
                  Upload Image: <input type="file" onChange={handleSetFile} />
                </div>
                <button type="button" className="btn btn-outline-dark mt-4" onClick={handleCancel}>
                  Cancel
                </button>{" "}
                <div>
                  {errors.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </div>
                <div className="pt-3">
                  <button type="submit" className="btn btn-outline-success mt-auto">
                    Add New Painting
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
