import { Link } from "react-router-dom";

export function Bio(props) {
  // Slice the first 5 paintings from the array
  const firstFivePaintings = props.paintings.slice(0, 5);

  return (
    <div className="bg-dark">
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Yosefa's Art</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Step into Yosefa's art studio and explore vibrant and expressive canvases awaiting your discovery. Delight
              in a range of works, from abstract landscapes to still life compositions, all available for purchase. Find
              the perfect canvas to bring color and creativity into your home or office. With each piece crafted with
              care and attention to detail, there's something here to speak to your soul.
            </p>
          </div>
          <div className="text-center pt-4">
            <Link to="/gallery">
              <button className="btn btn-outline-light btn-lg">View Gallery</button>
            </Link>
          </div>
        </div>
      </header>

      {firstFivePaintings.map((painting, index) => (
        <div key={painting.id} className="container-fluid mb-5 mt-5 container text-center" id="bio-image">
          <div className="row card-body">
            <div className="col-sm-8 rounded mx-auto d-block">
              <img
                src={painting.images[0].url}
                alt={`Image ${index + 1} of painting`}
                className="painting-image w-100 rounded"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
