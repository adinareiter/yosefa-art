import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function AdminLogIn() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("currentUser", response.data.user_id);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <section className="page-section singin" id="contact">
      <div className="container">
        <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={handleSubmit} className="py-4 my-5">
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                {/* <!-- Message input--> */}
                <input
                  className="form-control"
                  id="email"
                  placeholder="Email *"
                  data-sb-validations="required"
                  name="email"
                  type="email"
                ></input>
                <div className="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                {/* <!-- Message input--> */}
                <input
                  className="form-control"
                  id="message"
                  placeholder="Password *"
                  data-sb-validations="required"
                  name="password"
                  type="password"
                ></input>
                <div className="invalid-feedback" data-sb-feedback="message:required">
                  A password is required.
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Submit Button--> */}
          <div className="text-center">
            <button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AdminLogIn;
