import { PaintingsNew } from "./PaintingsNew";
import { Link } from "react-router-dom";

export function AdminPage(props) {
  return (
    <div className="pb-5">
      <h1>Admin Page</h1>
      <div id="PaintingsNew">
        <PaintingsNew />
      </div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {props.paintings.map((painting) => (
              <div key={painting.id} className="col mb-5">
                <div className="card h-100">
                  <img className="card-img-top" src={painting.images[0].url} alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{painting.description}</h5>
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" onClick={() => props.onPaintingShow(painting)}>
                        EDIT PAINTING
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      ;
    </div>
  );
}

export default AdminPage;
