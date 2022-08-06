import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkdin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="Footer-containe">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a
            href="https://github.com/Moinuddin0677"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Github}
              alt=""
              style={{ width: "2rem", height: "2rem" }}
            />
          </a>
          <a
            href="https://www.instagram.com/moinuddin744/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Instagram}
              alt=""
              style={{ width: "2rem", height: "2rem" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohd-moinuddin-rangrej-43a898199/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Linkdin}
              alt=""
              style={{ width: "2rem", height: "2rem" }}
            />
          </a>
        </div>

        <div className="logo-f">
          <Link to="hero">
            <img src={Logo} alt="" style={{ width: "10rem" }} />
          </Link>
        </div>
      </div>
      <div className="blur blur1-f"></div>
      <div className="blur blur2-f"></div>
      <div
        style={{
          color: "var(--orange)",
          fontWeight: "bold",
          alignItems: "left",
          marginRight: "2rem",
        }}
      >
        Designed by Mohd. Moinuddin
      </div>
    </div>
  );
};

export default Footer;
