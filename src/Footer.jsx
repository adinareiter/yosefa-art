import axios from "axios";
import { Link } from "react-router-dom";
export function Footer() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };
  return (
    <footer className="py-5 bg-dark flex-stick text-center">
      <div className="container">
        <a className="m-0 text-center text-white" href="/admin-login">
          Copyright &copy; Yosefa 2024
        </a>
        {localStorage.jwt === undefined ? (
          <div className="m-0 text-center text-white"></div>
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
