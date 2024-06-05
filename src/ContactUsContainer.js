import React from 'react'
import './App.css';

export default function ContactUsContainer() {
  return (
    <div className="contact-us">
        <div className="content">
          <h1>
            CONTACT <span>US</span>
          </h1>
          <p id="text">
            Be it feedback, a grievance, a satisfactory experience or your love
            for Buttlers, we are all ears to what you have to say.
          </p>
          <div className="contact-options">
            <div className="contact-option">
              <i className="fas fa-phone-alt"></i>
              <p>CALL TODAY</p>
              <a href="tel:+9175096 98263">+91 75096 98263</a>
            </div>
            <div className="contact-option">
              <i className="fas fa-quote-right"></i>
              <p>REQUEST A QUOTE</p>
              <a href="tel:+9162687 70098">+91 62687 70098 </a>
            </div>
            <div className="contact-option">
              <i className="fas fa-envelope"></i>
              <p>EMAIL US</p>
              <a href="mailto:webuttlers@gmail.com">webuttlers@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="image">
          {/* <img src="./image.png" alt="Yewale Tea" /> */}
        </div>
      </div>
  )
}
