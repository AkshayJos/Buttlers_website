import "./App.css";

function App() {
  return (
    <>
      <div className="contact-us">
        <div className="content">
          <h1>
            CONTACT <span>US</span>
          </h1>
          <p id="text">
            Be it feedback, a grievance, a satisfactory experience or your love
            for Yewale tea, we are all ears to what you have to say. Contact us
            through the form below and wait for us to get back to you.
          </p>
          <div className="contact-options">
            <div className="contact-option">
              <i className="fas fa-phone-alt"></i>
              <p>CALL TODAY</p>
              <a href="tel:+918181800800">+91 75096 98263</a>
            </div>
            <div className="contact-option">
              <i className="fas fa-quote-right"></i>
              <p>REQUEST A QUOTE</p>
              <a href="tel:+918181800800">+91 62687 70098 </a>
            </div>
            <div className="contact-option">
              <i className="fas fa-envelope"></i>
              <p>EMAIL US</p>
              <a href="mailto:info@yewale.com">webuttlers@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="image">
          {/* <img src="./image.png" alt="Yewale Tea" /> */}
        </div>
      </div>

      <div className="corporate-office">
        <div className="corporate-office-heading">
          <h2>CORPORATE OFFICE</h2>
          <p>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            NIPANAYA, INDORE
          </p>
        </div>

        <div className="google-map-container">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0932130450888!2d75.87027317453088!3d22.72477652737719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd14cce078f7%3A0x5c5373a9e276a9ee!2sSGSITS%20Front%20Gate!5e0!3m2!1sen!2sin!4v1716965956899!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>
    </>
  );
}

export default App;
