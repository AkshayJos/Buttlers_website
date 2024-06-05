import React from "react";
import "./App.css";

export default function GoogleMapContainer() {
  return (
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
          NIPANAYA, MADHYA PRADESH
        </p>
      </div>
      <div className="google-map-container">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29116.233019546045!2d79.2366544!3d24.1882413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978984a603c0d69%3A0xdba8a9eaf1b581f0!2s56JJ%2B3CJ%2C%20Nipaniya%2C%20Madhya%20Pradesh%20471318!5e0!3m2!1sen!2sin!4v1717501560027!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
