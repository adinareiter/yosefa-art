export function Header() {
  return (
    <div className="header-container">
      <div className="image-container">
        <img src="src/pictures/Your paragraph text (1).png" alt="yosefa signature" />
      </div>

      <div className="header-info">
        <h2>
          {localStorage.jwt === undefined ? (
            <div>
              {" "}
              <a href="/">home</a> | <a href="/gallery">gallery</a> | <a href="/contact">Contact</a> |
              {/* <a href="/originals">originals</a> |{" "}
              <a href="/semi-originals">semi-originals</a> |{" "}
              <a href="/waterdale-collabs">waterdale collabs originals</a>  */}
            </div>
          ) : (
            <div>
              <a href="/admin-page">Admin Page</a> |<a href="/">home</a> | <a href="/gallery">gallery</a> |{" "}
              <a href="/contact">Contact</a>
              {/* <a href="/originals">originals</a> | <a href="/semi-originals">semi-originals</a> |{" "}
              <a href="/waterdale-collabs">waterdale collabs originals</a> |  */}
            </div>
          )}
        </h2>
      </div>
    </div>
  );
}
