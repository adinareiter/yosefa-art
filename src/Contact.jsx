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
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <div>
          <input type="text" placeholder="Name" name="name" />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" />
        </div>
        <div>
          <input type="text" placeholder="Subject" name="subject" />
        </div>
        <div>
          <textarea type="text" placeholder="Your message" name="message" />
        </div>
        <input type="submit" value="Send" />
      </form>
      <div>
        <h3>Phone: 872-203-1815</h3>
        <h3>Email: Yosefabruzoart@gmail.com</h3>
      </div>
    </div>
  );
}
