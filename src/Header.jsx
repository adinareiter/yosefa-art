import "./Header.css";

export function Header() {
  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar">
      <div className="container ">
        <div className="d-flex" id="navbarSupportedContent">
          {localStorage.jwt === undefined ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" id="header">
              <li className="nav-item">
                <a className="nav-link active" href="/contact"></a>
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
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
