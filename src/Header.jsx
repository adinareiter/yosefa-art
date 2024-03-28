export function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container ">
        <div className="image-container">
          <h1 className="signature">Yosefa</h1>
        </div>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="d-flex" id="navbarSupportedContent">
          {localStorage.jwt === undefined ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" id="header">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" id="header">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/admin-page">
                  Admin Page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
