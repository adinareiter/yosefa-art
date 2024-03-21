import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export function PaintingsIndex(props) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>all paintings</h1>
      {props.paintings.map((painting) => (
        <div key={painting.id} className="col-lg-4 col-sm-6 mb-4">
          <div className="portfolio-caption">
            <div className="row">
              <Link to={`/painting/${painting.id}`}>
                {painting.images.map((image, index) => (
                  <div key={index} className="col-lg-4 col-sm-6 mb-4">
                    <div className="portfolio-caption">
                      <img src={image.url} alt={`Image ${index + 1} of painting`} className="painting-image" />
                    </div>
                  </div>
                ))}
              </Link>
            </div>{" "}
            <div className="portfolio-caption-heading">{painting.description}</div>
          </div>
        </div>
      ))}
      <button className="btn btn-primary btn-l text-uppercase " type="button" href="#" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
}
