/* eslint-disable react/prop-types */
export function PaintingsIndex(props) {
  const paintings = props.paintings;

  // Check if paintings array is not provided or is empty
  if (!paintings || paintings.length === 0) {
    return <div>No paintings to display</div>;
  }

  // Group paintings into rows with three paintings each
  const rows = [];
  for (let i = 0; i < paintings.length; i += 3) {
    const rowPaintings = paintings.slice(i, i + 3);
    const rowElements = rowPaintings.map((painting) => (
      <div key={painting.id} className="col mb-5">
        <div className="card h-100">
          <img className="card-img-top" src={painting.images[0].url} alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{painting.name}</h5>
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href={`/painting/${painting.id}`}>
                View Painting
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
    rows.push(
      <div key={i} className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-3 justify-content-center">
        {rowElements}
      </div>
    );
  }

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">{rows}</div>
    </section>
  );
}
