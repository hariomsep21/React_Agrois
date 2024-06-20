import React from "react";
import style from "../Footer/Footer.module.css";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Add the imported icons to the library
library.add(
  faPhone,
  faEnvelope,
  faLocationDot,
  faXTwitter,
  faFacebook,
  faPinterest,
  faInstagram
);
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.details_div}>
        <div className={`row ${style.details}`}>
          {/* Detail 1 */}
          <div className={`col col-lg-3 col-md-12 ${style.detail_1}`}>
            <div className={style.logo_img}>
              <img src="/photos/logo-2.png" alt="Logo" />
            </div>
            <div className={style.paragraph}>
              <p>
                There are many variations of passages of lorem ipsum available,
                but the majority suffered.
              </p>
            </div>
            <div className={style.icon}>
              <FontAwesomeIcon icon={["fab", "x-twitter"]} />
              <FontAwesomeIcon icon={["fab", "facebook"]} />
              <FontAwesomeIcon
                icon={["fab", "pinterest"]}
                style={{ color: "#ffffff" }}
              />
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>

          {/* Detail 2 */}
          <div className={`col col-lg-3 col-md-12 ${style.detail_2}`}>
            <div className={style.explore}>
              <h3>Explore</h3>
            </div>
            <div className={style.line}>
              <img
                src="/photos/underline.png"
                className={style.underline}
                alt=""
              />
            </div>
            <div className={style.points}>
              <ul className={style.bullet_points}>
                <li>
                  <img
                    src="/photos/bullet.png"
                    className={style.bullet_points}
                    alt=""
                  />
                  <a href="../Pages/about.html">About</a>
                </li>
                <li>
                  <img
                    src="/photos/bullet.png"
                    className={style.bullet_points}
                    alt=""
                  />
                  <a href="../Pages/services.html">Services</a>
                </li>
                <li>
                  <img
                    src="/photos/bullet.png"
                    className={style.bullet_points}
                    alt=""
                  />
                  <a href="../Pages/grid.html">Our Projects</a>
                </li>
                <li>
                  <img
                    src="/photos/bullet.png"
                    className={style.bullet_points}
                    alt=""
                  />
                  <a href="../Pages/new-grid.html">Meet the Farmers</a>
                </li>
                <li>
                  <img
                    src="/photos/bullet.png"
                    className={style.bullet_points}
                    alt=""
                  />
                  <a href="../Pages/news-list.html">Latest News</a>
                </li>
                <li>
                  <img
                    src="/photos/bullet.png"
                    className={style.bullet_points}
                    alt=""
                  />
                  <a href="../Pages/contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Detail 3 */}
          <div className={`col col-lg-3 col-md-12 ${style.detail_3}`}>
            <div className={style.news}>
              <h3>News</h3>
            </div>
            <div className={style.line}>
              <img
                src="/photos/underline.png"
                className={style.underline}
                alt=""
              />
            </div>
            <div className={style.news_div}>
              <div className={style.news_1}>
                <h4>Bringing Food Production Back To Cities</h4>
                <p>July 5, 2022</p>
              </div>
              <div className={style.news_2}>
                <h4>The Future of Farming, Smart Irrigation Solutions</h4>
                <p>July 5, 2022</p>
              </div>
            </div>
          </div>

          {/* Detail 4 */}
          <div className={`col col-lg-3 col-md-12 ${style.detail_4}`}>
            <div className={style.contact}>
              <h3>Contact</h3>
            </div>
            <div className={style.line}>
              <img
                src="/photos/underline.png"
                className={style.underline}
                alt=""
              />
            </div>
            <div className={style.mobile_number}>
              <FontAwesomeIcon className={style.FontAwesomeIcon} icon="phone" />
              <p>666 888 0000</p>
            </div>
            <div className={style.email}>
              <FontAwesomeIcon
                className={style.FontAwesomeIcon}
                icon="envelope"
              />
              <p>needhelp@company.com</p>
            </div>
            <div className={style.address}>
              <FontAwesomeIcon
                className={style.FontAwesomeIcon}
                icon="location-dot"
              />
              <p>80 Brooklyn Golden Street Line, New York, USA</p>
            </div>
            <div className={` mb-3 ${style.input_box} ${style.input_group}`}>
              <input
                type="text"
                className={`form-control ${style.form_control}`}
                placeholder="Your Email Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                className={`btn ${style.input_group_text}`}
                style={{
                  backgroundColor: "#4baf47",
                  borderRadius: "0px 10px 10px 0px",
                }}
                id="basic-addon2"
              >
                <img src="/photos/telegram.png" alt="Telegram Icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* End Details */}
      <div className={`container-fluid ${style.end_detail_div}`}>
        <div className={`row container ${style.end_details}`}>
          <div className={`col col-lg-6 ${style.end_text_1}`}>
            <p className={style.copyright}>© All Copyright 2024 by</p>
            <p className={style.copyright_name}>shawonetc Themes</p>
          </div>
          <div className={`col col-lg-6 ${style.end_text_2}`}>
            <p className={style.terms}>Terms of Use</p>
            <p className={style.privacy}>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
