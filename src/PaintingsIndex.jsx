// import { Link } from "react-router-dom";
// /* eslint-disable react/prop-types */
// export function PaintingsIndex(props) {
//   const paintings = props.paintings;

//   // Check if paintings array is not provided or is empty
//   if (!paintings || paintings.length === 0) {
//     return <div>No paintings to display</div>;
//   }

//   // Group paintings into rows with two paintings each
//   const rows = [];
//   for (let i = 0; i < paintings.length; i += 2) {
//     const rowPaintings = paintings.slice(i, i + 2);
//     const rowElements = rowPaintings.map((painting) => (
//       <div key={painting.id} className="col mb-5">
//         <div className="card h-100">
//           <Link to={`/painting/${painting.id}`}>
//             <img className="card-img-top" src={painting.images[0].url} alt="..." />
//             <div className="card-body p-4">
//               <div className="text-center">
//                 <h5 className="fw-bolder">{painting.name}</h5>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     ));
//     rows.push(
//       <div key={i} className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-2 justify-content-center">
//         {rowElements}
//       </div>
//     );
//   }

//   return (
//     <section className="py-5 bg-dark">
//       <div className="text-center">
//         <h1 className="mb-4 text-light">Gallery</h1>
//         <h4 className="ms-5 text-light">
//           Explore our gallery page, a vibrant showcase of captivating paintings, each conveying its own narrative
//           through color and form. Immerse yourself in a curated collection that invites you to delve into the rich
//           tapestry of artistic expression. Embark on a visual journey through a myriad of styles and subjects, where
//           creativity knows no bounds.
//         </h4>
//       </div>
//       <div className="container px-4 px-lg-5 mt-5">{rows}</div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";

export function PaintingsIndex(props) {
  const paintings = props.paintings;

  // Check if paintings array is not provided or is empty
  if (!paintings || paintings.length === 0) {
    return (
      <div className="text-center pt-5 pb-5">
        <h1>No paintings to display</h1>
      </div>
    );
  }

  // Group paintings into rows with two paintings each
  const rows = [];
  for (let i = 0; i < paintings.length; i += 2) {
    const rowPaintings = paintings.slice(i, i + 2);
    const rowElements = rowPaintings.map((painting) => (
      <div key={painting.id} className="col mb-5">
        <div className="card h-100">
          <Link to={`/painting/${painting.id}`}>
            {/* Check if painting.images array exists and is not empty before accessing its first element */}
            {painting.images && painting.images.length > 0 && (
              <img className="card-img-top" src={painting.images[0].url} alt="..." />
            )}
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{painting.name}</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    ));
    rows.push(
      <div key={i} className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-2 justify-content-center">
        {rowElements}
      </div>
    );
  }

  return (
    <section className="py-5 bg-dark">
      <div className="text-center">
        <h1 className="mb-4 text-light">Gallery</h1>
        <h4 className="ms-5 text-light">
          Explore our gallery page, a vibrant showcase of captivating paintings, each conveying its own narrative
          through color and form. Immerse yourself in a curated collection that invites you to delve into the rich
          tapestry of artistic expression. Embark on a visual journey through a myriad of styles and subjects, where
          creativity knows no bounds.
        </h4>
      </div>
      <div className="container px-4 px-lg-5 mt-5">{rows}</div>
    </section>
  );
}
