import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function PaintingShow() {
  const [painting, setPainting] = useState({});
  const params = useParams();

  const handleShowPainting = () => {
    axios.get(`http://localhost:3000/paintings/${params.id}.json`).then((response) => {
      setPainting(response.data);
      console.log(painting);
    });
  };

  useEffect(handleShowPainting, []);

  return (
    <div>
      <div className="carousel-inner">
        {painting.images &&
          painting.images.map((image, index) => (
            <div key={index} className={`carousel-painting ${index === 0 ? "active" : ""}`}>
              <img style={{ maxWidth: "200px", maxHeight: "200px" }} src={image.url} alt={`Image ${index + 1}`} />
            </div>
          ))}
      </div>
      <h4>{painting.description}</h4>
      <button>
        <Link to="/contact">Contact Us</Link>
      </button>
      <div>
        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
}
