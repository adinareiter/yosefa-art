import { PaintingsNew } from "./PaintingsNew";
import { Link } from "react-router-dom";

export function AdminPage(props) {
  return (
    <div className="pb-5">
      <h1>Admin Page</h1>
      <div id="PaintingsNew">
        <PaintingsNew />
      </div>
      {props.paintings.map((painting) => (
        <div key={painting.id} className="col-lg-4 col-sm-6 mb-4">
          <div className="portfolio-caption">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {painting.images.map((image, index) => (
                  <div key={index} className={`carousel-painting ${index === 0 ? "active" : ""}`}>
                    <img style={{ maxWidth: "200px", maxHeight: "200px" }} src={image.url} alt={`Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="portfolio-caption-heading">{painting.description}</div>
            <button onClick={() => props.onPaintingShow(painting)} className="portfolio-link">
              EDIT PAINTING
            </button>
          </div>
        </div>
      ))}
      {/* <div>
        <strong>Categories: </strong>
        <div>
          <Link to="/category-new">ADD NEW CATEGORY</Link>
        </div>
        <div>
          {props.categories.map((category) => (
            <div key={category.id}>
              {" "}
              <div>
                <span>{category.name}, </span>
              </div>
              <button onClick={() => props.onShowCategory(category)}>EDIT CATEGORY</button>
            </div>
          ))}
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default AdminPage;
