import React from "react";
import Logo from "../../assets/logo/logo.png";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="page-width">
        <div className="footer-top">
          <div className="footer-main">
            <div className="footer-left">
              <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>

                  <li>
                    <a href="#">About</a>
                  </li>

                  <li>
                    <a href="#">Gallery</a>
                  </li>

                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <div className="icon-list">
                      <FaPhoneAlt />
                      <a href="tel:91 90234 25562">91 90234 25562</a>
                    </div>
                  </li>

                  <li>
                    <div className="icon-list">
                      <FaWhatsapp />
                      <a href="#">91 93165 92651</a>
                    </div>
                  </li>

                  <li>
                    <div className="icon-list">
                      <FaEnvelope />
                      <a href="#">smit.navkrishitrade@gmail.com</a>
                    </div>
                  </li>

                  <li>
                    <div className="icon-list">
                      <FaMapMarkerAlt />
                      <a href="#">Ahmedabad, Gujarat, India</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-right">
              <div className="footer-news-title">
                <p>
                  Navkrishita Trade is committed to supporting farmers by
                  delivering high-quality agricultural products and trusted
                  trading solutions across India.
                </p>
              </div>
              <div className="footer-newsletter-box">
                <form>
                  <div className="field-wrapper newsletter-form">
                    <div className="field">
                      <input
                        type="email"
                        className="field__input"
                        placeholder="E-Mail"
                      />
                      <button
                        type="submit"
                        class="newsletter-form__button field__button"
                      >
                        <span class="svg-wrapper">
                          <svg
                            width="7"
                            height="14"
                            class="icon icon-arrow"
                            viewBox="0 0 7 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.60968 7.00645L0.20371 1.18921C0.0848793 1.06133 0.0212202 0.904234 0.0127325 0.717907C0.0042443 0.53158 0.0679035 0.365347 0.203711 0.219208C0.339517 0.073069 0.489754 -2.52899e-07 0.65442 -2.46502e-07C0.819086 -2.40105e-07 0.969322 0.073069 1.10513 0.219208L6.69189 6.23237C6.89729 6.4534 7 6.71143 7 7.00645C7 7.30147 6.89729 7.55995 6.69189 7.7819L1.10513 13.7937C0.986297 13.9216 0.83988 13.9901 0.665878 13.9992C0.493572 14.0083 0.339516 13.9398 0.20371 13.7937C0.0679028 13.6475 -1.86478e-07 13.4859 -1.77762e-07 13.3087C-1.69047e-07 13.1315 0.0679029 12.9698 0.20371 12.8237L5.60968 7.00645Z"
                              fill="white"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-middle">
            <div className="footer-logo">
              <a href="/" className="text-white text-2xl">
               Logo
              </a>
            </div>

            <div className="footer-social">
              <a href="#">
                <img src="https://toughtested-web.netlify.app/assets/img/FooterImg/email.png" alt="social-icon" />
              </a>

               <a href="#">
                <img src="https://toughtested-web.netlify.app/assets/img/FooterImg/yt.png" alt="social-icon" />
              </a>

               <a href="#">
                <img src="https://toughtested-web.netlify.app/assets/img/FooterImg/instagram.png" alt="social-icon" />
              </a>

               <a href="#">
                <img src="https://toughtested-web.netlify.app/assets/img/FooterImg/music.webp" alt="social-icon" />
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
