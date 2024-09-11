import emailjs from "emailjs-com";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_tsqmikd", "template_xdncad9", e.target, "nXzhMEXIAl94wW6eF").then(
      (result) => {
        console.log(result.text);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  const handleClick = () => {
    // Perform any action you want when the button is clicked

    // After 5 seconds, set messageSent state to true
    setTimeout(() => {
      setMessageSent(true);
    }, 2000);
  };

  return (
    <div>
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Us</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div></div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <form onSubmit={sendEmail} id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label htmlFor="name">Full name</label>
                  <div className="invalid-feedback" data-sb-feedback="name:required">
                    A name is required.
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                  />
                  <label htmlFor="email">Email address</label>
                  <div className="invalid-feedback" data-sb-feedback="email:required">
                    An email is required.
                  </div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">
                    Email is not valid.
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    name="subject"
                    id="subject"
                    type="tel"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label htmlFor="subject">Subject</label>
                  <div className="invalid-feedback" data-sb-feedback="subject:required">
                    A subject is required.
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    type="text"
                    placeholder="Enter your message here..."
                    data-sb-validations="required"
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  <div className="invalid-feedback" data-sb-feedback="message:required">
                    A message is required.
                  </div>
                </div>

                <button onClick={handleClick} className="btn btn-primary btn-xl " id="submitButton" type="submit">
                  Send
                </button>
                {messageSent && (
                  <div className="alert alert-success mt-3" role="alert">
                    Message sent!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Art by Yosefa</h1>
            <p className="lead fw-normal text-white-50 mb-0"></p>
            <h3> ✆ 872-203-1815</h3>
            <h3> ✉︎ Yosefabruzoart@gmail.com</h3>
          </div>
        </div>
      </header>
    </div>
  );
}
