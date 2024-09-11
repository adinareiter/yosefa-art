// import { Link } from "react-router-dom";

// export function Bio(props) {
//   // Slice the first 5 paintings from the array
//   const firstFivePaintings = props.paintings.slice(0, 5);

//   return (
//     <div className="bg-dark">
//       <header className="bg-dark py-5">
//         <div className="container px-4 px-lg-5 my-5">
//           <div className="text-center text-white">
//             <h1 className="display-4 fw-bolder">Yosefa's Art</h1>
//             <p className="lead fw-normal text-white-50 mb-0">
//               Step into Yosefa's art studio and explore vibrant and expressive canvases awaiting your discovery. Delight
//               in a range of works, from abstract landscapes to still life compositions, all available for purchase. Find
//               the perfect canvas to bring color and creativity into your home or office. With each piece crafted with
//               care and attention to detail, there's something here to speak to your soul.
//             </p>
//           </div>
//           <div className="text-center pt-4">
//             <Link to="/gallery">
//               <button className="btn btn-outline-light btn-lg">View Gallery</button>
//             </Link>
//           </div>
//         </div>
//       </header>

//       {firstFivePaintings.map((painting, index) => (
//         <div key={painting.id} className="container-fluid mb-5 mt-5 container text-center" id="bio-image">
//           <div className="row card-body">
//             <div className="col-sm-8 rounded mx-auto d-block">
//               {painting?.images[0]?.url ? (
//                 <img
//                   src={painting.images[0].url}
//                   alt={`Image ${index + 1} of painting`}
//                   className="painting-image w-100 rounded"
//                 />
//               ) : (
//                 <></>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// import { Link } from "react-router-dom";
// import "./Bio.css"; // Assuming you have a CSS file for additional styling

// export function Bio(props) {
//   // // Slice the first 5 paintings from the array
//   // const firstFivePaintings = props.paintings.slice(0, 5);

//   const paintings = props.paintings;

//   return (
//     <div className="background">
//       <header className="header-container">
//         <div className="header-content">
//           <h1 className="header-title pb-5">Art doesn't just decorate a home; it brings it to life</h1>
//           <div className="header-images">
//             <div className="image-box">
//               {/* Add your first big image here */}
//               <img
//                 src="path/to/first-image.jpg" // Replace with actual image URL
//                 alt="Big Image 1"
//                 className="header-image"
//               />
//             </div>
//             <div className="image-box">
//               {/* Add your second big image here */}
//               <img
//                 src="path/to/second-image.jpg" // Replace with actual image URL
//                 alt="Big Image 2"
//                 className="header-image"
//               />
//             </div>
//           </div>
//           <h2 className="subheading pt-5 pb-5">Art by Yosefa</h2>
//           <div id="pink">
//             <h3 id="blue" className=" view-gallery pt-5 pb-4">
//               View our Gallery
//             </h3>
//             <p id="pink" className="gallery-description pb-5">
//               Explore our gallery, a vibrant showcase of captivating paintings, each conveying its own narrative through
//               color and form. Immerse yourself in a curated collection that invites you to delve into the rich tapestry
//               of artistic expression. Embark on a visual journey through a myriad of styles and subjects, where
//               creativity knows no bounds.
//             </p>
//           </div>
//         </div>
//       </header>

//       <div className="gallery-images pt-5">
//         {paintings.map((painting, index) => (
//           <div key={painting.id} className="gallery-image-container">
//             {painting?.images[0]?.url ? (
//               <img src={painting.images[0].url} alt={`Image ${index + 1} of painting`} className="gallery-image" />
//             ) : (
//               <></>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import "./Bio.css"; // Import CSS for additional styling
import "./Contact.jsx";
import { Contact } from "./Contact.jsx";

export function Bio(props) {
  // Get all paintings from the props
  const paintings = props.paintings;

  return (
    <div className="background">
      <header className="header-container">
        <div className="pink-background">
          <div className="header-content">
            <div className="life">
              <h1 id="art" className="header-title ms-5">
                Art doesn't just decorate a home;
              </h1>
            </div>
            <div className="life">
              <h1 id="art" className="header-title pb-5 ms-5">
                It brings it to life.
              </h1>
            </div>
            <div className="header-images">
              <div className="image-box">
                <img
                  src="pictures/19310.jpg" // Replace with actual image URL
                  alt=""
                  className="header-image"
                />
              </div>
              <div className="image-box">
                <img
                  src="pictures/42821.jpg" // Replace with actual image URL
                  alt=""
                  className="header-image"
                />
              </div>
            </div>
            <h2 id="big" className="subheading pt-5 pb-5">
              Art by Yosefa
            </h2>
          </div>
          <div className="pink-background">
            <h3 className="view-gallery pt-5 pb-4">View our Gallery</h3>
            <p className="gallery-description pb-5">
              Explore our gallery, a vibrant showcase of captivating paintings, each conveying its own narrative through
              color and form. Immerse yourself in a curated collection that invites you to delve into the rich tapestry
              of artistic expression. Embark on a visual journey through a myriad of styles and subjects, where
              creativity knows no bounds.
            </p>
          </div>
        </div>
      </header>

      <div className="gallery-images">
        {paintings.map((painting, index) => (
          <div key={painting.id} className="gallery-image-container pb-5 pt-5">
            {painting?.images[0]?.url ? (
              <img src={painting.images[0].url} alt={`Image ${index + 1} of painting`} className="gallery-image" />
            ) : null}
          </div>
        ))}
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
