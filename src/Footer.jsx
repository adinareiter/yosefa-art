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
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; Yosefa 2024</p>
        {localStorage.jwt === undefined ? (
          <div className="m-0 text-center text-white">
            <a href="/admin-login" className="m-0 text-white">
              Admin Login
            </a>
          </div>
        ) : (
          <div className="m-0 text-center text-white">
            <a href="#" className="m-0 text-white " onClick={handleClick}>
              Admin Logout
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
