import axios from "axios";
export function Footer() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };
  return (
    <div className="footer-container">
      <div>Copyright &copy; YOSEFA 2024</div>
      {localStorage.jwt === undefined ? (
        <a href="/admin-login">Admin Login</a>
      ) : (
        <div>
          <a href="#" className="nav-link" onClick={handleClick}>
            Admin Logout
          </a>
        </div>
      )}
    </div>
  );
}
