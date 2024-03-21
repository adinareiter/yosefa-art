import emailjs from "emailjs-com";

export function Contact() {
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

  return (
    <div>
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Email for Custom Painting
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
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
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label htmlFor="phone">Phone number</label>
                  <div className="invalid-feedback" data-sb-feedback="phone:required">
                    A phone number is required.
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
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

                <button className="btn btn-primary btn-xl " id="submitButton" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Contact Yosefa</h1>
            <p className="lead fw-normal text-white-50 mb-0"></p>
            <h3>Phone: 872-203-1815</h3>
            <h3>Email: Yosefabruzoart@gmail.com</h3>
          </div>
        </div>
      </header>
    </div>
  );
}

// <h1>Contact</h1>
// <form className="contact-form" onSubmit={sendEmail}>
//   <div>
//     <input type="text" placeholder="Name" name="name" />
//   </div>
//   <div>
//     <input type="email" placeholder="Email" name="email" />
//   </div>
//   <div>
//     <input type="text" placeholder="Subject" name="subject" />
//   </div>
//   <div>
//     <textarea type="text" placeholder="Your message" name="message" />
//   </div>
//   <input type="submit" value="Send" />
// </form>
// <div>
//   <h3>Phone: 872-203-1815</h3>
//   <h3>Email: Yosefabruzoart@gmail.com</h3>
// </div>
