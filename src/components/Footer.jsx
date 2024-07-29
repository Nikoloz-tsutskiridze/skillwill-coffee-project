import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footerClass cont">
        <h3>Contact Us</h3>
        <p>
          Fuel your day with our freshly brewed coffee! Stay connected and get
          updates on our latest blends and offers.Find us on:
        </p>
        <ul className="socialMedias">
          <li>
            {/* <a href="#"> */}
            <i className="bi bi-facebook"></i>
            {/* </a> */}
          </li>
          <li>
            {/* <a href="#"> */}
            <i className="bi bi-instagram"></i>
            {/* </a> */}
          </li>
          <li>
            {/* <a href="#"> */}
            <i className="bi bi-twitter"></i>
            {/* </a> */}
          </li>
          <li>
            {/* <a href="#"> */}
            <i className="bi bi-youtube"></i>
            {/* </a> */}
          </li>
        </ul>
      </div>
      <div className="copy cont">
        <p>copyright &copy; 2024 Fancy Schmancy</p>
      </div>
    </footer>
  );
}

export default Footer;
