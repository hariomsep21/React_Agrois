import React, { useEffect, useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faPinterestP,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import style from "../Header/Header.module.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const usenavigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const storedUsername = sessionStorage.getItem("username");
      if (storedUsername) {
        setIsLoggedIn(true);
        setUsername(storedUsername);
        if (storedUsername !== null && storedUsername !== "") {
          clearInterval(interval); // Stop the interval if the username is found and not empty
        }
      }
    }, 1000); // Run every second (1000 milliseconds)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    setUsername(null);
    usenavigate("/");
  };

  return (
    <>
      <section className={`container ${style.detail}`}>
        <div className="container d-flex justify-content-center">
          <div className={style.logodiv}>
            <img className={style.logo} src="/photos/logo.png" alt="logo" />
          </div>
          <div className={style.icon}>
            <FontAwesomeIcon
              className={style.FontAwesomeIcon}
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className={style.FontAwesomeIcon}
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className={style.FontAwesomeIcon}
              icon={faPinterestP}
            />
            <FontAwesomeIcon
              className={style.FontAwesomeIcon}
              icon={faInstagram}
            />
          </div>
          <div className={style.center}>
            <div className={style.offer}>
              <aside className={style.call}>
                <img src="/photos/call_icon.png" alt="" />
                <div className={style.paragraph}>
                  <p className={style.para1}>Call anytime</p>
                  <p className={style.para2}>+98(000)-9630</p>
                </div>
              </aside>
              <aside className={style.message}>
                <img src="/photos/message_icon.png" alt="" />
                <div className={style.paragraph}>
                  <p className={style.para1}>Send email</p>
                  <p className={style.para2}>ambed@agrios.com</p>
                </div>
              </aside>
              <aside className={style.location}>
                <img src="/photos/location_icon.png" alt="" />
                <div className={style.paragraph}>
                  <p className={style.para1}>380 St Kilda Road</p>
                  <p className={style.para2}>Melbourne, Australia</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className={style.navBarSection}>
        <div
          className={` container d-flex justify-content-center ${style.navBar}`}
        >
          <div className={style.navBarContent}>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <div
                  className={`collapse navbar-collapse ${style.navbarSupportedContent}`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                    {isLoggedIn ? (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link " to="/">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link " to="/about">
                            About
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link " to="/service">
                            Services
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link " to="/news">
                            News
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link " to="/project">
                            Project
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/contact">
                            Contact
                          </Link>
                        </li>
                        <div className={style.searchIconDiv}>
                          <div className={style.searchIcon}>
                            <FontAwesomeIcon
                              className={style.serach_Icon}
                              icon={faMagnifyingGlass}
                            />
                          </div>
                        </div>
                        <div className={style.shopCart}>
                          <FontAwesomeIcon
                            className={style.icon}
                            icon={faCartShopping}
                          />
                          <sup>
                            <a style={{ color: "white" }} href="#">
                              0
                            </a>
                          </sup>
                        </div>

                        <li className={`nav-item ${style.loginbtn}`}>
                          <span className={`nav-link ${style.logintext}`}>
                            <FaUserAlt /> {username} |{" "}
                            <span
                              onClick={handleLogout}
                              style={{ cursor: "pointer" }}
                            >
                              Logout
                            </span>
                          </span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className={`nav-item ${style.loginbtn}`}>
                          <Link className="nav-link" to="/login">
                            <RiAdminFill />
                            Login
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
